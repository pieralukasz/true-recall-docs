---
title: "Database Integrity Check"
sidebar:
  order: 3
description: "Scan your database for orphaned cards, missing references, and corrupted data."
---

:::caution[My Notes]
:::

The **Integrity Check** scans your database for problems that can accumulate over time — orphaned cards, missing references, duplicate UIDs, and corrupted records.

## Common Issues

| Issue | Description |
|-------|-------------|
| **Orphaned cards** | Cards whose source notes were deleted or moved |
| **Orphaned notes** | Notes without a valid note type |
| **Missing review logs** | Review logs that reference deleted cards |
| **Duplicate UIDs** | Multiple notes sharing the same `flashcard_uid` |
| **Corrupted records** | Malformed database entries |

## Running the Check

`Settings → Data & Backup → Database Integrity → Check now`

The scan takes a few seconds and produces a report showing total cards, notes, and review logs alongside any issues found.

## Repairing Issues

Click **"Repair All"** to fix everything automatically:

| Issue | Repair Action |
|-------|---------------|
| Orphaned cards | Delete or reassign |
| Orphaned notes | Reassign to default type |
| Missing review logs | Delete orphaned logs |
| Duplicate UIDs | Generate new UIDs |

For individual issues, you can choose to **Keep** (leave as-is), **Delete** (remove the record), or **Reassign** (link to an existing entity).

:::caution[Backup First]
Always [create a backup](/data/backup-restore/) before running repairs. If something goes wrong, you can restore.
:::

## When to Run It

- After importing cards from external sources
- After plugin updates
- If cards appear that shouldn't exist, or expected cards are missing
- If [Statistics](/views/statistics/) seem wrong
- Monthly as general maintenance

## What to Read Next

- [Backup & Restore](/data/backup-restore/) — restore if repairs cause issues
- [Device Databases](/data/device-databases/) — multiple database management
