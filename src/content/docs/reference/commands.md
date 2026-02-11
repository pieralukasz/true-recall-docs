---
title: Commands Reference
description: Complete list of all True Recall commands available in Obsidian
links:
  - /views/card-browser/
  - /reference/keyboard-shortcuts/
---

All commands are available via the Command Palette (`Cmd/Ctrl+P`).

## Flashcard Management

| Command | Description |
|---------|-------------|
| Open flashcard panel | Opens sidebar panel showing flashcards for the current note |
| Add flashcard UID to current note | Adds unique identifier to frontmatter, enabling flashcard linking |
| Set FSRS preset for current note | Assigns specific FSRS preset to note via frontmatter (see [FSRS Presets](/configuration/fsrs-presets/)) |

## Review

| Command | Description |
|---------|-------------|
| Start review session | Opens session builder to configure and start a review |
| Review flashcards from current note | Starts review session with only cards from currently open note |
| Review today's new cards | Reviews flashcards created today regardless of scheduling |

## Views & Panels

| Command | Description |
|---------|-------------|
| Open statistics panel | Opens analytics dashboard with charts and metrics |
| Open projects panel | Shows all projects with card counts and review options |
| Open FSRS simulator | Launches interactive simulator to visualize FSRS scheduling |
| Open orphaned cards panel | Shows cards without valid source notes for management |

## Organization

| Command | Description |
|---------|-------------|
| Add current note to project | Opens modal to add/remove current note from projects |

## Import & Export

| Command | Description |
|---------|-------------|
| Import Anki deck (.apkg) | Imports Anki deck with cards, scheduling, and media (see [Migrating from Anki](/migration/from-anki/)) |
| Export to Anki (.apkg) | Exports cards as Anki deck with hierarchical structure (see [Exporting Cards](/features/anki-export/)) |
| Export as CSV/TSV | Exports cards as text file for spreadsheets or other tools |

## Data Management

| Command | Description |
|---------|-------------|
| Create database backup | Creates timestamped backup of flashcard database |
| Sync cloud data | Synchronizes with True Recall Cloud (coming soon) |

:::note[Backups]
Create regular backups before major changes or system updates.
:::

## History

| Command | Description |
|---------|-------------|
| Undo last flashcard action | Reverts most recent action (edit, delete, rating). Default shortcut: `Cmd/Ctrl+Z` during review |

---

To assign hotkeys: Settings → Hotkeys → search "True Recall".
