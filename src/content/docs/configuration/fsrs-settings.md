---
title: FSRS Settings
sidebar:
  order: 2
description: "Configure FSRS scheduling: presets, retention, daily limits, learning steps, display order, weights and optimization, easy days, R-Mode, load balance, sibling dispersal, scheduled breaks, and bulk operations."
---

:::caution[My Notes]
:::

Everything about how **True Recall** schedules your reviews lives in `Settings → True Recall → FSRS`. The first half of the tab is **per preset**: use the **Active preset** dropdown to choose which preset you are configuring. The second half (Easy days, R-Mode, Load balance, Sibling dispersal, Scheduled breaks, Bulk operations) applies to the whole collection.

For guidance on what values to choose, see [Presets & Optimization](/scheduling/presets/#how-to-choose-your-settings).

## FSRS Visualization

An explainer card at the top of the tab. **Open FSRS Simulator** opens the interactive what-if tool where you can tweak weights and watch projected retention, workload and review count over time before touching your live presets. See [FSRS Simulator](/views/fsrs-simulator/).

## FSRS Presets

| Control | Action |
|---------|--------|
| **Active preset** | Select which preset the per-preset cards below edit |
| **New** | Create a copy of the current preset |
| **Delete** | Delete the preset (not available for the default preset) |
| **Preset name** | Rename a non-default preset; press Enter or click away to apply |

Each preset has its own retention target, weights, steps, and daily limits. See [Presets & Optimization](/scheduling/presets/) for preset management, example configurations, and how notes pick a preset.

## FSRS Algorithm

### Desired Retention

Target probability of recall when a card comes due (0.70-0.99). Default: **0.9** (90%).

:::tip
Start at 90% and adjust down after a few weeks. At 90% desired retention, your actual recall across the collection is already ~95%. Going higher increases workload exponentially with diminishing returns. See [Choosing Your Settings](/scheduling/presets/#desired-retention-the-most-important-setting) for the full guide.
:::

### Maximum Interval (days)

Longest possible interval in days. Default: **36500** (100 years, effectively unlimited). Cap exam content at 180 days while leaving general knowledge unlimited.

### Fuzz Review Intervals

Randomizes review intervals slightly to prevent cards from bunching on the same day. On by default.

## Daily Limits

### New Cards Per Day

Maximum new cards introduced daily. Default: **20**. Each new card creates future reviews: 10 new/day eventually means ~100 reviews/day. See [Finding Your Sustainable Pace](/scheduling/presets/#new-cards-per-day-finding-your-sustainable-pace) for guidelines.

### Reviews Per Day

Maximum reviews per day. Default: **200**. Set to 0 for unlimited. This is a soft limit: due cards remain due, they just won't appear in that session.

## Learning Steps

### Learning Steps (Minutes)

Short intervals a new card goes through before graduating to FSRS scheduling. Default: `1, 10`. Format: comma-separated minutes.

### Relearning Steps (Minutes)

Intervals after lapses (forgotten cards). Default: `10`.

For why a single step of 15-20 minutes is often ideal, see [Learning Steps](/scheduling/presets/#learning-steps-keep-it-simple).

## Display Order

### New Card Order

| Option | Description |
|--------|-------------|
| Random | Shuffle new cards (default) |
| Oldest first | By position in file |
| Newest first | Reverse file order |

### Review Order

| Option | Description |
|--------|-------------|
| By due date | Oldest due first (default) |
| Due date, then random | Primary + secondary sort |
| Random | Shuffle |
| By retrievability (lowest R first) | Lowest recall probability first |
| Relative overdueness | How overdue relative to interval |
| Most lapses first | Cards you forget most |
| Lowest stability | Weakest memories first |
| Order added | Creation order |

**Recommended:** By due date or By retrievability.

### New/Review Mix

| Option | Description |
|--------|-------------|
| Mix with reviews | Interleave (default) |
| Show after reviews | Reviews first, then new |
| Show before reviews | New first, then reviews |

## Siblings

**Bury sibling cards**: after reviewing an image occlusion or cloze card, bury the remaining cards from the same note until the next day. The setting itself notes this is not recommended; leaving it off keeps siblings spaced apart in the queue (see [Sibling Dispersal](#sibling-dispersal)).

## FSRS Parameters

The card shows how many reviews the preset has accumulated, whether that is enough to optimize, and when it was last optimized.

### Optimize Parameters

**Optimize now** analyzes your review history to find optimal weights for this preset. Requires **400+ reviews** per preset (1000+ recommended); the button stays disabled below that. **Reset to defaults** restores the built-in FSRS weights. See [Optimizing Parameters](/scheduling/presets/#optimizing-parameters) for prerequisites and workflow.

### Custom FSRS Weights

Paste 17, 19, or 21 comma-separated values from an external FSRS optimizer. Leave empty to use defaults. Prefer optimization to manual editing; see [The 21 FSRS Weights](/scheduling/fsrs-algorithm/#the-21-fsrs-weights) for what each group controls.

## Easy Days

Reduce your review workload on specific days (recurring weekdays or specific dates); cards due on easy days are moved to adjacent days. The card summarizes the current configuration (recurring days, number of specific dates, workload percentage; default workload 50%). **Configure...** opens the easy-days dialog, **Apply now** moves affected cards immediately (undo with `Cmd/Ctrl + Z`). See [Easy Days](/scheduling/workload-management/#easy-days).

## R-Mode (experimental)

R-Mode builds sessions from current retrievability instead of due dates: nothing is ever overdue, and you choose how many review cards to include. New and learning cards remain separate. Toggle it with **Enable R-Mode** here or with the **Toggle r-mode (retrievability sessions)** command.

| Setting | Default | Description |
|---------|---------|-------------|
| **Enable R-Mode** | Off | Switch the review queue to the retrievability ranking |
| **Default review count** | 30 | Review cards pre-filled on the dashboard and in the panel; you can always type a different number |
| **Session composition** | 30% known | Share of the session made of cards you still know (comfort mix). The description translates the slider into cards, e.g. "21 at the edge of forgetting, 9 you still know" |
| **Saturation margin** | +5 pp | Cards above their preset's retention target plus this margin are not offered. A smaller margin wastes less effort but empties the pool sooner |
| **Urgent threshold** | 50% | Cards below this retrievability are never pushed out of a session by the composition slider |

## Load Balance

Smooth review spikes by keeping the daily count near a target and spreading an overdue backlog across upcoming days instead of dumping it on today. Off by default. See [Load Balancing](/scheduling/workload-management/#load-balancing) for the full guide.

| Setting | Default | Description |
|---------|---------|-------------|
| **Enable load balancing** | Off | Apply load-balancing rules when scheduling future reviews |
| **Daily target** | Automatic | **Automatic (suggested from your pace)** derives the target from your median pace on active days, never below the floor of upcoming dues; **Manual** lets you pick a number |
| **Target daily reviews** | 100 | Manual mode only. Below the slider a line shows what the number commits you to (how long the backlog takes to clear) |
| **Maximum deviation (%)** | 20% | How far a day may deviate from the target before rebalancing |
| **Maximum schedule shift** | 3 days | Largest day shift allowed when scheduling a newly reviewed card (1, 3, 7 or 14 days) |
| **Balance now range** | Next 30 days | Range used only by the manual **Balance now** action (30 / 60 / 90 days or all future reviews) |
| **Balance workload now** | | **Balance now** applies load balancing immediately, spreading any overdue backlog from today forward; an **Undo** button appears afterwards |

Below the controls the card shows the workload forecast for the chosen range. The same target and forecast are exposed through the API, CLI and MCP server.

## Sibling Dispersal

Cards from the same source note are "siblings". Spreading them apart helps avoid interference during review. See [Sibling Dispersal](/scheduling/workload-management/#sibling-dispersal).

| Setting | Default | Description |
|---------|---------|-------------|
| **Enable sibling dispersal** | Off | Automatically space out cards from the same note |
| **Minimum sibling interval** | 3 | Minimum days between siblings from the same source |
| **Disperse siblings now** | | **Disperse now** spreads out siblings that are currently too close (undo with `Cmd/Ctrl + Z`) |

## Scheduled Breaks

Schedule breaks (vacations) to redistribute reviews and prevent backlog accumulation. **Add break...** asks for a start and an end date (`YYYY-MM-DD`); existing breaks are listed with a **Delete** link. See [Scheduled Breaks](/scheduling/workload-management/#scheduled-breaks).

## Bulk Operations

- **Reschedule all cards**: **Preview reschedule** recalculates all intervals with the current FSRS weights and shows how many cards would change before you confirm. Useful after optimizing parameters or changing desired retention.
- **Postpone all due cards**: push all cards due today forward by N days (default 7). Useful when overwhelmed with backlog.

Both are undoable with `Cmd/Ctrl + Z`.

## What to Read Next

- [Presets & Optimization](/scheduling/presets/): example presets, how to choose settings, optimization workflow
- [FSRS Algorithm](/scheduling/fsrs-algorithm/): how the algorithm models memory
- [Workload Management](/scheduling/workload-management/): load balancing, easy days, breaks, sibling dispersal
- [FSRS Simulator](/views/fsrs-simulator/): try settings before you commit
- [Scheduling](/scheduling/overview/): day boundaries, intervals, and fuzz factor
