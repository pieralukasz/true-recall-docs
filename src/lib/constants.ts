export const LITELLM_PROXY_URL =
	import.meta.env.LITELLM_PROXY_URL ?? "https://ai.truerecall.app";

export const LITELLM_MASTER_KEY =
	import.meta.env.LITELLM_MASTER_KEY ?? "";

export const POLAR_WEBHOOK_SECRET =
	import.meta.env.POLAR_WEBHOOK_SECRET ?? "";

export const POLAR_CUSTOMER_PORTAL_URL = "https://polar.sh/truerecall/portal";

export const TIER_BUDGETS: Record<string, number> = {
	free: 0.20,
	starter: 3.5,
	pro: 7.0,
};

export const TOPUP_BUDGET = 2.0;
