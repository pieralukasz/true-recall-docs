---
title: Editor Integration
sidebar:
  order: 4
description: "Link status indicators, status bar widget, selection toolbar, and reading mode highlights in the editor."
---

:::caution[My Notes]
:::

**True Recall** adds several visual features to Obsidian's editor so you can see flashcard status and take quick actions without leaving your notes.

## Link Status Indicators

Inline indicators next to `[[wiki links]]` showing the linked note's flashcard status:

```
[[Biology Notes]]  3 new | 1 learning | 10 review
```

### Display Modes

| Mode | Description |
|------|-------------|
| Text | Numbers only |
| Donut chart | Small pie chart |
| Both | Chart + numbers |

Configure in `Settings → General → Show link status indicators`.

### Hover Tooltip

Hover over a link to see detailed stats: total cards, new/learning/review counts, due today, and last review time.

### Click Actions

Click the status indicator to open the [Flashcard Panel](/views/flashcard-panel/) for that note or start review.

## Status Bar Widget

Global card counts in Obsidian's bottom status bar showing due today, new cards, and learning cards.

Enable in `Settings → General → Show status bar widget`. Click the widget to open [Dashboard](/views/dashboard/) or start today's review.

Numbers change color based on state: Blue when cards are due, Green when only new cards remain, Gray when all done.

## Reading Mode Integration

In reading mode, source text for flashcards is highlighted. Hover over highlighted text to see associated cards, their states, and quick actions.

## Selection Toolbar

When you select text in the editor, a floating toolbar appears with AI generation buttons and quick actions. Enable in `Settings → AI → Selection toolbar`.

See [Selection Toolbar](/views/selection-toolbar/) for the full toolbar reference.

## Quick Review in Panel

Collapsible section at top of the [Flashcard Panel](/views/flashcard-panel/) showing one due card with Show, Edit, and Rate actions. A quick way to review without opening a full session.

Enable in `Settings → General → Show quick review in panel`.

## What to Read Next

- [General Settings](/configuration/general/) — all general settings including editor toggles
- [Selection Toolbar](/views/selection-toolbar/) — AI-powered card generation from text selection
- [Flashcard Panel](/views/flashcard-panel/) — main sidebar panel for card management
- [Dashboard](/views/dashboard/) — overview of your study progress
