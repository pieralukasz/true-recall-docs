export const prerender = false;

import type { APIRoute } from "astro";
import { verifyKey } from "../../../lib/unkey";
import { TIER_CREDITS, MANAGED_MODEL } from "../../../lib/constants";

export const GET: APIRoute = async ({ request }) => {
	const url = new URL(request.url);
	const key = url.searchParams.get("key");

	if (!key) {
		return new Response(
			JSON.stringify({ error: "Missing 'key' parameter" }),
			{ status: 400, headers: { "Content-Type": "application/json" } },
		);
	}

	try {
		const info = await verifyKey(key);

		if (!info.valid) {
			return new Response(
				JSON.stringify({ error: "Invalid subscription key" }),
				{ status: 401, headers: { "Content-Type": "application/json" } },
			);
		}

		const tier = (info.meta?.tier as string) ?? "unknown";
		const budgetMax = TIER_CREDITS[tier] ?? 50;
		const budgetRemaining = info.remaining ?? 0;
		const budgetSpent = Math.max(0, budgetMax - budgetRemaining);

		return new Response(
			JSON.stringify({
				tier,
				plan_type: tier,
				budget_max: budgetMax,
				budget_spent: budgetSpent,
				budget_remaining: budgetRemaining,
				expires: null,
				allowed_models: [MANAGED_MODEL],
				trial_used: tier === "trial",
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
					"Cache-Control": "no-cache",
					"Access-Control-Allow-Origin": "*",
				},
			},
		);
	} catch (err) {
		const message = err instanceof Error ? err.message : "Unknown error";

		if (message.includes("401") || message.includes("403")) {
			return new Response(
				JSON.stringify({ error: "Invalid subscription key" }),
				{ status: 401, headers: { "Content-Type": "application/json" } },
			);
		}

		return new Response(JSON.stringify({ error: "Service unavailable" }), {
			status: 502,
			headers: { "Content-Type": "application/json" },
		});
	}
};
