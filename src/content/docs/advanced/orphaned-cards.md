---
title: Orphaned Cards
description: Managing flashcards that have lost their source note connection
links:
  - /views/card-browser/
  - /reference/commands/
---

Orphaned cards are flashcards whose source note has been deleted, renamed, or no longer contains the linking identifier. Learn how to detect, manage, and prevent orphaned cards.

## What Are Orphaned Cards?

Orphaned cards:
- Were created from a note
- That note no longer exists (or lost its `flashcard_uid`)
- Cards still exist in database
- But have no current source

### How They Occur

Common causes:
- Deleting a note with flashcards
- Renaming a note (losing UID)
- Removing `flashcard_uid` from frontmatter
- Vault synchronization issues

## Detecting Orphaned Cards

### Orphaned Cards Panel

1. **Command Palette** → "Open orphaned cards panel"
2. View list of orphaned cards
3. See card count and content

### Automatic Detection

True Recall checks for orphans:
- On plugin load
- After note deletions
- During periodic scans

### Warning Indicators

You may see:
- Notification about orphaned cards
- Count in settings
- Indicator in statistics

## Managing Orphaned Cards

### Options for Each Card

| Action | Description |
|--------|-------------|
| **Assign to Note** | Link card to existing note |
| **Delete** | Remove card permanently |
| **Create Recovery Note** | Make new note for card |

### Bulk Actions

For multiple orphaned cards:
- Select all orphaned
- Apply bulk action
- Confirm changes

## Handling Strategies

### When Source Was Deleted

If you deleted the note intentionally:
1. Review orphaned cards
2. Delete if content no longer needed
3. Or assign to related note

### When Source Was Moved

If note was renamed/moved:
1. Find the new note
2. Assign orphaned cards to it
3. Check UID is preserved

### When Source Was Refactored

If content was split/merged:
1. Identify relevant new notes
2. Assign cards appropriately
3. Delete truly obsolete cards

## Recovery Options

### Assign to Existing Note

Move orphan to another note:
1. Select orphaned card
2. Click "Assign to Note"
3. Search for target note
4. Select and confirm

### Create Recovery Note

Generate new note for the card:
1. Select orphaned card
2. Click "Create Recovery Note"
3. Note created with card content
4. Card linked to new note

### Delete Orphan

Remove card permanently:
1. Select orphaned card
2. Click "Delete"
3. Confirm deletion
4. Card removed from database

## Prevention Strategies

### Before Deleting Notes

Check for flashcards:
1. Open note's flashcard panel
2. See if cards exist
3. Decide what to do with them
4. Then delete note

### Configurable Behavior

In settings, configure what happens when source note deleted:

| Setting | Effect |
|---------|--------|
| **Leave Orphaned** | Cards become orphans |
| **Delete Cards** | Cards auto-deleted |
| **Move to Note** | Cards transfer to specified note |
| **Create Recovery** | Recovery note auto-created |

### Using Tags/Projects

Organize cards beyond source:
- Add to projects for grouping
- Use tags for categorization
- Makes orphans easier to handle

## Orphaned Cards Panel

### Interface

```
┌─────────────────────────────────────────┐
│           Orphaned Cards (12)           │
├─────────────────────────────────────────┤
│ [Select All] [Delete All] [Assign All]  │
├─────────────────────────────────────────┤
│ ☐ Q: What is X?                        │
│   A: X is...                           │
│   [Assign] [Delete] [Recovery]          │
├─────────────────────────────────────────┤
│ ☐ Q: Define Y                          │
│   A: Y is...                           │
│   [Assign] [Delete] [Recovery]          │
└─────────────────────────────────────────┘
```

### Workflow

1. Review each orphan
2. Decide appropriate action
3. Process one by one or bulk
4. Confirm changes

## Best Practices

### Regular Maintenance

- Check orphan panel monthly
- Clear out unneeded cards
- Assign valuable content

### Preserve Source Links

When restructuring vault:
- Copy `flashcard_uid` when splitting notes
- Transfer content carefully
- Verify links after changes

### Use Projects

Project membership survives orphaning:
- Cards keep project association
- Easier to find and reassign
- Context preserved

## Troubleshooting

### Cards Showing as Orphaned Incorrectly

If cards are marked orphaned but source exists:
1. Check note has `flashcard_uid` in frontmatter
2. Verify UID matches card's source_uid
3. Rebuild index if needed

### Can't Assign to Note

If assignment fails:
1. Ensure target note has flashcard_uid
2. Run "Add flashcard UID" command on target
3. Try assignment again

### Recovery Note Not Created

If recovery fails:
1. Check write permissions
2. Verify vault path is valid
3. Check zettel folder setting

## Impact on Statistics

Orphaned cards:
- Still count in total cards
- May appear in browser
- Don't affect retention stats (no source)
- Should be resolved for accuracy

## FAQ

**Q: Are orphaned cards still reviewable?**
A: Yes, they appear in review sessions normally.

**Q: Can I prevent orphans entirely?**
A: Configure auto-delete when source deleted, but review carefully.

**Q: What happens to orphan reviews?**
A: Review history is preserved regardless of orphan status.

**Q: Can orphans be auto-recovered?**
A: If note is restored with same UID, connection repairs automatically.
