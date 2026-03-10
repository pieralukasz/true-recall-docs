---
title: General Settings
sidebar:
  order: 1
description: Configure True Recall's review interface, editor integration, day boundary, and collection behavior.
---

:::caution[My Notes]
:::

**True Recall's** general settings control the review experience, editor features, and when your study day rolls over. Configure in `Settings → True Recall → General`.

## Review Interface

| Setting | Options | Description |
|---------|---------|-------------|
| **Review mode** | Fullscreen / Panel | Fullscreen takes over the content area; Panel opens alongside your notes |
| **Show review header** | On / Off | Progress counts and close button during review |
| **Show header stats** | On / Off | Badge counts (New, Learn, Due) in review header |
| **Show next review time** | On / Off | Predicted intervals ("8d", "21d") on rating buttons |
| **Continuous custom reviews** | On / Off | Show "Next Session" button after finishing a custom session |
| **Default type-in mode** | Off / Diff / AI | Type-in mode for new review sessions |

:::note
Daily limits are configured **per preset**, not here. Each [FSRS preset](/scheduling/presets/) has its own new cards/day and reviews/day.
:::

## Editor Integration

| Setting | Options | Description |
|---------|---------|-------------|
| **Show link status indicators** | On / Off | Inline flashcard counts next to `[[wiki links]]` |
| **Show status bar widget** | On / Off | Global card counts in Obsidian's bottom bar |
| **Show quick review in panel** | On / Off | Quick-review section at top of [Flashcard Panel](/views/flashcard-panel/) |

For details on what these features look like and how to use them, see [Editor Integration](/configuration/editor-integration/).

## Day Boundary

**Next day starts at** — Hour when a new "day" begins (0–23). Default: **4 AM** (same as Anki).

This means a 2 AM review counts as "today," not "tomorrow." Useful if you study late at night.

## Flashcard Collection

| Setting | Options | Description |
|---------|---------|-------------|
| **Remove content after collecting** | On / Off | Remove flashcard block format syntax from note after collection |

See [The Collection Step](/creation/creating-flashcards/#the-collection-step) for how collection works.

## What to Read Next

- [Review Interface](/review/review-interface/) — the review experience these settings control
- [Editor Integration](/configuration/editor-integration/) — link indicators, status bar, and codeblock widgets
- [FSRS Settings](/configuration/fsrs-settings/) — scheduling configuration per preset
- [Type-in Mode](/review/type-in-mode/) — how the type-in setting works during review
