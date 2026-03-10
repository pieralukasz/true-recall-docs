---
title: Troubleshooting
sidebar:
  label: "Troubleshooting"
  order: 5
description: "Solutions to common issues with True Recall — cards not appearing, AI errors, sync problems, and performance."
---

:::caution[My Notes]
:::

Common issues and how to fix them. If your problem isn't listed here, check the [GitHub Issues](https://github.com/pieralukasz/true-recall/issues) page.

## Cards Not Appearing for Review

**Symptoms:** Dashboard shows 0 due cards, but you know you have cards to review.

**Check these in order:**

1. **Daily limits reached** — Check `Settings → FSRS → [Your Preset]`. If you've hit your daily new card or review limit, no more cards appear until tomorrow. Set limits to 0 for unlimited.

2. **Cards are suspended** — Open the [Card Browser](/views/card-browser/) and search `is:suspended`. Unsuspend cards you want to review.

3. **Cards are buried** — Sibling burying temporarily hides related cards until the next day. Search `is:buried` in the Card Browser. They'll return automatically tomorrow.

4. **Wrong day boundary** — If you study late at night, check `Settings → General → "Next day starts at"`. Default is 4 AM — reviews before that time count as the previous day.

5. **Cards not collected** — New flashcards must be collected into the database via the [Flashcard Panel](/views/flashcard-panel/). Open the panel and check for uncollected cards.

6. **Project is archived** — Archived projects don't show cards in the Dashboard. Check if your project is archived.

## AI Generation Not Working

**Symptoms:** Selection Toolbar buttons are disabled or generation fails.

1. **No API key** — You need either a True Recall subscription or your own OpenRouter API key. Check `Settings → AI`.

2. **Budget exceeded** — If you're on a subscription, your monthly budget may be exhausted. The system tries to fall back to your OpenRouter key (if configured). Check the error message.

3. **Model unavailable** — Some models may be temporarily unavailable. Try a different model in `Settings → AI → Model`.

4. **Text too short** — The Selection Toolbar requires at least 3 characters selected.

5. **Wrong context** — The toolbar only appears in Markdown note editing mode, not inside review cards or the Card Browser.

## AI Answer Grading Issues

**Symptoms:** Type-in mode doesn't grade semantically, or gives unexpected scores.

1. **Mode set to "diff"** — Check `Settings → General → Type-in Mode`. Set to "ai" for semantic grading, "diff" for text comparison.

2. **Timeout** — AI grading has an 8-second timeout. On slow connections, it may fall back to local text comparison. The fallback score appears instantly.

3. **Custom prompt override** — If you set a custom grading prompt in AI settings, it may be causing unexpected behavior. Try clearing it.

## Sync Problems

**Symptoms:** Cards not syncing across devices, sync errors.

1. **Not logged in** — Check `Settings → Sync` and ensure you're signed in.

2. **Network issues** — Sync requires an internet connection to reach Supabase servers.

3. **First sync conflict** — If both local and remote have existing data, True Recall detects a conflict. Choose:
   - **Force upload** — Replace remote with your local data
   - **Force pull** — Replace local with remote data

4. **Stale data** — Sync uses last-write-wins. If you edit the same card on two devices without syncing between edits, the later timestamp wins.

## Performance Issues

**Symptoms:** Obsidian feels slow, especially with large collections.

1. **Run integrity check** — `Settings → Data → Check Database Integrity`. This finds and fixes orphaned records. See [Database Integrity Check](/data/integrity-check/).

2. **Large collection** — Collections over 10,000 cards may take longer to load. This is expected. Statistics calculations are the most intensive — they're computed from SQLite and cached.

3. **Many widgets** — Each inline widget is a live Preact component. If you have dozens of widgets in a single note, try reducing them or splitting across notes.

4. **Backup size** — Automatic backups can accumulate. Check backup settings in [Backup & Restore](/data/backup-restore/).

## Import Errors

**Symptoms:** Anki import fails or cards are missing.

1. **Unsupported .apkg version** — True Recall supports both legacy (collection.anki2) and modern (collection.anki21, collection.anki21b) formats. Very old Anki exports may not be compatible.

2. **Corrupted file** — Try re-exporting from Anki. Ensure the export completes without errors.

3. **Duplicate detection** — Cards with identical questions are skipped as duplicates. This is expected behavior — check the "Duplicates" count in the import result.

4. **Media not showing** — Imported media goes to `Attachments/anki-import`. If images don't render, check that the files exist at that path and that Obsidian's attachment folder settings don't conflict.

## Database Issues

**Symptoms:** Errors about corrupted database, missing cards, unexpected behavior.

1. **Run integrity check** — `Settings → Data → Check Database Integrity`. This detects orphaned cards, missing references, and corruption.

2. **Restore from backup** — If the database is corrupted, restore from a recent backup. See [Backup & Restore](/data/backup-restore/).

3. **Device database mismatch** — Each device has its own SQLite database. If you switch devices, ensure sync is working properly. See [Device Databases](/data/device-databases/).

## Falling Behind on Reviews

**Symptoms:** Hundreds or thousands of overdue cards piling up.

This isn't a bug — it's a workload problem. Here's how to recover:

1. **Don't try to do everything at once** — A backlog of 500 cards doesn't mean you should do 500 reviews today.

2. **Use Postpone** — `Settings → FSRS → Scheduling Tools → Postpone`. Push all due cards forward by N days. This spreads the backlog over time.

3. **Sort by Relative Overdueness** — In a [Custom Study](/review/cramming/) session, set sort order to "Relative overdueness". This prioritizes cards that are most overdue relative to their stability — focusing on what matters most.

4. **Increase daily limits temporarily** — Bump your review limit to 1.5x your normal target for a week.

5. **Enable Load Balancing** — [Load Balancing](/scheduling/workload-management/#load-balancing) prevents future spikes by smoothing your daily workload.

6. **Suspend low-priority cards** — In the [Card Browser](/views/card-browser/), find and suspend cards from topics you're not actively studying.

:::note[FSRS Handles Overdue Cards Well]
Unlike older algorithms, FSRS recalculates intervals based on actual time elapsed. If you remember an overdue card, FSRS recognizes this as evidence of strong memory and gives a longer interval. You won't be punished for a break.
:::

## What to Read Next

- [Database Integrity Check](/data/integrity-check/) — detect and fix database issues
- [Backup & Restore](/data/backup-restore/) — protect your data
- [Workload Management](/scheduling/workload-management/) — prevent overload
- [Card Browser](/views/card-browser/) — find and manage problem cards
