import { LITELLM_PROXY_URL, LITELLM_MASTER_KEY } from "./constants";

interface GenerateKeyParams {
	userId: string;
	maxBudget: number;
	budgetDuration?: string;
	metadata?: Record<string, string>;
	models?: string[];
}

interface KeyInfo {
	key: string;
	token: string;
	max_budget: number;
	spend: number;
	budget_duration: string | null;
	expires: string | null;
}

async function litellmFetch(path: string, options: RequestInit = {}) {
	const url = `${LITELLM_PROXY_URL}${path}`;
	const res = await fetch(url, {
		...options,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${LITELLM_MASTER_KEY}`,
			...options.headers,
		},
	});

	if (!res.ok) {
		const body = await res.text();
		throw new Error(`LiteLLM ${path} failed (${res.status}): ${body}`);
	}

	return res.json();
}

export async function generateKey(params: GenerateKeyParams): Promise<KeyInfo> {
	const payload: Record<string, unknown> = {
		user_id: params.userId,
		max_budget: params.maxBudget,
		metadata: params.metadata ?? {},
	};
	if (params.budgetDuration !== undefined) {
		payload.budget_duration = params.budgetDuration;
	}
	if (params.models !== undefined) {
		payload.models = params.models;
	}
	return litellmFetch("/key/generate", {
		method: "POST",
		body: JSON.stringify(payload),
	});
}

export async function resetKeyBudget(
	keyId: string,
	maxBudget: number,
): Promise<void> {
	await litellmFetch("/key/update", {
		method: "POST",
		body: JSON.stringify({
			key: keyId,
			max_budget: maxBudget,
			spend: 0,
		}),
	});
}

export async function incrementKeyBudget(
	keyId: string,
	additionalBudget: number,
): Promise<void> {
	const info = await getKeyInfo(keyId);
	await litellmFetch("/key/update", {
		method: "POST",
		body: JSON.stringify({
			key: keyId,
			max_budget: (info.max_budget ?? 0) + additionalBudget,
		}),
	});
}

export async function updateKeyConfig(
	keyId: string,
	updates: {
		max_budget?: number;
		spend?: number;
		budget_duration?: string;
		metadata?: Record<string, string>;
		models?: string[];
	},
): Promise<void> {
	await litellmFetch("/key/update", {
		method: "POST",
		body: JSON.stringify({ key: keyId, ...updates }),
	});
}

export async function deleteKey(keyId: string): Promise<void> {
	await litellmFetch("/key/delete", {
		method: "POST",
		body: JSON.stringify({ keys: [keyId] }),
	});
}

export async function getKeyInfo(apiKey: string): Promise<{
	spend: number;
	max_budget: number;
	budget_duration: string | null;
	expires: string | null;
	metadata: Record<string, string>;
}> {
	// Master key + ?key= param returns { key, info: {...} } — extract .info
	const response = await litellmFetch(
		`/key/info?key=${encodeURIComponent(apiKey)}`,
		{ method: "GET" },
	);
	return response.info;
}
