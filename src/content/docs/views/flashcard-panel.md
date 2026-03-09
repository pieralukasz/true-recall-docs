---
title: Flashcard Panel
description: The main sidebar panel for managing flashcards per note with quick review, collection, and AI generation.
---

The **Flashcard Panel** is a sidebar view that shows flashcards for the currently active note. It's your hub for managing cards within a note.

## Opening the Panel

Cmd/Ctrl + P -> "Open flashcard panel". The panel opens in the right sidebar.

## Panel Layout

The panel has these sections from top to bottom:

1. **Header** — Note name, menu, refresh, status bar (new/learning/review counts), Review button
2. **Quick Review** — One due card with Show/Edit actions (optional)
3. **Flashcards** — All collected cards with state badges
4. **Uncollected** — New flashcard lines not yet in database
5. **Bottom Actions** — Add and Generate buttons

## Status Bar

Shows card counts by state: Green (New), Orange (Learning), Blue (Review).

## Quick Review Section

Shows one card that's due right now. Answer and rate without opening the full review view.

Enable in Settings -> General -> "Show quick review in panel".

## Flashcards Section

All collected cards for this note with state badges and hover actions:

| Action | Description |
|--------|-------------|
| Edit | Open card editor |
| Delete | Remove card |
| Suspend | Pause reviews |
| Move | Transfer to another note |

Right-click a card for more options: Copy, Change type, Selection mode.

## Uncollected Section

Cards written in the note but not yet in the database:

- Click **Collect** to add to database
- Click **Collect All** for batch collection
- Click **Ignore** to dismiss without collecting

## Image Occlusion Group

If the note has image occlusion cards, they appear grouped by image with View and Edit actions.

## Bottom Actions

- **+ Add** — Create a new flashcard manually
- **Generate** — Use AI to generate cards from note content, selected text, or highlights

## Panel Sync

The panel automatically syncs with the active note, review session, and edits.

## Tips

- Leave the panel open while editing notes to see card status
- Use quick review instead of full session for just a few cards
- Collect regularly — don't let uncollected cards pile up
- Use selection mode for bulk edit or delete
