export const prerender = false;

import type { APIRoute } from "astro";
import { getSupabaseAdmin } from "../../../lib/supabase-admin";
import { getKeyInfo } from "../../../lib/litellm";
import { TIER_BUDGETS } from "../../../lib/constants";

export const POST: APIRoute = async ({ request }) => {
	let body: { code?: string };
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	const code = body.code?.trim();
	if (!code) {
		return new Response(JSON.stringify({ error: "Missing code" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	const supabase = getSupabaseAdmin();

	try {
		// Look up the one-time code (must be unused and not expired)
		const { data: authCode, error: lookupError } = await supabase
			.from("auth_codes")
			.select("*")
			.eq("code", code)
			.is("used_at", null)
			.gt("expires_at", new Date().toISOString())
			.single();

		if (lookupError || !authCode) {
			return new Response(
				JSON.stringify({ error: "Invalid or expired code" }),
				{ status: 401, headers: { "Content-Type": "application/json" } },
			);
		}

		// Mark as used atomically (CAS — prevents replay)
		// .select().single() ensures we verify a row was actually updated
		const { data: claimed, error: updateError } = await supabase
			.from("auth_codes")
			.update({ used_at: new Date().toISOString() })
			.eq("id", authCode.id)
			.is("used_at", null)
			.select("id")
			.single();

		if (updateError || !claimed) {
			return new Response(
				JSON.stringify({ error: "Code already used" }),
				{ status: 401, headers: { "Content-Type": "application/json" } },
			);
		}

		// Look up the user's subscription
		const { data: subscription } = await supabase
			.from("user_subscriptions")
			.select("*")
			.eq("user_id", authCode.user_id)
			.single();

		if (!subscription?.litellm_api_key) {
			return new Response(
				JSON.stringify({ error: "No subscription found. Please sign up first." }),
				{ status: 404, headers: { "Content-Type": "application/json" } },
			);
		}

		// Get live budget info from LiteLLM
		let budgetMax = TIER_BUDGETS[subscription.tier] ?? 0;
		let budgetSpent = 0;
		let expires: string | null = null;

		try {
			const info = await getKeyInfo(subscription.litellm_api_key);
			budgetMax = info.max_budget ?? budgetMax;
			budgetSpent = info.spend ?? 0;
			expires = info.expires ?? null;
		} catch {
			// Fall back to stored tier budget if LiteLLM is unreachable
		}

		return new Response(
			JSON.stringify({
				subscriptionKey: subscription.litellm_api_key,
				tier: subscription.tier ?? "unknown",
				plan_type: subscription.tier === "starter" ? "monthly" : subscription.tier ?? "unknown",
				budget_max: budgetMax,
				budget_spent: budgetSpent,
				budget_remaining: Math.max(0, budgetMax - budgetSpent),
				expires,
				trial_used: subscription.trial_used ?? false,
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
					"Cache-Control": "no-cache",
				},
			},
		);
	} catch (err) {
		const message = err instanceof Error ? err.message : "Unknown error";
		console.error("Auth exchange failed:", message);
		return new Response(JSON.stringify({ error: "Service unavailable" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};
