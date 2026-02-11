---
title: General Settings
description: Configure basic True Recall behavior and display options
links:
  - /getting-started/quick-start/
  - /configuration/scheduling/
---

Settings → True Recall → General tab.

## Review Interface

| Setting | Options | Description |
|---------|---------|-------------|
| **Review mode** | Fullscreen / Panel | Fullscreen takes over the content area; Panel opens alongside your notes |
| **Show review header** | On / Off | Progress counts: "New: 5 · Learning: 3 · Due: 12" |
| **Show header stats** | On / Off | Accuracy and time spent during the session |
| **Show next review time** | On / Off | Predicted intervals ("8d", "21d") on rating buttons |

## Daily Limits

:::note
Daily limits are configured **per preset**. Each [FSRS preset](/configuration/fsrs-presets/) has its own new cards/day and reviews/day.
:::

| Setting | Default | Description |
|---------|---------|-------------|
| **New cards/day** | 20 | How many unseen cards to introduce each day |
| **Reviews/day** | 200 | Cap on due reviews per day (set to 9999 for unlimited) |

Start with 10–20 new cards/day. Each new card creates future reviews — 10 new/day eventually means ~100 reviews/day.

## Day Boundary

Hour when a new "day" begins (24-hour format). Default is **4 AM** (same as Anki) so late-night reviews count for today, not tomorrow.

## Other Settings

| Setting | Options | Description |
|---------|---------|-------------|
| **Remove content after collection** | On / Off | **Off** removes only the `#flashcard` tag. **On** removes the entire Q&A block from the note. |
| **Continuous custom reviews** | On / Off | Show a "Next Session" button after finishing a custom session |
| **Card preview length** | Short / Medium / Long | How many characters to show in card lists (50 / 100 / 200) |

True Recall automatically adapts to your Obsidian theme, including dark/light mode and accent colors.
