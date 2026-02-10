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

True Recall Cloud will enable cross-device synchronization, letting you study on any device while keeping your progress in sync.

## Planned Features

Cloud sync will allow you to:

- **Study on multiple devices** (desktop, laptop, mobile)
- **Keep progress synchronized** automatically
- **Recover from data loss** with cloud backup
- **Switch devices** seamlessly

## How It Will Work

Each device will maintain a local database that syncs with the cloud server:

```
Device A ←→ True Recall Cloud ←→ Device B
   ↓              ↓                 ↓
Local DB    Supabase Server     Local DB
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

Cloud Sync is the next major feature planned for True Recall. We're building the infrastructure to ensure:

- **Reliable synchronization** with conflict resolution
- **Secure data transfer** with encryption
- **Privacy-first approach** with minimal data collection

## Stay Updated

Cloud Sync will be announced when ready. In the meantime, True Recall works fully offline with local-first data storage in your Obsidian vault.

## FAQ

**Q: Is cloud sync required?**
A: No, True Recall works fully locally. Cloud will be optional.

**Q: Will there be a free tier?**
A: Yes, basic sync will be free.

**Q: Can I self-host?**
A: This is being considered for future development.
