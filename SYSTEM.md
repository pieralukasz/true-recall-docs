# True Recall — Complete Monetization System Documentation

## Overview

True Recall is an Obsidian plugin for AI-powered flashcard generation. The monetization system spans **3 repositories** and **4 external services** to deliver a managed subscription experience where users get an API key, paste it into Obsidian, and generate flashcards without any API setup.

```
┌─────────────────────┐     ┌──────────────────────┐     ┌─────────────────────┐
│   true-recall        │     │  true-recall-docs     │     │  true-recall-proxy   │
│   (Obsidian plugin)  │────▶│  (Astro site)         │     │  (LiteLLM gateway)   │
│                      │     │  truerecall.app       │     │  ai.truerecall.app   │
│  - AI generation     │     │  - Auth (Supabase)    │     │  - Key management    │
│  - Settings UI       │     │  - Dashboard          │     │  - Budget enforcement │
│  - Key validation    │     │  - Webhooks (Polar)   │     │  - Model routing     │
│  - BYOK fallback     │     │  - Admin API          │     │  - Usage tracking    │
└──────────┬───────────┘     └──────────┬───────────┘     └──────────┬───────────┘
           │                            │                            │
           │  validates key             │  generates keys            │  proxies to
           ▼                            ▼                            ▼
      ┌──────────┐              ┌──────────────┐              ┌──────────────┐
      │ Supabase │              │   Polar.sh   │              │  OpenRouter  │
      │ (status  │              │  (payments)  │              │  (LLM API)  │
      │  check)  │              │              │              │              │
      └──────────┘              └──────────────┘              └──────────────┘
```

---

## Repositories

### 1. `true-recall` — Obsidian Plugin
**What:** The plugin users install in Obsidian.
**Role in monetization:** Consumes subscription keys, validates them, routes AI requests.

### 2. `true-recall-docs` — Website (truerecall.app)
**What:** Astro + Starlight site deployed on Vercel.
**Role in monetization:** Auth, dashboard, pricing page, Polar webhooks, key generation, admin API.

### 3. `true-recall-proxy` — LiteLLM Proxy (ai.truerecall.app)
**What:** LiteLLM Docker container deployed on Fly.io.
**Role in monetization:** Virtual API key management, budget enforcement, model routing to OpenRouter.

---

## External Services

| Service | Purpose | URL |
|---------|---------|-----|
| **Supabase** | Auth (magic link, OAuth) + database (`user_subscriptions`) | Project dashboard |
| **Polar.sh** | Payments (Starter subscription, top-ups) | polar.sh/truerecall |
| **LiteLLM** | API key management, budget caps, model routing | ai.truerecall.app |
| **OpenRouter** | Upstream LLM provider (Gemini, GPT, Claude, etc.) | openrouter.ai |
| **Resend** | Transactional email (waitlist welcome) | resend.com |
| **Vercel** | Hosting for true-recall-docs | vercel.com |
| **Fly.io** | Hosting for true-recall-proxy | fly.io |

---

## Tiers & Budgets

