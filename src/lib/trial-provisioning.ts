import type { SupabaseClient } from "@supabase/supabase-js";
import { generateKey } from "./litellm";
import { canonicalizeEmail } from "./email";
import { TIER_BUDGETS, MANAGED_MODELS } from "./constants";

export interface TrialResult {
	success: boolean;
	blocked?: boolean;
	subscription?: Record<string, any>;
	error?: string;
}

export async function provisionTrial(
	supabase: SupabaseClient,
	user: { id: string; email?: string },
	clientIp: string,
): Promise<TrialResult> {
	let { data: subscription } = await supabase
		.from("user_subscriptions")
		.select("*")
		.eq("user_id", user.id)
		.single();

	if (subscription?.litellm_api_key) {
		return { success: true, subscription };
	}
	if (subscription?.trial_used) {
		return { success: false, blocked: true, error: "Trial already used." };
	}

	const canonical = canonicalizeEmail(user.email ?? "");

	const { count: canonicalCount } = await supabase
		.from("user_subscriptions")
		.select("*", { count: "exact", head: true })
		.eq("canonical_email", canonical)
		.eq("trial_used", true);

	const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
	const { count: ipCount } = await supabase
		.from("user_subscriptions")
		.select("*", { count: "exact", head: true })
		.eq("trial_ip", clientIp)
		.gte("created_at", since)
		.eq("trial_used", true);

	if ((canonicalCount ?? 0) > 0 || (ipCount ?? 0) >= 3) {
		return {
			success: false,
			blocked: true,
			error: "Trial already used for this account.",
		};
	}

	const keyResult = await generateKey({
		userId: user.id,
		maxBudget: TIER_BUDGETS.trial ?? 0.35,
		metadata: { tier: "trial", email: user.email ?? "" },
		models: MANAGED_MODELS,
	});

	await supabase.from("user_subscriptions").upsert({
		user_id: user.id,
		tier: "trial",
		litellm_key_hash: keyResult.token,
		litellm_api_key: keyResult.key,
		trial_used: true,
		canonical_email: canonical,
		trial_ip: clientIp,
		updated_at: new Date().toISOString(),
	});

	return {
		success: true,
		subscription: {
			...subscription,
			tier: "trial",
			litellm_api_key: keyResult.key,
			litellm_key_hash: keyResult.token,
			trial_used: true,
		},
	};
}
