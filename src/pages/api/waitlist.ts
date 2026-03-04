export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";
import { getSupabaseAdmin } from "../../lib/supabase-admin";

export const POST: APIRoute = async ({ request }) => {
	const headers = {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	};

	let body: { email?: string; message?: string };
	try {
		body = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: "Invalid request body" }), {
			status: 400,
			headers,
		});
	}

	const { email, message } = body;

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return new Response(JSON.stringify({ error: "Invalid email address" }), {
			status: 400,
			headers,
		});
	}

	const supabase = getSupabaseAdmin();
	const { error: dbError } = await supabase
		.from("waitlist_entries")
		.insert({ email, message: message || null });

	if (dbError && dbError.code !== "23505") {
		console.error("Supabase insert error:", dbError);
		return new Response(JSON.stringify({ error: "Failed to save entry" }), {
			status: 500,
			headers,
		});
	}

	const resendKey = import.meta.env.RESEND_API_KEY;
	if (resendKey) {
		const resend = new Resend(resendKey);
		try {
			await resend.contacts.create({ email });
		} catch (contactError) {
			console.error("Resend contacts error:", contactError);
		}
		try {
			await resend.emails.send({
				to: email,
				template: { id: "welcome-to-true-recall" },
			});
		} catch (welcomeError) {
			console.error("Resend welcome email error:", welcomeError);
		}
		try {
			await resend.emails.send({
				from: "noreply@truerecall.app",
				to: "pieralukasz@gmail.com",
				subject: `New waitlist signup: ${email}`,
				html: `
					<h2>New True Recall waitlist signup</h2>
					<p><strong>Email:</strong> ${email}</p>
					${message ? `<p><strong>Message:</strong> ${message}</p>` : "<p><em>No message provided</em></p>"}
				`,
			});
		} catch (notifyError) {
			console.error("Resend notification error:", notifyError);
		}


	}

	return new Response(JSON.stringify({ success: true }), { status: 200, headers });
};
