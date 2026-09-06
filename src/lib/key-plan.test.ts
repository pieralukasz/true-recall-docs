import { strictEqual, deepStrictEqual } from "node:assert/strict";
import { test } from "node:test";
import { detectPlan, periodUsage, nextBudgetDate, type KeyInfo } from "./key-plan.ts";
import { syncPlanFor } from "./device-limit.ts";
const key: KeyInfo = { expires: null, spend: 0, max_budget: .05, budget_reset_at: null, budget_duration: null };
test("trial, exhausted, blocked, expired and legacy Pro plans", () => {
  strictEqual(detectPlan(key), "trial");
  strictEqual(detectPlan({ ...key, spend: .05 }), "trial-ended");
  strictEqual(detectPlan({ ...key, blocked: true }), "blocked");
  strictEqual(detectPlan({ ...key, max_budget: 0 }), "blocked");
  strictEqual(detectPlan({ ...key, expires: "2020-01-01" }), "expired");
  strictEqual(detectPlan({ ...key, budget_duration: "31d" }), "pro");
});
test("paid periods show this period's usage and renewal date", () => {
  const pro = { ...key, spend: 11, max_budget: 13.5, metadata: { plan: "pro", budget_spend_baseline: 10, budget_allowance: 3.5, billing_period_end: "2027-01-01" } };
  strictEqual(detectPlan(pro), "pro");
  strictEqual(detectPlan({ ...pro, spend: 13.5 }), "pro-exceeded");
  deepStrictEqual(periodUsage(pro), { spend: 1, budget: 3.5 });
  strictEqual(nextBudgetDate(pro), "2027-01-01");
  strictEqual(nextBudgetDate({ ...pro, metadata: { ...pro.metadata, cancel_at_period_end: true } }), null);
});
test("Cloud Sync stops granting paid device slots after expiration", () => {
  strictEqual(syncPlanFor({ polar_subscription_id: "sub", pro_expires_at: "2020-01-01" }), "free");
  strictEqual(syncPlanFor({ polar_subscription_id: "sub", pro_expires_at: "invalid" }), "free");
  strictEqual(syncPlanFor({ polar_subscription_id: "sub", pro_expires_at: "2030-01-01" }, Date.parse("2026-01-01")), "pro");
  strictEqual(syncPlanFor({}), "free");
});
