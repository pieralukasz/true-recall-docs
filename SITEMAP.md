# Site Map — True Recall Docs

> **This file must be updated whenever the site structure changes** (adding, removing, renaming, or moving pages/sections). Keep it in sync with `astro.config.mjs` sidebar and `src/content/docs/`.

All paths are relative to `src/content/docs/`.

## Special Pages (src/pages/)

- `login.astro` — Magic link sign-in for True Recall accounts
- `dashboard.astro` — Subscription dashboard: plan status, usage, Pro key, Polar checkout/portal
- `pricing.astro` — Pricing page: Free Trial, Pro, and BYOK tiers
- `privacy.astro` — Privacy Policy (GDPR-compliant; linked from footer)
- `terms.astro` — Terms of Service (linked from footer)

## Landing Page

- `index.mdx` — Home/splash page with hero section and feature cards

## Getting Started (5 pages)

- `getting-started/why-true-recall.md` — Why spaced repetition works, why True Recall was built, comparison with Anki/RemNote/Logseq
- `getting-started/introduction.md` — What True Recall is, core concepts, philosophy
- `getting-started/installation.md` — Installation from Obsidian Community Plugins, with BRAT for beta builds
- `getting-started/quick-start.md` — 5-minute quickstart guide
- `getting-started/basic-concepts.md` — Core concepts: flashcard types, FSRS, projects, presets, leeches

## Creation (7 pages)

- `creation/creating-flashcards.md` — Three ways to create flashcards: AI generation, Flashcard Editor, and block format
- `creation/note-types.md` — Built-in note types: Basic, Basic (Reversed), Cloze, Image Occlusion
- `creation/cloze-deletions.md` — Fill-in-the-blank cards with `{{c1::text}}` syntax
- `creation/image-occlusion.md` — Cards from images by hiding regions
- `creation/custom-note-types.md` — Custom note types: fields, card templates, CSS
- `creation/best-practices.md` — How to write effective flashcards
- `creation/projects-and-notes.md` — Projects, folder includes, archiving, preset inheritance

## Review (5 pages)

- `review/review-interface.md` — The review view: card display, rating, actions, session management
- `review/answering-cards.md` — Rating system, FSRS scheduling effects, learning and review phases
- `review/type-in-mode.md` — Typed answers with AI semantic grading or diff comparison
- `review/cramming.md` — Custom study sessions with filters, sort orders, and cramming mode
- `review/leeches.md` — Leech detection, configuration, and strategies for problem cards

## Views & Panels (10 pages)

- `views/dashboard.md` — Daily command center for projects and workload
- `views/selection-toolbar.md` — AI-powered floating toolbar: generate flashcards, highlight, copy, or edit from any text selection
- `views/flashcard-panel.md` — Main sidebar panel for card management
- `views/flashcard-editor.md` — Form-based modal for creating and editing flashcards
- `views/card-browser.md` — Search, filter, and bulk-manage cards with query language and facets
- `views/import-studio.md` — Bulk text-based flashcard creation with live preview and format auto-detection
- `views/statistics.md` — Analytics dashboard: daily stats, retention, maturity, streaks, collection health, widgets
- `views/ai-inbox.md` — Batch-review, approve, and defer AI Assistant drafts
- `views/knowledge-chat.md` — RAG-powered chat over your indexed vault notes and cards
- `views/fsrs-simulator.md` — Interactive FSRS parameter and scheduling simulator

## Plugins (5 pages)

- `plugins/overview.md` — Plugin architecture, tier system (free / BYOK / Pro), and the Plugins settings tab
- `plugins/ai-assistant.md` — Unified draft-and-approve AI: generate, edit, and polish cards and notes from one composer (threads + AI Inbox)
- `plugins/generation-presets.md` — Reference for generation presets: shape, CRUD, built-ins, validation, context options
- `plugins/ai-flashcard-generation.md` — Deprecated stub → unified into AI Assistant
- `plugins/card-polish.md` — Deprecated stub → unified into AI Assistant

## Configuration (6 pages)

- `configuration/general.md` — General settings: review interface, editor integration, day boundary, collection behavior
- `configuration/fsrs-settings.md` — FSRS scheduling settings: presets, retention, weights, bulk operations
- `configuration/ai-settings.md` — AI provider selection (Pro, OpenRouter, LM Studio, Custom), API keys, AI Assistant options
- `configuration/editor-integration.md` — Editor features: link status indicators, status bar, reading mode, selection toolbar
- `configuration/ink-integration.md` — Render handwritten/hand-drawn Ink embeds inside review and editors
- `configuration/keyboard-shortcuts.md` — Keyboard shortcut reference and customization

## Scheduling (4 pages)

- `scheduling/fsrs-algorithm.md` — FSRS v6 algorithm: why FSRS, core concepts, weights, states, benchmarks
- `scheduling/overview.md` — Scheduling overview: day boundaries, learning steps, intervals, fuzz, sibling burying, review order, daily limits
- `scheduling/presets.md` — Presets & optimization: scheduling profiles, parameter training from review history
- `scheduling/workload-management.md` — Workload management: load balancing, easy days, scheduled breaks, sibling dispersal

## Data (5 pages)

- `data/backup-restore.md` — Backup & Restore: manual/automatic backups, smart retention, restoring from backup
- `data/cloud-sync.md` — Cloud Sync: account connection, local-first behavior, synchronized records, conflicts, privacy
- `data/device-databases.md` — Device Databases: per-device SQLite databases, switching, importing
- `data/integrity-check.md` — Database Integrity Check: orphaned cards, missing references, repair
- `data/import-export.md` — Import & Export: Anki .apkg import/export, CSV/TSV export, migration tips

## Reference (5 pages)

- `reference/releases.md` — Release history with features, fixes, and improvements per version
- `reference/claude-code-skill.md` — Claude Code assistant integration overview
- `reference/frontmatter-fields.md` — All supported frontmatter fields and their usage
- `reference/mcp-server.md` — MCP assistant integration overview
- `reference/troubleshooting.md` — Common issues and solutions: cards, AI, sync, performance, backlog recovery
