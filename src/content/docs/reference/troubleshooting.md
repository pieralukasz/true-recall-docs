---
title: Troubleshooting
sidebar:
  label: "Troubleshooting"
  order: 5
description: "Solutions to common issues with True Recall: cards not appearing, AI errors, sync problems, mobile load stalls, and performance."
---

:::caution[My Notes]
:::

Common issues and how to fix them. If your problem isn't listed here, check the [GitHub Issues](https://github.com/pieralukasz/true-recall/issues) page.

## Cards Not Appearing for Review

**Symptoms:** Dashboard shows 0 due cards, but you know you have cards to review.

**Check these in order:**

1. **Daily limits reached**: check `Settings → True Recall → FSRS → "Daily limits"`. If you've hit **New cards per day** or **Reviews per day**, no more cards appear until tomorrow. Setting **Reviews per day** to 0 means unlimited.

2. **Cards are suspended**: open the [Card Browser](/views/card-browser/) and search `is:suspended`. Unsuspend cards you want to review.

3. **Cards are buried**: sibling burying temporarily hides related cards until the next day. Search `is:buried` in the Card Browser. They'll return automatically tomorrow.

4. **Wrong day boundary**: if you study late at night, check `Settings → True Recall → General → "Day boundary" → "Next day starts at"`. Default is 4 AM, so reviews before that time count as the previous day.

5. **Cards not collected**: new flashcards written in block format must be collected into the database via the [Flashcard Panel](/views/flashcard-panel/). Open the panel and check for uncollected cards.

6. **Project is archived**: archived projects don't show cards in the Dashboard. Check if your project is archived.

## AI Generation Not Working

**Symptoms:** Quick Actions Toolbar buttons are disabled or generation fails.

1. **No AI provider configured**: you need either a Pro key, your own OpenRouter key, LM Studio, or a custom provider. Check `Settings → True Recall → Features → "AI provider"`.

