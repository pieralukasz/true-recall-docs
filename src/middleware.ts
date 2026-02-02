import { defineMiddleware } from 'astro:middleware';
import { createClient } from '@supabase/supabase-js';

export const onRequest = defineMiddleware(async ({ cookies, request }, next) => {
	const accessToken = cookies.get('sb-access-token')?.value;
	const refreshToken = cookies.get('sb-refresh-token')?.value;

	// If we have a refresh token but no access token, try to refresh the session
	if (refreshToken && !accessToken) {
		try {
			const supabase = createClient(
				import.meta.env.PUBLIC_SUPABASE_URL,
				import.meta.env.PUBLIC_SUPABASE_ANON_KEY
			);

			const { data, error } = await supabase.auth.refreshSession({
				refresh_token: refreshToken,
			});

			if (!error && data.session) {
				// Set the new access token cookie
				cookies.set('sb-access-token', data.session.access_token, {
					path: '/',
					httpOnly: false, // Need client-side access for Supabase JS
					secure: true,
					sameSite: 'lax',
					maxAge: 60 * 60, // 1 hour
				});

				// Update refresh token if it changed
				if (data.session.refresh_token !== refreshToken) {
					cookies.set('sb-refresh-token', data.session.refresh_token, {
						path: '/',
						httpOnly: false,
						secure: true,
						sameSite: 'lax',
						maxAge: 60 * 60 * 24 * 7, // 7 days
					});
				}
			}
		} catch (error) {
			// Silently fail - user will need to re-authenticate
			console.error('Session refresh failed:', error);
		}
	}

	return next();
});
