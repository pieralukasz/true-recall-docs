---
title: Statistics View
description: The analytics dashboard for tracking your learning progress
links:
  - /features/statistics/
  - /features/fsrs-algorithm/
---

The Statistics View is your learning dashboard. It shows you what you've done today, how your retention is trending, and what's coming up next. Open it from the ribbon (the orange chart icon) or run `Cmd/Ctrl+P` and search for "True Recall: Open statistics panel".

## Dashboard Components

At the top you get a quick snapshot of your current session:

```
┌─────────────────────────────────────┐
│         Today's Progress            │
├─────────────────────────────────────┤
│  Reviewed    │  New Cards  │  Time  │
│     25       │      5      │  12m   │
├─────────────────────────────────────┤
│  Accuracy: 88%                      │
└─────────────────────────────────────┘
```

Below that, several charts give you the full picture.

**Card State Distribution** is a pie chart of your collection: New (blue), Learning (yellow), Review (green), Suspended (gray), and Buried (brown). At a glance you can see where your cards live.

**Retention Over Time** plots your actual success rate against your desired retention target. When the two lines are close together, FSRS is well-calibrated for you.

**Future Workload** forecasts your next 30 days of reviews as a bar chart. Each bar is how many cards are due that day, so you can plan your study time.

**Calendar Heatmap** shows your past year of activity. Darker squares mean more reviews. Click any day to see the details.

Depending on how much data you have, you may also see charts for reviews over time, card creation vs review, difficulty distribution, and interval distribution.

## Time Range Filters

You can switch the dashboard between different periods:

| Filter | Shows |
|--------|-------|
| **1 Week** | Last 7 days |
| **1 Month** | Last 30 days |
| **3 Months** | Last 90 days |
| **All Time** | Complete history |

## Metrics Explained

### Reviewed Today

Total cards you reviewed in the current session.

### New Cards Learned

Cards that entered the learning phase for the first time today.

### Time Spent

Your total active review time today. Idle time doesn't count.

### Accuracy

The percentage of your ratings that were Good or Easy.

```
Accuracy = (Good + Easy) / Total x 100
```

### Retention Rate

Your success rate on cards that were due for review (excludes cards still in learning).

### True Retention

How your actual retention compares to what FSRS predicted. If the numbers are close, your parameters are well-calibrated. A lower actual rate means you're underperforming predictions. A higher one suggests you might be over-reviewing.

### Review Burden

The average number of daily reviews needed to maintain your collection at its current size.

### Learning Load

How many new cards are currently working through the learning phase.

## Natural Language Query

You can ask questions about your data in plain English. Click the query input, type something like "What's my retention this week?" or "How many cards did I review yesterday?", and press Enter.

Some other things you can ask:

- "What are my hardest cards?"
- "Show my busiest review days"
- "Compare this week to last week"

:::note
This feature requires an OpenRouter API key. OpenRouter is a unified API gateway that gives you access to AI models. You need a free API key from [openrouter.ai](https://openrouter.ai). Once you have one, add it in the plugin settings.
:::
