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

export const BETA_BUDGET = 1.0;

export const LITELLM_TEAM_IDS = {
	admins: "30cd10a5-cd61-4fc4-b965-0b341868ef08",
	betaTesters: "2410c0d1-96c0-4349-8ea0-5d4cb73dcd6a",
	users: "816f5a9c-87d5-4753-8e6f-311a07e6e8b0",
};

export const POLAR_STARTER_CHECKOUT_URL =
	"https://buy.polar.sh/polar_cl_NRts1e4mbVLXzPq3AdNqsCFwWHkn2BlHW1t3S2dcjq0";
export const POLAR_TOPUP_S_CHECKOUT_URL =
	"https://buy.polar.sh/polar_cl_FT4Du1lTHCPXPbwmiS1tbonaFLkg7EAsPDa5x12xkzp";
export const POLAR_TOPUP_M_CHECKOUT_URL =
	"https://buy.polar.sh/polar_cl_FAbt5poghsqR7kvZwcwrFL1apA1ONsSrx8cgb3MSwDT";
