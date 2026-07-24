# Design: True Recall Docs & Site Refresh

**Date:** 2026-07-24
**Repos touched:** primarily `true-recall-docs` (Astro + Starlight); read-only reference into `true-recall` (plugin source).
**Goal:** Reconcile the documentation site and truerecall.app landing with the current state of the plugin (full app→docs audit), add a real component-screenshot pipeline, and surface author links to lucaspiera.com in nav + footer.

---

## 1. Context & audit findings

The plugin has evolved (notably the unified **AI Assistant**, recent scheduling/pace UI, Ink handwriting embeds), while the docs site drifted. A four-area parallel audit of the plugin source produced the drift matrix below.

### 1a. New features with NO doc page (gaps)

| Feature | Source | Doc action |
|---|---|---|
| **AI Assistant** (threads, AI Inbox, draft/approve, undo, Draft Studio, Ask AI popover/modal/editor panel, workflow chips, "unify AI workflows") | `features/assistant/`, `plugins/ai-assistant/`, `core/ai/assistant/` | New hub page |
| **AI Inbox** view | `views/assistant/` | New page |
| **Knowledge Chat / RAG** view | `views/chat/`, `features/rag/` | New page (distinct from settings page) |
| **FSRS Simulator** view | `views/simulator/` | New page |
| **Note Type Manager** + **Card Types Editor** modals | `views/modal-window/`, `modals/core/` | Fold into `custom-note-types.md` |
| **Ink integration** (handwriting embeds) | `editor/shared/ink-embeddable-editor.ts`, `Integrations → Ink Integration` | New page |

### 1b. Existing pages that are STALE / inaccurate

| Page | Problem |
|---|---|
| `plugins/ai-flashcard-generation.md` | Describes `ai-generation` plugin, now **deprecated** (`replacementId: ai-assistant`). |
| `plugins/card-polish.md` | `card-polish` plugin now **deprecated**; unification into AI Assistant undocumented. |
| `plugins/overview.md` | Missing `ai-assistant`; does not mark the two plugins deprecated. |
| `plugins/generation-presets.md` | Mostly valid; presets now also surface as chips in the Ask AI composer. |
| `configuration/ai-settings.md` | Likely missing `assistant*` settings (web search, max iterations, max sources, instructions), the `ask-ai` toolbar button, and the `open-assistant-inbox` command. |
| `configuration/editor-integration.md` | **Factually wrong**: implies a Link Status Indicators settings panel (there is none — enable/disable only); the "Display Modes: Text / Donut / Both" table does not match code (mode is context-driven: donuts in editor, text counts in reading view). Real toggles live in **General → Editor integration** (`Show link status indicators`, `Show donuts in flashcard panel`, `Show donuts in review`, `Show status bar widget`). |
| `configuration/knowledge-base.md` | Does not mention the retriever's role inside the Assistant ("Vault evidence", `search_knowledge` tool). |
| `creation/creating-flashcards.md` | Should reference AI Assistant as the new AI creation path. |

### 1c. Verified accurate (no change needed)
`views/selection-toolbar.md` (buttons IO/Edit/Quick+/Highlight/Copy/Note+/Append + three button lists), `creation/image-occlusion.md`, `configuration/ai-settings.md` breadcrumb `Settings → True Recall → Plugins` (correct — there is no separate "AI Settings" tab; the AI provider section sits at the top of the **Plugins** tab), `configuration/fsrs-settings.md`, `configuration/general.md`, `configuration/keyboard-shortcuts.md`, `configuration/knowledge-base.md` field list, `reference/*`.

### 1d. Docs-convention corrections (docs `CLAUDE.md` is out of sync with reality)
- The **`(P)` sidebar-label suffix does not exist** anywhere in the repo. The real "needs photo" marker is the HTML comment `<!-- TODO PHOTO -->` — **33 markers across 13 pages** (top: `views/statistics.md` ×7, `data/import-export.md` ×4, `views/dashboard.md` ×4).
- **No real product screenshots are committed.** Only 5 FSRS concept charts exist under `src/assets/concepts/` plus one excalidraw diagram and logos.
- Image embed pattern is plain Markdown `![alt](../../../assets/…png)`, no JS imports.

