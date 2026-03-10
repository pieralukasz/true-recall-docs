# Site Map — True Recall Docs

> **This file must be updated whenever the site structure changes** (adding, removing, renaming, or moving pages/sections). Keep it in sync with `astro.config.mjs` sidebar and `src/content/docs/`.

All paths are relative to `src/content/docs/`.

## Special Pages (src/pages/)

- `subscription.astro` — Redirects to https://truerecall.app (linked from header subscription icon)

## Landing Page

- `index.mdx` — Home/splash page with hero section and feature cards

## Getting Started (3 pages)

- `getting-started/introduction.md` — What True Recall is, core concepts, philosophy
- `getting-started/installation.md` — Installation via BRAT, manual, or from source
- `getting-started/quick-start.md` — 5-minute quickstart guide

## Creation (7 pages)

- `creation/creating-flashcards.md` — Three ways to create flashcards: AI generation, Flashcard Editor, and block format
- `creation/note-types.md` — Built-in note types: Basic, Basic (Reversed), Cloze, Image Occlusion
- `creation/cloze-deletions.md` — Fill-in-the-blank cards with `{{c1::text}}` syntax
- `creation/image-occlusion.md` — Cards from images by hiding regions
- `creation/custom-note-types.md` — Custom note types: fields, card templates, CSS
- `creation/best-practices.md` — How to write effective flashcards
- `creation/projects-and-notes.md` — Projects, folder includes, archiving, preset inheritance

## Review (4 pages)

- `review/review-interface.md` — The review view: card display, rating, actions, session management
- `review/answering-cards.md` — Rating system, FSRS scheduling effects, learning and review phases
- `review/type-in-mode.md` — Typed answers with AI semantic grading or diff comparison
- `review/cramming.md` — Practice without affecting scheduled review dates

## Migration (4 pages)

- `migration/from-anki.md` — Migrating from Anki
- `migration/from-obsidian-to-anki.md` — Migrating from the Obsidian-to-Anki plugin
- `migration/from-remnote.md` — Migrating from RemNote
- `migration/from-logseq.md` — Migrating from Logseq

## Features (8 pages)

- `features/cloze-deletions.md` — Cloze deletion syntax (`{{c1::text}}`)
- `features/reversed-cards.md` — Auto-generated bidirectional cards
- `features/review-system.md` — Card states and review mechanics
- `features/fsrs-algorithm.md` — FSRS v6 algorithm explanation
- `features/statistics.md` — Analytics and progress tracking
- `features/projects.md` — Project-based organization
- `features/anki-export.md` — Exporting cards to Anki (.apkg) and CSV/TSV
- `features/cloud-sync.md` — Cloud sync (planned feature)

## Views & Panels (8 pages)

- `views/selection-toolbar.md` — AI-powered floating toolbar: generate Basic, Cloze, or Auto cards from any text selection
- `views/flashcard-panel.md` — Main sidebar panel for card management
- `views/flashcard-editor.md` — Form-based modal for creating and editing flashcards
- `views/import-studio.md` — Bulk text-based flashcard creation with live preview and format auto-detection
- `views/statistics.md` — Comprehensive analytics dashboard with FSRS insights, study patterns, retention tracking, workload forecasting, and cross-project comparison
- `views/session-builder.md` — Custom review session configuration
- `views/fsrs-simulator.md` — Interactive FSRS visualization tool
- `views/custom-type-modal.md` — Modal for creating and managing custom note types: fields, templates, CSS

## Configuration (5 pages)

- `configuration/general.md` — General settings: review interface, editor integration, day boundary, collection behavior
- `configuration/fsrs-settings.md` — FSRS scheduling settings: presets, retention, weights, bulk operations
- `configuration/ai-settings.md` — AI configuration: subscription, API keys, generation language, custom prompts
- `configuration/editor-integration.md` — Editor features: link status indicators, status bar, reading mode, selection toolbar
- `configuration/keyboard-shortcuts.md` — Keyboard shortcut reference and customization

## Scheduling (4 pages)

- `scheduling/fsrs-algorithm.md` — FSRS v6 algorithm: why FSRS, core concepts, weights, states, benchmarks
- `scheduling/overview.md` — Scheduling overview: day boundaries, learning steps, intervals, review order, daily limits
- `scheduling/presets.md` — Presets & optimization: scheduling profiles, parameter training from review history
- `scheduling/workload-management.md` — Workload management: load balancing, easy days, scheduled breaks, sibling dispersal

## Data (3 pages)

- `data/backup-restore.md` — Backup & Restore: manual/automatic backups, smart retention, restoring from backup
- `data/device-databases.md` — Device Databases: per-device SQLite databases, switching, importing
- `data/integrity-check.md` — Database Integrity Check: orphaned cards, missing references, repair

## Reference (1 page)

- `reference/frontmatter-fields.md` — All supported frontmatter fields and their usage
