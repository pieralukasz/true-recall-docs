export const SITE_URL = "https://truerecall.app";

export const UNKEY_ROOT_KEY = import.meta.env.UNKEY_ROOT_KEY ?? "";

export const UNKEY_API_ID = import.meta.env.UNKEY_API_ID ?? "";

export const OPENROUTER_API_KEY = import.meta.env.OPENROUTER_API_KEY ?? "";

export const TIER_CREDITS: Record<string, number> = {
	trial: 50,
	beta: 150,
};

export const MANAGED_MODEL = "google/gemini-2.5-flash";
