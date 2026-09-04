---
title: Editor Integration
sidebar:
  order: 4
description: "Quick Actions Toolbar, Link Progress Indicators, Status Bar Summary, Embedded Dashboards, and reading mode highlights in the editor."
---

:::caution[My Notes]
:::

**True Recall** adds several visual features to the editor so you can see flashcard status and take quick actions without leaving your notes. The four described here are the free optional features listed in `Settings → True Recall → Features` (see [Features Overview](/plugins/overview/)). Each has a toggle in its accordion row; toggles take effect immediately, no reload needed.

## Quick Actions Toolbar

When you select text, a floating toolbar appears with flashcard creation, AI generation and quick actions. Clicking an image shows an image toolbar (image occlusion). Enable it in `Settings → True Recall → Features → "Quick Actions Toolbar"`.

Expand the row to configure three button sets, each with drag-to-reorder and custom command buttons:

| Section | Buttons shown when... |
|---------|-----------------------|
| **Editor toolbar** | selecting text in the markdown editor |
| **Global toolbar** | selecting text outside the editor (sidebars, terminal, reading view) |
| **Image toolbar** | clicking an image in the editor |

See [Quick Actions Toolbar](/views/selection-toolbar/) for the full button reference.

## Link Progress Indicators

Indicators next to `[[wikilinks]]` showing the linked note's flashcard status. The form depends on context rather than a mode you pick:

- **In the editor**: a small **donut chart** summarizing new / learning / review cards.
- **In reading view**: inline **text counts** rendered by the post-processor.

### Enabling and toggling

The feature toggle in `Settings → True Recall → Features → "Link Progress Indicators"` is the master switch for the wikilink indicators. Expand the row for two more toggles (both on by default):

- **Show in flashcard panel**: progress indicators next to links inside [Flashcard Panel](/views/flashcard-panel/) cards
- **Show during review**: progress indicators next to links during review sessions

### Note stats tooltip

Hover over a link to open a tooltip with the note's full stats: total cards, new / learning / review counts, due today, and last review time.

### Click actions

From the indicator you can start a review of that note's flashcards (all cards or due cards only).

## Status Bar Summary

Due, new, and learning card counts in Obsidian's status bar, with color-coded indicators. Enable it in `Settings → True Recall → Features → "Status Bar Summary"` (on by default). Click the summary to jump to the [Dashboard](/views/dashboard/).

Numbers change color based on state: Blue when cards are due, Green when only new cards remain, Gray when all done.

## Embedded Dashboards

Embed True Recall dashboards in your notes as codeblocks: global due / new / learning counts, analytics (streaks, heatmaps, workload), project overviews, FSRS forecasts, and per-note health widgets. Enable it in `Settings → True Recall → Features → "Embedded Dashboards"`.

The feature adds two commands: **Insert project dashboard** (inserts a `true-recall-project` codeblock at the cursor) and **Create master dashboard note**. See [Dashboard](/views/dashboard/) for the codeblock reference.

## Reading Mode Integration

In reading mode, source text for flashcards is highlighted. Hover over highlighted text to see associated cards, their states, and quick actions.

## What to Read Next

- [General Settings](/configuration/general/): appearance and review interface settings
- [Features Overview](/plugins/overview/): the Features tab and access levels
- [Quick Actions Toolbar](/views/selection-toolbar/): AI-powered card generation from text selection
- [Flashcard Panel](/views/flashcard-panel/): main sidebar panel for card management
- [Dashboard](/views/dashboard/): overview of your study progress