### 1e. Location correction (do not misdocument)
The daily-target picker, pace chips, catch-up preview, and load-balance controls live in **Settings → FSRS** (`settings/tabs/fsrs/LoadBalanceSection.tsx`, `target-copy.ts`) and are visualized read-only in the **Statistics** view (`WorkloadForecastSection`). The per-session cramming toggle + ordering live in the **Custom Study** modal. These are NOT a review-time picker; scheduling docs must describe them in their real location.

---

## 2. Decisions (locked with the user)

1. **Screenshot pipeline:** Attempt semi-automated capture via the `obsidian-cli` skill; **fall back to a manual documented process** if it cannot capture the target views. Feasibility to be validated at the start of Phase 2 (not assumed).
2. **Deprecated plugin pages:** Move substantive content into the new AI Assistant page; leave `ai-flashcard-generation.md` and `card-polish.md` as **thin stubs** that redirect the reader to AI Assistant (preserves existing links / SEO). No page deletion.
3. **Marketing scope:** Refresh the landing (`index.mdx`) to feature AI Assistant (rename the "AI Flashcard Generation" feature card, update copy/CTA), in addition to adding component images and lucaspiera.com links. Pricing copy checked for consistency, not rewritten.
4. **Note Type Manager + Card Types Editor:** documented as **sections inside** `creation/custom-note-types.md`, not standalone pages.
5. **Ink integration:** gets its **own page** `configuration/ink-integration.md`.

---

## 3. Phase 1 — Documentation content

Follows the docs `CLAUDE.md` style guide (frontmatter with required `description`, `:::caution[My Notes]` dev block, bold-on-first-mention terminology, bidirectional linking, "What to Read Next" footer, `<!-- TODO PHOTO -->` placeholders).

### New pages
- `plugins/ai-assistant.md` — **hub**: what it is; the thread model (active / inbox / archived); entry points (Ask AI popover from review selection, Ask AI modal / "AI Draft Studio", editor-panel in Quick Note Editor, `PanelAiStrip` deep-link); the unified composer with workflow chips (agent / generate-cards / modify-card); proposal types (create/update card, append/create note, insert diagram, attach images); review → Apply / Reject / Apply all; conflict detection; "Retry with feedback"; "Undo AI"; how "Later" hands a thread to the Inbox; how settled threads archive. Note the unification of the former AI Generation + Card Polish flows.
- `views/ai-inbox.md` — the AI Inbox view: batch review of deferred/pending proposals, per-thread and inbox-wide "Approve all", status pills, orphan tasks. Command: **Open AI assistant inbox** (`open-assistant-inbox`).
- `views/knowledge-chat.md` — the RAG chat view: `@`-context chips, messages with sources, index status, config panel. Command: **Chat with knowledge base** (`open-knowledge-chat`). Cross-link to `configuration/knowledge-base.md` (index/settings) and to AI Assistant (shared retriever).
- `views/fsrs-simulator.md` — parameter/scheduling simulator: parameter bar, sliders, chart, multi-sequence comparison. Command: **Open FSRS simulator**. Cross-link `scheduling/fsrs-algorithm.md`.
- `configuration/ink-integration.md` — the optional Ink handwriting bridge: what it does (hand-drawn/writing embeds render inside review + editors), status states (ready / incompatible / disabled / not installed), enabled via **Settings → Integrations → Ink Integration**, requires the third-party Ink plugin.

