---
title: Cloud Sync
description: Synchronize your flashcards across devices with True Recall Cloud
---

True Recall Cloud enables cross-device synchronization, letting you study on any device while keeping your progress in sync.

## Overview

Cloud sync allows you to:
- **Study on multiple devices** (desktop, laptop, mobile)
- **Keep progress synchronized** automatically
- **Recover from data loss** with cloud backup
- **Switch devices** seamlessly

## How It Works

### Architecture

```
Device A ←→ True Recall Cloud ←→ Device B
   ↓              ↓                 ↓
Local DB    Supabase Server     Local DB
```

Each device maintains a local database that syncs with the cloud server.

### What Syncs

- **Cards**: All flashcard content and metadata
- **Review History**: Complete review log
- **Scheduling Data**: FSRS states and intervals
- **Card States**: Suspended, buried status

### What Doesn't Sync

- **Settings**: Per-device configuration
- **Projects**: Stored in vault frontmatter
- **Source Notes**: Part of your Obsidian vault
- **Statistics Cache**: Regenerated locally

## Getting Started

### Step 1: Create Account

1. Go to Settings → True Recall → Cloud Sync
2. Click "Sign Up"
3. Enter your email and password
4. Verify your email (check inbox)
5. Sign in

### Step 2: First Sync

After signing in:

1. Click "Sync Now"
2. If you have existing data on both local and cloud, you'll see a conflict dialog
3. Choose how to resolve:
   - **Merge**: Combine both datasets (recommended)
   - **Upload**: Replace cloud with local data
   - **Download**: Replace local with cloud data

### Step 3: Regular Syncing

Sync happens:
- **Manually**: Click "Sync Now" button
- **On demand**: When you want to ensure latest data

## Sync Operations

### Normal Sync

Default operation that:
1. Pulls changes from cloud
2. Merges with local changes
3. Pushes updates to cloud
4. Uses last-write-wins for conflicts

### Force Upload

Replace cloud data with local:
- Overwrites everything on server
- Use when local is authoritative
- Useful for recovery or fresh start

:::caution
Force upload deletes all cloud data before uploading. Other devices will lose their un-synced changes.
:::

### Force Pull

Replace local data with cloud:
- Downloads everything from server
- Replaces local database
- Use when cloud is authoritative

:::caution
Force pull deletes all local data. Ensure cloud has your latest reviews.
:::

## Conflict Resolution

### Last-Write-Wins (LWW)

Normal sync uses LWW:
- Most recent change wins
- Based on timestamp
- Automatic, no intervention needed

### First Sync Conflicts

When you first sync with existing data:
- Dialog shows local vs cloud card counts
- Choose merge strategy
- One-time decision per device

### Manual Resolution

For complex conflicts:
1. Force pull to get cloud state
2. Or force upload to set your state
3. Sync again to verify

## Multi-Device Workflow

### Recommended Setup

1. **Primary device**: Where you mainly review
2. **Secondary devices**: For on-the-go study
3. **Sync before and after** each session

### Daily Workflow

```
Morning (Desktop):
1. Start Obsidian
2. Sync to get changes
3. Review cards
4. Sync when done

Commute (Mobile):
1. Open Obsidian Mobile
2. Sync to get latest
3. Quick review
4. Sync when done

Evening (Desktop):
1. Sync to get mobile progress
2. Continue if needed
```

## Device Management

### Device Identification

Each device has a unique ID:
- Generated on first sync
- Stored locally
- Visible in settings

### Device Labels

Add friendly names to devices:
1. Go to Settings → True Recall → Data
2. Set "Device Name"
3. Helps identify devices in logs

### Multiple Databases

Advanced: maintain separate study profiles:
- Different databases per device
- Switch between databases
- Useful for separate collections

## Security

### Data Encryption

- **In transit**: TLS encryption
- **At rest**: Supabase security
- **Authentication**: Secure tokens

### Privacy

- Email used for account only
- No personal data collected
- Cards encrypted on server

### Account Security

- Use strong password
- Keep credentials safe
- Can reset password via email

## Troubleshooting

### Sync Fails

**"Network error"**
- Check internet connection
- Verify server is reachable
- Try again later

**"Authentication error"**
- Re-enter credentials
- Sign out and sign in again
- Check account status

**"Conflict detected"**
- Review conflict dialog
- Choose appropriate resolution
- Try sync again

### Data Mismatch

If card counts differ across devices:

1. Check last sync time on each device
2. Identify which device has latest data
3. From authoritative device: Force upload
4. On other devices: Force pull

### Account Issues

**Forgot password**
- Use "Forgot Password" link
- Check email for reset link
- Set new password

**Can't verify email**
- Check spam folder
- Request new verification
- Contact support if needed

## Offline Mode

True Recall works fully offline:
- Review cards without internet
- Changes saved locally
- Sync when back online

### Best Practice

Before going offline:
1. Sync to get latest
2. Study as needed
3. Sync when online again

## Technical Details

### Backend

- **Supabase**: PostgreSQL + Auth
- **Real-time**: Not implemented (manual sync)
- **API**: REST + RPC functions

### Data Format

- JSON payloads
- Compressed for transfer
- Schema version tracking

### Rate Limits

- Reasonable sync frequency
- No strict limits currently
- Be considerate of resources

## FAQ

**Q: Is cloud sync required?**
A: No, True Recall works fully locally. Cloud is optional.

**Q: Is there a free tier?**
A: Yes, basic sync is free. Check current limits.

**Q: Can I self-host?**
A: Not currently, but data is exportable.

**Q: What if servers go down?**
A: Your local data remains. Wait for restoration.
