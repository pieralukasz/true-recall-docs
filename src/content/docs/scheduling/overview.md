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

The goal: Show you the card right before you'd forget it.

## Day Boundaries

The **day boundary** determines when "today" ends and "tomorrow" begins. By default, this is **4:00 AM** (like Anki).

Many people study late at night. With a midnight cutoff, a 1 AM review counts as "tomorrow". With 4 AM cutoff, 1 AM still counts as "today".

Configure in Settings -> General -> "Next day starts at" (range: 0-23).

## Learning Steps

**Learning steps** are the intervals used for new cards during their initial learning phase.

Default: `[1, 10]` minutes

This means:
1. First review: See again in 1 minute
2. Second review: See again in 10 minutes
3. After second step: Graduate to "Review" state

**Relearning steps** apply when you forget a review card (lapse). Default: `[10]` minutes.

Configure in Settings -> FSRS -> Learning steps / Relearning steps. Format: comma-separated minutes (e.g., `1, 10, 60`).

## Interval Calculation

After you rate a card, FSRS calculates the next interval to maintain your [desired retention](/scheduling/fsrs-algorithm/#desired-retention) target. Constraints apply — minimum 1 day, maximum your configured cap (default: effectively unlimited). For how each rating (Again, Hard, Good, Easy) affects intervals and FSRS parameters, see [Answering Cards](/review/answering-cards/).

## Interval Fuzz

To prevent cards from bunching on the same day, True Recall applies a small random fuzz (±2.5%) to every calculated interval. A card due in 10 days might land on day 9 or 11 instead. This is invisible and has no effect on retention — but it smooths your future workload.

The fuzz factor is always enabled and cannot be turned off. [Load Balancing](/scheduling/workload-management/#load-balancing) builds on this same mechanism for more aggressive smoothing.

## Sibling Burying

When you answer a cloze or image occlusion card, the remaining sibling cards from the same note are **buried** until the next day. This prevents you from seeing related cards in the same session — which would leak context and reduce the effectiveness of testing.

For example, if a cloze note has 3 deletions (c1, c2, c3) and you answer c1, then c2 and c3 are hidden until tomorrow.

Sibling burying is **enabled by default** and can be configured per [Preset](/scheduling/presets/):

`Settings → FSRS → [Your Preset] → Bury Siblings`

:::note[Burying vs Dispersal]
Burying only prevents siblings on the *same* day. [Sibling Dispersal](/scheduling/workload-management/#sibling-dispersal) spaces siblings apart by multiple days — it's strictly more effective. If you enable dispersal, burying still acts as a safety net for cases where siblings land on the same day despite dispersal.
:::

## Review Order

### New Card Order

| Order | Description |
|-------|-------------|
| **Random** | Randomized (default) |
| **Oldest first** | Cards created earliest first |
| **Newest first** | Most recently created cards first |

### Review Order

| Order | Description |
|-------|-------------|
| **Due date** | Cards due soonest first (default) |
| **Random** | Fully shuffled |
| **Due date (randomized)** | By due date, shuffled within same day |
| **By retrievability** | Lowest recall probability first |
| **Most lapses** | Most-failed cards first |
| **Relative overdueness** | Most overdue relative to stability |
| **Lowest stability** | Weakest memory first |
| **Order added** | By creation order |

**Recommended:** Due date for normal review, Relative overdueness for catching up after a break.

### New/Review Mix

| Mode | Description |
|------|-------------|
| **Mix with reviews** | New cards interleaved with reviews (default) |
| **Show after reviews** | All reviews first, then new cards |
| **Show before reviews** | New cards first, then reviews |

All three order settings can be configured globally in `Settings → General` or overridden per [Preset](/scheduling/presets/).

## Daily Limits

### New Cards Per Day

Maximum new cards introduced daily. Default: 20. Higher values = faster learning but more future reviews.

### Reviews Per Day

Maximum reviews per day. Default: 200. Set to 0 for unlimited. This is a soft limit — due cards remain due.

## Workload Management

True Recall includes tools to shape your daily review load: [load balancing](/scheduling/workload-management/#load-balancing), [easy days](/scheduling/workload-management/#easy-days), [scheduled breaks](/scheduling/workload-management/#scheduled-breaks), and [sibling dispersal](/scheduling/workload-management/#sibling-dispersal). See [Workload Management](/scheduling/workload-management/) for details.

## Scheduling Tools

- **Reschedule** — Recalculate all intervals with current FSRS weights. Useful after optimizing parameters or changing desired retention.
- **Postpone** — Push all due cards forward by N days. Useful when overwhelmed with backlog.
- **Advance** — Pull future cards to today for extra practice.

## Falling Behind

If you have a growing backlog of overdue cards, don't panic — FSRS handles overdue reviews better than older algorithms. See [Troubleshooting — Falling Behind](/reference/troubleshooting/#falling-behind-on-reviews) for a step-by-step recovery guide, including how to use Postpone, Relative Overdueness sorting, and Load Balancing to get back on track.

## What to Read Next

- [FSRS Algorithm](/scheduling/fsrs-algorithm/) — how the algorithm models memory and calculates intervals
- [Presets & Optimization](/scheduling/presets/) — configure scheduling per project and optimize from your review history
- [Workload Management](/scheduling/workload-management/) — load balancing, easy days, and scheduled breaks
- [Answering Cards](/review/answering-cards/) — how each rating affects scheduling
- [Troubleshooting](/reference/troubleshooting/) — common issues and solutions
