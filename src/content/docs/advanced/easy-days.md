---
title: Easy Days
description: Reduce review workload on specific days while maintaining scheduling integrity
links:
  - /configuration/scheduling/
  - /advanced/load-balancing/
---

Easy Days reduce review load on specific days—weekends, holidays, or busy periods—while redistributing cards to adjacent days to maintain your learning schedule. Cards shift by 1-2 days with minimal impact on retention.

## How It Works

When you configure an easy day with a multiplier, cards due on that day are reduced and the excess redistributes to adjacent days. Overall review count and optimal intervals are maintained.

**Example:** Saturday at 50% multiplier
- Normal Saturday: 100 cards due
- Easy Saturday: 50 cards due
- Other 50 cards: spread to Friday/Sunday

## Configuration

Go to **Settings** → **True Recall** → **FSRS** → **Configure Easy Days**.

**Recurring days:** Select weekdays that repeat weekly (e.g., Saturday, Sunday).

**Specific dates:** Add individual dates in YYYY-MM-DD format for holidays or temporary reductions (e.g., 2025-12-25).

**Multiplier:**

| Multiplier | Effect |
|------------|--------|
| **0%** | No reviews on this day |
| **25%** | Quarter the normal load |
| **50%** | Half the normal load |
| **75%** | Slight reduction |

After configuring, click **"Apply Easy Days"** to reschedule affected cards.

:::tip
Start with 75% multiplier and adjust based on impact. Don't make more than 2-3 days easy per week to avoid bunching on adjacent days.
:::

## Use Cases

**Weekend light:**
```
Saturday: 50%
Sunday: 50%
```
Result: 50% fewer cards each weekend day.

**Day off:**
```
Sunday: 0%
```
Result: No reviews on Sundays.

**Holiday break:**
```
December 24: 25%
December 25: 0%
December 26: 25%
```
Result: Light load around Christmas.

**Busy workday:**
```
Monday: 75%
```
Result: Lighter start to the week.

## Combining with Load Balancing

Easy days set base reduction while [load balancing](/advanced/load-balancing/) smooths distribution further. These features complement each other for sustainable review schedules.
