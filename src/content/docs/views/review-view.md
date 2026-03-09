---
title: Review View
description: The flashcard review interface with keyboard shortcuts, inline editing, undo, and session persistence.
---

The **Review View** is where you study flashcards using spaced repetition.

## Opening Review View

| Method | Action |
|--------|--------|
| Command | "Review flashcards from current note" or "Review today's new cards" |
| Dashboard | Click **Study** on any project or note |
| Flashcard Panel | Click **Review** button |

## Review States

### Active Review

Normal card-by-card study: See question -> Think/type answer -> Reveal answer -> Rate recall.

### Waiting State

When no cards are due but learning cards will come back soon, shows a countdown with "Study Ahead" and "Close" options.

### Session Complete

After finishing all due cards, shows summary: cards reviewed, time, retention, rating breakdown, and next session time.

## Header Options

| Setting | Description |
|---------|-------------|
| Show review header | Display header at all |
| Show header stats | Badge counts in header |
| Show next review time | Intervals on answer buttons |

## Actions During Review

### Card Actions

| Action | Key | Description |
|--------|-----|-------------|
| Edit | `E` | Edit card inline |
| Suspend | `!` | Remove from reviews |
| Bury card | `-` | Hide until tomorrow |
| Bury note | `=` | Hide all siblings until tomorrow |
| Move | `M` | Transfer to another note |
| Add flashcard | `A` | Create new card |
| Type-in mode | `T` | Toggle type-in |
| Change preset | `P` | Set source note preset (`fsrs_preset` in frontmatter) |

### Session Actions

| Action | Key | Description |
|--------|-----|-------------|
| Undo | `Cmd/Ctrl+Z` | Undo last answer |
| Close | `Escape` | End session |
| Help | `?` | Show shortcuts |

## Inline Editing

Press `E` to edit the current card with a toolbar for Bold, Italic, Link, Image, Code, and Math formatting.

## Image Occlusion in Review

For image occlusion cards: Question side shows the image with one region covered, answer side reveals the full image with the previously hidden region highlighted.

## Undo

Press `Cmd/Ctrl+Z` to undo: card returns to queue, FSRS parameters restored. Can undo multiple times.

## Session Persistence

If you close Obsidian mid-session, progress is saved and the session resumes where you left off.

## Fullscreen vs Panel

Settings -> General -> Review mode:

- **Fullscreen** — Takes over main editor area, fewer distractions (recommended)
- **Side Panel** — Opens in right sidebar, can see note while reviewing
