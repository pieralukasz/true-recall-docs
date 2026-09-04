---
title: "Device Databases"
sidebar:
  order: 3
description: "Work with multiple device databases for different machines or separate study profiles."
---

:::caution[My Notes]
:::

Each device that runs **True Recall**, including phones and tablets, gets its own SQLite database. This means your phone, work laptop, and home computer can save reviews independently while offline.

## Where the Database Lives

The location of the database file depends on the sync mode chosen in `Settings → True Recall → Integrations → "Sync"`:

| Sync mode | Database folder | Why |
| --- | --- | --- |
| **Cloud Sync** or no sync (single device) | `.true-recall/local.nosync/` | Nothing else reads the file, so it stays out of iCloud: no full upload on every save, no conflict copies, no evicted file on iOS |
| **Shared vault** | `.true-recall/` | Other devices read the file straight out of the synced vault |

```
.true-recall/
├── local.nosync/
│   └── true-recall-{device-id}.db   # Cloud Sync and single-device modes
├── true-recall-{device-id}.db       # Shared vault mode
└── backups.nosync/{device-id}/      # per-device backups
```

When you change sync mode, the file (with its `.tmp` and `.bak` siblings) is moved to the right folder automatically on the next start. If the move fails, the old location keeps working and a notice tells you.

The device ID itself is not a file in the vault. It lives in Obsidian's device-local storage for this vault, so it never travels with a synced database or with `data.json`; a fresh install always gets its own ID.

## Current Device

`Settings → True Recall → Data & Backup → "Device database"`

Shows your **Device ID** (unique identifier) and database path, and lets you set a **Device name** (an optional friendly name like "work laptop" or "phone", stored locally).

Give each device a descriptive name; it makes switching and backups much easier to manage.

## Switching Devices

`Settings → True Recall → Data & Backup → "Device database" → "Switch database" → Switch...`

1. Pick one of the other device databases found in your vault (card counts are shown)
2. Confirm; True Recall creates a safety backup, then replaces the current database with the selected one
3. Restart Obsidian to load the imported database

**When to switch:** Moving between work and personal machines, testing a new configuration, or accessing someone else's database.

:::note[First start on a new device]
A device that has no database of its own starts with an empty one right away instead of blocking Obsidian's startup. If other device databases exist in the vault, True Recall offers to import one once the workspace is ready; the import requires a restart either way.
:::

## Importing a Database

### From File

1. `Settings → True Recall → Data & Backup → "Device database" → Switch...`
2. Click **"Import from file"**
3. Select the `.db` file
4. Choose to create a new device or replace an existing one

### From Another Vault

Copy the `.db` file from the other vault's `.true-recall/` (or `.true-recall/local.nosync/`) folder, then use "Import from file" to bring it in.

## Database Conflicts

If multiple devices modify the same database file without a clean handoff, you'll see inconsistencies: reviews you didn't do, missing data, or wrong statistics.

**Solutions:**

- Enable [**Cloud Sync**](/data/cloud-sync/) for account-based synchronization that does not depend on a shared vault
- Enable **Shared vault** in `Settings → True Recall → Integrations → "Sync"` if your vault is already synchronized across machines (reload Obsidian after changing it). In this mode the command **Sync devices now** merges the other devices' databases on demand
- Or use one device at a time and manually transfer the database
- Or keep completely separate databases per device

## Recommended Mobile Setup

Use **Cloud Sync** for the True Recall database and use Obsidian Sync, iCloud, or another vault service for Markdown notes and media. This avoids waiting for a complete SQLite file to download before True Recall can start.

On mobile, the operating system can suspend Obsidian in the background. Changes saved locally are synchronized after the app becomes active again.

## Backups and Devices

Backups are stored per-device inside `.true-recall/backups.nosync/{device-id}/`. Each device's backups are independent; restoring a backup only affects the active device database. The `.nosync` suffix prevents iCloud from transporting them, so copy important snapshots to separate storage. Always [create a backup](/data/backup-restore/) before switching devices.

:::note
Don't edit `.db` files directly. Use True Recall's interface to avoid corruption.
:::

## What to Read Next

- [Backup & Restore](/data/backup-restore/): protect your data with automatic and manual backups
- [Cloud Sync](/data/cloud-sync/): synchronize cards and review progress across devices
- [Database Integrity Check](/data/integrity-check/): scan for orphaned cards, notes, and review logs
- [General Settings](/configuration/general/): where to find the Integrations tab and sync modes
