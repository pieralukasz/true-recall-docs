---
title: Card Browser
description: Search, filter, and manage all your flashcards in one place
---

The Card Browser provides a powerful interface for managing all your flashcards, similar to Anki's browser. Search, filter, sort, and perform bulk operations on your cards.

## Opening the Browser

- **Command Palette**: `Cmd/Ctrl+P` → "True Recall: Open card browser"
- **Ribbon**: May be available depending on configuration

## Interface Layout

The browser uses a three-panel layout:

```
┌─────────────┬────────────────────────┬─────────────┐
│   Filters   │     Card Table         │   Preview   │
│   Sidebar   │   (sortable columns)   │    Panel    │
└─────────────┴────────────────────────┴─────────────┘
```

### Filter Sidebar
- State filters (New, Learning, Review, Suspended, Buried)
- Source note filter
- Project filter
- Search box

### Card Table
Sortable columns:
- Question
- Answer
- State
- Due date
- Interval
- Difficulty
- Stability
- Source note

### Preview Panel
- Full card preview
- Markdown rendering
- Quick edit access

## Searching

### Basic Search
Type in the search box to filter by:
- Question content
- Answer content
- Source note name

### Advanced Search Syntax

| Syntax | Example | Matches |
|--------|---------|---------|
| Plain text | `python` | Cards containing "python" |
| Quoted | `"machine learning"` | Exact phrase |
| State | `state:new` | Cards in specific state |
| Due | `due:today` | Cards due today |
| Source | `source:chapter-1` | Cards from specific note |

## Filtering

### By State

- **New**: Never reviewed cards
- **Learning**: In learning phase
- **Review**: Graduated cards
- **Suspended**: Manually suspended
- **Buried**: Hidden until tomorrow

### By Source Note
Select one or more notes to show only their cards.

### By Project
Filter cards by project membership.

### By Due Date
- Today's due cards
- Overdue cards
- Cards due this week

## Sorting

Click any column header to sort:

- **Question/Answer**: Alphabetically
- **State**: By state type
- **Due**: By due date
- **Interval**: By current interval
- **Difficulty**: By FSRS difficulty
- **Stability**: By FSRS stability

Click again to reverse order.

## Selecting Cards

### Single Selection
Click a row to select it and show preview.

### Multiple Selection
- **Ctrl/Cmd+Click**: Add to selection
- **Shift+Click**: Range selection
- **Ctrl/Cmd+A**: Select all visible

## Bulk Operations

With cards selected, perform bulk actions:

### Suspend/Unsuspend
Remove cards from review queue or restore them.

### Bury
Hide cards until tomorrow.

### Delete
Permanently remove selected cards.

:::caution
Bulk delete cannot be undone. Use with caution.
:::

### Reschedule
Set a new due date for selected cards.

### Move
Transfer cards to a different source note.

### Change State
Force cards into a specific state (use with caution).

## Card Preview

The preview panel shows:

- **Question**: Full markdown-rendered question
- **Answer**: Full markdown-rendered answer
- **Metadata**: State, due date, interval, difficulty
- **Source**: Link to source note
- **History**: Recent review ratings

## Quick Actions

From the preview panel:

- **Edit**: Open card editor
- **Suspend**: Toggle suspension
- **Delete**: Remove the card
- **Go to Source**: Open the source note

## Virtual Scrolling

The browser uses virtual scrolling for performance:
- Handles thousands of cards efficiently
- Only renders visible rows
- Smooth scrolling through large datasets

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `↑/↓` | Navigate cards |
| `Enter` | Open card editor |
| `Delete` | Delete selected |
| `S` | Toggle suspend |
| `B` | Bury selected |
| `Escape` | Clear selection |

## Tips

### Finding Problematic Cards
- Sort by difficulty (descending) for hard cards
- Filter suspended to review paused cards
- Check low-stability cards for potential issues

### Cleaning Up
- Search for duplicate content
- Find orphaned cards (no source note)
- Remove outdated or incorrect cards

### Bulk Editing
- Select similar cards
- Use reschedule for fresh starts
- Move related cards to appropriate notes

## Troubleshooting

### Browser is Slow
- Large collections (10,000+ cards) may have initial load delay
- Try filtering to reduce visible cards
- Check system resources

### Cards Not Appearing
- Check active filters
- Clear search box
- Verify cards exist in database

### Preview Not Rendering
- Complex markdown may have issues
- Check card content for errors
- Try editing the card
