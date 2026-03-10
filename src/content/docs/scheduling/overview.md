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

After you rate a card, FSRS calculates the next interval to maintain your [desired retention](/scheduling/fsrs-algorithm/#desired-retention) target. Constraints apply — minimum 1 day, maximum your configured cap (default: effectively unlimited).

To prevent cards from bunching on the same day, a small fuzz factor is applied (±2.5% of the interval). For how each rating (Again, Hard, Good, Easy) affects intervals and FSRS parameters, see [Answering Cards](/review/answering-cards/).

## Review Order

### New Card Order

Options: Random, Oldest first, Newest first.

### Review Order

Options: By due date, Random, Due date then random, By retrievability, Most lapses, Relative overdueness, Lowest stability, Order added.

**Recommended:** By due date or By retrievability.

### New/Review Mix

Options: Mix with reviews (default), Show after reviews, Show before reviews.

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

## What to Read Next

- [FSRS Algorithm](/scheduling/fsrs-algorithm/) — how the algorithm models memory and calculates intervals
- [Presets & Optimization](/scheduling/presets/) — configure scheduling per project and optimize from your review history
- [Workload Management](/scheduling/workload-management/) — load balancing, easy days, and scheduled breaks
- [Answering Cards](/review/answering-cards/) — how each rating affects scheduling
