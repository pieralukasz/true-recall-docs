# AI-Powered Search Integration Plan

## Overview
Integrate AI search into True Recall documentation using OpenRouter API while keeping Pagefind as fallback. Security is critical - API keys must never be exposed client-side.

## User Preferences
- **Default search:** Pagefind (classic) - users click button to try AI
- **Authentication:** Not required - rate limiting protects against abuse

## Architecture: Vercel Edge Function Proxy

```
User Query → Client Component → /api/search (Edge Function) → OpenRouter API
                                      ↓
                              - API key stored in env vars
                              - Rate limiting (10 req/min per IP)
                              - Input sanitization
                              - Prompt injection prevention
```

**Why Edge Functions:**
- API key stays server-side (never exposed to browser)
- Low latency (edge locations)
- Works with current Vercel setup
- Pay-per-use (cheap for docs site)

## Security Measures

### 1. API Key Protection
- Store `OPENROUTER_API_KEY` in Vercel environment variables only
- Never include in client-side code or git

### 2. Prompt Injection Prevention
- User input ONLY goes in `user` role messages (never system prompt)
- Structured JSON output schema to prevent freeform exploitation
- Canary token to detect prompt leakage attempts
- Input sanitization (length limits, character filtering)

### 3. Rate Limiting
- 10 requests/minute per IP
- Client-side debouncing (300ms)

### 4. Origin Validation
- Only accept requests from truerecall.app domain

## Implementation Steps

### Step 1: Switch to Hybrid Output Mode
**File:** `astro.config.mjs`
```js
output: 'hybrid',  // Changed from 'static'
```
This enables API routes while keeping pages static.

### Step 2: Create API Route
**New file:** `src/pages/api/search.ts`
- Rate limiting (in-memory or Vercel KV)
- Input validation & sanitization
- Origin checking
- OpenRouter API call with secure prompt structure
- Response validation

### Step 3: Create OpenRouter Client
**New file:** `src/lib/openrouter.ts`
- Typed API client
- System prompt with documentation context
- Structured JSON response format
- Model: `google/gemini-2.0-flash-001` (fast, cheap, good quality)

### Step 4: Build Search Index
**New file:** `scripts/generate-search-index.ts`
- Runs at build time
- Extracts content from all docs pages
- Outputs to `public/search-index.json`

**Update:** `package.json` build script to include index generation

### Step 5: Create AI Search Component
**New file:** `src/components/starlight/AISearch.astro`
- Modal dialog (Ctrl+K to open)
- Pagefind results shown by default
- "Ask AI" button to get AI-powered answer
- AI answer appears above Pagefind results when triggered
- Loading states and error handling
- Graceful fallback if AI fails

### Step 6: Update Header
**File:** `src/components/starlight/Header.astro`
- Import and use AISearch instead of default Search

## Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `astro.config.mjs` | Modify | Change output to 'hybrid' |
| `src/pages/api/search.ts` | Create | Edge function API route |
| `src/lib/openrouter.ts` | Create | OpenRouter API client |
| `src/lib/search-utils.ts` | Create | Sanitization, rate limiting utils |
| `src/components/starlight/AISearch.astro` | Create | Custom search component |
| `src/components/starlight/Header.astro` | Modify | Use AISearch component |
| `scripts/generate-search-index.ts` | Create | Build-time indexing |
| `package.json` | Modify | Add index generation to build |

## Verification

1. **Security Testing:**
   - Verify API key not in browser network tab
   - Test prompt injection attempts
   - Confirm rate limiting works
   - Check origin validation

2. **Functional Testing:**
   - AI search returns relevant answers
   - Pagefind fallback works
   - Mode toggle switches correctly
   - Keyboard shortcut (Ctrl+K) works

3. **Performance Testing:**
   - Response time < 2 seconds
   - No impact on static page load times

## Cost Estimate
- OpenRouter (Gemini Flash): ~$0.0003 per query
- 10,000 queries/month: ~$3
- Vercel: Within free tier

## Sources
- [OpenRouter API Reference](https://openrouter.ai/docs/api/reference/overview)
- [OpenRouter OAuth PKCE](https://openrouter.ai/docs/guides/overview/auth/oauth)
- [OpenAI Safety Best Practices](https://platform.openai.com/docs/guides/safety-best-practices)
- [LLM Security Best Practices](https://www.oligo.security/academy/llm-security-in-2025-risks-examples-and-best-practices)
- [Prompt Injection Prevention](https://www.apisec.ai/blog/prompt-injection-and-llm-api-security-risks-protect-your-ai)
