---
title: "Cloud Sync"
sidebar:
  order: 2
description: "Keep True Recall cards and review progress synchronized across desktop and mobile devices."
---

Cloud Sync keeps your True Recall study database synchronized across devices while every device continues to use its own local SQLite database. It is free, but requires a True Recall account so each collection can be isolated from other users.

:::note[Cloud Sync does not replace vault sync]
Use iCloud, Obsidian Sync, or another file service for Markdown notes, images, and attachments. Cloud Sync handles the True Recall study database.
:::

## Recommended setup

For most people using True Recall on a computer and phone:

| Service | Use it for |
| --- | --- |
| **True Recall Cloud Sync** | Cards, note-type data, review history, and current scheduling state |
| **Obsidian Sync, iCloud, or another vault service** | Markdown notes, images, attachments, and vault configuration |
| **True Recall backups** | Historical snapshots that can recover an earlier local database |

Cloud Sync and a vault service can run at the same time because they synchronize different layers. The **Cloud Sync** and **Shared vault** modes inside True Recall are mutually exclusive.

## Connect a device

1. Open `Settings → True Recall → Integrations → "Sync"`.
2. Under **Cloud Sync**, select **Sign in**. While the browser is open the button reads **Open browser again**; after a failed attempt it reads **Try again**.
3. True Recall opens `truerecall.app` in your browser.
4. Sign in or create a free account. If you already have a browser session, you can authorize the device immediately.
5. The site opens the Obsidian vault where you started the request.
6. Obsidian completes the token exchange and starts the first sync.

The browser uses a short-lived, one-time authorization request. The plugin receives a device token, not your password or browser session.

### Connecting on iPhone, iPad, or Android

The same flow works on mobile. After the device is authorized, the site opens an `obsidian://` link. iOS or Android may show a system prompt asking whether you want to open Obsidian.

If Obsidian does not open automatically:

1. Tap **Open Obsidian** on the authorization page.
2. Approve the system prompt if one appears.
3. Make sure Obsidian is installed and True Recall is enabled in the vault where sign-in started.
4. If the request expired, return to True Recall settings and select **Try again**.

The authorization page includes the vault name in the Obsidian link. This matters when several vaults are available on the same device.

:::note[Every device signs in on its own]
Sync settings travel with the vault (through iCloud, Obsidian Sync, or git), but the sign-in does not. A phone that shares a vault with a signed-in desktop therefore shows Cloud Sync as turned on while the phone itself is not connected yet. The Dashboard shows a bar with **Sign in on this device** in that state, and Settings → Integrations says the same. Until you sign in there, reviews made on that device stay on that device.

When you request the sign-in email, open the link on the same device. The link completes sign-in in whichever browser opens it and then returns to Obsidian.
:::

## Device limits

| Plan | Connected devices |
|------|-------------------|
| Free account | 2 |
| Pro | 5 |

The limit is checked when a device signs in. Signing out of Cloud Sync on a device (Settings → Integrations → Sign out) revokes its token and frees its slot immediately, so replacing a phone never needs support. A device that is over the limit sees the reason in the sign-in error and keeps working locally.

## The first sync

The first exchange merges the local collection with the collection already associated with the account:

- if Cloud is empty, local cards are uploaded;
- if the local database is empty, Cloud data is downloaded;
- if both contain data, changed records are merged using the normal conflict rules.

The first sync may take longer for a large collection, but it does not block True Recall from loading. Reviews and edits continue to save locally while the exchange runs. Progress is saved after every page, so a dropped connection resumes where it stopped instead of starting over. On a phone, keep Obsidian in the foreground until the Dashboard shows **Synced just now**; tapping **Sync error** shows what went wrong and retries.

:::caution[Connecting a different account]
The local database belongs to the vault, not to a browser account. Connecting a vault containing cards to a different True Recall account can merge that local collection into the new account. Create a backup and verify the account email before switching accounts.
:::

## Everyday synchronization

Every review or edit is written to local SQLite first. Cloud Sync then exchanges only records changed since the previous successful sync.

Synchronization runs:

- shortly after a local card, note, or review change;
- when Obsidian returns to the foreground;
- every five minutes while the plugin is active, to pick up edits made on other devices;
- after connecting an account;
- manually through the command **Sync cloud now** (available only while Cloud Sync is enabled).

The dashboard can show:

- **Saved locally**: the local database is durable;
- **Syncing…**: an exchange is running;
- **Synced just now**: the latest exchange succeeded;
- **Sync error**: local work is safe, but Cloud has not accepted it yet.

When offline, True Recall remains fully usable. A failed exchange does not advance the local cursor, so pending changes are retried when connectivity returns.

:::note[Mobile background behavior]
Cloud Sync runs while Obsidian and the plugin are active. iOS and Android can suspend or close Obsidian in the background, so synchronization resumes when the app returns to the foreground. It is not an always-running native background service.
:::

## What is synchronized

Cloud Sync includes:

- card and note fields stored in the True Recall database;
- custom note types and templates;
- card scheduling state, suspension, and burial state;
- review history used to rebuild FSRS state and daily statistics;
- tombstones that propagate deletions to other devices.

Cloud Sync does not include:

- Markdown files in the vault;
- images, attachments, or image-occlusion source files;
- local SQLite backup files;
- general plugin configuration or API keys;
- most scheduling settings and FSRS preset definitions.

A card can therefore be available for review on a device even when its source Markdown note has not arrived through vault sync. Image-based cards also require their image files to be present on that device.

