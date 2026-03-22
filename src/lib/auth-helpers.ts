import type { AstroCookies } from "astro";
import type { SupabaseClient } from "@supabase/supabase-js";

const COOKIE_OPTIONS_ACCESS = {
	path: "/",
	httpOnly: true,
	secure: true,
	sameSite: "lax" as const,
	maxAge: 60 * 60 * 24 * 7, // 7 days
};

const COOKIE_OPTIONS_REFRESH = {
	path: "/",
	httpOnly: true,
	secure: true,
	sameSite: "lax" as const,
	maxAge: 60 * 60 * 24 * 30, // 30 days
};

export function setSessionCookies(
	cookies: AstroCookies,
	session: { access_token: string; refresh_token: string },
): void {
	cookies.set("sb-access-token", session.access_token, COOKIE_OPTIONS_ACCESS);
	cookies.set(
		"sb-refresh-token",
		session.refresh_token,
		COOKIE_OPTIONS_REFRESH,
	);
}

export function clearSessionCookies(cookies: AstroCookies): void {
	cookies.delete("sb-access-token", { path: "/" });
	cookies.delete("sb-refresh-token", { path: "/" });
}

export async function resolveUser(
	cookies: AstroCookies,
	supabase: SupabaseClient,
): Promise<{ id: string; email?: string } | null> {
	const accessToken = cookies.get("sb-access-token")?.value;
	const refreshToken = cookies.get("sb-refresh-token")?.value;

	if (!accessToken) return null;

	const {
		data: { user },
		error,
	} = await supabase.auth.getUser(accessToken);
	if (!error && user) return user;

	if (!refreshToken) return null;

	const { data: refreshData, error: refreshError } =
		await supabase.auth.refreshSession({ refresh_token: refreshToken });

	if (refreshError || !refreshData.session) {
		clearSessionCookies(cookies);
		return null;
	}

	setSessionCookies(cookies, refreshData.session);
	return refreshData.session.user;
}
