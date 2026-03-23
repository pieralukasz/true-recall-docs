export const prerender = false;

import type { APIRoute } from "astro";
import { verifyKey } from "../../../lib/unkey";
import { OPENROUTER_API_KEY, MANAGED_MODEL } from "../../../lib/constants";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

const CORS_HEADERS = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "POST, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const OPTIONS: APIRoute = async () => {
	return new Response(null, { status: 204, headers: CORS_HEADERS });
};

export const POST: APIRoute = async ({ request }) => {
	const authHeader = request.headers.get("Authorization");
	const token = authHeader?.replace("Bearer ", "");

	if (!token) {
		return jsonError("Missing Authorization header", 401);
	}

	// Verify key and deduct 1 credit atomically
	let verification;
	try {
		verification = await verifyKey(token, true);
	} catch {
		return jsonError("Key verification service unavailable", 502);
	}

	if (!verification.valid) {
		const status = verification.code === "RATE_LIMITED" ? 429 : 401;
		const message =
			verification.remaining === 0
				? "Budget exceeded. Add your own OpenRouter key in settings to continue."
				: "Invalid subscription key";
		return jsonError(message, status);
	}

	let body: Record<string, unknown>;
	try {
		body = await request.json();
	} catch {
		return jsonError("Invalid JSON body", 400);
	}

	// Map "auto" to the default managed model
	if (body.model === "auto" || !body.model) {
		body.model = MANAGED_MODEL;
	}

	const isStreaming = body.stream === true;

	const openRouterResponse = await fetch(OPENROUTER_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${OPENROUTER_API_KEY}`,
			"HTTP-Referer": "https://truerecall.app",
			"X-Title": "True Recall",
		},
		body: JSON.stringify(body),
	});

	if (!openRouterResponse.ok) {
		const errorText = await openRouterResponse.text();
		return new Response(errorText, {
			status: openRouterResponse.status,
			headers: {
				"Content-Type": "application/json",
				...CORS_HEADERS,
			},
		});
	}

	if (isStreaming && openRouterResponse.body) {
		return new Response(openRouterResponse.body, {
			status: 200,
			headers: {
				"Content-Type": "text/event-stream",
				"Cache-Control": "no-cache",
				Connection: "keep-alive",
				...CORS_HEADERS,
			},
		});
	}

	const responseData = await openRouterResponse.text();
	return new Response(responseData, {
		status: 200,
		headers: {
			"Content-Type": "application/json",
			...CORS_HEADERS,
		},
	});
};

function jsonError(message: string, status: number): Response {
	return new Response(JSON.stringify({ error: message }), {
		status,
		headers: { "Content-Type": "application/json", ...CORS_HEADERS },
	});
}
