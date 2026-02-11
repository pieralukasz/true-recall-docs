---
title: Orphaned Cards
description: Managing flashcards that have lost their source note connection
links:
  - /views/card-browser/
  - /reference/commands/
---

Orphaned cards are flashcards whose source note has been deleted, renamed, or lost its `flashcard_uid`. The cards still exist in the database but have no current source.

## How They Happen

Common causes: deleting a note that has flashcards, renaming a note (losing the UID link), removing `flashcard_uid` from frontmatter, or vault sync issues.

True Recall detects orphans automatically on plugin load and after note deletions. Open the orphaned cards panel via **Command Palette → "Open orphaned cards panel"**.

## Managing Orphaned Cards

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

Each orphaned card has three options:

| Action | Description |
|--------|-------------|
| **Assign to Note** | Link the card to an existing note |
| **Delete** | Remove the card permanently |
| **Create Recovery Note** | Generate a new note containing the card content |

You can also use **Select All** for bulk operations.

## Auto-Handling

Configure what happens automatically when a source note is deleted:

| Setting | Effect |
|---------|--------|
| **Leave Orphaned** | Cards become orphans (default) |
| **Delete Cards** | Cards are deleted with the note |
| **Move to Note** | Cards transfer to a specified note |
| **Create Recovery** | A recovery note is auto-created |

:::tip
If a note is restored with the same `flashcard_uid`, the connection repairs automatically. Orphaned cards remain reviewable and keep their full review history.
:::
