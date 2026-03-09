---
title: Context Menus
sidebar:
  order: 2
description: Current right-click and menu actions available in Dashboard, Flashcard Panel, Review, and file explorer integrations.
---

:::caution[My Notes]
:::

This page lists menu actions that are currently implemented.

## Dashboard note row menu

- Study
- Custom session
- Go to note
- Rename
- Archive / Unarchive
- Detach from project (project-tree context)
- Select

## Dashboard project row menu

- Study project
- Custom session
- Go to project note
- Rename
- Pick preset
- Archive project / Unarchive project

## Flashcard Panel card menu

- Edit
- Copy
- Move
- Change type
- Make reversed / Remove reversed (when eligible)
- AI Rewrite
- Forget
- Suspend / Unsuspend
- Delete
- Select

## Flashcard Panel header menu

- Refresh
- Open source note
- Generate from highlights (if available)
- Start review
- Browse in card browser
- Copy to clipboard
- Export as CSV
- Forget all flashcards
- Delete all flashcards

## Review actions menu

- Type in mode toggle
- Undo last answer (if available)
- Move card
- Suspend card
- Bury card
- Bury note
- Forget card (if available)
- Edit card
- Change note type
- Add flashcard
- Add image occlusion
- Open source note

## File explorer menu additions

Markdown files:

- Review flashcards from this note
- Open flashcard panel

Folders:

- Create project note (creates folder note with `include: folder`)

## Card Browser note

Right-click in Card Browser selects rows/cards for bulk actions. There is no dedicated per-row action menu equivalent to older docs.

## Named actions vs UI labels

There are no separate context-menu items named exactly:

- Assign to project
- Move to project
- Create sub-project

But these capabilities are available through Dashboard workflows:

- assign/move: drag-and-drop reparenting
- create sub-project structure: note-on-note create-project flow or create-project from selected notes