Keep FSRS presets consistent across devices. Vault sync normally transports the True Recall plugin configuration, but Cloud Sync does not currently distribute preset definitions by itself.

## Conflict behavior

### Ordinary edits

For ordinary card and note edits, the most recently updated record wins. When timestamps are identical, device IDs provide a deterministic tie-breaker so every device converges on the same version.

Cloud Sync does not currently present a side-by-side content conflict editor.

### Reviews on more than one device

Review history is merged rather than replaced. When the same card is reviewed independently on multiple devices, True Recall combines the review logs in chronological order and replays them through FSRS.

Concurrent duplicate cards are detected and merged after synchronization.

### Deletions

Deleted records leave tombstones. This allows an offline device to learn about the deletion later instead of accidentally restoring an obsolete copy.

## Cloud Sync and Shared vault

True Recall offers two database synchronization modes:

| | Cloud Sync | Shared vault |
| --- | --- | --- |
| **Transport** | Incremental records through the True Recall service | Per-device SQLite files transported by your vault service |
| **Account required** | Yes | No |
| **Works without a shared vault** | Yes | No |
| **Mobile behavior** | Does not wait for another full SQLite file | Can wait for iCloud or another provider to download database files |
| **Offline use** | Yes | Yes |

Use only one of these True Recall modes at a time. You can still use iCloud or Obsidian Sync for notes and attachments while **Cloud Sync** is active.

Switching modes is safe mid-session: enabling **Cloud Sync** turns **Shared vault** off and stops its file transport immediately, so the two never run at the same time. Changing **Shared vault** mode still requires reloading Obsidian. Disabling **Cloud Sync** stops network synchronization but leaves the local database intact.

### Where the database lives

In Cloud Sync mode the device database is stored in `.true-recall/local.nosync/`, a folder iCloud does not sync. Nothing else reads the file in this mode, and keeping it out of iCloud avoids a full upload on every save, conflict copies, and iOS evicting the file the plugin must read at startup. Shared vault mode keeps the database in `.true-recall/`, because other devices read it from there. When you switch modes, the file is moved on the next start; if the move fails, the old location keeps working and a notice tells you. See [Device Databases](/data/device-databases/) for details.

## Privacy and security

Cloud authorization uses a random state, a PKCE-style verifier and challenge, and a short-lived one-time code bound to the requesting device. The resulting device token can be revoked by signing out.

The raw token is stored in Obsidian SecretStorage when that API is available. On older Obsidian versions, it falls back to vault-specific local storage. The server stores a SHA-256 hash of the token rather than the token itself.

Cloud tables are isolated by account. Anonymous and normal authenticated database roles do not have direct table or sync-function access; exchanges go through the server-side Cloud Sync function.

Data is sent over HTTPS, but Cloud Sync is **not end-to-end encrypted**. Card and note fields are stored as application-readable data in the True Recall Supabase project. This allows the service to merge and validate records, but it is not a zero-knowledge design.

See the [Privacy Policy](/privacy/) for data location and retention details.

## Cloud Sync is not a backup

Cloud Sync maintains the latest shared state. If a deletion is synchronized, it is intentionally propagated to every connected device. A backup preserves an older snapshot that can be restored later.

True Recall backups remain per-device files under `.true-recall/backups.nosync/{device-id}/`. The `.nosync` suffix intentionally keeps them out of iCloud, and True Recall Cloud does not upload them. Copy important backups to separate storage yourself. Older installations may also contain the legacy `.true-recall/backups/` folder; True Recall still scans it during recovery.

:::caution[Restoring while Cloud Sync is enabled]
A local backup may contain older record timestamps than Cloud. After a restore, a later sync can download newer Cloud versions again. Disable Cloud Sync before restoring and keep the pre-restore backup. Replacing the entire Cloud collection from a local backup is not currently a supported self-service operation.
:::

Provider-level database backups, when available for the project's current hosting plan, protect the complete backend against service-level failure. They are operated for the whole project and are not a per-user **Restore my cards** feature. Continue using True Recall's local backups for user-controlled recovery.

Read [Backup & Restore](/data/backup-restore/) for backup frequency, retention, and restore instructions.

## Signing out or losing a device

Signing out revokes the current device token, disables Cloud Sync on that device, and keeps its local database. It does not delete the account's Cloud collection. Sign-out is verified: if the server cannot revoke the device token (for example, you are offline), your session is kept and an error is shown instead of leaving a live credential behind. Check your connection and try again.

If the server rejects the device token because the session expired, Cloud Sync is turned off on that device, the settings show the **Sign in** button again, and a notice asks you to sign in again in `Settings → True Recall → Integrations`. Nothing is lost locally; sign in and the next sync picks up where it left off.

:::note[Update every device]
Version 2.4.1 fixed the reliability gaps found in a review of the 2.4.0 sync path (skipped changes between devices, pulled data echoed back, interrupted syncs, oversized pushes). If you sync more than one device, update all of them.
:::

If a device is lost, install Obsidian and True Recall on another device, restore or synchronize the vault files, and connect the same True Recall account. Cloud Sync can restore the latest card and review state, while your vault provider restores Markdown and media files.

Self-service management for viewing all connected devices, revoking another device, or deleting the entire Cloud collection is not currently available in the web dashboard.

## What to read next

- [Device Databases](/data/device-databases/): how local databases work
- [Backup & Restore](/data/backup-restore/): protect the local copy of your collection
- [Troubleshooting](/reference/troubleshooting/): diagnose connection and sync errors
- [Obsidian URI documentation](https://help.obsidian.md/Extending%2BObsidian/Obsidian%2BURI): how Obsidian app links work
