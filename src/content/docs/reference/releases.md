---
title: Releases
sidebar:
  label: "Releases"
  order: 1
description: Release history for True Recall, with new features, bug fixes, and improvements in each version.
---

:::caution[My Notes]
:::

Release notes for every **True Recall** version. For the latest release, check [GitHub Releases](https://github.com/pieralukasz/true-recall/releases).

---

## Next (upcoming)

### Bug Fixes

- **Mobile no longer stalls on "plugin is taking long to load" because of iCloud** -- in Cloud Sync and single-device modes the per-device database now lives in `.true-recall/local.nosync/`, which iCloud does not sync. The desktop stops uploading a large file on every flush, iCloud stops producing conflict copies, and iOS can no longer evict the file the plugin must read at startup. Shared Vault mode keeps the database in `.true-recall/` as before. The file is moved automatically on the next start; if the move fails, the old location keeps working. See [Device Databases](/data/device-databases/)
- **No full database rewrite on every startup** -- the device label is written only when it changed, so mobile launches no longer export and rewrite the whole database right after loading

---

## 2.4.1 (2026-09-01)

Cloud Sync is now dependable. This release fixes every reliability gap found in a full review of the 2.4.0 sync path, from the server exchange down to on-device recovery. If you sync more than one device, update all of them. See [Cloud Sync](/data/cloud-sync/)

### Bug Fixes

- **No more skipped changes between devices** -- the server serializes each account's sync exchanges, so two devices syncing at the same moment can no longer make each other's changes invisible
- **Pulled data is no longer echoed back** -- rows applied from the cloud are excluded from the next push. This also protects the upload watermark from devices with a fast clock, which could previously stop uploads silently
- **Every device converges after simultaneous edits** -- the device tie-breaker applies to conflicts pulled in any later sync, not only in the sync that pushed the losing edit
- **Interrupted syncs recover fully** -- daily stats rebuild and FSRS replay owed to changes applied before a network failure are completed by the next successful sync
- **Large collections always push** -- push batches are split by payload size, so an oversized request can no longer wedge sync permanently
- **Switching sync modes is safe mid-session** -- enabling Cloud Sync stops the shared-vault transport immediately; the two transports never run concurrently
- **Sign-out is verified** -- if the server cannot revoke the device token, your session is kept and an error is shown instead of leaving a live credential behind
- **Session expiry is visible** -- when the server rejects the device token, Settings shows the sign-in prompt again instead of a connected account that silently stops syncing

### Improvements

- **Smoother grading while syncing** -- the duplicate-card scan runs only when a sync actually pulled changes
- **Newsletter, one click away** -- the What's New dialog has a Subscribe button for the learning newsletter

---

## 2.4.0 (2026-08-31)

Cloud Sync gives every True Recall account a direct, incremental path between devices. Notes, note types, cards and review history move independently of the vault files, while deterministic review replay and duplicate merging keep concurrent study sessions convergent. Shared-vault sync remains available for people who prefer iCloud, Obsidian Sync or another file provider.

### Features

- **Account-backed Cloud Sync** -- sign in through the True Recall website, return directly to Obsidian on desktop or mobile, and enable sync from `Settings → True Recall → Integrations`. See [Cloud Sync](/data/cloud-sync/)
- **Incremental two-way exchange** for notes, note types, cards and review logs, including tombstones, paginated cursors and per-device provenance
- **Deterministic conflict handling** -- concurrent reviews are replayed through FSRS and duplicate cards converge instead of multiplying
- **Device-aware sessions** stored in Obsidian SecretStorage, with explicit sign-out and server-side revocation

### Improvements

- **Settings polish** -- more consistent spacing, control widths, button placement and responsive layouts across the settings app
- **Cloud status** -- account, progress, last-sync result and actionable errors are visible without opening developer tools

### Bug Fixes

- **CSS compatibility** -- flattened `color-mix()` fallbacks retain their original hue in Obsidian versions and themes that need the postprocessed color
- **Mobile authorization** -- production links use the canonical `www.truerecall.app` host so Android returns to Obsidian without losing the exchange request to a redirect

### Compatibility

- Minimum Obsidian version is now **1.11.4**, required for secure session storage through the official SecretStorage API. See [Installation](/getting-started/installation/)

---

## 2.3.2 (2026-08-30)

This maintenance release clears the actionable Obsidian plugin review findings, refreshes vulnerable dependencies, and keeps startup responsive while cross-device sync runs in the background.

### Bug Fixes

- **Sync** -- the startup merge is deferred until the workspace layout is ready, so large or cloud-hosted databases do not block Obsidian from loading
- **Storage** -- device identity and typed-answer state use Obsidian's per-vault data APIs, with one-time migration of existing local data

### Improvements

- **Compatibility** -- searchable settings definitions, popout-safe timers, supported CSS directives, and current settings migrations
- **Dependencies** -- transitive packages updated and constrained to clear the dependency vulnerability scan
- **Review** -- softer typed-answer field styling

---

## 2.3.1 (2026-08-30)

### Features

- **FSRS** -- load-balanced due previews stay monotonic across ratings (Easy never shows an earlier date than Good). See [Answering Cards](/review/answering-cards/)
- **Presets** -- a `disabled` flag hides Card Polish presets from every run surface. See [Card Polish](/plugins/card-polish/)

### Improvements

- **Review** -- minimal type-in field and boxless assessment panel

### Bug Fixes

- **Grading** -- a single verdict-JSON contract for typed-answer grading

---

## 2.3.0 (2026-08-23)

Typed answers get a real assessment this release: grading was rebuilt around a teacher verdict, with its own model setting and its own panel in review. Notes also start keeping score of their own edits, separating what you rewrote by hand from what the AI rewrote. And the plugin no longer hangs on load on a device that has never opened the vault before, which is what made it unusable on a phone.

### Features

**Typed answers**

- **Teacher-verdict grading** -- typed answers are assessed as a verdict instead of a bare similarity score, with a redesigned assessment panel and reworked rating buttons and keyboard flow. See [Typed Answers](/review/type-in-mode/)
- **A separate grading model**, configured on its own in the AI provider settings rather than borrowed from generation. See [AI Settings](/configuration/ai-settings/)
- **Context excerpts feed the grader**, so the assessment sees the surrounding note instead of the field alone

**Cards**

- **Per-note edit counters**, split between what you rewrote by hand and what AI rewrote. They move only when the content actually changes
- **Edits and AI Edits columns** in the card browser, sortable and hidden by default, plus `prop:edits` and `prop:aiedits` in search. See [Card Browser](/views/card-browser/)
- **Counters merge with MAX across devices** rather than last-writer-wins
- **Exposed through the local API and the CLI**, where `edit_source` lets an agent mark its own rewrites as AI

**Editor**

- **Mod+U and Mod+Shift+C work in the embedded editors** -- underline and cloze wrap now reach a handler in every embedded editor. See [Keyboard Shortcuts](/configuration/keyboard-shortcuts/)
- **A #card button in the Quick Actions Toolbar** that highlights the selection and tags it, so highlights waiting to become cards stay findable in search. See [Quick Actions Toolbar](/views/selection-toolbar/)

### Bug Fixes

- **The plugin no longer hangs on load on a device without its own database** -- device discovery no longer reads every candidate database in full, card counts are opt-in and skipped above 24 MB, and the database selection modal waits for the workspace to be ready
- **Bulk card polish asks before spending** -- it queued one paid AI request per selected card with no prompt

---

## 2.2.0 (2026-08-20)

True Recall runs on phones now, and it stops assuming there is only one of you. The desktop-only guard is gone, review, the panel, the dashboard and the quick editor all have real phone layouts, and the database merges work from two devices by replaying the review log instead of letting whoever saved last overwrite the other. Persistence was hardened alongside it: writes land atomically and a truncated file is salvaged on load rather than costing you a session. The review queue also gained R-Mode, a continuous ranking by retrievability in which nothing is ever late.

### Features

**Mobile**

- **Mobile platform unlocked** -- the plugin loads on phones and tablets, with a central capability matrix deciding what each form factor gets. See [Installation](/getting-started/installation/)
- **Review on a phone** -- a grade bar integrated with the view header, the answer directly under the separator, inline today counts, and a single overflow menu
- **Current-note flashcards in the panel** are fully usable on a phone, with a dedicated mobile header
- **Quick editor mobile save flow** with a sticky footer and an explicit Done button
- **Simplified statistics on phones**
- **Non-streaming fallback for AI requests on mobile**
- **Quick-access commands** for the common actions, with dead UI paths removed

**Cross-device sync**

- **Sync coordinator** with foreground sync and per-device locks, so two devices no longer race each other into the same database file. See [Device Databases](/data/device-databases/)
- **Deterministic FSRS replay from the review log** -- concurrent reviews merge by replaying scheduling from the log instead of last-write-wins
- **Duplicate cards created concurrently converge** instead of accumulating
- **Background merge** when the remote database changes, with precise refresh of open views
- **Device id lives only in device-local storage**, so it never travels with the synced database
- **Save and sync status chip** on the dashboard. See [Dashboard](/views/dashboard/)

**Review and cards**

- **R-Mode** -- an alternative queue that replaces due dates with a continuous ranking by retrievability, with a comfort mix, a retrievability ceiling and generation policy controls. See [Workload Management](/scheduling/workload-management/)
- **Custom study top-ups, review comments and card moves** during a session. See [Custom Study](/review/cramming/)
- **Undo across every editing path** -- adding, editing, deleting, moving and switching note type are all undoable, and undo of a delete revives the card
- **Delete shortcut in review sessions**, and review and lapse counts shown on the answer side
- **Card Polish in the panel** -- a polish preset list on the card detail, a wand button that opens the AI workspace on the selected card, and a bulk polish action over a whole selection, backed by a preset API and CLI commands. See [Flashcard Panel](/views/flashcard-panel/)

**AI and generation**

- **gemini-3.7-flash is the default BYOK model**
- **Image embeds survive chunking when the AI works on a selection**
- **allowEmptyAnswer preset flag** for one-sided cards. See [Generation Presets](/plugins/generation-presets/)
- **Backups stay out of iCloud transfer** by living in a `.nosync` folder. See [Backup & Restore](/data/backup-restore/)

### Bug Fixes

- **Crash-safe database writes** -- writes are atomic, and load salvages a truncated file from its temp and backup copies instead of starting empty. The restore and device-import paths write the live database the same way
- **Undo tombstones the review log entry**, so an undone review no longer feeds scheduling
- **Statistics rebuild respects day-boundary settings** and skips previews
- **Frontmatter index rebuilds once the metadata cache finishes its initial scan**
- **The hierarchy graph is invalidated when a project or child note is renamed**
- **Assistant threads unstick** when their active task is deleted or reaches a terminal state
- **Undo and redo edits persist in live preview**, and Shift+Cmd+Z no longer fires twice
- **Quick editor popout keeps its size**
- **Dashboard lag after reviews** is gone
- **Duplicate native tooltips removed**, and lapse counts are formatted in note stats

### Improvements

- **The default problem-card limit is raised to 50**. See [Leeches](/review/leeches/)
- **CodeMirror packages bumped** and the code adapted to Obsidian 1.13 types

---

## 2.0.0 (2026-07-26)

The AI side of True Recall was a collection of separate surfaces: Card Polish had its own preset menu and preview modal, generation had another, the Knowledge Chat a third. 2.0 replaces all of them with one assistant that keeps its work in threads you can review later. Alongside that: Anki-style Custom Study, a daily target that follows your actual pace, and FSRS load balancing that spreads an overdue backlog instead of dumping it on one day.

### Breaking Changes & Migration

- **RAG / Knowledge Base removed** -- the Knowledge Chat view, the knowledge-base plugin, the `/rag/*` API routes, the assistant's `search_knowledge` tool and every `rag*` setting are gone; the subsystem will be rebuilt from scratch later. Existing RAG tables are left in place, and evidence already attached to saved assistant threads still renders
- **The legacy Card Polish UI is retired** -- its anchored preset menu, preview modal and presenter are deleted; the review ✨ action now opens the shared AI workspace in card-polish mode. Preset ids, command ids and hotkeys are unchanged
- **✨ requires both Card Polish and the AI workspace enabled** -- a disabled AI family no longer offers its presets inside the workspace

### Features

- **AI assistant with threads and an inbox** -- every AI request becomes a thread you can apply, reject or retry from a dedicated inbox view, instead of a modal that loses its result when you close it. See [AI Workspace](/plugins/ai-assistant/) and [AI Inbox](/views/ai-inbox/)
- **Dockable Ask AI panel** -- a sidebar home for the AI workspace that follows what you are studying (the card under review, otherwise the open note) and holds still while you have draft text in the composer
- **Fast preset surface** -- a keyboard-navigable preset list with Apply/Preview badges and a custom-instruction field. Auto-apply presets land their change immediately and keep the thread as history
- **Generated-card draft review** -- approve AI-generated cards per thread or inbox-wide
- **Custom Study (Anki-style)** -- seven modes: increase today's new-card limit, increase today's review limit, review forgotten cards, review actual learning, review ahead, preview new cards, and study by card state or tag. Builds a temporary filtered deck with its own card on the dashboard. See [Custom Study](/review/cramming/)
- **Conscious daily target** -- a daily-target picker with pace chips and a catch-up preview, anchored to the pace you actually sustain. See [Dashboard](/views/dashboard/)
- **FSRS load balancing overhaul** -- auto or manual load-balance target, overdue backlog spread across upcoming days, per-review Anki-style fuzz balancing, a replay-based parameter optimizer, and per-project balance plus workload forecast. See [Workload Management](/scheduling/workload-management/)
- **Ink embeds render in review and note editors**. See [Ink Integration](/configuration/ink-integration/)
- **Hide tab bar** -- a toggle under Appearance plus a bindable "Toggle tab bar" command, scoped to the main window
- **Baseline card quality rules for every non-Pro prompt** -- the rules that banned ordinal/meta questions, multi-answer cards and long answers now apply to the basic builtin preset and to BYOK/user presets too, and preset instructions can override them
- **BRAT beta channel** -- opt into beta builds via `X.Y.Z-beta.N` tags cut from `pre-release`. See [Installation](/getting-started/installation/)
- **FSRS preset and load-balance control from the API, CLI and MCP server**. See [Claude Code Skill](/reference/claude-code-skill/) and [MCP Server](/reference/mcp-server/)

### Improvements

- **Toolbar** -- the builtin basic and Pro generation buttons are collapsed into a single button
- **Assistant** -- one Apply action that always dismisses the workspace; the split-card procedure is spelled out in the system prompt
- **Performance** -- review grading batches its data-layer patches, hidden views no longer recompute, and content-only edits skip full cache invalidation
- **The plugin registry shows deprecation badges** for plugins superseded by the assistant

### Bug Fixes

- **Assistant** -- typing in an AI proposal field no longer freezes Obsidian; edits are debounced and flushed on blur, unmount and Apply
- **Anki** -- `.apkg` export converts content and media filenames; one-way basic cards export under a single-template model; corrected scheduling and export mappings. See [Import & Export](/data/import-export/)
- **Cards** -- editing the original of a reversed pair no longer flips it; duplicate detection compares whole questions
- **Persistence** -- restore-from-backup is protected, cloze notes no longer fragment, and five correctness fixes from a full persistence audit
- **Review** -- four undo/race gaps closed
- **Stats** -- timezone-safe streak math, correct weekday and day bucketing in workload forecasts
- **Storage** -- the default project folder is honored in every creation flow; the target folder is created before a note is written into it
- **Deletion** -- card cleanup runs before the frontmatter index clears, so deletes no longer leave orphans
- **API** -- hardened local API server lifecycle and input validation

---

## 1.9.10 (2026-07-10)

### Features

- **Configurable storage locations** -- set a custom attachment folder (pasted images, Image Occlusion, AI-generated images, and Anki import media), plus defaults for the Anki import and new-project folders. See [General Settings](/configuration/general/)

### Bug Fixes

- Sub-projects are created alongside their parent project instead of at the vault root

---

## 1.9.9 (2026-06-25)

### Maintenance

- Passes the Obsidian automated plugin review (no user-facing changes)
- `minAppVersion` raised to 1.8.7 to match the Obsidian APIs the plugin already uses

---

## 1.9.8 (2026-06-25)

### Maintenance

- Internal tooling: scoped ESLint configuration so the automated plugin review completes (no user-facing changes)

---

## 1.9.7 (2026-06-14)

### Features

- **Dashboard** -- per-project study scheduling actions, with a header toggle to show or hide them. See [Dashboard](/views/dashboard/)

### Improvements

- Backing up large libraries no longer freezes Obsidian
- The database file reclaims space after you delete a lot of cards
- The automatic backup runs shortly after launch instead of during load

### Bug Fixes

- The card order set in an FSRS preset now actually applies (it was using the global setting); all ordering options are offered the same way in settings and in the preset dialog. See [Presets & Optimization](/scheduling/presets/)

---

## 1.9.6 (2026-06-03)

### Bug Fixes

- Fixed contrast of tinted UI elements (buttons, badges, highlights) across light and dark themes
- Cleaned up plugin stylesheets to resolve Obsidian plugin reviewer warnings

---

## 1.9.5 (2026-06-03)

### Features

- **Newsletter** -- subscribe to the "Learn how to learn" newsletter from `Settings → True Recall → General` to get learning essays and release updates

### Improvements

- **Dashboard** -- more accurate today-progress bar split

### Bug Fixes

- Escape key handling in editors, cloze sibling scoping, and Quick Actions Toolbar AI gating

---

## 1.9.4 (2026-05-28)

### Features

- **Popout editors** -- the note type and card type editors, and the quick note editor, open in popout windows. See [Custom Note Types](/creation/custom-note-types/)
- **Workload forecast** -- young/mature split and a range picker. See [Statistics](/views/statistics/)
- **FSRS** -- newly scheduled reviews are load-balanced too
- **Width settings** for the review card content

### Improvements

- **FSRS** -- the load-balance recommendation uses a deviation threshold

### Bug Fixes

- Plugin-review CSS fixes (no `color-mix` wrappers, no Tailwind preflight)

---

## 1.9.3 (2026-05-21)

### Features

- **Per-preset output language** -- every generation preset, including the built-in ones, exposes an **Output language** dropdown. See [Generation Presets](/plugins/generation-presets/)

### Improvements

- **LM Studio and Custom keys unlock toolbar generation** -- the panel empty state and selection actions previously checked only Pro / OpenRouter keys
- Remaining Obsidian reviewer CSS warnings eliminated

### Bug Fixes

- The plugin declared itself desktop-only to match its runtime requirements at the time (mobile support arrived in 2.2.0)

---

## 1.9.2 (2026-05-19)

### Improvements

- **License switched to PolyForm Strict 1.0.0** so GitHub's license detector can recognize the repository. The restrictions are equivalent to the previous source-available license

---

## 1.9.1 (2026-05-19)

### Bug Fixes

- **No more dynamic `<script>` tags during Anki import/export** -- `jszip` replaced with `fflate` in the `.apkg` builder and parser

### Improvements

- **Signed release artifacts** -- the release workflow generates build provenance attestations for `main.js` and `styles.css`
- **Explicit source-available license** header and SPDX identifier

---

## 1.9.0 (2026-05-16)

### Improvements

- **Quick Actions Toolbar promoted to the first entry** in the feature list
- **README documents periodic timers and on-demand network calls**

### Bug Fixes

- `fundingUrl` repointed to GitHub Sponsors
- `sqlite3.wasm` no longer uploaded as a release asset (it is embedded in `main.js`)

### Breaking Changes & Migration

- **Gamification Widgets plugin removed** -- the six widgets (Achievements, Answer Streak, Countdown, Maturity, Progress, Ratings) and their codeblock processors are gone. Replace any `{achievements}`, `{progress}`, `{streak}`, `{countdown}`, `{maturity}`, or `{ratings}` codeblocks with equivalents from Embedded Dashboards or the Status Bar Summary. See [Statistics](/views/statistics/)

---

## 1.8.1 (2026-05-09)

### Bug Fixes

- **UI** -- toggle switches respond to clicks again

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

Internal restructuring release, no user-facing changes.

### Improvements

- Migrated tests from root into per-package directories
- Merged `@true-recall/ui` workspace into `@true-recall/obsidian`
- Decoupled AnkiMediaService from Obsidian vault APIs
- Reorganized core package into domain subdirectories

---

## 1.4.0 (2026-03-30)

### Features

- **Knowledge Base (RAG)**: semantic search across your vault with agentic chat (initially gated, fully enabled in 1.6.0)
- **Daily stats improvements**: better date-range support for assistant integrations and statistics workflows
- **Chat tool history**: tool call history is now persisted in agentic chat sessions

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

- **Custom BYOK model**: enter any OpenRouter model ID in AI settings
- **Note deletion action**: delete source notes with card cleanup
- **Anki hybrid deck support**: import decks that mix basic and cloze cards

### Improvements

- Panel guards against deleted files and navigates to dashboard gracefully

---

## 1.1.1 (2026-03-28)

### Features

- **Review session context**: assistant integrations can now understand the current review session state

### Improvements

- Hierarchy graph cache invalidated on note deletion

### Fixes

- Fixed flaky retention calculator test that drifted over time

---

## 1.1.0 (2026-03-27)

### Features

- **AI flashcard generation**: generate flashcards from selected text with source text extraction
- **Markdown-aware source text fixing**: AI preserves markdown formatting in generated cards
- **Bulk card actions**: suspend, bury, delete, and manage multiple cards at once
- **AI temperature setting**: configurable temperature per model in BYOK settings

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

- [Troubleshooting](/reference/troubleshooting/): solutions to common issues
- [Claude Code Skill](/reference/claude-code-skill/): control True Recall from Claude Code
- [MCP Server](/reference/mcp-server/): connect compatible AI assistants
