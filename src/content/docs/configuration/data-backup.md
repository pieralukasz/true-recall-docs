---
title: Data & Backup
description: Manage your flashcard database, backups, and storage settings
links:
  - /features/cloud-sync/
  - /configuration/general/
---

Data & Backup settings control where your flashcard data is stored, how backups work, and how to manage database operations. Open Obsidian Settings (`Cmd/Ctrl+,`), scroll to "True Recall", and select the "Data & Backup" tab.

## Database Information

Your flashcard database is stored at:
```
<vault>/.true-recall/true-recall-<device-id>.db
```

Each device gets a unique ID automatically. You can see your current card count, review log entries, and approximate file size in settings.

## Backup Settings

**Auto-Backup on Load** creates a backup every time Obsidian starts. Keep this enabled.

Backups are stored per-device at:
```
<vault>/.true-recall/backups/<device-id>/
```

Filenames follow the pattern `true-recall-backup-YYYY-MM-DD-HHmmss.db`.

## Background Backup System

True Recall has an advanced background backup system with multiple triggers and smart retention, similar to Apple's Time Machine.

**Periodic backups** run at a regular interval you choose. Backups only happen when data has actually changed since the last one.

| Interval | Use Case |
|----------|----------|
| **15 min** | Heavy study sessions |
| **30 min** | Regular use |
| **1 hour** | Default, balanced |
| **2 hours** | Light usage |
| **4 hours** | Minimal usage |

**Activity-triggered backups** fire after a number of reviews instead of on a timer. The default threshold is 50 reviews (minimum 10). This works independently of periodic backups, so you can use both.

**Smart retention** uses a multi-tier approach that keeps recent backups densely and older ones sparsely:

| Tier | Description | Default | Range |
|------|-------------|---------|-------|
| **Hourly** | One backup per hour | 24 hours | 0-48 |
| **Daily** | One backup per day | 7 days | 0-30 |
| **Weekly** | One backup per week | 4 weeks | 0-12 |

For each tier the system selects the newest backup within each time bucket. Backups not selected by any tier are automatically deleted. With defaults you will have around 35 backups total -- dense coverage recently, sparse coverage historically.

## Backup Operations

Click "Create Backup Now" to manually create a backup at any time. To restore, click "Restore from Backup", pick one from the list, and confirm.

:::tip[Safety First]
Restoration automatically creates a safety backup before overwriting your current data. You can always go back if the restored backup wasn't what you needed.
:::

You can also browse, copy, or delete individual backup files directly in your file explorer.

## Device Management

Set a friendly **device name** so you can identify devices in sync logs. You can also **switch databases** if you have multiple -- useful for separate study profiles or testing.

## Zettel Settings

**Zettel Folder** controls where generated zettel notes are saved. Defaults to the root of your vault.

**Zettel Template** supports these variables:

| Variable | Replaced With |
|----------|---------------|
| `{{question}}` | Card question |
| `{{answer}}` | Card answer |
| `{{source}}` | Source note link |
| `{{date}}` | Current date |
| `{{time}}` | Current time |
| `{{card_id}}` | Card identifier |

Default template:

```markdown
# {{question}}

{{answer}}

---
Source: {{source}}
Created: {{date}}
```

## Excluded Folders

Exclude folders from flashcard indexing so cards in those folders are ignored. Useful for templates, archives, and non-study content. Enter comma-separated folder names:

```
Templates, Archive, Drafts
```

## Database Operations

**Rebuild Index** refreshes the note-to-card mapping. Use it if cards seem missing or after restructuring your vault.

**Vacuum Database** reclaims unused space and improves performance. Safe to run anytime.

**Export Data** exports all cards and review history as JSON for backup or analysis.

## Multi-Device Considerations

:::caution[Important Warning]
**Each device has its own separate SQLite database.** Obsidian Sync and other cloud sync services do NOT reliably sync SQLite databases.

**What can happen if you use multiple devices:**
- Database may not sync correctly
- You might see different data on different devices
- Example: Do reviews on desktop, open on mobile → progress may be missing

**Recommendation**: Use True Recall on one primary device until official Cloud Sync is available. See [Cloud Sync](/features/cloud-sync/) for more details.
:::

This per-device architecture is intentional -- it prevents database corruption from sync conflicts and enables full offline functionality. Official Cloud Sync will handle synchronization properly when it ships.
