# Site Map — True Recall Docs

> **This file must be updated whenever the site structure changes** (adding, removing, renaming, or moving pages/sections). Keep it in sync with `astro.config.mjs` sidebar and `src/content/docs/`.

All paths are relative to `src/content/docs/`.

## Special Pages (src/pages/)

- `subscription.astro` — Redirects to https://truerecall.app (linked from header subscription icon)

## Landing Page

- `index.mdx` — Home/splash page with hero section and feature cards

## Getting Started (5 pages)

- `getting-started/why-true-recall.md` — Why spaced repetition works, why True Recall was built, comparison with Anki/RemNote/Logseq
- `getting-started/introduction.md` — What True Recall is, core concepts, philosophy
- `getting-started/installation.md` — Installation via BRAT, manual, or from source
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

## Views & Panels (8 pages)

- `views/dashboard.md` — Daily command center for projects and workload
- `views/selection-toolbar.md` — AI-powered floating toolbar: generate Basic, Cloze, or Auto cards from any text selection
- `views/flashcard-panel.md` — Main sidebar panel for card management
- `views/flashcard-editor.md` — Form-based modal for creating and editing flashcards
- `views/card-browser.md` — Search, filter, and bulk-manage cards with query language and facets
- `views/import-studio.md` — Bulk text-based flashcard creation with live preview and format auto-detection
- `views/statistics.md` — Analytics dashboard: daily stats, retention, maturity, streaks, collection health, widgets

## Configuration (5 pages)

- `configuration/general.md` — General settings: review interface, editor integration, day boundary, collection behavior
- `configuration/fsrs-settings.md` — FSRS scheduling settings: presets, retention, weights, bulk operations
- `configuration/ai-settings.md` — AI configuration: subscription, API keys, generation language, custom prompts
- `configuration/editor-integration.md` — Editor features: link status indicators, status bar, reading mode, selection toolbar
- `configuration/keyboard-shortcuts.md` — Keyboard shortcut reference and customization

## Scheduling (4 pages)

- `scheduling/fsrs-algorithm.md` — FSRS v6 algorithm: why FSRS, core concepts, weights, states, benchmarks
- `scheduling/overview.md` — Scheduling overview: day boundaries, learning steps, intervals, fuzz, sibling burying, review order, daily limits
- `scheduling/presets.md` — Presets & optimization: scheduling profiles, parameter training from review history
- `scheduling/workload-management.md` — Workload management: load balancing, easy days, scheduled breaks, sibling dispersal

## Data (4 pages)

- `data/backup-restore.md` — Backup & Restore: manual/automatic backups, smart retention, restoring from backup
- `data/device-databases.md` — Device Databases: per-device SQLite databases, switching, importing
- `data/integrity-check.md` — Database Integrity Check: orphaned cards, missing references, repair
- `data/import-export.md` — Import & Export: Anki .apkg import/export, CSV/TSV export, migration tips

## Reference (2 pages)

- `reference/frontmatter-fields.md` — All supported frontmatter fields and their usage
- `reference/troubleshooting.md` — Common issues and solutions: cards, AI, sync, performance, backlog recovery
