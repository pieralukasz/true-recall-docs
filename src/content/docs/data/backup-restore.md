---
title: "Backup & Restore"
sidebar:
  order: 1
description: "Protect your flashcard data with automatic and manual backups, and restore from any backup point."
---

:::caution[My Notes]
:::

Your review history is valuable; it takes months to build. **True Recall** stores everything in a per-device SQLite database inside your vault (see [Device Databases](/data/device-databases/) for where the file lives in each sync mode), with backups in `.true-recall/backups.nosync/{device-id}/`. Configure backups in `Settings → True Recall → Data & Backup`.

## Manual Backup

`Settings → True Recall → Data & Backup → "Manual backup" → "Create backup now"`

Click **Create backup** (or run the command **Create database backup**) to create a timestamped copy in `.true-recall/backups.nosync/{device-id}/`. Do this before importing cards, optimizing FSRS parameters, or making major configuration changes. Older backups under the legacy `.true-recall/backups/` folder remain discoverable for recovery.

## Automatic Backups

### On Plugin Load

`Settings → True Recall → Data & Backup → "Database backup" → "Automatic backup on load"`

Creates a startup snapshot each time Obsidian starts. This is optional and is off by default; enable it if you want an extra safety net before each session. The snapshot runs shortly after launch, once the workspace layout is ready, so it does not slow down loading. It is a safety copy only and never overwrites your active database.

### Background Backups

`Settings → True Recall → Data & Backup → "Background backup"`

| Setting | Default | Description |
|---------|---------|-------------|
| **Enable periodic backups** | On | Auto-backup at regular intervals |
| **Backup interval** | Every hour | Every 15 minutes, 30 minutes, hour, 2 hours, or 4 hours (only when changes exist) |
| **Activity-triggered backup** | Off | Backup after a number of completed reviews |
| **Reviews before backup** | 50 | Trigger threshold (minimum 10) |

**Recommended:** Keep periodic backups on with the hourly interval and enable the activity-triggered backup after 50 reviews. This covers both timed and usage-based protection.

## Smart Retention

Keeps useful backups while saving disk space. Instead of accumulating every backup forever, smart retention thins older backups automatically.

`Settings → True Recall → Data & Backup → "Smart retention"`

| Tier | Default | Keeps |
|------|---------|-------|
| **Hourly backups** | 24 | One backup per hour for the last 24 hours |
| **Daily backups** | 7 | One backup per day for the last 7 days |
| **Weekly backups** | 4 | One backup per week for the last 4 weeks |

Set a tier to 0 to disable it. Backups older than the weekly tier are deleted automatically.

## Restoring from Backup

`Settings → True Recall → Data & Backup → "Manual backup" → "Restore from backup" → Restore...`

1. Select a backup file from the list (date and size are shown)
2. Click **Restore selected**
3. **Reload Obsidian** to apply changes

A restore replaces your entire database: all cards, review history, FSRS scheduling data, statistics, and note types. After restoring, check [Dashboard](/views/dashboard/) to verify expected card counts.

:::caution[Cloud Sync and restore]
Cloud Sync is not a versioned backup. Disable Cloud Sync before restoring a local backup. If Cloud contains newer versions of the same records, enabling synchronization again can download those versions over the restored local state. Replacing the entire Cloud collection from a backup is not currently a self-service operation. See [Cloud Sync](/data/cloud-sync/#cloud-sync-is-not-a-backup).
:::

:::caution[Create a Backup Before Restoring]
If the restore doesn't contain what you need, you'll want the current database to fall back to.
:::

## Backup Status

`Settings → True Recall → Data & Backup → "Backup status"`

Shows the last backup time, the next scheduled backup, reviews since the last backup, and the startup snapshot file when one was taken this session. The read-only **Storage diagnostics** section below it shows the active database path and the result of the last save, which is useful when reporting a problem.

:::tip[External Backup]
For extra safety, periodically copy `.true-recall/backups.nosync/` to external storage or a cloud drive. The `.nosync` suffix intentionally excludes these files from iCloud, so the folder is not an off-device backup by itself. A separate copy protects against device or vault loss.
:::

## Backup, Cloud Sync, and Vault Sync

These systems solve different problems:

| System | Protects against | Does not replace |
| --- | --- | --- |
| **True Recall backup** | Accidental deletion, corruption, or a bad import | Off-device storage unless the vault itself is backed up |
| **Cloud Sync** | Losing the latest card and review state on one device | Historical snapshots or Markdown/media sync |
| **Obsidian Sync, iCloud, or another vault backup** | Losing Markdown files, attachments, and vault configuration | A user-controlled True Recall database snapshot |

For strong protection, keep automatic True Recall backups enabled and store the vault on a service or disk that is backed up independently.

## What to Read Next

- [Import & Export](/data/import-export/): import from Anki or export to CSV/Anki format
- [Device Databases](/data/device-databases/): multi-device setup and database management
- [Database Integrity Check](/data/integrity-check/): scan for orphaned cards, notes, and review logs
