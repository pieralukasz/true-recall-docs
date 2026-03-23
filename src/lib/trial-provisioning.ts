import type { SupabaseClient } from "@supabase/supabase-js";
import { createKey } from "./unkey";
import { canonicalizeEmail } from "./email";
import { TIER_CREDITS } from "./constants";

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

	if (subscription?.api_key) {
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

	let keyResult;
	try {
		keyResult = await createKey({
			userId: user.id,
			tier: "trial",
			email: user.email ?? "",
		});
	} catch {
		return {
			success: false,
			error: "AI service temporarily unavailable. Please try again later.",
		};
	}

	await supabase.from("user_subscriptions").upsert({
		user_id: user.id,
		tier: "trial",
		unkey_key_id: keyResult.keyId,
		api_key: keyResult.key,
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
			api_key: keyResult.key,
			unkey_key_id: keyResult.keyId,
			trial_used: true,
		},
	};
}
