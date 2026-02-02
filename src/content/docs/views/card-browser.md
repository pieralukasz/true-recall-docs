---
title: Card Browser View
description: The full-featured browser for searching and managing all flashcards
---

The Card Browser provides an Anki-style interface for managing your entire flashcard collection. Search, filter, sort, and perform bulk operations.

## Opening the Browser

- **Command Palette**: `Cmd/Ctrl+P` → "True Recall: Open card browser"

## Interface Overview

The browser uses a three-panel layout:

```
┌──────────┬─────────────────────────────┬──────────────┐
│ Filters  │         Card Table          │   Preview    │
│          │  Q  │  A  │ State │ Due     │              │
│ ☑ New    │ ... │ ... │  New  │ -       │  Question:   │
│ ☑ Learn  │ ... │ ... │ Review│ Today   │  ...         │
│ ☑ Review │ ... │ ... │ Learn │ 2m      │              │
│ ☐ Susp   │ ... │ ... │ Review│ 3 days  │  Answer:     │
│ ☐ Buried │                             │  ...         │
│          │                             │              │
│ Source:  │                             │  State: New  │
│ [Select] │                             │  Due: -      │
│          │                             │  Interval: - │
│ Project: │                             │              │
│ [Select] │                             │  [Edit]      │
└──────────┴─────────────────────────────┴──────────────┘
```

## Filter Sidebar

### State Filters

Toggle visibility of cards by state:

| Filter | Shows |
|--------|-------|
| **New** | Never reviewed cards |
| **Learning** | In learning/relearning |
| **Review** | Graduated review cards |
| **Suspended** | Manually paused cards |
| **Buried** | Hidden until tomorrow |

### Source Filter

Filter by origin note:
- Dropdown to select notes
- Multi-select supported
- Search to find notes

### Project Filter

Filter by project membership:
- Dropdown to select projects
- Multi-select supported
- Shows only matching cards

### Search Box

Full-text search:
- Searches question content
- Searches answer content
- Searches source note names

## Card Table

### Columns

| Column | Description | Sortable |
|--------|-------------|----------|
| **Question** | Card question text | Yes |
| **Answer** | Card answer text | Yes |
| **State** | Current card state | Yes |
| **Due** | When card is due | Yes |
| **Interval** | Current interval | Yes |
| **Difficulty** | FSRS difficulty | Yes |
| **Stability** | FSRS stability | Yes |
| **Source** | Origin note name | Yes |

### Sorting

- Click column header to sort
- Click again to reverse
- Shows sort indicator

### Selection

- **Single click**: Select row, show preview
- **Ctrl/Cmd+Click**: Add to selection
- **Shift+Click**: Range selection
- **Ctrl/Cmd+A**: Select all visible

## Preview Panel

Shows selected card details:

### Card Content
- Full question (markdown rendered)
- Full answer (markdown rendered)

### Metadata
- State and due date
- Interval and ease
- Difficulty and stability
- Creation date

### Quick Actions
- **Edit**: Open editor
- **Suspend**: Toggle suspend
- **Delete**: Remove card
- **Go to Source**: Open origin note

## Bulk Operations

With cards selected:

### Suspend/Unsuspend
- Pause or resume cards
- Affects scheduling

### Bury
- Hide until tomorrow
- Temporary skip

### Delete
- Permanently remove
- Cannot be undone

### Reschedule
- Set new due date
- Reset scheduling

### Move
- Transfer to new note
- Keeps card content

## Search Syntax

### Basic Search
```
python          # Contains "python"
"machine learn" # Exact phrase
```

### Field Search
```
question:what   # Question contains "what"
answer:because  # Answer contains "because"
source:chapter  # Source note contains "chapter"
```

### State Search
```
state:new       # New cards
state:learning  # Learning cards
state:review    # Review cards
state:suspended # Suspended cards
```

### Combined
```
python state:new source:tutorial
```

## Virtual Scrolling

Browser handles large collections:
- Only renders visible rows
- Smooth scrolling
- Efficient memory use

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `↑/↓` | Navigate rows |
| `Enter` | Open editor |
| `Delete` | Delete selected |
| `S` | Toggle suspend |
| `B` | Bury selected |
| `Escape` | Clear selection |
| `Ctrl/Cmd+A` | Select all |
| `Ctrl/Cmd+F` | Focus search |

## Use Cases

### Finding Problem Cards
1. Sort by difficulty (descending)
2. Review hardest cards
3. Edit or suspend as needed

### Cleaning Up
1. Filter suspended cards
2. Review each one
3. Delete or unsuspend

### Auditing Quality
1. Filter by source note
2. Review all cards from note
3. Edit unclear questions

### Bulk Reorganization
1. Select cards to move
2. Use Move operation
3. Choose destination note

## Tips

### Regular Maintenance
- Check suspended cards weekly
- Review difficulty distribution
- Clean up unused cards

### Efficient Searching
- Use specific filters first
- Combine with text search
- Sort to find patterns

### Safe Bulk Operations
- Preview selection first
- Start with small batches
- Use undo when available

## Troubleshooting

### Browser Slow
- Large collections need time
- Try narrower filters
- Check system resources

### Cards Not Appearing
- Check active filters
- Clear search box
- Verify cards exist

### Sort Not Working
- Click header clearly
- Wait for table update
- Try different column
