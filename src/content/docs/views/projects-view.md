---
title: Projects View
description: Manage and review flashcards organized by project
---

The Projects View displays all your projects with card counts and provides quick access to project-based review sessions.

## Opening Projects View

- **Command Palette**: `Cmd/Ctrl+P` → "True Recall: Open projects panel"

## Interface

```
┌─────────────────────────────────────┐
│           Your Projects             │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │ 📚 Spanish Course               │ │
│ │ 45 cards | Due: 12 | New: 5     │ │
│ │ [Review] [•••]                  │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ 🧠 Machine Learning             │ │
│ │ 128 cards | Due: 23 | New: 0    │ │
│ │ [Review] [•••]                  │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ 📖 Book: Deep Work              │ │
│ │ 32 cards | Due: 0 | New: 8      │ │
│ │ [Review] [•••]                  │ │
│ └─────────────────────────────────┘ │
│                                     │
│         [+ Create Project]          │
└─────────────────────────────────────┘
```

## Project Cards

Each project shows:

### Header
- **Icon**: Visual indicator
- **Name**: Project name

### Statistics
- **Total cards**: All cards in project
- **Due**: Cards due for review
- **New**: Unreviewed cards
- **Learning**: Cards in learning (optional)

### Actions
- **Review**: Start project review
- **Menu (•••)**: Additional options

## Project Actions

### Review Project

Click "Review" to start a filtered session:
- Opens session builder
- Project pre-selected
- Start immediately or customize

### Menu Options

| Action | Description |
|--------|-------------|
| **Add Notes** | Add more notes to project |
| **View Notes** | See all notes in project |
| **Rename** | Change project name |
| **Delete** | Remove project |

## Creating Projects

### From Projects View

1. Click **+ Create Project**
2. Enter project name
3. Optionally add notes
4. Click **Create**

### From Note

1. Open a note
2. Command: "Add current note to project"
3. Type new project name
4. Project created with note

### From Context Menu

1. Right-click file in explorer
2. Select "Create project from this note"
3. Project named after note

## Managing Projects

### Adding Notes

1. Open project menu
2. Click "Add Notes"
3. Search for notes
4. Select notes to add
5. Click "Add"

### Viewing Notes

1. Open project menu
2. Click "View Notes"
3. See all associated notes
4. Click note to open

### Renaming

1. Open project menu
2. Click "Rename"
3. Enter new name
4. Click "Save"

### Deleting

1. Open project menu
2. Click "Delete"
3. Confirm deletion
4. Notes remain, association removed

:::note
Deleting a project doesn't delete cards or notes—just the grouping.
:::

## Project Statistics

### Card Counts

Calculated from all notes in project:
- Counts cards linked to project notes
- Updates in real-time
- Includes all card states

### Due Cards

Cards due for review today:
- From all project notes
- Respects scheduling
- Quick indicator of workload

### New Cards

Never-reviewed cards:
- Ready to learn
- Subject to daily limits
- Prioritize or defer

## Project Workflows

### Study Planning

Use project stats to plan:
- High due count = priority
- Many new cards = time investment
- Zero due = maintenance mode

### Exam Prep

1. Create project: "Exam: [Subject]"
2. Add all relevant notes
3. Review project daily
4. Increase intensity before exam

### Ongoing Learning

1. Create topic projects
2. Add notes as you learn
3. Regular project reviews
4. Archive when complete

## Sorting Projects

Projects can be sorted by:
- **Name**: Alphabetically
- **Card count**: Most to least
- **Due count**: Most urgent first
- **Recent**: Recently reviewed

## Filtering

### Show Empty
Toggle to show/hide projects with no due cards.

### Search
Type to filter projects by name.

## Tips

### Naming Convention
Use consistent prefixes:
- `Book: Title`
- `Course: Name`
- `Topic: Subject`
- `Project: Name`

### Regular Review
- Check projects weekly
- Archive completed projects
- Keep active list manageable

### Focused Sessions
- Use projects for topic focus
- One project per session
- Build subject expertise

## Troubleshooting

### Project Shows Wrong Count
- Check note frontmatter
- Verify note has cards
- Reload plugin

### Project Not Appearing
- Check note has project in frontmatter
- Project names are case-sensitive
- Remove trailing spaces

### Can't Add Notes
- Verify note has flashcard_uid
- Check for existing assignment
- Try manual frontmatter edit
