/**
 * How many devices one account may keep connected to Cloud Sync.
 *
 * Storage and request volume grow with every connected device, so the free
 * tier stops at a phone and a computer while Pro covers a small fleet. The
 * limit is enforced when a device token is issued; a device that signs out
 * revokes its token and frees its slot.
 */
export const FREE_DEVICE_LIMIT = 2;
export const PRO_DEVICE_LIMIT = 5;

export type SyncPlan = "free" | "pro";

/** Paid Pro is recorded by the Polar webhook as `polar_subscription_id`; a revoked subscription clears it. */
export function syncPlanFor(
	appMetadata: Record<string, unknown> | null | undefined,
): SyncPlan {
	return typeof appMetadata?.polar_subscription_id === "string" &&
		appMetadata.polar_subscription_id.length > 0
		? "pro"
		: "free";
}

export function deviceLimitFor(plan: SyncPlan): number {
	return plan === "pro" ? PRO_DEVICE_LIMIT : FREE_DEVICE_LIMIT;
}

/** True when one more device may connect given how many others are already connected. */
export function canConnectDevice(
	plan: SyncPlan,
	otherConnectedDevices: number,
): boolean {
	return otherConnectedDevices < deviceLimitFor(plan);
}

export function deviceLimitMessage(plan: SyncPlan): string {
	const limit = deviceLimitFor(plan);
	const upgrade =
		plan === "free"
			? ` Pro raises the limit to ${PRO_DEVICE_LIMIT}.`
			: "";
	return `This account already syncs ${limit} device${limit === 1 ? "" : "s"}, the limit for the ${plan === "pro" ? "Pro" : "free"} plan. Sign out of Cloud Sync on a device you no longer use, then try again.${upgrade}`;
}
