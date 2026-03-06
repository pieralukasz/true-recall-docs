export const LITELLM_PROXY_URL =
	import.meta.env.LITELLM_PROXY_URL ?? "https://ai.truerecall.app";

export const LITELLM_MASTER_KEY =
	import.meta.env.LITELLM_MASTER_KEY ?? "";

export const POLAR_WEBHOOK_SECRET =
	import.meta.env.POLAR_WEBHOOK_SECRET ?? "";

export const POLAR_CUSTOMER_PORTAL_URL = "https://polar.sh/truerecall/portal";

export const TIER_BUDGETS: Record<string, number> = {
	trial: 0.35,
	starter: 2.5,
};

export const TOPUP_BUDGETS: Record<string, number> = {
	s: 2.0,
	m: 4.5,
};

export const MANAGED_MODELS = ["google/gemini-3-flash-preview"];

// TODO: Replace with actual Polar product checkout URLs
export const POLAR_STARTER_CHECKOUT_URL =
	"https://buy.polar.sh/polar_cl_igCjmr9UreAXPQYnlPVMyIPeEkQVBbRJCBvtW38RoUH";
export const POLAR_TOPUP_S_CHECKOUT_URL =
	"https://buy.polar.sh/<TOPUP_S_PRODUCT_ID>";
export const POLAR_TOPUP_M_CHECKOUT_URL =
	"https://buy.polar.sh/<TOPUP_M_PRODUCT_ID>";
