type UmamiEventData = Record<string, string | number | boolean>;

interface UmamiTracker {
	track(name: string, data?: UmamiEventData): Promise<unknown>;
}

export function trackAnalyticsEvent(
	name: string,
	data?: UmamiEventData,
): void {
	const tracker = (window as Window & { umami?: UmamiTracker }).umami;
	if (tracker) void tracker.track(name, data);
}
