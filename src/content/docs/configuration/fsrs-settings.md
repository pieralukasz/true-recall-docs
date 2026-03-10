---
title: FSRS Settings
sidebar:
  order: 2
description: "Configure FSRS scheduling: presets, retention, daily limits, learning steps, review order, weights, and optimization."
---

:::caution[My Notes]
:::

Everything about how **True Recall** schedules your reviews lives here. All settings are **per-preset** — use the dropdown at the top of `Settings → True Recall → FSRS` to choose which preset you're configuring.

For guidance on what values to choose, see [Presets & Optimization](/scheduling/presets/#how-to-choose-your-settings).

## Presets

Select which preset to configure. Each preset has independent settings.

| Button | Action |
|--------|--------|
| **New** | Create copy of current preset |
| **Delete** | Delete preset (not available for Default) |
| **Rename** | Change preset name |

See [Presets & Optimization](/scheduling/presets/) for preset management, example configurations, and inheritance rules.

## Algorithm

### Desired Retention

Target probability of recall when a card comes due (70–99%). Default: **90%**.

:::tip
Start at 90% and adjust down after a few weeks. At 90% desired retention, your actual recall across the collection is already ~95%. Going higher increases workload exponentially with diminishing returns. See [Choosing Your Settings](/scheduling/presets/#desired-retention-the-most-important-setting) for the full guide.
:::

### Maximum Interval

Longest possible interval in days. Default: **36500** (effectively unlimited). Cap exam content at 180 days while leaving general knowledge unlimited.

## Daily Limits

### New Cards Per Day

Maximum new cards introduced daily. Default: **20**. Each new card creates future reviews — 10 new/day eventually means ~100 reviews/day. See [Finding Your Sustainable Pace](/scheduling/presets/#new-cards-per-day-finding-your-sustainable-pace) for guidelines.

### Reviews Per Day

Maximum reviews per day. Default: **200**. Set to 0 for unlimited. This is a soft limit — due cards remain due, they just won't appear in that session.

## Learning Steps

### Learning Steps (Minutes)

Short intervals a new card goes through before graduating to FSRS scheduling. Default: `1, 10`. Format: comma-separated minutes.

### Relearning Steps (Minutes)

Intervals after lapses (forgotten cards). Default: `10`.

For why a single step of 15–20 minutes is often ideal, see [Learning Steps](/scheduling/presets/#learning-steps-keep-it-simple).

## Display Order

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

## Parameters

### FSRS Weights

21 parameters controlling FSRS behavior. Use optimization rather than manual editing. See [The 21 FSRS Weights](/scheduling/fsrs-algorithm/#the-21-fsrs-weights) for what each group controls.

### Optimize Parameters

Analyze your review history to find optimal weights. Requires **400+ reviews** per preset (1000+ recommended). See [Optimizing Parameters](/scheduling/presets/#optimizing-parameters) for prerequisites and workflow.

### Reset to Defaults

Restore default FSRS weights.

## Workload Management

These features shape your daily review load. For detailed configuration and examples, see [Workload Management](/scheduling/workload-management/).

**[Load Balancing](/scheduling/workload-management/#load-balancing)** — Smooth review spikes by redistributing cards to maintain a steady daily count.

**[Easy Days](/scheduling/workload-management/#easy-days)** — Reduce reviews on specific weekdays or dates with a configurable multiplier.

**[Sibling Dispersal](/scheduling/workload-management/#sibling-dispersal)** — Space out cards from the same note so seeing one doesn't give away the other.

**[Scheduled Breaks](/scheduling/workload-management/#scheduled-breaks)** — Redistribute reviews around vacation or travel periods.

## Bulk Operations

- **Preview Reschedule** — Recalculate all intervals with current FSRS weights. Shows preview before applying. Useful after optimizing parameters or changing desired retention.
- **Postpone** — Push all due cards forward by N days. Useful when overwhelmed with backlog.

## What to Read Next

- [Presets & Optimization](/scheduling/presets/) — example presets, how to choose settings, optimization workflow
- [FSRS Algorithm](/scheduling/fsrs-algorithm/) — how the algorithm models memory
- [Workload Management](/scheduling/workload-management/) — load balancing, easy days, breaks, sibling dispersal
- [Scheduling](/scheduling/overview/) — day boundaries, intervals, and fuzz factor
