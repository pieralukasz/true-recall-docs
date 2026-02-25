import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
	const url = import.meta.env.PUBLIC_SUPABASE_URL;
	const serviceRoleKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

	if (!serviceRoleKey) {
		throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");
	}

	return createClient(url, serviceRoleKey, {
		auth: { autoRefreshToken: false, persistSession: false },
	});
}
