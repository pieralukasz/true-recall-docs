import { Unkey } from "@unkey/api";
import { UNKEY_ROOT_KEY, UNKEY_API_ID, TIER_CREDITS } from "./constants";

const unkey = new Unkey({ rootKey: UNKEY_ROOT_KEY });

export interface CreateKeyParams {
	userId: string;
	tier: string;
	email: string;
}

export interface KeyInfo {
	keyId: string;
	key: string;
}

export interface VerifyResult {
	valid: boolean;
	keyId?: string;
	remaining?: number;
	meta?: Record<string, unknown>;
	code?: string;
}

export async function createKey(params: CreateKeyParams): Promise<KeyInfo> {
	const credits = TIER_CREDITS[params.tier] ?? TIER_CREDITS.trial;

	const result = await unkey.keys.createKey({
		apiId: UNKEY_API_ID,
		prefix: "tr",
		externalId: params.userId,
		meta: {
			tier: params.tier,
			email: params.email,
		},
		credits: {
			remaining: credits,
		},
	});

	if (result.error) {
		throw new Error(`Unkey createKey failed: ${result.error.message}`);
	}

	return { keyId: result.data.keyId, key: result.data.key };
}

export async function verifyKey(
	key: string,
	deductCredit = false,
): Promise<VerifyResult> {
	const result = await unkey.keys.verifyKey({
		key,
		...(deductCredit ? { credits: { cost: 1 } } : {}),
	});

	if (result.error) {
		throw new Error(`Unkey verifyKey failed: ${result.error.message}`);
	}

	return {
		valid: result.data.valid,
		keyId: result.data.keyId,
		remaining: result.data.remaining ?? undefined,
		meta: result.data.meta as Record<string, unknown> | undefined,
		code: result.data.code ?? undefined,
	};
}

export async function resetKeyCredits(
	keyId: string,
	credits: number,
): Promise<void> {
	const result = await unkey.keys.updateCredits({
		keyId,
		value: credits,
		operation: "set",
	});

	if (result.error) {
		throw new Error(`Unkey resetKeyCredits failed: ${result.error.message}`);
	}
}

export async function deleteKey(keyId: string): Promise<void> {
	const result = await unkey.keys.deleteKey({ keyId });

	if (result.error) {
		throw new Error(`Unkey deleteKey failed: ${result.error.message}`);
	}
}
