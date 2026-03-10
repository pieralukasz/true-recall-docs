---
title: "Device Databases"
sidebar:
  order: 2
description: "Work with multiple device databases for different machines or separate study profiles."
---

:::caution[My Notes]
:::

Each device that runs **True Recall** gets its own SQLite database. This means your laptop and phone each have independent review histories, card states, and scheduling data.

```
.true-recall/
├── true-recall-device1.db
├── true-recall-device2.db
└── device-id              # identifies which database is active
```

## Current Device

`Settings → Data & Backup → Device Database`

Shows your **Device ID** (unique identifier), **Device name** (optional friendly name like "macbook-work" or "iphone"), and **Database path**.

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

If multiple devices modify the same database file without sync, you'll see inconsistencies — reviews you didn't do, missing data, or wrong statistics.

**Solutions:**
- Use [Cloud Sync](/sync/setup/) for automatic syncing between devices (recommended)
- Or use one device at a time and manually transfer the database
- Or keep completely separate databases per device

## Backups and Devices

Backups are stored per-device inside `.true-recall/backups/`. Each device's backups are independent — restoring a backup only affects the active device database. Always [create a backup](/data/backup-restore/) before switching devices.

:::note
Don't edit `.db` files directly. Use True Recall's interface to avoid corruption.
:::

## What to Read Next

- [Backup & Restore](/data/backup-restore/) — protect your data with automatic and manual backups
- [Database Integrity Check](/data/integrity-check/) — scan for orphaned cards and corrupted data
- [Cloud Sync Setup](/sync/setup/) — automatic syncing between devices
