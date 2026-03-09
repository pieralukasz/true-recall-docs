---
title: FSRS Settings
sidebar:
  order: 2
description: "Configure FSRS scheduling: presets, retention, daily limits, learning steps, review order, weights, and optimization."
---

:::caution[My Notes]
:::

Configure FSRS scheduling in Settings -> True Recall -> FSRS.

All settings on this page are **per-preset**. Use the dropdown at the top to select which preset you're configuring.

## Presets Section

### Active Preset

Select which preset to configure. Each preset has independent settings.

| Button | Action |
|--------|--------|
| New | Create copy of current preset |
| Delete | Delete preset (not available for Default) |
| Rename | Change preset name |

See [Presets](/organization/presets/) for detailed preset management.

## Algorithm Section

### Desired Retention

Target probability of recall (70-99%).

| Value | Effect |
|-------|--------|
| 85% | Fewer reviews, more forgetting |
| 90% (default) | Balanced |
| 95% | More reviews, less forgetting |

:::tip
Start with 0.90 and adjust based on actual retention in statistics. Higher values (0.92-0.95) make sense for exam prep. Lower values (0.80-0.87) suit bulk learning.
:::

### Maximum Interval

Longest possible interval in days. Default: 36500 (effectively unlimited). Cap exam content at 180 days while leaving general knowledge unlimited.

## Daily Limits Section

### New Cards Per Day

Maximum new cards introduced daily. Default: 20.

| Value | Workload |
|-------|----------|
| 10 | Light |
| 20 (default) | Moderate |
| 50 | Heavy |

Each new card creates future reviews — 10 new/day eventually means ~100 reviews/day.

### Reviews Per Day

Maximum reviews per day. Default: 200. Set to 0 for unlimited. This is a soft limit — due cards remain due.

## Learning Steps Section

### Learning Steps (Minutes)

Short intervals a new card goes through before graduating to the review phase.

| Value | Progression |
|-------|-------------|
| 1, 10 (default) | 1m -> 10m -> graduate |
| 1, 10, 60 | Three learning steps |
| 5, 30, 1440 | Difficult content |
| 10 | Quick, single step |

### Relearning Steps (Minutes)

Intervals after lapses (forgotten cards). Default: `10`.

## Display Order Section

### New Card Order

| Option | Description |
|--------|-------------|
| Random | Shuffle new cards |
| Oldest first | By position in file |
| Newest first | Reverse file order |

### Review Order

| Option | Description |
|--------|-------------|
| By due date | Oldest due first |
| Random | Shuffle |
| Due date, then random | Primary + secondary sort |
| By retrievability | Lowest recall probability first |
| Most lapses | Cards you forget most |
| Relative overdueness | How overdue relative to interval |
| Lowest stability | Weakest memories first |
| Order added | Creation order |

**Recommended:** By due date or By retrievability.

### New/Review Mix

| Option | Description |
|--------|-------------|
| Mix with reviews | Interleave (default) |
| Show after reviews | Reviews first, then new |
| Show before reviews | New first, then reviews |

## Parameters Section

### FSRS Weights

21 parameters controlling FSRS behavior. Use optimization rather than manual editing.

### Optimize Parameters

Analyze review history to find optimal weights. Requirements: 400+ reviews minimum, 1000+ recommended.

### Reset to Defaults

Restore default FSRS weights.

## Load Balance Section

Automatically distribute reviews to prevent spikes.

| Setting | Default | Description |
|---------|---------|-------------|
| Enable | Off | Activate load balancing |
| Target daily reviews | 100 | Target count |
| Maximum deviation | 20% | Tolerance before rebalancing |

## Easy Days Section

Reduce reviews on specific weekdays or dates. Configure which days, and the workload multiplier (default: 50%). Cards scheduled for easy days are redistributed.

## Sibling Dispersal Section

Space out sibling cards (from same note).

| Setting | Default | Description |
|---------|---------|-------------|
| Enable | Off | Activate dispersal |
| Minimum sibling interval | 3 days | Days between siblings |

## Scheduled Breaks Section

Schedule vacation/break periods for review redistribution. Each break has start date, end date, and redistribution direction (Before/After/Both).

## Bulk Operations Section

- **Preview Reschedule** — Recalculate all intervals with current FSRS weights. Shows preview before applying.
- **Postpone** — Push all due cards forward by N days.
