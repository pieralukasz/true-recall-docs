---
title: Cloud Sync
description: Synchronize your flashcards across devices with True Recall Cloud
links:
  - /configuration/data-backup/
---

:::caution[Important: Current Database Architecture]
**Each device has its own SQLite database.** This is NOT shared automatically between devices.

Obsidian Sync and other cloud sync services don't reliably sync SQLite databases. If you enable sync, you may experience:
- Database not syncing correctly between devices
- Different data appearing on different devices
- Example: Work on desktop, open on mobile → cards may be missing

**Recommendation**: Use True Recall on one primary device until official Cloud Sync is available. If you want to use multiple devices now, you can enable it in Settings, but be aware of these risks.

We're building a secure sync solution with proper conflict resolution. Until then, the safest approach is single-device use.
:::

True Recall Cloud will let you study on any device — desktop, laptop, mobile — while keeping your progress in sync.

## How It Will Work

Each device maintains a local database that syncs with the cloud:

```
Device A ←→ True Recall Cloud ←→ Device B
   ↓              ↓                 ↓
Local DB      Cloud Server      Local DB
```

### What Will Sync

- **Cards**: All flashcard content and metadata
- **Review History**: Complete review log
- **Scheduling Data**: FSRS states and intervals
- **Card States**: Suspended, buried status

### What Won't Sync

- **Settings**: Per-device configuration
- **Projects**: Stored in vault frontmatter
- **Source Notes**: Part of your Obsidian vault
- **Statistics Cache**: Regenerated locally

## Current Status

Cloud Sync is the next major feature in development. The focus is on reliable conflict resolution, encrypted data transfer, and a privacy-first approach.

In the meantime, True Recall works fully offline with local-first storage in your vault.
