import { strictEqual } from "node:assert/strict";
import { test } from "node:test";
import { ALL as deviceMethod, POST as deviceCode } from "../pages/api/auth/device-code.ts";
import { ALL as exchangeMethod, POST as exchange } from "../pages/api/auth/exchange.ts";

const context = (request: Request) => ({ request }) as Parameters<typeof exchange>[0];

test("device auth endpoints return 405 and Allow for unsupported methods", async () => {
  for (const route of [deviceMethod, exchangeMethod]) {
    for (const method of ["GET", "PUT", "DELETE", "PATCH", "OPTIONS"]) {
      const result = await route(context(new Request("https://example.invalid", { method })));
      strictEqual(result.status, 405);
      strictEqual(result.headers.get("Allow"), "POST");
    }
  }
});

test("device authorization rejects absent credentials before touching a service", async () => {
  const result = await deviceCode(context(new Request("https://example.invalid", { method: "POST", body: "null" })));
  strictEqual(result.status, 401);
});

test("exchange rejects malformed JSON and non-object bodies without accessing services", async () => {
  for (const body of ["{", "null", "[]", "true", "42", '"text"', "{}"] ) {
    const result = await exchange(context(new Request("https://example.invalid", { method: "POST", body })));
    strictEqual(result.status, 400, body);
  }
});

test("exchange validates types and boundaries for every field", async () => {
  const valid = { code: "code", state: "state", verifier: "v".repeat(32), deviceId: "device" };
  for (const field of Object.keys(valid)) {
    for (const value of [null, 42, true, [], {}, "", "x".repeat(201)]) {
      const body = JSON.stringify({ ...valid, [field]: value });
      const result = await exchange(context(new Request("https://example.invalid", { method: "POST", body })));
      strictEqual(result.status, 400, body);
    }
  }
  const result = await exchange(context(new Request("https://example.invalid", { method: "POST", body: JSON.stringify({ ...valid, verifier: "v".repeat(31) }) })));
  strictEqual(result.status, 400);
});
