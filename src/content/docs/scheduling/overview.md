---
title: Scheduling
sidebar:
  order: -1
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

FSRS calculates intervals to maintain your **desired retention** (default: 90%).

With constraints:
- Minimum: 1 day
- Maximum: Your configured maximum (default: 100 years)

To prevent cards from bunching on the same day, a small fuzz factor is applied (plus/minus 2.5% of the interval).

### Interval Modifiers by Rating

| Rating | Effect on Interval |
|--------|-------------------|
| Again | Reset to learning/relearning |
| Hard | Shorter interval than Good |
| Good | Standard FSRS interval |
| Easy | Longer interval than Good |

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

## Easy Days

Reduce workload on specific days (e.g., weekends). Configure which days to reduce (Sun-Sat) and workload multiplier (default: 50%). Cards scheduled for easy days are redistributed to other days.

## Scheduled Breaks

Schedule vacation periods where reviews are redistributed. Add breaks with start date, end date, and redistribution option (before/after).

## Scheduling Tools

- **Reschedule** — Recalculate all intervals with current FSRS weights. Useful after optimizing parameters or changing desired retention.
- **Postpone** — Push all due cards forward by N days. Useful when overwhelmed with backlog.
- **Advance** — Pull future cards to today for extra practice.