2. **Budget exceeded**: the free trial has a one-time budget (~100 cards). Pro resets monthly. Check usage on your [dashboard](https://truerecall.app/dashboard). You can upgrade to Pro or add an OpenRouter key as fallback.

3. **Model unavailable**: some models may be temporarily unavailable. Try a different model in `Settings → True Recall → Features → "AI provider"`.

4. **Text too short**: the Quick Actions Toolbar requires at least 3 characters selected.

5. **Wrong context**: the toolbar only appears in Markdown note editing mode, not inside review cards or the Card Browser.

6. **AI Workspace disabled**: generation and Card Polish run inside the AI Workspace. Make sure it is enabled in `Settings → True Recall → Features → "Features"`.

## Typed Answer Grading Issues

**Symptoms:** Typed answers are not graded, or the assessment panel says grading is unavailable.

1. **Typed answers are off**: set `Settings → True Recall → General → "Review interface" → "Typed answers"` to **AI grading**, or press `T` during a review session to toggle it. Typed answer grading is included with True Recall Pro.

2. **No grading model or key**: the verdict comes from the **Grading model** configured in `Settings → True Recall → Features → "AI provider"`. If the provider has no key, the panel shows "AI grading unavailable. Please rate manually." and you rate the card yourself.

3. **Timeout**: grading waits up to 20 seconds for the model. On a slow connection it gives up with the same message; rate manually and move on. There is no local text-diff fallback any more.

4. **Unexpected verdicts**: the grader sees the question, your answer, the expected answer and an excerpt of the source note. If a card's answer is ambiguous or incomplete, fix the card rather than the grader. See [Typed Answers](/review/type-in-mode/).

## Sync Problems

**Symptoms:** Cards not merging across devices, sync errors, or stale review history.

1. **Sync disabled**: check `Settings → True Recall → Integrations → "Sync"` and enable either **Cloud Sync** or **Shared vault**. The two modes cannot run together; enabling Cloud Sync stops the shared-vault transport immediately.

2. **Cloud account disconnected**: Cloud Sync requires a True Recall account. Since 2.4.1 an expired device session shows the sign-in prompt again in Settings instead of a connected account that silently stops syncing. Sign in again; local studying remains available while disconnected.

3. **Devices on different versions**: 2.4.1 fixed several exchange bugs (changes skipped between devices syncing at the same moment, pulled rows echoed back, oversized pushes wedging sync). If you sync more than one device, update all of them.

4. **Vault sync not finished**: Shared vault mode depends on your vault sync setup. Wait until the `.true-recall` files are fully downloaded before opening Obsidian on another machine.

5. **Plugin open on another device**: in Shared vault mode, close Obsidian on the other device if True Recall warns about an active device lock.

6. **Still stale**: run **True Recall: Sync cloud now** (Cloud Sync) or **True Recall: Sync devices now** (Shared vault), then inspect the dashboard sync status. See [Cloud Sync](/data/cloud-sync/) for conflict behavior and synchronized data.

### Browser does not return to Obsidian

1. On the authorization page, select **Open Obsidian** manually.
2. On iPhone, iPad, or Android, approve the system prompt asking to open Obsidian.
3. Confirm that Obsidian is installed and True Recall is enabled in the vault where sign-in started.
4. Return to `Settings → True Recall → Integrations → "Sync"` and select **Try again** if the request expired.

The callback is tied to the original vault and authorization request. Starting sign-in in one vault and completing it in another will not silently connect the wrong collection.

## Mobile: plugin is taking long to load

**Symptoms:** On iPhone or iPad, Obsidian reports that True Recall is taking long to load, or the plugin never finishes starting. Typical for vaults synced through iCloud Drive.

1. **iCloud offloaded the database**: in Cloud Sync and single-device modes the per-device database now lives in `.true-recall/local.nosync/`, a folder iCloud does not sync. Earlier versions kept it directly in `.true-recall/`, where iCloud could evict the file on iOS (so the plugin had to download tens of megabytes before it could start), uploaded it again on every desktop flush, and produced conflict copies. Update to the current release: the file is moved automatically on the next start, and if the move fails the old location keeps working. Shared Vault mode keeps the database in `.true-recall/` on purpose, because that mode transports the database through your vault sync.

2. **No more full rewrite on startup**: the device label used to be written on every launch, which exported and rewrote the whole database one second after loading. It is now written only when it changed.

3. **Old version on the phone**: before 2.3.0 a device without its own database ran the full database discovery and waited for the database selection dialog inside plugin load, which blocked Obsidian. Since 2.3.0 the dialog waits for the workspace, and since 2.3.2 the startup merge is deferred until the layout is ready. Make sure the phone runs the same version as the desktop.

4. **Conflict copies left behind**: if iCloud already produced `.true-recall` conflict copies, delete them on the desktop after confirming the live database opens correctly. Backups live in a `.nosync` folder since 2.2.0, so they are not part of the transfer.

## Performance Issues

**Symptoms:** Obsidian feels slow, especially with large collections.

1. **Run integrity check**: `Settings → True Recall → Data & Backup → "Database integrity" → "Check integrity"`. This finds and fixes orphaned records. See [Database Integrity Check](/data/integrity-check/).

2. **Large collection**: collections over 10,000 cards may take longer to load. This is expected. Statistics calculations are the most intensive; they're computed from SQLite and cached.

3. **Many embedded dashboards**: each `true-recall-*` codeblock is a live widget that updates as you review. If you have dozens of them in a single note, try reducing them or splitting across notes.

4. **Backup size**: automatic backups can accumulate. Check backup settings in [Backup & Restore](/data/backup-restore/).

## Import Errors

**Symptoms:** Anki import fails or cards are missing.

1. **Unsupported .apkg version**: True Recall supports both legacy (collection.anki2) and modern (collection.anki21, collection.anki21b) formats. Very old Anki exports may not be compatible.

2. **Corrupted file**: try re-exporting from Anki. Ensure the export completes without errors.

3. **Duplicate detection**: cards with identical questions are skipped as duplicates. This is expected behavior; check the "Duplicates" count in the import result.

4. **Media not showing**: imported media goes to the folder chosen in the import dialog. The default is `Anki Import` unless you set `Settings → True Recall → Data & Backup → "Storage locations" → "Default Anki import folder"`. If images don't render, check that the files exist there and that Obsidian's attachment folder settings don't conflict.

## Database Issues

**Symptoms:** Errors about corrupted database, missing cards, unexpected behavior.

1. **Run integrity check**: `Settings → True Recall → Data & Backup → "Database integrity" → "Check integrity"`. This detects orphaned cards, missing references, and corruption.

2. **Restore from backup**: if the database is corrupted, restore from a recent backup. See [Backup & Restore](/data/backup-restore/). Since 2.2.0 database writes are atomic and a truncated file is salvaged on load from its temp and backup copies, so an interrupted write no longer costs you a session.

3. **Device database mismatch**: each device has its own SQLite database. If you switch devices, ensure sync is working properly. See [Device Databases](/data/device-databases/).

## Falling Behind on Reviews

**Symptoms:** Hundreds or thousands of overdue cards piling up.

This isn't a bug, it's a workload problem. Here's how to recover:

1. **Don't try to do everything at once**: a backlog of 500 cards doesn't mean you should do 500 reviews today.

2. **Use Postpone**: `Settings → True Recall → FSRS → "Bulk operations" → "Postpone all due cards"`. Push all due cards forward by N days. This spreads the backlog over time.

3. **Sort by Relative Overdueness**: in a [Custom Study](/review/cramming/) session, set sort order to "Relative overdueness". This prioritizes cards that are most overdue relative to their stability, focusing on what matters most.

4. **Increase daily limits temporarily**: bump your review limit to 1.5x your normal target for a week.

5. **Enable Load Balancing**: `Settings → True Recall → FSRS → "Load balance" → "Enable load balancing"` spreads the overdue backlog across upcoming days instead of piling it onto today, and prevents future spikes. See [Load Balancing](/scheduling/workload-management/#load-balancing).

6. **Suspend low-priority cards**: in the [Card Browser](/views/card-browser/), find and suspend cards from topics you're not actively studying.

:::note[FSRS Handles Overdue Cards Well]
Unlike older algorithms, FSRS recalculates intervals based on actual time elapsed. If you remember an overdue card, FSRS recognizes this as evidence of strong memory and gives a longer interval. You won't be punished for a break.
:::

## MCP / Local API Issues

**Symptoms:** Claude Code can't connect to True Recall, MCP tools or CLI commands return errors.

1. **API not enabled**: go to `Settings → True Recall → Integrations → "Local API"` and turn on **Enable local API**. See [MCP Server](/reference/mcp-server/) for full setup.

2. **Obsidian not running**: the Local API only works while Obsidian is open with True Recall loaded.

3. **Running on a phone or tablet**: the Local API is desktop only. The section does not appear in Integrations on mobile, and the CLI and MCP server cannot connect to a mobile device.

4. **Port conflict**: if another service uses the configured port, True Recall tries the next port (27183, 27184, ...) and logs the one it bound. Point the CLI at it with `--port` or set `TRUE_RECALL_PORT` for the MCP server, or change **Port** in Integrations and restart Obsidian.

5. **Assistant setup incomplete**: recheck your assistant's True Recall integration setup after changing the Local API port.

## What to Read Next

- [Database Integrity Check](/data/integrity-check/): detect and fix database issues
- [Backup & Restore](/data/backup-restore/): protect your data
- [Workload Management](/scheduling/workload-management/): prevent overload
- [Card Browser](/views/card-browser/): find and manage problem cards
- [MCP Server](/reference/mcp-server/): AI assistant integration via MCP
- [Releases](/reference/releases/): check whether your issue was fixed in a newer version
