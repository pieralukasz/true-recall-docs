# Site Map — True Recall Docs

> **This file must be updated whenever the site structure changes** (adding, removing, renaming, or moving pages/sections). Keep it in sync with `astro.config.mjs` sidebar and `src/content/docs/`.

All paths are relative to `src/content/docs/`.

## Landing Page

- `index.mdx` — Home/splash page with hero section and feature cards

## Getting Started (3 pages)

- `getting-started/introduction.md` — What True Recall is, core concepts, philosophy
- `getting-started/installation.md` — Installation via BRAT, manual, or from source
- `getting-started/quick-start.md` — 5-minute quickstart guide

## Creation (8 pages)

- `creation/flashcards.md` — How flashcards work: types, storage, collection, states, and editing
- `creation/creating-flashcards.md` — Overview: creation surfaces, note types concept, block format, and the collection step
- `creation/note-types.md` — Default note types: Basic, Basic (Reversed), Cloze, Image Occlusion — what each produces and when to use it
- `creation/custom-note-types.md` — Custom note types: fields, card templates, CSS, slugs, and block format usage
- `creation/basic-cards.md` — Basic and reversed cards in block format
- `creation/cloze-deletions.md` — Fill-in-the-blank cards with `{{c1::text}}` syntax
- `creation/image-occlusion.md` — Cards from images by hiding regions, manual drawing and AI detection
- `creation/best-practices.md` — How to write effective flashcards — principles, examples, and common mistakes

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

## Views & Panels (9 pages)

- `views/selection-toolbar.md` — AI-powered floating toolbar: generate Basic, Cloze, or Auto cards from any text selection
- `views/flashcard-panel.md` — Main sidebar panel for card management
- `views/flashcard-editor.md` — Form-based modal for creating and editing flashcards
- `views/review-view.md` — Review session interface
- `views/statistics.md` — Comprehensive analytics dashboard with FSRS insights, study patterns, retention tracking, workload forecasting, and cross-project comparison
- `views/session-builder.md` — Custom review session configuration
- `views/projects-view.md` — Project management interface
- `views/fsrs-simulator.md` — Interactive FSRS visualization tool
- `views/custom-type-modal.md` — Modal for creating and managing custom note types: fields, templates, CSS

## Configuration (5 pages)

- `configuration/general.md` — General settings and UI preferences
- `configuration/scheduling.md` — Learning steps and card progression
- `configuration/fsrs-presets.md` — Multiple scheduling profiles (like Anki deck options)
- `configuration/fsrs-parameters.md` — FSRS algorithm parameters and optimization
- `configuration/data-backup.md` — Database backup and device management

## Organization (1 page)

- `organization/projects.md` — Projects, sub-projects, folder includes, archiving, preset inheritance

## Scheduling (9 pages)

- `scheduling/why-fsrs.md` — Why FSRS v6: comparison with Leitner, SM-2, and other algorithms
- `scheduling/fsrs-algorithm.md` — FSRS v6 algorithm: stability, difficulty, retrievability, weights, and states
- `scheduling/overview.md` — Scheduling overview: day boundaries, learning steps, intervals, review order, daily limits
- `scheduling/presets.md` — FSRS preset configuration for different learning contexts
- `scheduling/fsrs-optimization.md` — Training FSRS parameters on review history
- `scheduling/load-balancing.md` — Auto-distributing reviews evenly across days
- `scheduling/easy-days.md` — Reducing workload on specific days
- `scheduling/scheduled-breaks.md` — Planning vacation periods with review redistribution
- `scheduling/sibling-dispersal.md` — Spacing out cards from the same note

## Reference (3 pages)

- `reference/commands.md` — Command palette reference
- `reference/keyboard-shortcuts.md` — Keyboard shortcuts for review
- `reference/context-menu.md` — Right-click context menu options
