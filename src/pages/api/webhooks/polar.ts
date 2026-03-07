export const prerender = false;

import type { APIRoute } from "astro";
import { getSupabaseAdmin } from "../../../lib/supabase-admin";
import {
	generateKey,
	resetKeyBudget,
	incrementKeyBudget,
	updateKeyConfig,
	deleteKey,
} from "../../../lib/litellm";
import {
	POLAR_WEBHOOK_SECRET,
	TIER_BUDGETS,
	TOPUP_BUDGETS,
	MANAGED_MODELS,
} from "../../../lib/constants";

async function verifyWebhookSignature(
	body: string,
	signature: string | null,
): Promise<boolean> {
	if (!signature || !POLAR_WEBHOOK_SECRET) return false;

	const encoder = new TextEncoder();
	const key = await crypto.subtle.importKey(
		"raw",
		encoder.encode(POLAR_WEBHOOK_SECRET),
		{ name: "HMAC", hash: "SHA-256" },
		false,
		["sign"],
	);
	const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(body));
	const expected = Array.from(new Uint8Array(sig))
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");

	return signature === expected;
}

function tierFromProductName(productName: string): string | null {
	const lower = productName.toLowerCase();
	if (lower.includes("starter")) return "starter";
	if (lower.includes("trial")) return "trial";
	return null;
}

function topupSizeFromProductName(productName: string): "s" | "m" {
	return productName.toLowerCase().includes("top-up m") ? "m" : "s";
}

