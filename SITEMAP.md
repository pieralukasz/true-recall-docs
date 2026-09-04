# Site Map: True Recall Docs

> **This file must be updated whenever the site structure changes** (adding, removing, renaming, or moving pages/sections). Keep it in sync with `astro.config.mjs` sidebar and `src/content/docs/`.

All paths are relative to `src/content/docs/`.

## Special Pages (src/pages/)

- `login.astro`: Magic link sign-in for True Recall accounts
- `dashboard.astro`: Subscription dashboard: plan status, usage, Pro key, Polar checkout/portal
- `pricing.astro`: Pricing page: Free Trial, Pro, and BYOK tiers
- `privacy.astro`: Privacy Policy (GDPR-compliant; linked from footer)
- `terms.astro`: Terms of Service (linked from footer)

## Landing Page

- `index.mdx`: Home/splash page with hero section and feature cards (desktop and mobile)
- `faq.mdx`: Frequently asked questions (content shared with `src/lib/faq.ts` and the JSON-LD FAQ schema)

## Getting Started (6 pages)

- `getting-started/why-true-recall.md`: Why spaced repetition works, why True Recall was built, comparison with Anki/RemNote/Logseq
- `getting-started/introduction.md`: What True Recall is, core concepts, philosophy
- `getting-started/installation.md`: Installation from Obsidian Community Plugins, with BRAT for beta builds
- `getting-started/quick-start.md`: 5-minute quickstart guide
- `getting-started/basic-concepts.md`: Core concepts: flashcard types, FSRS, projects, presets, leeches
- `getting-started/what-pro-includes.md`: Exactly what a Pro key unlocks (managed AI with budget, Pro prompt, Image Occlusion, Typed Answers) versus Free and BYOK

## Creation (7 pages)

- `creation/creating-flashcards.md`: Three ways to create flashcards: the Flashcard Generator in AI Workspace, the Flashcard Editor, and block format
- `creation/note-types.md`: Built-in note types: Basic, Basic (Reversed), Cloze, Image Occlusion
- `creation/cloze-deletions.md`: Fill-in-the-blank cards with `{{c1::text}}` syntax
- `creation/image-occlusion.md`: Cards from images by hiding regions
- `creation/custom-note-types.md`: Custom note types: fields, card templates, CSS
- `creation/best-practices.md`: How to write effective flashcards
- `creation/projects-and-notes.md`: Projects, folder includes, archiving, preset inheritance

## Review (5 pages)

- `review/review-interface.md`: The review view: card display, rating, actions, session management
- `review/answering-cards.md`: Rating system, FSRS scheduling effects, learning and review phases
- `review/type-in-mode.md`: Typed Answers (title renamed, route unchanged): Pro feature, Off / AI grading, teacher-verdict panel, grading model, text-comparison fallback
- `review/cramming.md`: Custom Study (title renamed, route unchanged): seven Anki-style modes, temporary filtered deck on the Dashboard Custom tab
- `review/leeches.md`: Leech detection (per-preset threshold and action in the preset options dialog) and strategies for problem cards

## Views & Panels (10 pages)

- `views/dashboard.md`: Daily command center: projects, daily target with pace chips, Custom Study, Scheduling submenu, save/sync status
- `views/selection-toolbar.md`: Quick Actions Toolbar (title renamed, route unchanged): floating toolbar with generate, #card, Ask AI, highlight, copy, edit and image occlusion actions; Editor / Global / Image toolbars
- `views/flashcard-panel.md`: Main sidebar panel for card management
- `views/flashcard-editor.md`: Form-based modal for creating and editing flashcards
- `views/card-browser.md`: Search, filter, and bulk-manage cards with query language and facets
- `views/import-studio.md`: Bulk text-based flashcard creation with live preview and format auto-detection
- `views/statistics.md`: Analytics dashboard: FSRS status, heatmap, true retention, workload forecast, distributions, the 17 Embedded Dashboards codeblocks, simplified view on phones
- `views/ai-inbox.md`: Batch-review, apply, retry, and defer AI Workspace threads and drafts
- `views/knowledge-chat.md`: Removed-feature stub: Knowledge Chat (RAG) was removed in 2.0.0, points to the Ask AI panel and AI Workspace
- `views/fsrs-simulator.md`: Interactive FSRS parameter and scheduling simulator

