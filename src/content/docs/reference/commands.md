---
title: Commands Reference
description: Complete list of all True Recall commands available in Obsidian
---

True Recall provides commands accessible via the Command Palette (`Cmd/Ctrl+P`).

## Flashcard Management

### Open Flashcard Panel

Opens the sidebar panel showing flashcards for the current note.

- **Command**: `True Recall: Open flashcard panel`
- **Shortcut**: None (customize in Hotkeys)
- **When to use**: View/manage cards from current note

### Add Flashcard UID to Current Note

Adds a unique identifier to the note's frontmatter, enabling flashcard linking.

- **Command**: `True Recall: Add flashcard UID to current note`
- **Shortcut**: None
- **When to use**: Before creating cards for a new note
- **Effect**: Adds `flashcard_uid: <uuid>` to frontmatter

### Set FSRS Preset for Current Note

Assigns a specific FSRS preset to the current note via frontmatter.

- **Command**: `True Recall: Set FSRS preset for current note`
- **Shortcut**: None
- **When to use**: Apply different scheduling profiles to different notes
- **Effect**: Adds or updates `fsrs_preset: "name"` in frontmatter
- **Details**: See [FSRS Presets](/configuration/fsrs-presets/)

## Review Commands

### Start Review Session

Opens the session builder to configure and start a review.

- **Command**: `True Recall: Start review session`
- **Shortcut**: None
- **When to use**: Begin daily review or custom session

### Review Flashcards from Current Note

Starts a review session with only cards from the currently open note.

- **Command**: `True Recall: Review flashcards from current note`
- **Shortcut**: None
- **When to use**: Focus review on specific content

### Review Today's New Cards

Reviews flashcards created today regardless of scheduling.

- **Command**: `True Recall: Review today's new cards`
- **Shortcut**: None
- **When to use**: Same-day reinforcement of new cards

## Views & Panels

### Open Statistics Panel

Opens the analytics dashboard with charts and metrics.

- **Command**: `True Recall: Open statistics panel`
- **Shortcut**: None
- **When to use**: Check progress and retention

### Open Projects Panel

Shows all projects with card counts and review options.

- **Command**: `True Recall: Open projects panel`
- **Shortcut**: None
- **When to use**: Manage project-based learning


### Open FSRS Simulator

Launches the interactive simulator to visualize FSRS scheduling.

- **Command**: `True Recall: Open FSRS simulator`
- **Shortcut**: None
- **When to use**: Understand algorithm behavior

### Open Orphaned Cards Panel

Shows cards without valid source notes for management.

- **Command**: `True Recall: Open orphaned cards panel`
- **Shortcut**: None
- **When to use**: Clean up disconnected cards

## Organization

### Add Current Note to Project

Opens a modal to add/remove the current note from projects.

- **Command**: `True Recall: Add current note to project`
- **Shortcut**: None
- **When to use**: Organize notes into study groups

## Import & Export

### Import Anki Deck

Imports an `.apkg` file from Anki with cards, scheduling, and media.

- **Command**: `True Recall: Import Anki deck (.apkg)`
- **Shortcut**: None
- **When to use**: Migrate from Anki or import shared decks
- **Details**: See [Migrating from Anki](/migration/from-anki/)

### Export to Anki

Exports cards as an Anki deck package with hierarchical deck structure.

- **Command**: `True Recall: Export to Anki (.apkg)`
- **Shortcut**: None
- **When to use**: Share decks, backup, or use with Anki mobile
- **Details**: See [Exporting Cards](/features/anki-export/)

### Export as CSV/TSV

Exports cards as a text file for use with spreadsheets or other tools.

- **Command**: `True Recall: Export as CSV/TSV`
- **Shortcut**: None
- **When to use**: Data analysis, sharing in plain text format

## Data Management

### Create Database Backup

Creates a timestamped backup of your flashcard database.

- **Command**: `True Recall: Create database backup`
- **Shortcut**: None
- **When to use**: Before major changes, regular backups

### Sync Cloud Data (Coming Soon)

Synchronizes flashcards with True Recall Cloud (pull + push).

- **Command**: `True Recall: Sync cloud data`
- **Status**: Planned feature, not yet available
- **When available**: Will keep devices in sync

## History

### Undo Last Flashcard Action

Reverts the most recent flashcard action (edit, delete, rating).

- **Command**: `True Recall: Undo last flashcard action`
- **Shortcut**: `Cmd/Ctrl+Z` (during review)
- **When to use**: Correct mistakes

## Command Summary Table

| Command | Category | Description |
|---------|----------|-------------|
| Open flashcard panel | View | Show sidebar panel |
| Add flashcard UID | Create | Enable note linking |
| Set FSRS preset | Configure | Assign scheduling profile to note |
| Start review session | Review | Open session builder |
| Review from current note | Review | Note-specific review |
| Review today's new cards | Review | Same-day cards |
| Open statistics | View | Analytics dashboard |
| Open projects | View | Project management |
| Open card browser | View | Card management |
| Open FSRS simulator | View | Algorithm visualization |
| Open orphaned cards | View | Orphan management |
| Add note to project | Organize | Project assignment |
| Import Anki deck | Import/Export | Import `.apkg` with cards and scheduling |
| Export to Anki | Import/Export | Export as `.apkg` with deck hierarchy |
| Export as CSV/TSV | Import/Export | Export cards as text file |
| Create backup | Data | Database backup |
| Sync cloud data | Data | Cloud synchronization (coming soon) |
| Undo action | History | Revert changes |

## Customizing Shortcuts

Add custom hotkeys for any command:

1. Open Settings → Hotkeys
2. Search for "True Recall"
3. Click the hotkey field
4. Press your desired shortcut
5. Confirm assignment

### Recommended Shortcuts

| Command | Suggested Shortcut |
|---------|-------------------|
| Start review session | `Cmd/Ctrl+Shift+R` |
| Open flashcard panel | `Cmd/Ctrl+Shift+F` |
| Open statistics | `Cmd/Ctrl+Shift+S` |

## Tips

### Frequent Commands
Pin frequently used commands to your workflow:
- Add to quick switcher favorites
- Create custom hotkeys
- Use ribbon icons when available

### Command Execution
Commands can be:
- Run from Command Palette
- Triggered by hotkeys
- Accessed via ribbon icons (some)
- Used in templates/automation
