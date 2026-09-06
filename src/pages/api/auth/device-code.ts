export const prerender = false;

import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";
import { getSupabaseAdmin } from "../../../lib/supabase-admin";

const TOKEN_RE = /^[A-Za-z0-9_-]{32,128}$/;

export const ALL: APIRoute = () => Response.json(
	{ error: "Method not allowed" },
	{ status: 405, headers: { Allow: "POST" } },
);

export const POST: APIRoute = async ({ request }) => {
	const bearer = request.headers
		.get("Authorization")
		?.replace(/^Bearer\s+/i, "")
		.trim();
	if (!bearer) return Response.json({ error: "Unauthorized" }, { status: 401 });

	const client = createClient(
		import.meta.env.PUBLIC_SUPABASE_URL,
		import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
		{ auth: { persistSession: false, autoRefreshToken: false } },
	);
	const {
		data: { user },
		error: authError,
	} = await client.auth.getUser(bearer);
	if (authError || !user) {
		return Response.json({ error: "Unauthorized" }, { status: 401 });
	}

	let body: {
		state?: string;
		challenge?: string;
		deviceId?: string;
		deviceName?: string;
	};
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: "Invalid JSON" }, { status: 400 });
	}
	if (
		!body || typeof body !== "object" || Array.isArray(body) ||
		typeof body.state !== "string" ||
		typeof body.challenge !== "string" ||
		typeof body.deviceId !== "string" ||
		typeof body.deviceName !== "string" ||
		!TOKEN_RE.test(body.state ?? "") ||
		!TOKEN_RE.test(body.challenge ?? "") ||
		!body.deviceId?.trim() ||
		body.deviceId.length > 200 ||
		!body.deviceName?.trim() ||
		body.deviceName.length > 200
	) {
		return Response.json(
			{ error: "Invalid authorization request" },
			{ status: 400 },
		);
	}

	const code = crypto.randomUUID();
	const admin = getSupabaseAdmin();
	await admin
		.from("auth_codes")
		.delete()
		.lt("expires_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());
	const { error } = await admin.from("auth_codes").insert({
		code,
		user_id: user.id,
		state: body.state,
		code_challenge: body.challenge,
		device_id: body.deviceId,
		device_name: body.deviceName,
		expires_at: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
	});
	if (error) {
		return Response.json(
			{ error: "Could not authorize this device" },
			{ status: 500 },
		);
	}
	return Response.json(
		{ code, state: body.state },
		{ headers: { "Cache-Control": "no-store" } },
	);
};
