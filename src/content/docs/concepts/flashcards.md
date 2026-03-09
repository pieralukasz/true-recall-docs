---
title: Flashcards
sidebar:
  order: 1
description: "How flashcards work in True Recall: types, storage, collection, states, and editing."
---

Flashcards are the core learning unit in True Recall. This page explains how flashcards work, where they're stored, and how they connect to your notes.

## Card Types

### Basic Cards

The simplest type — one question, one answer.

```markdown
#type/basic
Front: What is photosynthesis?
Back: The process by which plants convert sunlight into energy.
---
```

### Cloze Deletions

Fill-in-the-blank cards. Multiple clozes create multiple cards.

```markdown
#type/cloze
Text: The {{c1::mitochondria}} is the {{c2::powerhouse}} of the cell.
Extra: Cellular biology
---
```

### Reversed Cards

Creates two cards — one in each direction.

```markdown
#type/basic-reversed
Front: Capital of France
Back: Paris
---
```

### Image Occlusion

Create cards from images by hiding regions. Each region becomes a separate card testing that part of the image.

## Where Flashcards Live

### In Your Notes

Flashcards are written directly in your Obsidian notes using the `#type/<slug>` block format — they always belong to the note they were created in.

### In the Database

When you "collect" a flashcard, True Recall:

1. Parses the block format syntax
2. Creates a database entry with scheduling data
3. Links the card to its source note via `flashcard_uid`

The database (`.true-recall/true-recall-{id}.db`) stores FSRS scheduling data, review history, and statistics.

## The [Collection](/creation/creating-flashcards/#the-collection-step) Process

New flashcard blocks aren't immediately added to the review queue. They must be **collected**:

1. Write a flashcard in your note (block format or inline)
2. Open the [Flashcard Panel](/views/flashcard-panel/)
3. Click **Collect** on uncollected cards
4. Cards are now scheduled for review

Collection lets you review cards before adding them, batch-add multiple cards at once, and prevent accidental cards from appearing in reviews.

## Source Notes and UIDs

Each note with flashcards gets a unique `flashcard_uid` in its frontmatter:

```yaml
---
flashcard_uid: abc123-def456
---
```

This UID links cards to their source note, review history to the originating content, and statistics to specific notes.

## Card States

| State | Color | Description |
|-------|-------|-------------|
| New | Green | Never reviewed |
| Learning | Orange | In initial learning phase |
| Review | Blue | Graduated to longer intervals |
| Relearning | Orange | Lapsed, being relearned |
| Suspended | Red | Manually paused |

## Editing Flashcards

- **From the Panel** — Click the edit icon on any card
- **From the Source** — Edit the markdown in your note. Changes sync automatically.
- **In Review** — Press `E` to edit the current card inline.

## Deleting Flashcards

- **From Panel** — Click trash icon, confirm
- **From Source** — Delete the markdown block, card is marked orphaned
- **During Review** — Press `!` to suspend, or use actions menu

## Bulk Operations

In the [Card Browser](/views/card-browser/):

1. Select multiple cards (shift-click, ctrl-click)
2. Use bulk actions: Suspend/Unsuspend, Delete, Change note type, Move to different note, Change preset

## Writing Good Flashcards

Knowing the syntax is only half the story — how you phrase your cards matters just as much. See [Best Practices](/creation/best-practices/) for principles, examples, and common mistakes to avoid.
