---
title: Releases
sidebar:
  label: "Releases"
  order: 1
description: Release history for True Recall — new features, bug fixes, and improvements in each version.
---

:::caution[My Notes]
:::

Release notes for every **True Recall** version. For the latest release, check [GitHub Releases](https://github.com/pieralukasz/true-recall/releases).

---

## Next (upcoming)

---

## 1.8.0 (2026-05-07)

### Features

- **LM Studio as a first-class AI provider** -- LM Studio joins Pro / OpenRouter / Custom in the **AI Provider** dropdown with auto-discovered models, configurable base URL, and an optional API key. See [AI Settings](/configuration/ai-settings/)
- **Per-plugin LM Studio model overrides** -- AI Flashcard Generation and Card Polish each expose their own LM Studio model selector, so you can route a fast model for polish and a stronger model for generation. The system falls back to the global LM Studio model when no override is set
- **Generation preset context options** -- two new opt-in toggles per preset, **Include source note** and **Include related cards**, enrich the prompt with the host note's body and sibling cards from the same note. See [Generation Presets](/plugins/generation-presets/)
- **Card Polish moved to BYOK** -- Card Polish now activates with any AI key (OpenRouter BYOK or Pro), not just Pro. See [Card Polish](/plugins/card-polish/)
- **Card AI split behavior** -- presets with "split / decompose / break apart" wording can decompose one card into several atomic cards instead of rewriting the source
- **Card AI: inline-edit preview** -- the preview modal now uses an embedded CodeMirror editor for every field. Tweak proposed edits and new cards before clicking Accept
- **Card AI: "Delete after applying" toggle** -- when an AI run produces multiple new cards (typically SPLIT), the source card is shown alongside an opt-in delete toggle, so you can replace the source with its decomposition in one click
- **Card AI: note-type aware prompts** -- requests now ship the note type's name and field schema to the LLM, reducing field-name mistakes for custom note types
- **Image-click toolbar configuration** -- the image-click toolbar (open in IO editor, quick-add, etc.) now has its own button-configuration section in `Settings → True Recall → Plugins → Selection Toolbar` next to the editor and global toolbar configs
- **Type-in grading context** -- the AI grader now sees the source note and related cards when scoring typed answers, reducing false negatives on context-dependent questions. See [Type-in Mode](/review/type-in-mode/)
- **FSRS preset picker in dashboard** -- "Set FSRS preset" is now exposed directly on the note context menu (previously only on projects). See [Dashboard](/views/dashboard/)

### Improvements

- **Targeted review session updates** -- mid-session card mutations (rename, edit, suspend) no longer trigger a full session rebuild; the engine applies a targeted mutation that preserves card position and response timing
- **Review session refactor** -- internal review handling is cleaner. Visible side-effects: leech notifications respect Anki-style thresholds (8 / 12 / 16 lapses) instead of firing on every grade above threshold, and cramming sessions no longer show phantom "leech suspended" toasts
- **Card AI runtime cleanup** -- Card Polish and AI generation now share more of the same plugin runtime, which improves consistency between AI features

### Bug Fixes

- Fixed Card Polish auto-apply not preserving cursor position after a rewrite
- Fixed selection toolbar URLs not normalizing in non-review mutation flows
- Fixed code blocks in question content losing their block layout in the review view
- Fixed scoped per-preset progress reporting on the dashboard / review snapshots and removed the stale project `healthPct` metric
- Fixed CI release pipeline regression where the changelog extractor's awk range exited at the start heading

### Breaking Changes & Migration

- **TTS post-processing removed** -- the text-to-speech pipeline is gone. AI settings no longer expose voice / autoplay knobs, and old voice settings are removed during migration
- **Card Healing plugin removed** -- the "Healing Flashcards" plugin (auto-generate corrective cards from lapse patterns) is gone. Card AI's SPLIT mode covers most decomposition use-cases; for repair, use Card Polish presets
- **Image post-processing removed from generation presets** -- the per-preset image generation step is gone, and old image settings are removed during migration
- **AI provider selection cleaned up** -- the AI provider is selected explicitly from the provider dropdown. Existing Pro and OpenRouter users are migrated automatically

---

## 1.7.0 (2026-04-24)

### Features

- **Plugin architecture** -- built-in plugins with tier-based gating (Free / BYOK / Pro), each independently toggleable from a new Plugins tab in settings. See [Plugin Overview](/plugins/overview/)
- **Card Polish plugin** -- AI rewriting of cards mid-review or in the Add Flashcard modal, with per-preset auto-apply or preview, per-preset review hotkeys, and optional source-note / related-card context. See [Card Polish](/plugins/card-polish/)
- **AI Flashcard Generation plugin** -- preset-driven generation from notes, selections, and highlights, with a Pro-hosted built-in preset and automatic existing-card awareness. See [AI Flashcard Generation](/plugins/ai-flashcard-generation/)
- **Generation presets system** -- manage AI generation presets from settings. Presets bind a single instruction to a note type. See [Generation Presets](/plugins/generation-presets/)
- **Card Preview modal** -- click Preview on any Flashcard Panel card to see front and back with an interactive grading flow, smooth view-transition animations, and keyboard shortcuts
- **Basic Pro prompt overhaul** -- rewritten Pro generation prompt with 7 core rules and 6 few-shot examples

### Improvements

- **Selection Toolbar is now a plugin** -- toggle and configure it from the Plugins tab
- **Cmd/Ctrl-click a panel card** to enter selection mode without the context menu
- **Wand button in Add Flashcard modal** dispatches Card Polish presets
- **Day rollover fixes UI immediately** -- focus / visibility triggers DataLayer invalidation so due / new counts update without manual refresh
- **Reactive settings UI** -- `useSettings` / `usePreset` subscribe to `settings:changed`
- **Preview modal polish** -- compact button bar in preview mode, cleaner dividers, PRO badge on the Basic Pro preset
- **AI response tolerance** -- Card Polish and generation flows handle imperfect AI responses more gracefully
- **Post-processing errors surface to the user** with DataLayer invalidation
- **Preview disabled plugins** -- expand any plugin's accordion in the Plugins tab to read its description and settings before enabling it

### Bug Fixes

- Fixed **CommandSuggestModal** and **PresetSuggestModal** resolving `null` on selection
- Fixed stale `defaultGenerationPresetId` after migration (self-heals)
- Fixed pin / wand icons not rendering in the Add Flashcard modal
- Fixed Pro prompt not falling back when user custom prompt was empty
- Fixed "AI changes applied" notice firing on silent `ReviewCardTarget` advances
- Fixed unhandled rejection from `resolveSourceUid` in the QuickNoteEditor wand

### Pro-gating Changes

- **Per-plugin tiers** -- plugins declare `free`, `byok`, or `pro`; the Plugins tab shows a Pro badge accordingly

### Breaking Changes & Migration

- **Generation preset settings simplified** -- older preset settings are migrated into the newer one-prompt preset model
- **Legacy generation settings removed**
- **Built-in presets are now locked** in the UI -- copy one to customize
- **Card Polish presets migrated** -- legacy built-in polish presets are replaced by the shared plugin defaults automatically
- **Selection Toolbar setting moved** -- toggle the plugin instead

---

## 1.6.2 (2026-04-09)

### Features

- Cross-device sync on startup -- new toggle in settings to automatically sync your flashcard database when the plugin loads
- Archived cards filter in Statistics -- toggle to include or exclude archived projects from FSRS stats, workload forecasts, and dashboard counts
- Smarter knowledge search -- RAG search now supports temporal filtering, source grouping, and improved chunking for better results
- Per-note assistant context improvements for card counts, states, and scheduling details

### Bug Fixes

- Sync reliability -- restored last-write-wins guards for sync upsert methods, preventing potential data overwrites during cross-device sync
- Review images -- images in the review view are now properly centered
- Import data parsing -- added clearer error handling for malformed card data and missing cards

### Improvements

- Review queue internals -- modularized queue construction and standardized error handling across review services
- Import organization -- configured biome import groups across all packages

---

## 1.6.0 (2026-04-04)

### Features

- Added Note Review -- schedule entire notes for spaced repetition with a toggle, with configurable frontmatter display and editable content during review
- Added Selection Toolbar -- select multiple flashcards across any view for bulk AI actions, with configurable editor and global toolbars, drag-to-reorder, and custom command support
- Added Anki Import mapping phase -- manually map fields between Anki and True Recall with AI-assisted classification, dropped fields tracking, and HTML-to-Markdown conversion
- Added project management actions to the Dashboard -- export, create sub-projects, dissolve, and delete projects via context menu; assign notes to projects; bulk selection
- Added explicit project marker -- convert any note into a project in-place using `project: true` frontmatter
- Added custom review keybindings -- remap Space, Again, Hard, and Easy to your preferred keys
- Added note creation modal with project assignment and folder picker
- Enabled Knowledge Base for all Pro users
- Added Claude Code Skill download link in settings

### Bug Fixes

- Fixed daily reviewed stats incorrectly counting cards when reverting a new card review
- Fixed dissolve not removing the `project: true` marker from explicit projects
- Fixed silent failures when deleting a project -- errors are now surfaced
- Fixed note archived status not always populating, causing incorrect context menus
- Fixed frontmatter index not syncing before dashboard invalidation, causing stale project data
- Fixed dashboard not reacting to manual `project` frontmatter changes

### Improvements

- Renamed Local API setting from "Local API (MCP)" to "Local API"
- Improved review UI performance with incremental state patching instead of full reloads
- Anki imports now create the full deck hierarchy with standardized leaf node naming
- Fixed data layer invalidation race conditions for more reliable cache updates

---

## 1.5.0 (2026-03-31)

Internal restructuring release — no user-facing changes.

### Improvements

- Migrated tests from root into per-package directories
- Merged `@true-recall/ui` workspace into `@true-recall/obsidian`
- Decoupled AnkiMediaService from Obsidian vault APIs
- Reorganized core package into domain subdirectories

---

## 1.4.0 (2026-03-30)

### Features

- **Knowledge Base (RAG)** — semantic search across your vault with agentic chat (initially gated, fully enabled in 1.6.0)
- **Daily stats improvements** — better date-range support for assistant integrations and statistics workflows
- **Chat tool history** — tool call history is now persisted in agentic chat sessions

### Improvements

- Staged chart rendering for smoother dashboard and statistics performance
- Grouped related component props into TypeInState and PanelCardActions interfaces
- Unified UI component styling with `cn` utility

### Fixes

- Pinned `@codemirror/state` to 6.5.0 to avoid duplicate type declarations

---

## 1.3.0 (2026-03-30)

### Improvements

- Simplified NoteStatusCache with better error handling
- Optimized plugin startup sequence
- Improved hierarchy resolution and reactive hierarchy tracking
- Updated Anki import media handling

---

## 1.2.0 (2026-03-29)

### Features

- **Custom BYOK model** — enter any OpenRouter model ID in AI settings
- **Note deletion action** — delete source notes with card cleanup
- **Anki hybrid deck support** — import decks that mix basic and cloze cards

### Improvements

- Panel guards against deleted files and navigates to dashboard gracefully

---

## 1.1.1 (2026-03-28)

### Features

- **Review session context** — assistant integrations can now understand the current review session state

### Improvements

- Hierarchy graph cache invalidated on note deletion

### Fixes

- Fixed flaky retention calculator test that drifted over time

---

## 1.1.0 (2026-03-27)

### Features

- **AI flashcard generation** — generate flashcards from selected text with source text extraction
- **Markdown-aware source text fixing** — AI preserves markdown formatting in generated cards
- **Bulk card actions** — suspend, bury, delete, and manage multiple cards at once
- **AI temperature setting** — configurable temperature per model in BYOK settings

### Improvements

- Local API integration became more consistent
- Port assignment logic refined for Local API
- Source field instructions clarified in AI prompts

---

## 1.0.4 (2026-03-12)

Maintenance release with minor fixes.

---

## 1.0.3 (2026-03-11)

Initial public release of **True Recall**.

### Highlights

- **FSRS v6 algorithm** with 21-parameter weights and per-preset scheduling
- **AI flashcard generation** via OpenRouter (Gemini, GPT, Claude, DeepSeek, and more)
- **Image Occlusion** with interactive canvas editor and AI region detection
- **Custom note types** with field definitions and templates
- **Anki import/export** with `.apkg` parsing and note type mapping
- **Import Studio** for bulk card creation with CodeMirror 6 editor
- **Dashboard** with project hierarchy, drag-and-drop, and multi-select
- **Review mode** with keyboard shortcuts, type-in answers, and inline editing
- **Statistics** with daily stats, retention tracking, and streak analytics
- **AI assistant integration** through the Local API

## What to Read Next

- [Troubleshooting](/reference/troubleshooting/) — solutions to common issues
- [Claude Code Skill](/reference/claude-code-skill/) — control True Recall from Claude Code
- [MCP Server](/reference/mcp-server/) — connect compatible AI assistants
