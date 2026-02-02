---
title: Data & Backup
description: Manage your flashcard database, backups, and storage settings
---

Data & Backup settings control where your flashcard data is stored, how backups work, and manage database operations.

## Accessing Settings

1. Open Obsidian Settings (`Cmd/Ctrl+,`)
2. Scroll to "True Recall"
3. Select "Data & Backup" tab

## Database Information

### Database Location

Your flashcard database is stored at:
```
<vault>/.true-recall/true-recall-<device-id>.db
```

### Device ID

Each device has a unique identifier:
- Generated automatically
- Used for multi-device support
- Shown in settings

### Database Size

View current database size:
- Cards count
- Review log entries
- Approximate file size

## Backup Settings

### Auto-Backup on Load

Automatically backup when plugin loads:
- **On**: Creates backup on each Obsidian start
- **Off**: Manual backups only

**Recommendation**: Keep enabled for safety.

### Maximum Backups

Number of backup files to keep:

| Setting | Behavior |
|---------|----------|
| **5** | Keep last 5 backups |
| **10** | Keep last 10 backups |
| **20** | Keep last 20 backups |

Old backups are deleted when limit exceeded.

### Backup Location

Backups stored at:
```
<vault>/.true-recall/backups/
```

Filenames: `true-recall-<timestamp>.db`

## Backup Operations

### Create Backup Now

Manually create a backup:

1. Click "Create Backup Now"
2. Backup created with current timestamp
3. Confirmation message shown

### Restore from Backup

Recover previous database state:

1. Click "Restore from Backup"
2. Select backup from list
3. Confirm restoration
4. Database replaced with backup

:::caution
Restoration overwrites current data. Create a backup first if unsure.
:::

### Managing Backups

Backup files can be:
- Viewed in file explorer
- Manually deleted if needed
- Copied for external storage

## Device Management

### Device Name

Set a friendly name for this device:
- Helps identify devices
- Shown in sync logs
- Optional but recommended

### Switch Database

Change to a different device database:

1. Click "Switch Database"
2. Select from available databases
3. Confirm switch
4. Plugin reloads with new database

### Use Cases for Multiple Databases

- Separate study profiles
- Testing vs production
- Different subject collections

## Zettel Settings

### Zettel Folder

Where to save generated zettel notes:
- Default: Root of vault
- Customize path as needed

### Zettel Template

Template for created zettel notes:

Variables available:
| Variable | Replaced With |
|----------|---------------|
| `{{question}}` | Card question |
| `{{answer}}` | Card answer |
| `{{source}}` | Source note link |
| `{{date}}` | Current date |
| `{{time}}` | Current time |
| `{{card_id}}` | Card identifier |

### Default Template

```markdown
# {{question}}

{{answer}}

---
Source: {{source}}
Created: {{date}}
```

## Excluded Folders

### What It Does

Exclude folders from flashcard indexing:
- Cards in these folders ignored
- Useful for templates/archives

### Configuration

Comma-separated folder names:
```
Templates, Archive, Drafts
```

### When to Exclude

- Template folders
- Archive/old notes
- Temporary folders
- Non-study content

## Database Operations

### Rebuild Index

Refresh the note-to-card index:
- Use if cards seem missing
- After vault restructure
- Fixes sync issues

### Vacuum Database

Optimize database file:
- Reclaims unused space
- Improves performance
- Safe operation

### Export Data

Export cards and history:
- JSON format
- All cards and reviews
- For backup or analysis

## Multi-Device Considerations

### Each Device Has Own Database

By design:
- Prevents conflicts
- Enables offline use
- Sync unifies data

### Syncing Databases

With cloud sync enabled:
- Local changes push to cloud
- Cloud changes pull to local
- Conflicts resolved automatically

### Database Per Device vs Shared

| Approach | Pros | Cons |
|----------|------|------|
| **Per device** | No conflicts, works offline | Needs sync |
| **Shared (not supported)** | Single source | Corruption risk |

## Recovery Scenarios

### Accidental Deletion

If cards accidentally deleted:
1. Check recent backups
2. Restore from backup
3. Lose changes since backup

### Corrupted Database

If database won't load:
1. Try latest backup
2. Try older backups
3. Contact support if needed

### Lost All Data

If no backups available:
1. Check cloud sync (if enabled)
2. Check vault sync backups
3. May need to regenerate cards

## Best Practices

### Backup Strategy

1. Enable auto-backup
2. Keep 10-20 backups
3. Periodically export
4. Consider external backup

### Before Major Changes

Create manual backup before:
- FSRS optimization
- Bulk operations
- Plugin updates
- Database experiments

### Regular Maintenance

- Check backup count monthly
- Vacuum database quarterly
- Verify backups work
- Monitor database size

## Troubleshooting

### "Database Locked"

If database won't open:
- Close other Obsidian windows
- Check for crashed processes
- Restart Obsidian

### "Backup Failed"

If backup creation fails:
- Check disk space
- Verify folder permissions
- Check backup path exists

### "Restore Failed"

If restoration fails:
- Backup file may be corrupted
- Try different backup
- Check file permissions