### Extend existing pages
- `creation/custom-note-types.md` — add a **Note Type Manager** section (CRUD over note types; command "Manage note types") and a **Card Types Editor** section (edit a note type's card templates/layouts).

### Rewrite → stub
- `plugins/ai-flashcard-generation.md`, `plugins/card-polish.md` → thin "This is now part of **AI Assistant**" note + link; keep `description` + a one-line explanation so old links resolve.
- `plugins/overview.md` → add `ai-assistant` entry; mark `ai-generation` + `card-polish` as deprecated (superseded by AI Assistant).
- `plugins/generation-presets.md` → note presets now appear as chips in the Ask AI composer.

### Factual fixes
- `configuration/editor-integration.md` → rewrite Link Status Indicators section (no settings panel; context-driven display; real toggles in General → Editor integration; keep the Note Stats Tooltip coverage).
- `configuration/ai-settings.md` → add `assistant*` settings, `ask-ai` button, `open-assistant-inbox` command.
- `configuration/knowledge-base.md` → add retriever-in-Assistant note ("Vault evidence" / `search_knowledge`), cross-link `views/knowledge-chat.md` + `plugins/ai-assistant.md`.
- `creation/creating-flashcards.md` → add AI Assistant as a creation path with a link.

### Housekeeping
- `SITEMAP.md` → add new pages, keep in sync.
- Verify sidebar (autogenerate per directory in `astro.config.mjs`) surfaces new pages; adjust `order` where needed.
- docs `CLAUDE.md` → remove the fictional `(P)` convention; document the real `<!-- TODO PHOTO -->` marker and the screenshot process from Phase 2.

---

## 4. Phase 2 — Component screenshot pipeline

1. **Probe** `obsidian-cli` screenshot/DOM capability against a live plugin instance. Record result honestly.
2. **If automated capture works:** script capture of the priority views (Dashboard, Flashcard Panel, Card Browser, Review loop, Selection Toolbar, AI Assistant / Inbox, Statistics). Dark theme, large font, 1920×1080 per the existing `VISUAL-CONTENT-TODO.md` production notes.
3. **If it does not:** write the manual process instead (do not fake screenshots).
4. **Documented process** (lands in docs `CLAUDE.md`): clean demo-vault content, dark theme, resolution, file naming `src/assets/screenshots/<area>/<name>.png`, embed pattern `![descriptive alt](../../../assets/screenshots/…png)`, alt-text convention, light/dark considerations, and where each maps to a `<!-- TODO PHOTO -->` marker.
5. **Fill placeholders:** replace the 33 existing `<!-- TODO PHOTO -->` markers and the new pages' placeholders with real captures, as far as feasible this pass. Update `VISUAL-CONTENT-TODO.md` to reflect what's done vs pending. Silently-skipped captures must be logged in that file, not left implied-complete.

---

## 5. Phase 3 — lucaspiera.com links + nav/footer + landing refresh

### Author links (two nav systems)
- **Docs header:** `src/components/starlight/Header.astro` `.right-items` (mirror into `MobileMenuFooter.astro` for mobile).
- **Marketing header:** `src/layouts/BaseLayout.astro` `.nav-links`.
- **Marketing footer:** `BaseLayout.astro` `<footer class="page-footer">` (add lucaspiera.com beside Privacy / Terms).
- **Docs footer:** none exists today → create `src/components/starlight/Footer.astro` and register under `components:` in `astro.config.mjs`.

### Landing refresh (`src/content/docs/index.mdx`)
- Rename/replace the "AI Flashcard Generation" feature card → **AI Assistant**; refresh its copy and the surrounding CTA to foreground the assistant.
- Optionally activate the unused `.homepage-plans` / `.homepage-faq` styles in `custom.css` if a plans/FAQ block improves the page (keep minimal; no full copy rewrite).
- Keep `pricing.astro` copy as-is unless it contradicts the new AI Assistant framing.

---

## 6. Out of scope
- Rewriting pricing/plan economics or legal pages.
- Recording the 2-minute tutorial video (tracked separately in `VISUAL-CONTENT-TODO.md`).
- Any change to the plugin source in `true-recall` (read-only reference only).
- GIF/animation production (deferred; Phase 2 covers static screenshots).

---

## 7. Success criteria
- Every 🔴/🟡 row in §1a/§1b has a corresponding created/updated page, verified against the plugin source.
- `SITEMAP.md` and docs `CLAUDE.md` match the new reality (no `(P)` fiction).
- `obsidian-cli` capability probed and outcome recorded; screenshots either added or their absence logged in `VISUAL-CONTENT-TODO.md`.
- lucaspiera.com reachable from both nav systems and both footers.
- `npm run build` in `true-recall-docs` succeeds; no broken internal links (grep old paths after any rename).
