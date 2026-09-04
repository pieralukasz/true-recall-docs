export const prerender = false;

import type { APIRoute } from "astro";
import {
	deviceLimitFor,
	deviceLimitMessage,
	syncPlanFor,
} from "../../../lib/device-limit";
import { getSupabaseAdmin } from "../../../lib/supabase-admin";

function base64Url(bytes: Uint8Array): string {
	let binary = "";
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary)
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=+$/, "");
}

async function challengeFor(verifier: string): Promise<string> {
	return base64Url(
		new Uint8Array(
			await crypto.subtle.digest(
				"SHA-256",
				new TextEncoder().encode(verifier),
			),
		),
	);
}

async function sha256(value: string): Promise<string> {
	const digest = new Uint8Array(
		await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)),
	);
	return [...digest]
		.map((byte) => byte.toString(16).padStart(2, "0"))
		.join("");
}

export const POST: APIRoute = async ({ request }) => {
	let body: {
		code?: string;
		state?: string;
		verifier?: string;
		deviceId?: string;
	};
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: "Invalid JSON" }, { status: 400 });
	}
	if (
		!body.code ||
		body.code.length > 128 ||
		!body.state ||
		body.state.length > 128 ||
		!body.verifier ||
		body.verifier.length < 32 ||
		body.verifier.length > 128 ||
		!body.deviceId ||
		body.deviceId.length > 200
	) {
		return Response.json(
			{ error: "Incomplete authorization response" },
			{ status: 400 },
		);
	}

	const codeChallenge = await challengeFor(body.verifier);
	const admin = getSupabaseAdmin();
	const { data: authCode } = await admin
		.from("auth_codes")
		.select("id,user_id,state,code_challenge,device_id,device_name,expires_at")
		.eq("code", body.code)
		.eq("state", body.state)
		.eq("device_id", body.deviceId)
		.is("used_at", null)
		.gt("expires_at", new Date().toISOString())
		.maybeSingle();
	if (
		!authCode ||
		authCode.code_challenge !== codeChallenge
	) {
		return Response.json(
			{ error: "Invalid or expired authorization code" },
			{ status: 401 },
		);
	}

	const { data: userData } = await admin.auth.admin.getUserById(
		authCode.user_id,
	);
	const email = userData.user?.email;
	if (!email) {
		return Response.json(
			{ error: "Account email is unavailable" },
			{ status: 500 },
		);
	}
	const plan = syncPlanFor(userData.user?.app_metadata);

	const deviceToken = base64Url(crypto.getRandomValues(new Uint8Array(48)));
	const tokenHash = await sha256(deviceToken);
	const { data: claim, error: claimError } = await admin.rpc(
		"claim_cloud_sync_device",
		{
			p_code: body.code,
			p_state: body.state,
			p_code_challenge: codeChallenge,
			p_device_id: body.deviceId,
			p_token_hash: tokenHash,
			p_device_limit: deviceLimitFor(plan),
		},
	);
	if (claimError) {
		return Response.json(
			{ error: "Could not create device session" },
			{ status: 500 },
		);
	}
	const result = claim as { result?: string; userId?: string } | null;
	if (result?.result === "device_limit") {
		return Response.json(
			{ error: deviceLimitMessage(plan), code: "device_limit" },
			{ status: 403 },
		);
	}
	if (result?.result !== "ok" || result.userId !== authCode.user_id) {
		return Response.json(
			{ error: "Invalid or expired authorization code" },
			{ status: 401 },
		);
	}

	return Response.json(
		{ deviceToken, userId: authCode.user_id, email },
		{ headers: { "Cache-Control": "no-store" } },
	);
};
