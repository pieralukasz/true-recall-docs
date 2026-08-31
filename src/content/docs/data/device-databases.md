---
title: "Device Databases"
sidebar:
  order: 3
description: "Work with multiple device databases for different machines or separate study profiles."
---

:::caution[My Notes]
:::

Each device that runs **True Recall**, including phones and tablets, gets its own SQLite database. This means your phone, work laptop, and home computer can save reviews independently while offline.

```
.true-recall/
├── true-recall-device1.db
├── true-recall-device2.db
└── device-id              # identifies which database is active
```

## Current Device

`Settings → Data & Backup → Device Database`

Shows your **Device ID** (unique identifier), **Device name** (optional friendly name like "macbook-work"), and **Database path**.

Give each device a descriptive name — it makes switching and backups much easier to manage.

## Switching Devices

`Settings → Data & Backup → Device Database → Switch...`

1. Select from available devices in your vault
2. Or import a database from another location
3. Obsidian reloads with the new database

**When to switch:** Moving between work and personal machines, testing a new configuration, or accessing someone else's database.

## Importing a Database

### From File

1. `Settings → Device Database → Switch...`
2. Click **"Import from file"**
3. Select the `.db` file
4. Choose to create a new device or replace an existing one

### From Another Vault

Copy the `.db` file from the other vault's `.true-recall/` folder, then use "Import from file" to bring it in.

## Database Conflicts

If multiple devices modify the same database file without a clean handoff, you'll see inconsistencies — reviews you didn't do, missing data, or wrong statistics.

**Solutions:**

- Enable [**Cloud Sync**](/data/cloud-sync/) for account-based synchronization that does not depend on a shared vault
- Enable **Shared vault** in `Settings → True Recall → Integrations` if your vault is already synchronized across machines
- Or use one device at a time and manually transfer the database
- Or keep completely separate databases per device

## Recommended Mobile Setup

Use **Cloud Sync** for the True Recall database and use Obsidian Sync, iCloud, or another vault service for Markdown notes and media. This avoids waiting for a complete SQLite file to download before True Recall can start.

On mobile, the operating system can suspend Obsidian in the background. Changes saved locally are synchronized after the app becomes active again.

## Backups and Devices

Backups are stored per-device inside `.true-recall/backups.nosync/{device-id}/`. Each device's backups are independent — restoring a backup only affects the active device database. The `.nosync` suffix prevents iCloud from transporting them, so copy important snapshots to separate storage. Always [create a backup](/data/backup-restore/) before switching devices.

:::note
Don't edit `.db` files directly. Use True Recall's interface to avoid corruption.
:::

## What to Read Next

- [Backup & Restore](/data/backup-restore/) — protect your data with automatic and manual backups
- [Cloud Sync](/data/cloud-sync/) — synchronize cards and review progress across devices
- [Database Integrity Check](/data/integrity-check/) — scan for orphaned cards and corrupted data
- [General Settings](/configuration/general/) — where to find the Integrations tab and sync modes
