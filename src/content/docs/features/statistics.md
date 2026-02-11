---
title: Statistics & Analytics
description: Track your learning progress with comprehensive statistics
links:
  - /views/statistics-view/
  - /features/review-system/
---

```
┌─────────────────────────────────────────────┐
│  Today          Cards: 47  |  Accuracy: 91% │
│                 New: 8     |  Time: 18m     │
├─────────────────────────────────────────────┤
│  ██████████░░  Retention: 89.2%  (target 90%)│
│                                             │
│  Collection     Reviews Over Time           │
│  ┌────┐         ▂▃▅▇▆▅▇█▅▃▂               │
│  │ ◕ │ 340 review                          │
│  │   │  82 learning   Workload Forecast     │
│  │   │  45 new        ▇▅▃▃▂▂▁▁▁▁           │
│  └────┘  12 suspended  next 30 days         │
│                                             │
│  ░░▒▒▓▓██░░▒▒  Calendar Heatmap            │
└─────────────────────────────────────────────┘
```

The statistics dashboard gives you a complete picture of your learning -- today's session, your collection health, retention trends, and workload forecasts, all in one view.

## Opening Statistics

Click the chart icon in the left ribbon, or use the command palette: `Cmd/Ctrl+P` then search "True Recall: Open statistics panel".

## Dashboard

The top of the dashboard shows **today's summary** -- cards reviewed, new cards learned, time spent, and accuracy (percentage of Good/Easy ratings).

Below that, you get five visualizations:

**Card state distribution** -- a pie chart breaking down your collection into new, learning, review, suspended, and buried cards.

**Retention over time** -- a line chart tracking your actual retention against your target. Switch between daily, weekly, and monthly views.

**Future workload forecast** -- a bar chart predicting how many cards are due each day for the next 30 days. Useful for planning study time around busy weeks.

**Reviews over time** -- daily review counts broken down by card type (new, review, learning/relearning).

**Calendar heatmap** -- a GitHub-style grid where color intensity shows how many reviews you did each day. Click any day for details.

## Time Range Filters

```
1 Week  |  1 Month  |  3 Months  |  All Time
```

Switch between these to zoom in on recent performance or see long-term trends.

## Metrics Explained

### Retention Rate

The percentage of cards you successfully recalled (rated Good or Easy).

```
Retention = (Good + Easy) / Total Reviews × 100
```

Your goal is to stay close to your desired retention setting (default 90%).

### True Retention

How your actual retention compares to what FSRS predicted. If they're close, the algorithm is well-calibrated. Much lower means you may need to [optimize your parameters](/features/fsrs-algorithm/). Much higher could mean you're over-reviewing.

### Review Burden

Average daily reviews needed to maintain your collection at its current size.

### Maturity Distribution

Cards grouped by interval length -- **Young** (under 21 days), **Mature** (21-100 days), and **Ancient** (100+ days). A healthy collection shifts toward Mature and Ancient over time.

## Natural Language Queries

```
> "What's my retention rate this month?"
> "What are my hardest cards?"
> "How many cards did I review last week?"
> "Show me cards I've forgotten most"
```

Type a question in plain English and get answers about your data. The query box is at the bottom of the statistics panel.

OpenRouter is a unified API gateway that gives you access to AI models (like GPT-4, Claude, etc.). You need an API key from [openrouter.ai](https://openrouter.ai) to use natural language queries -- set it in **Settings -> True Recall -> API Key**.

:::note
Natural language queries require an OpenRouter API key. Without one, the query box won't appear.
:::

## Exporting

Right-click any chart to save it as a PNG or copy it to the clipboard.

:::tip
Check your stats weekly. A retention rate drifting below your target or a growing review backlog are early signals to adjust your new card limits or optimize FSRS parameters.
:::
