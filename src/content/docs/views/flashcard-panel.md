---
title: Flashcard Panel
description: The main sidebar panel for managing flashcards
links:
  - /features/basic-flashcards/
  - /features/cloze-deletions/
  - /views/review-view/
---

The Flashcard Panel is the sidebar you'll use most. Open a note, open the panel, and you're looking at every card tied to that note — counts, states, due dates, all of it.

## Opening the Panel

Three ways to get there:

- **Ribbon icon** — click the purple brain icon in the left sidebar.
- **Command Palette** — `Cmd/Ctrl+P` then search "True Recall: Open flashcard panel."
- **Context menu** — right-click a file and choose "Open flashcard panel."

The panel follows your active note. Switch notes and it switches with you. If no file is open, it shows "No active note."

## Panel Layout

```
┌─────────────────────────────┐
│ [Note Title]                │
│ Cards: 12  Due: 3  New: 2   │
├─────────────────────────────┤
│ [+ Add Card] [Collect]      │
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │ Q: What is X?           │ │
│ │ A: X is...              │ │
│ │ Due: Tomorrow | ••• menu│ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ Q: Define Y             │ │
│ │ ...                     │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

The header shows the note title, total card count, due count, and new count. Below that sit the action buttons, and below those, the card list.

| Button | Action |
|--------|--------|
| **+ Add Card** | Create a new flashcard manually |
| **Collect** | Collect `#flashcard` tagged cards from the note |
| **Review** | Start a review session for this note's cards |

## Creating Cards

Click **+ Add Card**, write your question and answer, and save. Cards are linked to the current note automatically.

:::tip[Alternative: Collect from notes]
If you prefer writing cards inline in your notes using `#flashcard` tags, click **Collect** to import them all at once.
:::

:::note
When you create or collect your first card for a note, True Recall adds a `flashcard_uid` to the note's frontmatter — a unique identifier that links the note with its cards in the database. Don't remove it.
:::

## Card List

Each card in the list shows a preview of the question, the first line of the answer, and the due date. A colored indicator tells you the card's state at a glance:

- **New** — never reviewed.
- **Learning** — in learning steps.
- **Review** — normal review card.
- **Relearning** — being relearned after a lapse.
- **Suspended** — paused, won't appear in reviews.
- **Buried** — hidden until tomorrow.

### Card Actions Menu

Click the **...** button on any card to open its menu.

| Action | Description |
|--------|-------------|
| **Edit** | Open the card editor |
| **Preview** | Full card preview modal |
| **Review** | Start review from this card |
| **Suspend** | Toggle suspension on/off |
| **Bury** | Hide until tomorrow |
| **Move** | Transfer to another note |
| **Delete** | Remove the card permanently |

## Editing Cards

Click a card, choose **Edit** from the menu, change the question or answer, and save. For longer edits, the full editor opens a modal with markdown preview and larger text areas.

## Filtering and Search

You can toggle which card states are visible — new, learning, review, suspended, buried. Combine that with the search field to filter by question or answer content.

When you have a note with dozens of cards, these filters keep things manageable.

## Bulk Operations

Select multiple cards using their checkboxes (or "Select All"), then apply an action to the batch:

- **Suspend all** — pause selected cards.
- **Delete all** — remove selected cards.
- **Move all** — transfer selected cards to another note.

:::caution
Deleting cards is permanent. There's no undo.
:::

## Integration with Review

From the panel you can start a review of all cards from the current note, only due cards, or only new cards. After you finish a review session, the panel refreshes automatically — card states update, due dates shift, and the counts in the header reflect reality.
