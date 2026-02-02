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

### Backup Location

Backups are stored per-device at:
```
<vault>/.true-recall/backups/<device-id>/
```

Filenames: `true-recall-backup-YYYY-MM-DD-HHmmss.db`

## Background Backup System

True Recall features an advanced background backup system with multiple trigger options and smart retention, similar to Apple's Time Machine.

### Periodic Backups

Enable automatic backups at regular intervals:

| Interval | Use Case |
|----------|----------|
| **15 min** | Heavy study sessions |
| **30 min** | Regular use |
| **1 hour** | Default, balanced |
| **2 hours** | Light usage |
| **4 hours** | Minimal usage |

**Smart dirty tracking**: Backups only occur when data has changed since the last backup, preventing unnecessary duplicates.

**Default**: Disabled (enable in settings)

### Activity-Triggered Backups

Trigger backups based on review activity instead of (or in addition to) time intervals:

- Automatically backs up after N reviews
- Default threshold: **50 reviews**
- Minimum: 10 reviews
- Works independently of periodic backups

**When to use**: Ideal if you do intensive review sessions and want backups tied to actual usage rather than time.

### Smart Retention Policy

The retention policy uses a multi-tier approach that keeps recent backups densely and older ones sparsely:

| Tier | Description | Default | Range |
|------|-------------|---------|-------|
| **Hourly** | One backup per hour | 24 hours | 0-48 |
| **Daily** | One backup per day | 7 days | 0-30 |
| **Weekly** | One backup per week | 4 weeks | 0-12 |

**How it works**:
1. For each tier, the system selects the **newest** backup within each time bucket
2. Backups can be kept by multiple tiers (a backup from today counts for hourly AND daily)
3. Backups not selected by any tier are automatically deleted

**Example with defaults (24h/7d/4w)**:
- Last 24 hours: Keep one backup per hour (up to 24 backups)
- Last 7 days: Keep one backup per day (up to 7 backups)
- Last 4 weeks: Keep one backup per week (up to 4 backups)

This means you might have ~35 backups total, with dense coverage recently and sparse coverage historically.

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
4. **Safety backup automatically created** before restoration
5. Reload Obsidian to apply changes

:::tip[Safety First]
Restoration automatically creates a safety backup before overwriting your current data. You can always go back if the restored backup wasn't what you needed.
:::

### Managing Backups

Backup files can be:
- Viewed in file explorer
- Manually deleted if needed
- Copied for external storage

### Delete Individual Backups

Remove specific backups you no longer need:
- Useful for cleaning up large backups
- Doesn't affect retention policy

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

### Syncing Databases (Coming Soon)

With cloud sync enabled (planned feature):
- Local changes will push to cloud
- Cloud changes will pull to local
- Conflicts will be resolved automatically

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
1. Check cloud sync (when available)
2. Check vault sync backups
3. May need to regenerate cards

## Best Practices

### Recommended Backup Configuration

For most users:
1. Enable **periodic backups** at 1-hour interval
2. Enable **activity-triggered backups** at 50 reviews
3. Use default retention policy (24h/7d/4w)

For heavy users:
1. Enable **periodic backups** at 30-minute interval
2. Enable **activity-triggered backups** at 25 reviews
3. Increase hourly retention to 48 hours

### Before Major Changes

Create manual backup before:
- FSRS optimization
- Bulk operations
- Plugin updates
- Database experiments

### Regular Maintenance

- Check backup status in settings
- Vacuum database quarterly
- Verify backups work periodically
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

### Backups Not Running

If automatic backups aren't working:
- Verify periodic backup is enabled in settings
- Check that interval is not set to 0
- Confirm changes have been made (dirty flag tracking prevents unnecessary backups)
- Check console for error messages
