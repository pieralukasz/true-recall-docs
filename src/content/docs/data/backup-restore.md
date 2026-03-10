---
title: "Backup & Restore"
sidebar:
  order: 1
description: "Protect your flashcard data with automatic and manual backups, and restore from any backup point."
---

:::caution[My Notes]
:::

Your review history is valuable — it takes months to build. **True Recall** stores everything in a SQLite database inside your vault at `.true-recall/true-recall-{device-id}.db`, with backups in `.true-recall/backups/`. Configure backups in `Settings → Data & Backup`.

## Manual Backup

`Settings → Data & Backup → Manual backup → Create backup`

Creates a timestamped copy in `.true-recall/backups/`. Do this before importing cards, optimizing FSRS parameters, or making major configuration changes.

## Automatic Backups

### On Plugin Load

`Settings → Data & Backup → Automatic backup on load`

Creates a backup each time Obsidian starts — a simple safety net you should keep enabled.

### Background Backups

`Settings → Data & Backup → Background Backup`

| Setting | Description |
|---------|-------------|
| **Enable periodic backups** | Auto-backup at intervals |
| **Backup interval** | Every 15/30/60/120/240 minutes |
| **Activity-triggered** | Backup after N reviews |
| **Reviews before backup** | Trigger threshold |

**Recommended:** Enable periodic backups every 60 minutes with activity-triggered backup after 50 reviews. This covers both timed and usage-based protection.

## Smart Retention

Keeps useful backups while saving disk space. Instead of accumulating every backup forever, smart retention thins older backups automatically.

`Settings → Data & Backup → Smart Retention`

| Tier | Default | Keeps |
|------|---------|-------|
| **Hourly** | 24 | One backup per hour for last 24 hours |
| **Daily** | 7 | One backup per day for last 7 days |
| **Weekly** | 4 | One backup per week for last 4 weeks |

Backups older than the weekly tier are deleted automatically.

## Restoring from Backup

`Settings → Data & Backup → Manual backup → Restore...`

1. Select a backup file from the list
2. Preview backup info (date, card count)
3. Confirm restore
4. **Obsidian reloads** to apply changes

A restore replaces your entire database — all cards, review history, FSRS scheduling data, statistics, and note types. After restoring, check [Dashboard](/views/dashboard/) to verify expected card counts.

:::caution[Create a Backup Before Restoring]
If the restore doesn't contain what you need, you'll want the current database to fall back to.
:::

## Backup Status

`Settings → Data & Backup → Backup Status`

Shows last backup time, next scheduled backup, reviews since last backup, and total backup count.

:::tip[External Backup]
For extra safety, periodically copy the `.true-recall/backups/` folder to external storage or a cloud drive. This protects against vault-level data loss.
:::

## What to Read Next

- [Device Databases](/data/device-databases/) — multi-device setup and database management
- [Database Integrity Check](/data/integrity-check/) — scan for orphaned cards and corrupted data
- [Cloud Sync Setup](/sync/setup/) — automatic syncing between devices
