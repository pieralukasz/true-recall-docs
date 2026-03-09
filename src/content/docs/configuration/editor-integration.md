---
title: Editor Integration
sidebar:
  order: 4
description: "Link status indicators, status bar widget, selection toolbar, and code block widgets in the editor."
---

:::caution[My Notes]
:::

True Recall integrates with Obsidian's editor to show flashcard status and provide quick actions.

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

Configure in Settings -> General -> Show link status indicators.

### Hover Tooltip

Hover over a link to see detailed stats: total cards, new/learning/review counts, due today, and last review time.

### Click Actions

Click the status indicator to open the [Flashcard Panel](/views/flashcard-panel/) for that note or start review.

## Status Bar Widget

Global card counts in Obsidian's bottom status bar showing due today, new cards, and learning cards.

Enable in Settings -> General -> Show status bar widget. Click the widget to open [Dashboard](/views/dashboard/) or start today's review.

Numbers change color based on state: Blue when cards are due, Green when only new cards remain, Gray when all done.

## Reading Mode Integration

In reading mode, source text for flashcards is highlighted. Hover over highlighted text to see associated cards, their states, and quick actions.

## Selection Toolbar

When you select text in the editor, a toolbar appears with buttons:

| Button | Action |
|--------|--------|
| Basic | Generate Q&A card |
| Cloze | Generate cloze |
| Reversed | Generate reversed card |
| Auto | AI chooses type |
| IO | Image occlusion |
| Edit | Open in editor |
| Quick+ | Quick add |

Enable in Settings -> AI -> Selection toolbar.

## Quick Review in Panel

Collapsible section at top of Flashcard Panel showing one due card with Show, Edit, and Rate actions.

Enable in Settings -> General -> Show quick review in panel.

## CodeBlock Widgets

Embed True Recall widgets in notes using code blocks. See [CodeBlock Widgets](/views/codeblock-widgets/) for the full list of 25+ available widgets.