| Tier | Price | LiteLLM Budget | Duration | ~Generations | Model |
|------|-------|---------------|----------|--------------|-------|
| **Free (BYOK)** | $0 | N/A (user's own key) | — | Unlimited | google/gemini-3-flash-preview |
| **Trial** | $0 | $0.35 | One-time | ~50 | google/gemini-3-flash-preview |
| **Beta** | $0 (admin) | $1.00 | Manual | ~142 | google/gemini-3-flash-preview |
| **Starter** | $7/mo | $2.50 | 30-day auto-reset | ~350 | google/gemini-3-flash-preview |
| **Top-up S** | $5 | +$2.00 | Permanent | +~280 | — |
| **Top-up M** | $10 | +$4.50 | Permanent | +~640 | — |

All managed tiers use one model: `google/gemini-3-flash-preview`. BYOK users also use this model (hardcoded in plugin). Generation estimate: `budget / $0.007 per generation`.

---

## User Flows

### Flow 1: New User → Trial

```
1. User visits truerecall.app/pricing
2. Clicks "Start Free Trial" → redirected to /login
3. Enters email → magic link sent (or Google/Apple OAuth)
4. Clicks magic link → /auth/confirm → cookies set → redirect to /dashboard
5. Dashboard detects no subscription:
   a. Canonicalizes email (strips Gmail +/dots)
   b. Checks if canonical email already has trial → block if yes
   c. Checks IP rate limit (max 3 trials/IP/24h) → block if yes
   d. Generates LiteLLM key ($0.35, no duration, restricted to Gemini Flash)
   e. Stores in user_subscriptions (tier=trial, trial_used=true)
6. User sees key → copies to Obsidian → True Recall Settings → AI → Subscription Key
7. Plugin validates key → starts generating flashcards
```

### Flow 2: Trial → Starter Upgrade

```
1. User clicks "Upgrade to Starter ($7/mo)" on dashboard
2. Redirected to Polar checkout (POLAR_STARTER_CHECKOUT_URL)
3. User pays $7
4. Polar sends webhook: checkout.updated (status=succeeded, product=Starter)
5. Webhook handler:
   a. Finds user by email in Supabase
   b. Finds existing subscription row → has litellm_key_hash from trial
   c. Calls updateKeyConfig() on SAME key:
      - max_budget: $2.50
      - spend: 0
      - budget_duration: "30d"
      - metadata: { tier: "starter" }
   d. Updates user_subscriptions: tier=starter, keeps same key hash/api_key
6. User refreshes dashboard → sees "Starter" tier, same key still works
7. NO CHANGE needed in Obsidian — same key, more budget
```

### Flow 3: Beta Tester → Starter

```
1. Admin generates beta key: POST /api/admin/generate-beta-key { email }
2. User gets key via admin → pastes into Obsidian
3. Dashboard shows "Your Beta Tester Key" + "Upgrade to Starter" CTA
4. User clicks upgrade → Polar checkout
5. Webhook handler:
   a. Finds existing subscription → tier="beta"
   b. Because tier=beta, creates NEW key (doesn't upgrade beta key)
   c. New key: $2.50/30d, metadata: { tier: "starter" }
   d. Updates user_subscriptions with new key hash/api_key
6. User gets NEW key on dashboard → must update in Obsidian
7. Old beta key stays alive in LiteLLM until its budget runs out
```

### Flow 4: Top-Up Purchase

```
1. Starter user clicks "Top-up S ($5)" or "Top-up M ($10)" on dashboard
2. Polar checkout → payment succeeds
3. Webhook: checkout.updated (isTopup=true)
   a. Looks up user by polar_customer_id
   b. incrementKeyBudget(key, $2.00 or $4.50) — adds to max_budget, keeps spend
   c. Updates topup_balance in DB: topup_balance += amount
4. Key now has more budget immediately
5. Top-up balance persists across monthly resets
```

### Flow 5: Monthly Renewal

```
1. Polar sends order.created (billing_reason=subscription_cycle)
2. Webhook handler:
   a. Reads user_subscriptions: litellm_key_hash, tier, topup_balance
   b. Calculates total: TIER_BUDGETS[tier] + topup_balance
   c. resetKeyBudget(key, total) — sets max_budget=total, spend=0
   d. Updates current_period_end
3. User's key is refreshed: full $2.50 + any accumulated top-ups
```

### Flow 6: Subscription Cancellation

```
1. User cancels via Polar customer portal
2. Polar sends subscription.revoked
3. Webhook handler:
   a. Deletes LiteLLM key
   b. Updates user_subscriptions: tier=free, key=null, topup_balance=0
4. Dashboard shows "No Active Subscription"
5. User can still use BYOK (own OpenRouter key) in plugin
```

---

## Repository Details

### true-recall-docs (truerecall.app)

**Framework:** Astro 5 + Starlight, deployed on Vercel
**Pages:**

| Route | Type | Auth | Purpose |
|-------|------|------|---------|
| `/login` | SSR | Public | Magic link + Google/Apple OAuth |
| `/auth/callback` | SSR | Public | OAuth code → session cookies |
| `/auth/confirm` | SSR | Public | Magic link OTP → session cookies |
| `/dashboard` | SSR | Protected | Key display, usage, actions, trial auto-provisioning |
| `/pricing` | Static | Public | Plans, top-ups, FAQ |

**API Endpoints:**

| Route | Method | Auth | Purpose |
|-------|--------|------|---------|
| `/api/webhooks/polar` | POST | HMAC signature | Polar payment events |
| `/api/admin/generate-beta-key` | POST | Bearer (master key) | Create beta tester keys |
| `/api/subscription/status` | GET | Public (key param) | Check key budget/tier |
| `/api/waitlist` | POST | Public | Newsletter signup |

**Library Files:**

| File | Purpose |
|------|---------|
| `src/lib/constants.ts` | All config: URLs, budgets, checkout links, models |
| `src/lib/litellm.ts` | LiteLLM API client: generateKey, resetKeyBudget, incrementKeyBudget, updateKeyConfig, deleteKey, getKeyInfo |
| `src/lib/email.ts` | canonicalizeEmail() — strips Gmail aliases, Outlook +tags |
| `src/lib/supabase.ts` | Public Supabase client (PKCE auth flow) |
| `src/lib/supabase-admin.ts` | Admin Supabase client (service role key) |

**Environment Variables:**

```
PUBLIC_SUPABASE_URL          # Supabase project URL
PUBLIC_SUPABASE_ANON_KEY     # Supabase anonymous key
SUPABASE_SERVICE_ROLE_KEY    # Admin operations
LITELLM_PROXY_URL            # Default: https://ai.truerecall.app
LITELLM_MASTER_KEY           # Admin key for LiteLLM
POLAR_WEBHOOK_SECRET         # HMAC verification
RESEND_API_KEY               # Email sending (waitlist)
```

---

### true-recall-proxy (ai.truerecall.app)

**Stack:** LiteLLM Docker image, deployed on Fly.io (Frankfurt)
**VM:** shared-cpu-1x, 1GB RAM, auto-stop/auto-start

**Models (14 configured, all via OpenRouter):**

| Model | Timeout |
|-------|---------|
| google/gemini-3-flash-preview | 60s |
| google/gemini-2.5-pro-preview | 120s |
| google/gemini-3.1-pro-preview | 120s |
| google/gemini-2.5-flash | 60s |
| openai/gpt-5.1 | 90s |
| openai/gpt-4o | 90s |
| openai/gpt-4o-mini | 60s |
| anthropic/claude-opus-4.5 | 120s |
| anthropic/claude-sonnet-4 | 90s |
| anthropic/claude-sonnet-4.5 | 90s |
| anthropic/claude-haiku-4.5 | 60s |
| meta-llama/llama-4-maverick | 90s |
| deepseek/deepseek-chat | 90s |
| x-ai/grok-4.1-fast | 90s |

**Note:** Managed users (trial/starter/beta) are restricted to `google/gemini-3-flash-preview` only. The full model list is available for future BYOK-via-proxy or higher tiers.

**Config:** `litellm_config.yaml`
```yaml
general_settings:
  master_key: os.environ/LITELLM_MASTER_KEY
  database_url: os.environ/DATABASE_URL
  ui_access_token: os.environ/LITELLM_MASTER_KEY
litellm_settings:
  drop_params: true
  request_timeout: 60
  num_retries: 2
```

**Environment Variables:**

```
OPENROUTER_API_KEY     # Shared OpenRouter billing key
LITELLM_MASTER_KEY     # Admin key (must start with sk-)
LITELLM_SALT_KEY       # Encryption key for stored API keys (NEVER change after init)
DATABASE_URL           # PostgreSQL connection string
```

**Admin UI:** Available at `ai.truerecall.app/ui` (login with LITELLM_MASTER_KEY)

---

### true-recall (Obsidian Plugin)

**Relevant files:**

| File | Purpose |
|------|---------|
| `src/features/ai/services/ai-client-config.ts` | Resolves which API to call |
| `src/shared/utils/subscription.utils.ts` | Tier logic, feature gating |
| `src/shared/constants.ts` | Proxy URL, status URL |
| `src/features/settings/tabs/AITab.tsx` | Settings UI for key entry |

**How the plugin connects:**

1. User enters subscription key in Settings → AI → Subscription Key
2. Plugin validates key: `GET truerecall.app/api/subscription/status?key=...`
3. Response includes: tier, budget_max, budget_spent, allowed_models
4. Plugin caches: `isSubscriber`, `subscriberTier`, `cachedAllowedModels`, `userId`
5. On AI generation: `resolveAIClientConfig(settings)`:
   - If `subscriptionKey` → route to `ai.truerecall.app/v1/chat/completions`
   - If no subscription key → route to OpenRouter directly (BYOK)
   - All paths use `google/gemini-3-flash-preview` (hardcoded)
6. If proxy returns 429 (budget exceeded) → falls back to BYOK if available

**Key URLs hardcoded in plugin:**
```
LITELLM_PROXY_URL = "https://ai.truerecall.app/v1/chat/completions"
SUBSCRIPTION_STATUS_URL = "https://www.truerecall.app/api/subscription/status"
TRUERECALL_WEB_URL = "https://www.truerecall.app"
```

---

## Database Schema

### `user_subscriptions` (Supabase)

| Column | Type | Description |
|--------|------|-------------|
| `user_id` | UUID (PK) | Supabase Auth user ID |
| `polar_customer_id` | text | Polar customer identifier |
| `polar_subscription_id` | text | Polar subscription (for renewal tracking) |
| `tier` | text | "free" \| "trial" \| "beta" \| "starter" |
| `litellm_key_hash` | text | Key token (used for LiteLLM API calls to update/delete) |
| `litellm_api_key` | text | Full API key (shown to user, pasted into Obsidian) |
| `trial_used` | boolean | Prevents double trial grant |
| `canonical_email` | text | Normalized email for dedup (indexed) |
| `trial_ip` | text | IP at trial creation (rate limiting) |
| `topup_balance` | numeric | Accumulated top-up USD (survives monthly reset) |
| `current_period_end` | timestamp | Next renewal date |
| `created_at` | timestamp | Row creation |
| `updated_at` | timestamp | Last modification |

### LiteLLM internal tables (PostgreSQL on Fly)

Managed by LiteLLM automatically:
- `api_keys` — Virtual keys with budget limits, model restrictions
- `spend` — Usage tracking per key
- Keys encrypted at rest via `LITELLM_SALT_KEY`

---

## Webhook Events (Polar → truerecall.app)

**Endpoint:** `POST /api/webhooks/polar`
**Security:** HMAC-SHA256 signature in `x-polar-signature` header

| Event | Trigger | Action |
|-------|---------|--------|
| `checkout.updated` (trial) | User completes trial checkout | Create LiteLLM key ($0.35), upsert user_subscriptions |
| `checkout.updated` (starter) | User subscribes | Upgrade existing key in-place OR create new key |
| `checkout.updated` (top-up) | User buys top-up | incrementKeyBudget + update topup_balance |
| `subscription.active` | Subscription activated | Reset budget to tier + topup_balance |
| `subscription.canceled` | User cancels | Update timestamp (access continues until period end) |
| `subscription.revoked` | Period ends after cancel | Delete LiteLLM key, clear subscription |
| `order.created` (cycle) | Monthly billing | Reset budget to tier + topup_balance, update period_end |

---

## Abuse Protection

| Layer | Mechanism | Blocks |
|-------|-----------|--------|
| **Email canonicalization** | Strip Gmail dots/+tags, Outlook +tags | `user+1@gmail.com` = `user@gmail.com` |
| **IP rate limiting** | Max 3 trials per IP per 24h | Bot signups from same IP |
| **trial_used flag** | Boolean per user_subscriptions row | Double trial on same account |
| **LiteLLM budget cap** | Hard budget limit per key | Overspending (max $0.35 trial damage) |
| **Model restriction** | `models: ["google/gemini-3-flash-preview"]` on key | Using expensive models |

---

## Polar Products

| Product | Type | Price | Checkout URL |
|---------|------|-------|-------------|
| Starter | Recurring ($7/mo) | $7 | `https://buy.polar.sh/polar_cl_NRts1e4m...` |
| Top-up S | One-time | $5 | `https://buy.polar.sh/polar_cl_FT4Du1lT...` |
| Top-up M | One-time | $10 | `https://buy.polar.sh/polar_cl_FAbt5pog...` |

Customer portal: `https://polar.sh/truerecall/portal`

**Note:** Trial is NOT a Polar product. Trials are auto-provisioned on first dashboard visit.

---

## Admin Operations

### Generate beta key
```bash
curl -X POST https://truerecall.app/api/admin/generate-beta-key \
  -H "Authorization: Bearer $LITELLM_MASTER_KEY" \
  -H "Content-Type: application/json" \
  -d '{"email": "tester@example.com"}'
```
Returns: `{ key, email, budget: 1.0, approx_generations: 142 }`

### Check key status
```bash
curl "https://truerecall.app/api/subscription/status?key=sk-..."
```
Returns: `{ tier, budget_max, budget_spent, budget_remaining, allowed_models }`

### LiteLLM Admin UI
URL: `https://ai.truerecall.app/ui`
Login: Use `LITELLM_MASTER_KEY` value
Shows: All virtual keys, spend tracking, model usage

### Direct LiteLLM key management
```bash
# View key info
curl "https://ai.truerecall.app/key/info?key=sk-..." \
  -H "Authorization: Bearer $LITELLM_MASTER_KEY"

# Delete key
curl -X POST https://ai.truerecall.app/key/delete \
  -H "Authorization: Bearer $LITELLM_MASTER_KEY" \
  -d '{"keys": ["sk-..."]}'
```

---

## Polar CLI & API

### Installation

```bash
curl -fsSL https://polar.sh/install.sh | bash
```

### Authentication

```bash
polar auth login
```

Opens a browser to authenticate with your Polar account. Required before using any other CLI commands.

### Common CLI Commands

```bash
# List all products
polar products list

# List customers
polar customers list

# List orders
polar orders list

# List subscriptions
polar subscriptions list

# List webhook endpoints
polar webhooks list

# Replay a webhook delivery (useful for debugging)
polar webhooks deliveries redeliver <delivery_id>
```

### REST API (curl)

All API calls require an access token. Generate one at `polar.sh/settings` → "Access Tokens".

```bash
export POLAR_TOKEN="polar_at_..."
```

**List products:**
```bash
curl -s https://api.polar.sh/v1/products/ \
  -H "Authorization: Bearer $POLAR_TOKEN" | jq '.items[] | {id, name, type}'
```

**List customers:**
```bash
curl -s https://api.polar.sh/v1/customers/ \
  -H "Authorization: Bearer $POLAR_TOKEN" | jq '.items[] | {id, email, name}'
```

**Get customer state (subscriptions + benefits):**
```bash
curl -s https://api.polar.sh/v1/customers/<customer_id>/state \
  -H "Authorization: Bearer $POLAR_TOKEN" | jq
```

**List orders:**
```bash
curl -s https://api.polar.sh/v1/orders/ \
  -H "Authorization: Bearer $POLAR_TOKEN" | jq '.items[] | {id, product_id, customer_id, billing_reason, created_at}'
```

**List subscriptions:**
```bash
curl -s https://api.polar.sh/v1/subscriptions/ \
  -H "Authorization: Bearer $POLAR_TOKEN" | jq '.items[] | {id, customer_id, status, current_period_end}'
```

**Revoke a subscription:**
```bash
curl -X DELETE https://api.polar.sh/v1/subscriptions/<subscription_id> \
  -H "Authorization: Bearer $POLAR_TOKEN"
```

**Delete a customer (cancels subs, revokes benefits):**
```bash
# Add ?anonymize=true for GDPR compliance
curl -X DELETE https://api.polar.sh/v1/customers/<customer_id> \
  -H "Authorization: Bearer $POLAR_TOKEN"
```

### Webhook Management (API)

**List webhook endpoints:**
```bash
curl -s https://api.polar.sh/v1/webhooks/endpoints \
  -H "Authorization: Bearer $POLAR_TOKEN" | jq '.items[] | {id, url, events}'
```

**Create webhook endpoint:**
```bash
curl -X POST https://api.polar.sh/v1/webhooks/endpoints \
  -H "Authorization: Bearer $POLAR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://truerecall.app/api/webhooks/polar",
    "events": [
      "checkout.updated",
      "subscription.active",
      "subscription.canceled",
      "subscription.revoked",
      "order.created"
    ]
  }'
```

**Update webhook endpoint (e.g. add events):**
```bash
curl -X PATCH https://api.polar.sh/v1/webhooks/endpoints/<endpoint_id> \
  -H "Authorization: Bearer $POLAR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "events": [
      "checkout.updated",
      "subscription.active",
      "subscription.canceled",
      "subscription.revoked",
      "order.created",
      "order.paid"
    ]
  }'
```

**Delete webhook endpoint:**
```bash
curl -X DELETE https://api.polar.sh/v1/webhooks/endpoints/<endpoint_id> \
  -H "Authorization: Bearer $POLAR_TOKEN"
```

### Create Checkout Session (API)

Useful for generating one-off checkout links programmatically (e.g. for specific customers):

```bash
curl -X POST https://api.polar.sh/v1/checkouts/ \
  -H "Authorization: Bearer $POLAR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "products": ["<product_uuid>"],
    "customer_email": "user@example.com",
    "success_url": "https://truerecall.app/dashboard"
  }'
```

Returns `{ "id": "...", "url": "https://polar.sh/checkout/..." }` — share the `url` with the customer.

### Our Polar Organization

- **Dashboard:** `https://polar.sh/truerecall`
- **Customer portal:** `https://polar.sh/truerecall/portal`
- **Webhook secret:** stored in `POLAR_WEBHOOK_SECRET` env var (Vercel)
- **Access token:** generate at `https://polar.sh/settings` → Personal Access Tokens

---

## Pending Manual Steps

1. **Supabase migration** — add columns:
```sql
ALTER TABLE user_subscriptions
  ADD COLUMN IF NOT EXISTS topup_balance numeric DEFAULT 0,
  ADD COLUMN IF NOT EXISTS canonical_email text,
  ADD COLUMN IF NOT EXISTS trial_ip text;

CREATE INDEX IF NOT EXISTS idx_subs_canonical_email
  ON user_subscriptions (canonical_email) WHERE trial_used = true;
```

2. **Polar webhook URL** — configure in Polar dashboard:
   - URL: `https://truerecall.app/api/webhooks/polar`
   - Events: checkout.updated, subscription.active, subscription.canceled, subscription.revoked, order.created

3. **Deploy true-recall-docs** to Vercel (all changes are local)

4. **Deploy true-recall-proxy** to Fly.io (if config changed)
