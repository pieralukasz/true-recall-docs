export const prerender = false;

import type { APIRoute } from "astro";
import { getKeyInfo } from "../../../lib/litellm";
import { TIER_BUDGETS } from "../../../lib/constants";

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
		const info = await getKeyInfo(key);

		const tier = info.metadata?.tier ?? "unknown";
		const budgetMax = info.max_budget ?? TIER_BUDGETS[tier] ?? 0;
		const budgetSpent = info.spend ?? 0;
		const budgetRemaining = Math.max(0, budgetMax - budgetSpent);

		return new Response(
			JSON.stringify({
				tier,
				budget_max: budgetMax,
				budget_spent: budgetSpent,
				budget_remaining: budgetRemaining,
				expires: info.expires,
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
