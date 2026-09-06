export interface KeyInfo {
  expires: string | null;
  spend: number;
  max_budget: number | null;
  budget_reset_at: string | null;
  budget_duration: string | null;
  blocked?: boolean;
  metadata?: {
    plan?: string;
    budget_spend_baseline?: number;
    budget_allowance?: number;
    billing_period_end?: string;
    cancel_at_period_end?: boolean;
  };
}

export function detectPlan(info: KeyInfo, now = Date.now()) {
  if (info.blocked || info.max_budget === 0) return "blocked";
  if (info.expires && Date.parse(info.expires) <= now) return "expired";
  const exceeded = info.max_budget != null && info.spend >= info.max_budget;
  if (info.metadata?.plan === "pro" || info.budget_duration) return exceeded ? "pro-exceeded" : "pro";
  return exceeded ? "trial-ended" : "trial";
}

export function periodUsage(info: KeyInfo) {
  const baseline = info.metadata?.budget_spend_baseline ?? 0;
  const budget = info.metadata?.budget_allowance ?? info.max_budget ?? 0;
  return { spend: Math.max(0, info.spend - baseline), budget };
}

export function nextBudgetDate(info: KeyInfo): string | null {
  if (info.metadata?.cancel_at_period_end) return null;
  return info.metadata?.billing_period_end ?? info.budget_reset_at;
}
