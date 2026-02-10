---
title: Flashcard Panel
description: The main sidebar panel for managing flashcards
links:
  - /features/cloze-deletions/
  - /features/reversed-cards/
  - /views/review-view/
---

The Flashcard Panel is your primary interface for viewing and managing flashcards associated with the current note.

## Opening the Panel

- **Ribbon icon**: Click the purple brain icon in the left sidebar
- **Command Palette**: `Cmd/Ctrl+P` → "True Recall: Open flashcard panel"
- **Context menu**: Right-click a file → "Open flashcard panel"

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

## Header Section

### Note Info
- **Title**: Current note name
- **Card count**: Total cards from this note
- **Due count**: Cards due for review
- **New count**: Unreviewed cards

### Action Buttons

| Button | Action |
|--------|--------|
| **+ Add Card** | Create new flashcard manually |
| **Collect** | Collect `#flashcard` tagged cards from the note |
| **Review** | Start review of this note's cards |

## Card List

Each card displays:

### Card Preview
- **Question**: First line or truncated question
- **Answer**: First line or truncated answer
- **Due date**: When the card is scheduled

### Card States
Visual indicators show:
- 🆕 **New**: Never reviewed
- 📚 **Learning**: In learning steps
- ✅ **Review**: Normal review card
- 🔁 **Relearning**: Being relearned
- ⏸️ **Suspended**: Paused
- 💤 **Buried**: Hidden today

### Card Actions Menu (•••)

Click the menu button on each card:

| Action | Description |
|--------|-------------|
| **Edit** | Open card editor |
| **Preview** | Full card preview modal |
| **Review** | Start review from this card |
| **Suspend** | Toggle suspension |
| **Bury** | Hide until tomorrow |
| **Move** | Transfer to another note |
| **Delete** | Remove the card |

## Creating Cards

### Manual Creation

1. Click **+ Add Card** button
2. Enter question in the Question field
3. Enter answer in the Answer field
4. Click **Save**

### Collecting from Notes

1. Write flashcards in your note using `#flashcard` tags
2. Click **Collect** in the panel
3. Cards are detected and imported automatically

## Editing Cards

### Quick Edit
1. Click card in the list
2. Click **Edit** from menu
3. Modify question/answer
4. Click **Save**

### Full Editor
Opens modal with:
- Markdown preview
- Larger text areas
- Full editing controls

## Card Filtering

### By State
Toggle filters to show/hide:
- New cards
- Learning cards
- Review cards
- Suspended cards
- Buried cards

### Search
Type to filter cards by question or answer content.

## Bulk Operations

### Select Multiple
- Click checkbox on cards
- Use "Select All" option

### Available Actions
- **Suspend all**: Pause selected cards
- **Delete all**: Remove selected cards
- **Move all**: Transfer to another note

## Panel Behavior

### Note Switching
- Panel updates when active note changes
- Shows "No cards" for notes without flashcards
- Shows "No active note" when no file is open

### Auto-refresh
- Updates when cards are added/edited/deleted
- Syncs with review session changes
- Reflects state changes in real-time

## Integration with Review

### Start Review
From the panel, start review of:
- All cards from current note
- Only due cards
- Only new cards

### Post-Review
After review session:
- Card states update
- Due dates refresh
- Statistics update

## Tips

### Efficient Workflow
1. Open note you want to study
2. Open panel to see card count
3. Add or collect cards
4. Start review from panel

### Organization
- Keep related content in one note
- Use panel to audit card quality
- Regular review of suspended cards

### Quality Control
- Preview cards before review
- Edit unclear questions
- Remove duplicate cards

## Troubleshooting

### Panel is Empty
- Check note has `flashcard_uid` in frontmatter
- Run "Add flashcard UID to current note" command
- Verify cards exist in database

### Cards Not Updating
- Reload the plugin
- Check for sync issues
- Verify database integrity

### Panel Won't Open
- Check plugin is enabled
- Look for error messages
- Try restarting Obsidian
