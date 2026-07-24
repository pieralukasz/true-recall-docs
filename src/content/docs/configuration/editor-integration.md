---
title: Editor Integration
sidebar:
  order: 4
description: "Link status indicators, status bar widget, selection toolbar, and reading mode highlights in the editor."
---

:::caution[My Notes]
:::

**True Recall** adds several visual features to the editor so you can see flashcard status and take quick actions without leaving your notes. Most of these are delivered as [plugins](/plugins/overview/) and toggle from `Settings → True Recall → Plugins`.

## Link Status Indicators

Indicators next to `[[wikilinks]]` showing the linked note's flashcard status. The form depends on context rather than a mode you pick:

- **In the editor** — a small **donut chart** summarizing new / learning / review cards.
- **In reading view** — inline **text counts** rendered by the post-processor.

### Enabling and toggling

The **Link Status Indicators** plugin has no settings panel of its own — you simply enable or disable it in `Settings → True Recall → Plugins → Link Status Indicators`. Where the indicators appear is controlled by the toggles in `Settings → True Recall → General → Editor integration`:

- **Show link status indicators** — the master switch for the wikilink indicators
- **Show donuts in flashcard panel** — donuts on cards in the [Flashcard Panel](/views/flashcard-panel/)
- **Show donuts in review** — donuts during review

### Note Stats Tooltip

Hover over a link to open the **Note Stats Tooltip** with detailed stats: total cards, new / learning / review counts, due today, and last review time.

### Click Actions

Click a link status indicator to open the [Flashcard Panel](/views/flashcard-panel/) for that note or start review.

## Status Bar Widget

Global card counts in the bottom status bar showing due today, new cards, and learning cards.

Enable the **Status Bar Widget** plugin in `Settings → True Recall → Plugins → Status Bar Widget`. Click the widget to open [Dashboard](/views/dashboard/) or start today's review.

Numbers change color based on state: Blue when cards are due, Green when only new cards remain, Gray when all done.

## Reading Mode Integration

In reading mode, source text for flashcards is highlighted. Hover over highlighted text to see associated cards, their states, and quick actions.

## Selection Toolbar

When you select text in the editor, a floating toolbar appears with AI generation buttons and quick actions. Enable the **Selection Toolbar** plugin in `Settings → True Recall → Plugins → Selection Toolbar`.

See [Selection Toolbar](/views/selection-toolbar/) for the full toolbar reference.

## What to Read Next

- [General Settings](/configuration/general/) — all general settings including editor toggles
- [Selection Toolbar](/views/selection-toolbar/) — AI-powered card generation from text selection
- [Flashcard Panel](/views/flashcard-panel/) — main sidebar panel for card management
- [Dashboard](/views/dashboard/) — overview of your study progress
