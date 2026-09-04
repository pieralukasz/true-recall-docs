---
title: "Database Integrity Check"
sidebar:
  order: 3
description: "Scan your database for orphaned cards, missing references, and corrupted data."
---

:::caution[My Notes]
:::

The **Integrity Check** scans your database for orphaned records that can accumulate over time: cards, notes, and review logs whose parent record no longer exists.

## What It Finds

| Issue | Description |
|-------|-------------|
| **Orphaned cards** | Cards whose database note record is missing |
| **Orphaned notes** | Notes whose note type no longer exists |
| **Orphaned review logs** | Review logs that reference deleted cards |

Records already soft-deleted are ignored.

## Running the Check

`Settings → True Recall → Data & Backup → "Database integrity" → "Check integrity" → Check now`

The scan takes a few seconds. If nothing is wrong you see "Database integrity OK". Otherwise a dialog lists how many orphaned cards, notes, and review logs were found and asks whether to soft-delete them.

## Repairing Issues

Confirm the dialog to repair. True Recall first creates a safety backup, then marks every orphaned record as deleted in one transaction and reports how many records were fixed. Nothing is physically removed from the file, so a backup restore brings the records back if you need them.

:::caution[Backup First]
The repair creates a backup automatically, but it is still worth [creating a backup](/data/backup-restore/) yourself before running repairs on a large collection. If something goes wrong, you can restore.
:::

## When to Run It

- After importing cards from external sources
- After plugin updates
- If cards appear that shouldn't exist, or expected cards are missing
- If [Statistics](/views/statistics/) seem wrong
- Monthly as general maintenance

## What to Read Next

- [Backup & Restore](/data/backup-restore/): restore if repairs cause issues
- [Device Databases](/data/device-databases/): multiple database management
