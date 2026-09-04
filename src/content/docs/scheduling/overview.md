---
title: Scheduling
sidebar:
  order: 1
description: "How True Recall schedules reviews: day boundaries, learning steps, intervals, review order, and daily limits."
---

:::caution[My Notes]
:::

True Recall uses FSRS v6 to schedule flashcard reviews. This page explains how scheduling works, including day boundaries, learning steps, and interval calculation.

## The Scheduling System

When you answer a card, True Recall:

1. Records your rating (Again, Hard, Good, Easy)
2. Updates the card's FSRS parameters (stability, difficulty)
3. Calculates the next review date
4. Schedules the card for that date

The goal: show you the card right before you'd forget it.

## Day Boundaries

The **day boundary** determines when "today" ends and "tomorrow" begins. By default, this is **4:00 AM** (like Anki).

Many people study late at night. With a midnight cutoff, a 1 AM review counts as "tomorrow". With a 4 AM cutoff, 1 AM still counts as "today".

Configure in `Settings → True Recall → General → "Day boundary" → "Next day starts at"` (range: 0-23). Daily statistics and load balancing respect the same boundary.

## Learning Steps

**Learning steps** are the intervals used for new cards during their initial learning phase.

Default: `1, 10` minutes

This means:
1. First review: see again in 1 minute
2. Second review: see again in 10 minutes
3. After the second step: graduate to the Review state

**Relearning steps** apply when you forget a review card (lapse). Default: `10` minutes.

Both are per [preset](/scheduling/presets/): `Settings → True Recall → FSRS → "Learning steps" → "Learning steps (minutes)"` and `"Relearning steps (minutes)"`. Format: comma-separated minutes (e.g., `1, 10, 60`).

## Interval Calculation

After you rate a card, FSRS calculates the next interval to maintain your [desired retention](/scheduling/fsrs-algorithm/#desired-retention) target. Constraints apply: minimum 1 day, maximum your configured cap (**Maximum interval (days)**, default 36500, effectively unlimited). For how each rating (Again, Hard, Good, Easy) affects intervals and FSRS parameters, see [Answering Cards](/review/answering-cards/).

## Interval Fuzz

To prevent cards from bunching on the same day, review intervals get a small random variation. The amount follows Anki's fuzz rules: intervals under 2.5 days are not fuzzed; longer ones can move by about 1 day plus 15% of the days between 2.5 and 7, 10% of the days between 7 and 20, and 5% of anything beyond. A card due in 10 days might land on day 9 or 11 instead. This has no measurable effect on retention, but it smooths your future workload.

Fuzz is a per-preset toggle, on by default: `Settings → True Recall → FSRS → "FSRS algorithm" → "Fuzz review intervals"`. [Load balancing](/scheduling/workload-management/#load-balancing) uses the same fuzz range: instead of picking a random day inside it, it picks the least loaded one.

## Sibling Burying

When you answer a cloze or image occlusion card, the remaining sibling cards from the same note can be **buried** until the next day. This prevents you from seeing related cards in the same session, which would leak context and reduce the effectiveness of testing.

For example, if a cloze note has 3 deletions (c1, c2, c3) and you answer c1, then c2 and c3 are hidden until tomorrow.

Sibling burying is configured per [preset](/scheduling/presets/) and is **on by default**:

`Settings → True Recall → FSRS → "Siblings" → "Bury sibling cards"`

:::note[Burying vs Dispersal]
The setting's own description recommends leaving burying off: with it off, siblings are kept spaced apart in the queue instead of being pushed to tomorrow. [Sibling Dispersal](/scheduling/workload-management/#sibling-dispersal) goes further and spaces siblings apart by multiple days. If you enable dispersal, burying is only a safety net for siblings that still land on the same day.
:::

## Review Order

All three order settings are stored in the [preset](/scheduling/presets/), so different projects can use different orders. Edit them in `Settings → True Recall → FSRS → "Display order"` for the active preset, or in the preset options dialog opened from the Dashboard.

### New Card Order

| Order | Description |
|-------|-------------|
| **Random** | Randomized (default) |
| **Oldest first** | Cards created earliest first |
| **Newest first** | Most recently created cards first |

### Review Order

| Order | Description |
|-------|-------------|
| **By due date** | Cards due soonest first (default) |
| **Due date, then random** | By due date, shuffled within the same day |
| **Random** | Fully shuffled |
| **By retrievability (lowest R first)** | Lowest recall probability first |
| **Relative overdueness** | Most overdue relative to stability |
| **Most lapses first** | Most-failed cards first |
| **Lowest stability** | Weakest memory first |
| **Order added** | By creation order |

**Recommended:** By due date for normal review, Relative overdueness for catching up after a break. With [R-Mode](/scheduling/workload-management/#r-mode) enabled, review cards are ranked by retrievability regardless of this setting.

### New/Review Mix

| Mode | Description |
|------|-------------|
| **Mix with reviews** | New cards interleaved with reviews (default) |
| **Show after reviews** | All reviews first, then new cards |
| **Show before reviews** | New cards first, then reviews |

## Daily Limits

Also per preset, under `Settings → True Recall → FSRS → "Daily limits"`.

### New Cards Per Day

Maximum new cards introduced daily. Default: 20. Higher values = faster learning but more future reviews.

### Reviews Per Day

Maximum reviews per day. Default: 200. Set to 0 for unlimited. This is a soft limit: due cards remain due. R-Mode ignores the review limit and lets you choose the session size instead.

[Custom Study](/review/cramming/) can raise today's limits for one session, and **Ignore daily limits for note study** (`Settings → True Recall → General → "Review interface"`) shows every card of a note when you study that note from the Dashboard.

## Workload Management

True Recall includes tools to shape your daily review load: [load balancing](/scheduling/workload-management/#load-balancing), [R-Mode](/scheduling/workload-management/#r-mode), [easy days](/scheduling/workload-management/#easy-days), [scheduled breaks](/scheduling/workload-management/#scheduled-breaks), and [sibling dispersal](/scheduling/workload-management/#sibling-dispersal). See [Workload Management](/scheduling/workload-management/) for details.

## Scheduling Tools

Collection-wide tools live in `Settings → True Recall → FSRS → "Bulk operations"`:

- **Reschedule all cards**: recalculate all intervals with the current FSRS weights (**Preview reschedule** shows the count first). Useful after optimizing parameters or changing desired retention.
- **Postpone all due cards**: push all due cards forward by N days. Useful when overwhelmed with backlog.

The same operations exist per project on the [Dashboard](/views/dashboard/): postpone, advance (pull cards forward), reschedule, and schedule a break for one project only.

## Falling Behind

If you have a growing backlog of overdue cards, don't panic: FSRS handles overdue reviews better than older algorithms. Load balancing can spread the backlog over the coming days instead of dumping it all on today. See [Troubleshooting: Falling Behind](/reference/troubleshooting/#falling-behind-on-reviews) for a step-by-step recovery guide, including how to use Postpone, Relative overdueness sorting, and Load Balancing to get back on track.

## What to Read Next

- [FSRS Algorithm](/scheduling/fsrs-algorithm/): how the algorithm models memory and calculates intervals
- [Presets & Optimization](/scheduling/presets/): configure scheduling per project and optimize from your review history
- [Workload Management](/scheduling/workload-management/): load balancing, R-Mode, easy days, and scheduled breaks
- [Answering Cards](/review/answering-cards/): how each rating affects scheduling
- [Troubleshooting](/reference/troubleshooting/): common issues and solutions