## Features (5 pages, directory `plugins/`)

- `plugins/overview.md`: The Features settings tab: access levels (Free / BYOK / Pro), the AI provider card, and the five optional feature toggles
- `plugins/ai-assistant.md`: AI Workspace: one workspace for research, generating cards and improving cards, with threads, the Ask AI panel and the AI Inbox
- `plugins/generation-presets.md`: Reference for generation presets: shape, CRUD, built-ins, validation, context options
- `plugins/ai-flashcard-generation.md`: Deprecated stub → Flashcard Generator lives inside AI Workspace
- `plugins/card-polish.md`: Deprecated stub → Card Polish presets run inside AI Workspace

## Configuration (7 pages)

- `configuration/general.md`: General settings: appearance, dashboard header, review interface, review keybindings, image occlusion tools, day boundary
- `configuration/fsrs-settings.md`: FSRS settings: presets, retention, daily limits, learning steps, display order, weights and optimization, easy days, R-Mode, load balance, sibling dispersal, scheduled breaks, bulk operations
- `configuration/ai-settings.md`: AI provider card (Pro, OpenRouter, LM Studio, Custom), API keys, models, grading model for typed answers, AI Workspace settings
- `configuration/editor-integration.md`: Quick Actions Toolbar, Link Progress Indicators, Status Bar Summary, Embedded Dashboards, reading mode highlights
- `configuration/ink-integration.md`: Render handwritten/hand-drawn Ink embeds inside review and editors
- `configuration/keyboard-shortcuts.md`: Keyboard shortcuts in review, Card Browser, Flashcard Panel and embedded editors, plus bindable commands
- `configuration/knowledge-base.md`: Removed-feature stub: Knowledge Base (RAG) was removed in 2.0.0, points to AI Workspace

## Scheduling (4 pages)

- `scheduling/fsrs-algorithm.md`: FSRS v6 algorithm: why FSRS, core concepts, weights, states, benchmarks
- `scheduling/overview.md`: Scheduling overview: day boundaries, learning steps, intervals, fuzz, sibling burying, review order, daily limits
- `scheduling/presets.md`: Presets & optimization: scheduling profiles, parameter training from review history
- `scheduling/workload-management.md`: Workload management: load balancing, daily target with pace chips, R-Mode, easy days, scheduled breaks, sibling dispersal

## Data (5 pages)

- `data/backup-restore.md`: Backup & Restore: manual/automatic backups, smart retention, restoring from backup
- `data/cloud-sync.md`: Cloud Sync: account connection, local-first behavior, synchronized records, conflicts, privacy
- `data/device-databases.md`: Device Databases: where the database lives per sync mode (local.nosync vs shared), switching, importing
- `data/integrity-check.md`: Database Integrity Check: three orphan categories, confirm dialog, automatic pre-repair backup
- `data/import-export.md`: Import & Export: Anki .apkg import/export, CSV/TSV export, migration tips

## Reference (5 pages)

- `reference/releases.md`: Release history with features, fixes, and improvements per version
- `reference/claude-code-skill.md`: Claude Code skill: review help, card creation, stats, FSRS presets, organization; command groups of the 83-command CLI
- `reference/frontmatter-fields.md`: All supported frontmatter fields and their usage
- `reference/mcp-server.md`: MCP server setup (Bun, stdio, TRUE_RECALL_PORT) and the tool surface exposed to compatible assistants
- `reference/troubleshooting.md`: Common issues and solutions: cards, AI, sync, mobile load stalls, performance, backlog recovery
