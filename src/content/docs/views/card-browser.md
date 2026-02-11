---
title: Card Browser
description: Table view for browsing, filtering, and managing your entire card collection
links:
  - /views/flashcard-panel/
  - /views/session-builder/
  - /features/projects/
---

Every card you've ever created, in one table. The Card Browser lets you search, sort, filter, and bulk-manage your entire collection — with all the FSRS scheduling data right there in the columns.

FSRS (Free Spaced Repetition Scheduler) is the algorithm True Recall uses to figure out when you should see each card again. The browser exposes its key numbers so you can see exactly what's going on under the hood.

Open it from the Command Palette: `Cmd/Ctrl+P` then search for "True Recall: Open card browser". It opens as a regular tab, just like a note.

## Browser Layout

```
┌─────────────────────────────────────────────┐
│ [🔍 Search cards...]              [↻ Refresh]│
│ (All) (New) (Learning) (Review) ...  42 cards│
├──────┬──────┬─────┬────┬────┬────┬────┬──────┤
│ Question  │Answer│State│Due │Intv│Laps│Stab│Source│
├──────┬──────┬─────┬────┬────┬────┬────┬──────┤
│ What is..│ X is │ New │Tmrw│  - │  0 │  - │ Note │
│ Define Y │ Y is │ Rev │ 5d │ 14d│  1 │ 8.2│ Note │
│ ...      │ ...  │ ... │ ...│ ...│ ...│ ...│ ...  │
├──────────────────────────────────────────────┤
│ Q: What is X?                                │
│ A: X is...                                   │
│ Due: Tomorrow │ Stab: 2.1d │ Diff: 5.3 │ ...│
└──────────────────────────────────────────────┘
```

At the top you get a search bar, filter pills, and a card count. The main area is a sortable table. Click any row and a detail panel slides open at the bottom.

## Search and Filters

Type in the search bar to filter cards by question, answer, or source note name. It's case-insensitive and matches partial text — just start typing.

The filter pills narrow things down by card state:

| Filter | Shows |
|--------|-------|
| **All** | Every card in the collection |
| **New** | Cards never reviewed |
| **Learning** | Cards in learning steps |
| **Review** | Graduated review cards |
| **Relearn** | Cards being relearned after a lapse |
| **Suspended** | Cards excluded from review |
| **Buried** | Cards hidden until tomorrow |

When a filter or search is active, the count reads "X of Y cards" so you always know what slice you're looking at.

## Table Columns

Every column is sortable — click a header to sort, click again to flip the direction. An arrow shows the active sort.

| Column | What it tells you |
|--------|-------------------|
| **Question** | Truncated question text (plain text, no markdown) |
| **Answer** | Truncated answer text |
| **State** | Color-coded badge — New, Learning, Review, etc. |
| **Due** | Relative due date ("Today", "In 5d", "3d ago") |
| **Interval** | Scheduled gap between reviews, in days/months/years |
| **Lapses** | How many times you forgot this card |
| **Stability** | Memory strength in days — a card with stability of 10d means FSRS estimates a 90% chance you'll recall it after 10 days. Low stability means fragile memory. |
| **Difficulty** | How hard the card is on a 1-10 scale. High-difficulty cards build stability slower and get scheduled more frequently. |
| **Source** | Name of the note the card lives in |

## Card Detail Panel

Click any row and a preview panel appears at the bottom of the browser.

You get the full question and answer rendered with markdown (images, code blocks, math all work), plus a metadata grid showing Due, Interval, Stability, Difficulty, Lapses, Reps, Created, Last Review, and Projects. There's also a link to jump straight to the source note.

Three actions live in the panel:

| Button | What it does |
|--------|-------------|
| **Suspend / Unsuspend** | Toggle card suspension |
| **Reset** | Reset card to New state (clears all scheduling data) |
| **Delete** | Permanently remove the card |

Click the **x** button or click another row to close the preview.

## Selection and Bulk Operations

Click a checkbox on any row to enter selection mode. Once you're in, click rows or checkboxes to toggle selection. The header checkbox selects (or deselects) all currently filtered cards at once.

A footer bar appears with bulk actions:

| Action | What it does |
|--------|-------------|
| **Suspend** | Suspend all selected cards |
| **Unsuspend** | Unsuspend all selected cards |
| **Reset** | Reset all selected cards to New |
| **Delete** | Delete all selected cards |

Click the **x** on the footer bar to exit selection mode.

:::tip[Getting more out of the browser]
- Sort by **Lapses** (descending) to find your most-forgotten cards — they probably need rewording.
- Sort by **Difficulty** (descending) to spot the hardest cards in your collection.
- Filter by **Suspended** to audit cards you've paused.
- Compare **Stability** and **Interval** side by side to get a feel for card health — if interval is much larger than stability, the card is being pushed.
- Use the Card Browser for collection-wide work, the [Flashcard Panel](/views/flashcard-panel/) for single-note management, and the [Session Builder](/views/session-builder/) for building custom review sessions.
:::