export const POST: APIRoute = async ({ request }) => {
	const body = await request.text();
	const signature = request.headers.get("x-polar-signature");

	const valid = await verifyWebhookSignature(body, signature);
	if (!valid) {
		return new Response(JSON.stringify({ error: "Invalid signature" }), {
			status: 401,
		});
	}

	const event = JSON.parse(body);
	const eventType: string = event.type;
	const data = event.data;

	const supabase = getSupabaseAdmin();

	try {
		switch (eventType) {
			case "checkout.updated": {
				if (data.status !== "succeeded") break;

				const email: string = data.customer_email;
				const productName: string = data.product?.name ?? "";
				const tier = tierFromProductName(productName);
				const isTopup = productName.toLowerCase().includes("top-up");

				// --- Top-up: increment existing key budget + track balance ---
				if (isTopup) {
					const { data: sub } = await supabase
						.from("user_subscriptions")
						.select("litellm_key_hash, topup_balance")
						.eq("polar_customer_id", data.customer_id)
						.single();

					if (sub?.litellm_key_hash) {
						const size = topupSizeFromProductName(productName);
						const topupAmount = TOPUP_BUDGETS[size] ?? TOPUP_BUDGETS.s;
						await incrementKeyBudget(sub.litellm_key_hash, topupAmount);

						await supabase
							.from("user_subscriptions")
							.update({
								topup_balance: (sub.topup_balance ?? 0) + topupAmount,
								updated_at: new Date().toISOString(),
							})
							.eq("polar_customer_id", data.customer_id);
					}
					break;
				}

				if (!tier) break;

				// --- Find or create Supabase user ---
				let userId: string;
				const { data: existingUsers } =
					await supabase.auth.admin.listUsers();
				const existing = existingUsers?.users?.find(
					(u) => u.email === email,
				);

				if (existing) {
					userId = existing.id;
				} else {
					const { data: newUser, error: createError } =
						await supabase.auth.admin.createUser({
							email,
							email_confirm: true,
						});
					if (createError || !newUser.user)
						throw new Error(
							`Failed to create user: ${createError?.message}`,
						);
					userId = newUser.user.id;
				}

				// Look up existing subscription row (may have trial key)
				const { data: existingSub } = await supabase
					.from("user_subscriptions")
					.select("litellm_key_hash, litellm_api_key, trial_used, tier")
					.eq("user_id", userId)
					.single();

				if (tier === "trial") {
					// Prevent double trial grant
					if (existingSub?.trial_used) break;

					// Trial: always create a fresh key (user has no key yet)
					const budget = TIER_BUDGETS.trial ?? 0.35;
					const keyResult = await generateKey({
						userId,
						maxBudget: budget,
						metadata: { tier: "trial", email },
						models: MANAGED_MODELS,
					});

					await supabase.from("user_subscriptions").upsert({
						user_id: userId,
						polar_customer_id: data.customer_id,
						tier: "trial",
						litellm_key_hash: keyResult.token,
						litellm_api_key: keyResult.key,
						trial_used: true,
						topup_balance: 0,
						updated_at: new Date().toISOString(),
					});
				} else if (tier === "starter") {
					const budget = TIER_BUDGETS.starter ?? 2.5;

					if (existingSub?.litellm_key_hash) {
						// Upgrade existing key in-place (trial → starter)
						await updateKeyConfig(existingSub.litellm_key_hash, {
							max_budget: budget,
							spend: 0,
							budget_duration: "30d",
							metadata: { tier: "starter", email },
							models: MANAGED_MODELS,
						});

						await supabase
							.from("user_subscriptions")
							.update({
								polar_customer_id: data.customer_id,
								polar_subscription_id: data.subscription_id,
								tier: "starter",
								current_period_end: data.current_period_end,
								updated_at: new Date().toISOString(),
							})
							.eq("user_id", userId);
					} else {
						// Edge case: user skipped trial, create new key
						const keyResult = await generateKey({
							userId,
							maxBudget: budget,
							budgetDuration: "30d",
							metadata: { tier: "starter", email },
							models: MANAGED_MODELS,
						});

						await supabase.from("user_subscriptions").upsert({
							user_id: userId,
							polar_customer_id: data.customer_id,
							polar_subscription_id: data.subscription_id,
							tier: "starter",
							litellm_key_hash: keyResult.token,
							litellm_api_key: keyResult.key,
							current_period_end: data.current_period_end,
							topup_balance: 0,
							updated_at: new Date().toISOString(),
						});
					}
				}

				break;
			}

			case "subscription.active": {
				const { data: sub } = await supabase
					.from("user_subscriptions")
					.select("litellm_key_hash, tier, topup_balance")
					.eq("polar_subscription_id", data.id)
					.single();

				if (sub?.litellm_key_hash) {
					const tierBudget = TIER_BUDGETS[sub.tier] ?? 2.5;
					const totalBudget = tierBudget + (sub.topup_balance ?? 0);
					await resetKeyBudget(sub.litellm_key_hash, totalBudget);
				}
				break;
			}

			case "subscription.canceled": {
				await supabase
					.from("user_subscriptions")
					.update({ updated_at: new Date().toISOString() })
					.eq("polar_subscription_id", data.id);
				break;
			}

			case "subscription.revoked": {
				const { data: sub } = await supabase
					.from("user_subscriptions")
					.select("litellm_key_hash")
					.eq("polar_subscription_id", data.id)
					.single();

				if (sub?.litellm_key_hash) {
					await deleteKey(sub.litellm_key_hash);
				}

				await supabase
					.from("user_subscriptions")
					.update({
						tier: "free",
						litellm_key_hash: null,
						litellm_api_key: null,
						topup_balance: 0,
						updated_at: new Date().toISOString(),
					})
					.eq("polar_subscription_id", data.id);
				break;
			}

			case "order.created": {
				const billingReason: string = data.billing_reason ?? "";

				if (billingReason === "subscription_cycle") {
					// Monthly renewal — reset budget but preserve top-ups
					const { data: sub } = await supabase
						.from("user_subscriptions")
						.select("litellm_key_hash, tier, topup_balance")
						.eq("polar_subscription_id", data.subscription_id)
						.single();

					if (sub?.litellm_key_hash) {
						const tierBudget = TIER_BUDGETS[sub.tier] ?? 2.5;
						const totalBudget = tierBudget + (sub.topup_balance ?? 0);
						await resetKeyBudget(sub.litellm_key_hash, totalBudget);
					}

					await supabase
						.from("user_subscriptions")
						.update({
							current_period_end: data.current_period_end,
							updated_at: new Date().toISOString(),
						})
						.eq("polar_subscription_id", data.subscription_id);
				}
				break;
			}
		}

		return new Response(JSON.stringify({ received: true }), { status: 200 });
	} catch (err) {
		const message = err instanceof Error ? err.message : "Unknown error";
		console.error(`Webhook error (${eventType}):`, message);
		return new Response(JSON.stringify({ error: message }), { status: 500 });
	}
};
