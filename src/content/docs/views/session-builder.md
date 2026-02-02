---
title: Session Builder
description: Create custom review sessions with advanced filtering options
---

The Session Builder allows you to create customized review sessions by filtering cards based on various criteria.

## Opening Session Builder

- **Command Palette**: `Cmd/Ctrl+P` → "True Recall: Start review session"
- **Ribbon icon**: Click the purple brain icon
- **Panel button**: "Review" in flashcard panel

## Interface

```
┌─────────────────────────────────────┐
│        Custom Review Session        │
├─────────────────────────────────────┤
│ Source Notes:                       │
│ [Search notes...]                   │
│ ☑ Chapter 1.md                     │
│ ☑ Chapter 2.md                     │
│ ☐ Chapter 3.md                     │
├─────────────────────────────────────┤
│ Card States:                        │
│ ☑ Due  ☑ Learning  ☐ New  ☐ Buried │
├─────────────────────────────────────┤
│ Projects:                           │
│ [Select projects...]                │
├─────────────────────────────────────┤
│ Options:                            │
│ ☐ Ignore daily limits              │
│ ☐ Bypass scheduling                │
│ ☐ Created today only               │
├─────────────────────────────────────┤
│ Cards matching: 45                  │
│         [Start Review]              │
└─────────────────────────────────────┘
```

## Filter Options

### By Source Notes

Select specific notes to review:

1. **Search box**: Type to filter notes
2. **Checkboxes**: Select/deselect notes
3. **Select all**: Include all matching
4. **Clear**: Reset selection

### By Card State

Filter by card status:

| State | Description |
|-------|-------------|
| **Due** | Review cards due today |
| **Learning** | Cards in learning phase |
| **New** | Never reviewed cards |
| **Buried** | Cards hidden today |

### By Projects

Review specific projects:

1. Open project dropdown
2. Select one or more projects
3. Only cards from those projects show

### By Path

Filter by file location:
- Enter folder path
- Matches notes in that folder
- Includes subfolders

## Special Options

### Ignore Daily Limits

Bypasses new cards/day and reviews/day limits:
- Review unlimited new cards
- No cap on review count
- Use for catch-up sessions

:::caution
Large sessions without limits can be overwhelming. Use wisely.
:::

### Bypass Scheduling

Shows cards regardless of due date:
- Review cards not yet due
- Study ahead
- Useful before exams

### Created Today Only

Shows only cards created today:
- Review newly generated cards
- Verify card quality
- Same-day reinforcement

### Created This Week

Cards created in last 7 days:
- Review recent additions
- Early reinforcement
- Quality check

### Weak Cards Only

Cards with low retrievability:
- Focus on struggling cards
- Strengthen weak points
- Efficient targeted study

## Card Count Preview

Before starting, see:
```
Cards matching: 45
```

This updates in real-time as you change filters.

## Quick Sessions

### Current Note Only

Review cards from active note:
1. Open the note
2. Open session builder
3. Note is auto-selected
4. Click "Start Review"

Or use command: "Review flashcards from current note"

### Today's New Cards

Review cards created today:
1. Check "Created today only"
2. Uncheck other state filters
3. Start review

Or use command: "Review today's new cards"

### Project Review

Review a specific project:
1. Select project from dropdown
2. Leave other filters default
3. Start review

## Session Flow

### Starting
1. Configure filters
2. Check card count
3. Click "Start Review"
4. Review begins immediately

### During Session
- Normal review interface
- Keyboard shortcuts work
- Card actions available

### Ending
- Complete all matched cards
- Or close review manually
- Summary shows session stats

## Advanced Combinations

### Exam Prep
```
☑ Project: "Exam: Biology"
☑ Due, Learning, New
☑ Ignore daily limits
☐ Bypass scheduling
```

### Catch-up Session
```
☑ All notes
☑ Due only
☑ Ignore daily limits
☐ New cards
```

### New Content Review
```
☑ Created today only
☑ New cards
☐ Due, Learning
```

### Weak Card Focus
```
☑ Weak cards only
☑ Due, Learning
☐ New cards
```

## Tips

### Balanced Sessions
- Don't always bypass limits
- Mix of new and review is ideal
- Consistency beats intensity

### Targeted Study
- Use projects for topics
- Review specific notes before tests
- Focus on weak areas

### Quality Control
- Review new cards same day
- Check AI-generated content
- Edit as you review

## Troubleshooting

### No Cards Found
- Check filter combination
- Verify cards exist
- Try broader filters

### Wrong Cards Showing
- Review filter settings
- Check card states
- Verify note selection

### Can't Start Session
- Need at least 1 card
- Check for errors
- Try resetting filters
