---
title: Keyboard Shortcuts
sidebar:
  order: 5
description: Complete reference for all True Recall keyboard shortcuts during review, in the Card Browser and Flashcard Panel, in embedded editors, and the commands you can bind globally.
---

:::caution[My Notes]
:::

Quick reference for all **True Recall** keyboard shortcuts. Review, Card Browser and Flashcard Panel shortcuts are single keys that work while that view has focus (they are ignored while you type in a text field). Everything else is an Obsidian command you bind yourself.

## During Review

### Answer Rating

| Key | Action |
|-----|--------|
| `1` | Rate: Again |
| `2` | Rate: Hard |
| `3` or `Space` | Rate: Good |
| `4` | Rate: Easy |
| `Enter` | Accept the AI-suggested rating (typed answers) |

These are the default bindings. You can customize them, see [Custom Review Keybindings](#custom-review-keybindings) below.

:::note
Number keys `1`-`4` always work as rating shortcuts regardless of custom bindings.
:::

### Showing the Answer

| Key | Action |
|-----|--------|
| `Space` | Show answer (when hidden). With typed answers active, `Space` focuses the answer field instead |
| `Cmd/Ctrl + Enter` | Show answer / submit the typed answer while the input has focus |

### Card Actions

| Key | Action |
|-----|--------|
| `E` | Edit card |
| `A` | Add a new flashcard |
| `Cmd/Ctrl + Shift + E` | Copy the current card into Add flashcard |
| `Cmd/Ctrl + K` | Add or edit your review comment on the card |
| `M` | Move card to another note |
| `F` | Forget card (reset scheduling) |
| `Shift + 1` (`!`) | Delete card |
| `Shift + 2` (`@`) | Suspend card |
| `-` | Bury card until tomorrow |
| `=` | Bury note (all sibling cards) until tomorrow |
| `T` | Toggle typed answers (Off / AI grading) |

### Session Actions

| Key | Action |
|-----|--------|
| `Cmd/Ctrl + Z` | Undo last action (rating, delete, edit) |

`Escape` is deliberately swallowed by the review view so Obsidian does not switch you to another tab mid-session; close the session with the close button in the review header instead.

## [Card Browser](/views/card-browser/)

| Key | Action |
|-----|--------|
| `j` / Down arrow | Preview next card |
| `k` / Up arrow | Preview previous card |
| `Space` | Toggle selection of the previewed card |
| `Cmd/Ctrl + A` | Select all |
| `/` | Focus the search field |
| `Escape` | Clear selection |

## [Flashcard Panel](/views/flashcard-panel/)

| Key | Action |
|-----|--------|
| `N` | Add a card (list view) |
| `E` | Edit the open card (detail view) |
| `j` / Down arrow | Next card (detail view) |
| `k` / Up arrow | Previous card (detail view) |
| `/` or `Cmd/Ctrl + F` | Focus the search field |
| `Cmd/Ctrl + A` | Select all visible cards |
| `?` | Show the shortcuts help |
| `Escape` | Close |

## In Embedded Editors

The card editors (Flashcard Editor, quick editor, review edit) are CodeMirror editors that inherit Obsidian's own formatting shortcuts (bold, italic, highlight) and add two of their own:

| Key | Action |
|-----|--------|
| `Cmd/Ctrl + U` | Toggle underline (`<u>...</u>`) |
| `Cmd/Ctrl + Shift + C` | Wrap the selection in a cloze deletion |

## Commands

None of True Recall's commands ship with a default hotkey. Bind the ones you use in `Settings → Hotkeys` (search for "True Recall"). The full list, grouped by what it does:

| Group | Commands |
|-------|----------|
| Study | Open dashboard, Open card browser, Open statistics, Open FSRS simulator, Review flashcards from current note, Review today's new cards, Toggle note review, Toggle r-mode (retrievability sessions), Set FSRS preset for current note |
| Cards | Show flashcards for current note, Add flashcard to current note, Quick add flashcard from selection (also "(any view)"), Edit selection as flashcard (also "(any view)"), Generate flashcards from selection (also "(any view)"), Create image occlusion card, Add flashcard UID to current note, Manage note types |
| Undo | Undo last flashcard action, Redo last undone action |
| Notes | Archive current note, Unarchive current note |
| AI | Open ask AI panel, Open AI assistant inbox, plus one `Polish: <preset name>` command per enabled Card Polish preset (active in the review view) |
| Data | Create database backup, Import flashcards, Import Anki deck (.apkg), Export to Anki (.apkg), Export as CSV/TSV, Sync cloud now, Sync devices now |
| Layout | Toggle tab bar |
| Embedded Dashboards | Insert project dashboard, Create master dashboard note |

Some commands only appear when their feature is enabled or when the platform supports them (for example **Open ask AI panel**, **Open FSRS simulator** and **Toggle tab bar** are desktop-only, **Sync cloud now** only exists in Cloud Sync mode and **Sync devices now** only in Shared vault mode).

### Setting Custom Shortcuts

1. Open Obsidian Settings
2. Go to **Hotkeys**
3. Search for "True Recall"
4. Click the `+` next to a command and press your shortcut

### Recommended Shortcuts

| Command | Suggested Shortcut |
|---------|-------------------|
| Review flashcards from current note | `Cmd/Ctrl + R` |
| Open dashboard | `Cmd/Ctrl + D` |
| Toggle tab bar | `Cmd/Ctrl + Shift + T` |

## Custom Review Keybindings

You can reassign the review rating keys and the reveal/good shortcut in `Settings → True Recall → General → "Review interface" → Review keybindings`.

| Binding | Default | Description |
|---------|---------|-------------|
| **Reveal / Good** | `Space` | Shows the answer when hidden, rates Good when the answer is visible |
| **Again** | `1` | Rate the card as Again |
| **Hard** | `2` | Rate the card as Hard |
| **Easy** | `4` | Rate the card as Easy |

To change a binding, click the key button next to the action, then press the new key. Duplicate keys are not allowed: True Recall shows an error if you try to assign a key that's already in use. Click **Reset to defaults** to restore the original bindings.

## Quick Reference Card

```
REVIEW SHORTCUTS
-----------------------------------------
  Space        Show answer / Rate Good
  1-4          Rate: Again/Hard/Good/Easy
  Enter        Accept suggested rating
  E            Edit card
  A            Add card
  Cmd+Shift+E  Copy card into Add flashcard
  Cmd+K        Review comment
  M            Move card
  F            Forget card
  Shift+1      Delete card
  Shift+2      Suspend card
  -            Bury card
  =            Bury note
  T            Toggle typed answers
  Cmd+Z        Undo
-----------------------------------------
```

## What to Read Next

- [Review Interface](/review/review-interface/): the review experience and actions
- [General Settings](/configuration/general/): where review keybindings and the tab bar toggle live
- [Card Browser](/views/card-browser/): browsing and managing your card collection
- [Flashcard Panel](/views/flashcard-panel/): sidebar panel for card management
- [Typed Answers](/review/type-in-mode/): typed answers during review
