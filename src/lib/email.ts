const GMAIL_DOMAINS = new Set(["gmail.com", "googlemail.com"]);
const OUTLOOK_DOMAINS = new Set(["outlook.com", "hotmail.com", "live.com"]);

export function canonicalizeEmail(email: string): string {
	const [localRaw, domain] = email.toLowerCase().trim().split("@");
	if (!localRaw || !domain) return email.toLowerCase().trim();

	let local = localRaw;

	if (GMAIL_DOMAINS.has(domain)) {
		local = local.replace(/\./g, "").replace(/\+.*$/, "");
		return `${local}@gmail.com`;
	}

	if (OUTLOOK_DOMAINS.has(domain)) {
		local = local.replace(/\+.*$/, "");
		return `${local}@${domain}`;
	}

	local = local.replace(/\+.*$/, "");
	return `${local}@${domain}`;
}
