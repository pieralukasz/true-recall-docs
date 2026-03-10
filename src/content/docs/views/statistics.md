---
title: Statistics
sidebar:
  label: "Statistics (P)"
  order: 7
description: Track your learning progress with daily stats, retention charts, maturity breakdown, streaks, and collection health metrics.
---

:::caution[My Notes]
:::

The **Statistics** view gives you a comprehensive picture of your learning — how much you study, how well you remember, and where to focus next. Access it from the [Dashboard](/views/dashboard/) or the command palette (`Cmd/Ctrl + P` → "Open statistics").

## Today Summary

TODO PHOTO

At the top you see today's snapshot:

| Metric | Description |
|--------|-------------|
| **Studied** | Reviews completed today |
| **Minutes** | Time spent reviewing |
| **New cards** | New cards introduced today |
| **Review cards** | Due cards reviewed today |
| **Again** | Number of "Again" ratings today |
| **Correct rate** | Percentage of Good + Easy ratings |

## Time Range

All charts below can be filtered by time range:

| Range | Description |
|-------|-------------|
| **Backlog** | All overdue cards |
| **1 month** | Last 30 days |
| **3 months** | Last 90 days |
| **1 year** | Last 365 days |
| **All time** | Complete history |

## Card Maturity Breakdown

TODO PHOTO

A pie or bar chart showing how your cards are distributed across maturity stages:

| Category | Definition |
|----------|------------|
| **New** | Never reviewed |
| **Learning** | In learning or relearning steps |
| **Young** | Review state, interval less than 21 days |
| **Mature** | Review state, interval 21 days or more |
| **Suspended** | Manually paused |
| **Buried** | Temporarily hidden (sibling burying) |

:::tip[Track Your Mature Ratio]
The percentage of Mature cards is a good measure of long-term progress. A healthy collection has most review-state cards in the Mature category — meaning their intervals are 3 weeks or longer.
:::

## Future Due Forecast

TODO PHOTO

A bar chart showing how many cards are due each day in the coming weeks. Use this to:

- Spot upcoming workload spikes
- Decide if you need to adjust daily limits
- Plan around [Easy Days](/scheduling/workload-management/#easy-days) or [Scheduled Breaks](/scheduling/workload-management/#scheduled-breaks)

The chart shows both daily counts and a cumulative line, so you can see total backlog growth.

## Review History

TODO PHOTO

A daily breakdown of your review activity over the selected time range. Each day shows:

- Total reviews
- Breakdown by rating: Again, Hard, Good, Easy

## Retention History

TODO PHOTO

Daily retention rate as a line chart — the percentage of reviews where you rated Good or Easy. A healthy retention rate stays near your [Desired Retention](/scheduling/fsrs-algorithm/#desired-retention) target (default: 90%).

:::note
If your retention consistently falls below your target, consider [optimizing your FSRS parameters](/scheduling/presets/#parameter-training) or lowering your desired retention slightly. If it's consistently above, you may be reviewing more than necessary — raise your target to get longer intervals.
:::

## Cards Created History

TODO PHOTO

A chart showing how many new cards you created each day — useful for tracking content creation alongside review activity. Includes a cumulative line showing total collection growth.

## Rating Distribution

A breakdown of how you rated cards over time:

| Rating | What it means |
|--------|---------------|
| **Again** | Forgot completely |
| **Hard** | Remembered with difficulty |
| **Good** | Normal recall |
| **Easy** | Instant recall |

See [Answering Cards](/review/answering-cards/) for how each rating affects scheduling.

## Streak

Your **current streak** (consecutive days with at least one review) and **longest streak** ever. The streak resets if you skip a full day with zero reviews.

## Collection Health

TODO PHOTO

A snapshot of your entire collection's health based on current **retrievability** — the probability that you could recall each card right now:

| Health Level | Retrievability | Color |
|-------------|----------------|-------|
| **Strong** | Above 95% | Cyan |
| **High** | 85–95% | Green |
| **Medium** | 70–85% | Yellow |
| **Low** | 50–70% | Orange |
| **At Risk** | Below 50% | Red |

A healthy collection has most cards in the Strong or High categories. Cards in Low or At Risk need review soon.

## Note Performance

A table ranking your source notes by card performance:

| Column | Description |
|--------|-------------|
| **Source Note** | The note cards were created from |
| **Card Count** | Total cards from this note |
| **Avg Lapses** | Average times forgotten |
| **Avg Difficulty** | Average FSRS difficulty |
| **Review Count** | Total reviews across all cards |
| **Retention Rate** | Percentage correct |
| **Last Reviewed** | Most recent review date |

Use this to identify which notes produce problematic cards that might need rewriting.

## Filtering Statistics

You can filter all statistics by:

- **Preset** — See stats for a specific [FSRS preset](/scheduling/presets/) only
- **Archive status** — Include or exclude archived projects

When filtered, statistics are recalculated from the review log rather than cached daily stats, so results are always accurate.

## Widgets

You can embed statistics directly in your Obsidian notes using codeblock widgets. See the full list in [Editor Integration](/configuration/editor-integration/).

Key statistics widgets:

| Widget | Codeblock | Description |
|--------|-----------|-------------|
| Dashboard | ` ```true-recall-dashboard``` ` | Today summary + 7-day forecast |
| Heatmap | ` ```true-recall-heatmap``` ` | GitHub-style activity calendar |
| Streak | ` ```true-recall-streak``` ` | Current and longest streak |
| Health | ` ```true-recall-health``` ` | Collection health by retrievability |
| Forecast | ` ```true-recall-forecast``` ` | 30-day due forecast |
| True Retention | ` ```true-recall-true-retention``` ` | Rolling retention percentage |
| Workload | ` ```true-recall-workload``` ` | Due cards graph |

## What to Read Next

- [Dashboard](/views/dashboard/) — your daily command center
- [Workload Management](/scheduling/workload-management/) — shape your daily review load
- [Presets & Optimization](/scheduling/presets/) — train FSRS parameters from your history
- [Card Browser](/views/card-browser/) — find and manage individual cards
