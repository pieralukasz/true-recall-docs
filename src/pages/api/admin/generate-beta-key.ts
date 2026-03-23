export const prerender = false;

import type { APIRoute } from "astro";
import { getSupabaseAdmin } from "../../../lib/supabase-admin";
import { createKey } from "../../../lib/unkey";
import { canonicalizeEmail } from "../../../lib/email";
import { UNKEY_ROOT_KEY } from "../../../lib/constants";

const BETA_CREDITS = 150;

export const POST: APIRoute = async ({ request }) => {
	const authHeader = request.headers.get("authorization");
	const token = authHeader?.replace("Bearer ", "");

	if (!token || token !== UNKEY_ROOT_KEY) {
		return new Response(JSON.stringify({ error: "Unauthorized" }), {
			status: 401,
			headers: { "Content-Type": "application/json" },
		});
	}

	let body: { email?: string };
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	const email = body.email?.trim().toLowerCase();
	if (!email) {
		return new Response(
			JSON.stringify({ error: "Missing 'email' field" }),
			{ status: 400, headers: { "Content-Type": "application/json" } },
		);
	}

	const supabase = getSupabaseAdmin();

	try {
		let userId: string;
		const { data: existingUsers } = await supabase.auth.admin.listUsers();
		const existing = existingUsers?.users?.find((u) => u.email === email);

		if (existing) {
			userId = existing.id;
		} else {
			const { data: newUser, error: createError } =
				await supabase.auth.admin.createUser({
					email,
					email_confirm: true,
				});
			if (createError || !newUser.user) {
				throw new Error(
					`Failed to create user: ${createError?.message}`,
				);
			}
			userId = newUser.user.id;
		}

		const keyResult = await createKey({
			userId,
			tier: "beta",
			email,
		});

		await supabase.from("user_subscriptions").upsert({
			user_id: userId,
			tier: "beta",
			unkey_key_id: keyResult.keyId,
			api_key: keyResult.key,
			canonical_email: canonicalizeEmail(email),
			trial_used: true,
			updated_at: new Date().toISOString(),
		});

		return new Response(
			JSON.stringify({
				key: keyResult.key,
				email,
				credits: BETA_CREDITS,
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			},
		);
	} catch (err) {
		const message = err instanceof Error ? err.message : "Unknown error";
		console.error("Beta key generation failed:", message);
		return new Response(JSON.stringify({ error: message }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};
