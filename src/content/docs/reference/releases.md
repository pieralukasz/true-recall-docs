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

## 1.6.0 (upcoming)

### Features

- **Configurable Selection Toolbar** — choose which buttons appear in the editor and global toolbars, drag to reorder, and add custom Obsidian commands
- **Global Selection Toolbar** — the floating toolbar now works outside the editor too (sidebars, reading view, terminal)
- **New toolbar buttons** — Note+ (create note from selection) and Append (add selection to current note)
- **Anki Import: Mapping Phase** — manually map Anki note types and individual fields to True Recall equivalents before importing
- **AI-Assisted Anki Import** — optional AI passes to reclassify cards into better deck structures and clean up formatting artifacts
- **Dashboard: Project management** — right-click context menu on projects with export, sub-project creation, move children, dissolve, and delete actions
- **Dashboard: Assign to project** — create projects from unassigned notes or assign them to existing projects, including bulk selection
- **Note creation modal** — create notes from selections with folder picker and optional project assignment
- **Custom review keybindings** — remap Space, Again, Hard, and Easy keys in `Settings → General → Review keybindings`
- **Claude Code Skill** — download link in settings to install the CLI skill for Claude Code integration
- **Knowledge Base enabled for all** — the RAG-powered [Knowledge Base](/configuration/knowledge-base/) is now available to all Pro users without feature flags. Index your vault, then ask questions in the Knowledge Chat — True Recall searches your notes semantically and uses agentic tool calls to pull relevant context before answering.
- **Note Review** — review entire notes as flashcards. Toggle note review on any note from the [Flashcard Panel](/views/flashcard-panel/) header or the command palette ("Toggle note review"). The full note content renders in the review view using Obsidian's live preview, so formatting, links, and embeds all work. A setting controls whether YAML frontmatter is shown or stripped. Note review cards are scheduled by FSRS just like regular cards.

### Improvements

- Local API section renamed from "Local API (MCP)" to "Local API" for clarity
- Anki import creates full deck hierarchy with standardized leaf node naming
- Anki HTML content is converted to clean Markdown during import

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
- **Daily stats API** — new `get_daily_stats` tool with date range parameters for MCP and CLI
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

- **Review session context API** — new API endpoint and MCP tool to retrieve current review session state

### Improvements

- Hierarchy graph cache invalidated on note deletion

### Fixes

- Fixed flaky retention calculator test that drifted over time

---

## 1.1.0 (2026-03-27)

### Features

- **AI flashcard generation** — generate flashcards from selected text with source text extraction
- **Markdown-aware source text fixing** — AI preserves markdown formatting in generated cards
- **Bulk card actions** — suspend, bury, delete, and manage multiple cards at once via API
- **AI temperature setting** — configurable temperature per model in BYOK settings

### Improvements

- MCP tool registration uses structured options objects
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
- **MCP Server** and **CLI** for AI assistant integration

## What to Read Next

- [Troubleshooting](/reference/troubleshooting/) — solutions to common issues
- [Claude Code Skill](/reference/claude-code-skill/) — control True Recall from Claude Code
- [MCP Server](/reference/mcp-server/) — connect AI assistants via MCP
