---
title: "Workload Management"
sidebar:
  order: 3
description: "Control your daily review workload with load balancing, a conscious daily target, R-Mode, easy days, scheduled breaks, and sibling dispersal."
---

:::caution[My Notes]
:::

**True Recall** provides several tools to control when and how many reviews appear each day. Rather than accepting whatever the algorithm schedules, you can shape your workload to fit your life: lighter weekends, zero reviews on vacation, a steady daily rhythm, or, with R-Mode, no due dates at all.

## Load Balancing

Without load balancing, your workload can spike unpredictably. Load balancing smooths this by moving reviews inside the fuzz range FSRS already allows, creating a steady rhythm. The 2.0.0 overhaul added an automatic target derived from your real pace, a backlog spread and per-review Anki-style balancing.

Enable in `Settings → True Recall → FSRS → "Load balance"`:

| Setting | Default | Description |
|---------|---------|-------------|
| **Enable load balancing** | Off | Use load balancing rules when scheduling future reviews |
| **Daily target** | Automatic (suggested from your pace) | How the daily review target is determined: **Automatic** or **Manual** |
| **Target daily reviews** | 100 | The manual target (slider, shown only in Manual mode) |
| **Maximum deviation (%)** | 20% | Allowed deviation from the target before rebalancing |
| **Maximum schedule shift** | 3 days | Largest day shift allowed when a newly reviewed card is scheduled (1, 3, 7 or 14 days) |
| **Balance now range** | Next 30 days | Range used only by the manual **Balance now** action (30, 60, 90 days or all future reviews) |
| **Balance workload now** | | The **Balance now** button, with an **Undo** button after it ran |

Below the settings, the same card shows the **workload forecast** chart (with a range picker and a Young/Mature split) so you can see the effect of a change immediately.

### How Balancing Works

Two mechanisms run under the same switch:

- **Per-review balancing.** When you answer a card, FSRS computes the raw interval and its Anki-style fuzz range (see [Interval Fuzz](/scheduling/overview/#interval-fuzz)). Instead of a random day inside that range, the balancer picks the least loaded one, never further than **Maximum schedule shift** away. Intervals under one day are left alone. Since 2.3.1 the balanced previews on the rating buttons stay in order (Hard before Good before Easy) and match the stored due date.
- **Balance now.** Re-spreads already scheduled reviews across the chosen range. Overdue cards are included: the backlog is spread from today forward instead of piling onto a single day.

:::note[No Retention Impact]
Load balancing only chooses a day inside the fuzz range FSRS would have randomized anyway. A 10-day card might land on day 9 or 11 regardless; balancing just biases that choice toward days with fewer reviews. Your retention stays the same.
:::

### The Daily Target

The target is what the balancer aims for on each day. Since 2.0.0 it is a *conscious* choice rather than a fixed number:

- **Automatic** suggests a target from the pace you actually sustain: your median reviews on active days over the last 60 days, never below the **Floor** (the upcoming dues per day, below which the backlog grows). With fewer than 7 active days of history it falls back to the 30-day forecast average.
- **Manual** gives you a slider, with three reference points under it: **Floor**, **Your median** and **Good days** (the 75th percentile of your active days).

Whichever mode you use, the line under the picker tells you what the number commits you to, for example "Backlog of 180 cards clears in ~12 days (2026-09-15)" or "Below your upcoming dues (~95/day), the 180-card backlog will keep growing." A manual target above your good-days pace gets a "Heads up" nudge.

:::tip[Start from Reality, Not Ambition]
Leave the target on **Automatic** until you have a few weeks of history. If you switch to Manual, set it near **Your median**, not near **Good days**. Setting it too low makes cards pile up as overdue; setting it too high defeats the purpose of balancing.
:::

### Deviation Setting

Controls how strictly the algorithm hits your target. With a target of 100:

| Deviation | Range | Best For |
|-----------|-------|----------|
| **10%** | 90-110 cards | Strict schedule, consistent daily routine |
| **20%** | 80-120 cards | Most users (default) |
| **30%** | 70-130 cards | Flexible schedule, minimal interval disruption |

Use **10%** if you study at the same time every day and want predictability. Use **30%** if you don't mind some variation and prefer intervals to stay closer to their natural FSRS values.

### When to Rebalance

Click **Balance now** after:

- **First enabling** load balancing: applies to your existing schedule
- **Bulk imports**: new cards can create future spikes
- **Returning from a break**: spreads the overdue pile forward instead of keeping it all on today
- **Changing presets or optimizing parameters**: intervals may have shifted

The button reports how many cards moved ("Balanced 45 cards (Ctrl+Z to undo)") and an **Undo** button appears next to it.

### Per-Project Actions and the API

The [Dashboard](/views/dashboard/) offers per-project scheduling actions (postpone, advance, reschedule, schedule a break) so you can act on one project without touching the rest. The load-balance target and the workload forecast are also available to scripts: `POST /settings/load-balance` and `GET /fsrs/forecast` in the local API, `set_load_balance` in the CLI. See [Presets & Optimization](/scheduling/presets/#from-the-api-cli-and-mcp-server).

## R-Mode

**R-Mode** (experimental, since 2.2.0) replaces the due-date queue for review cards with a continuous ranking by retrievability. Nothing is ever overdue: a card is either worth reviewing right now or it is not, and you decide how many review cards a session contains. New and learning cards keep their normal path.

### How It Works

Every Review-state card has a retrievability R, the current probability that you still remember it (see [FSRS Algorithm](/scheduling/fsrs-algorithm/#retrievability)). When you start a session with N review cards, R-Mode:

1. Builds the **pool**: all review cards whose R is at or below the preset's desired retention plus the **Saturation margin**. Cards above that ceiling are so well remembered that a review would buy almost no stability, so they are not offered at all.
2. Splits the pool into two bands: cards below the retention target ("at the edge of forgetting") and cards between the target and the ceiling ("you still know").
3. Fills the session with the lowest-R cards from the first band, and reserves a share of the seats (the **Session composition** slider) for cards sampled evenly across the second band, so a session is not a wall of failures.
4. Cards below the **Urgent threshold** always claim their seats first; the comfort share can never push them out.
5. Orders the session: two well-known cards to warm up, then never more than three near-forgotten cards in a row.

Due learning and relearning cards still come first, new cards follow the normal daily limit and the preset's new/review mix, and the review limit of the preset is ignored: the session size is what you typed.

### Settings

`Settings → True Recall → FSRS → "R-Mode (experimental)"`:

| Setting | Default | Description |
|---------|---------|-------------|
| **Enable R-Mode** | Off | Build sessions from current retrievability instead of due dates |
| **Default review count** | 30 | Review cards pre-filled on the Dashboard and in the panel; you can always type a different number |
| **Session composition** | 30% known | Share of the session drawn from cards you still know. The description translates it into cards, e.g. "With 30 review cards: 21 at the edge of forgetting, 9 you still know" |
| **Saturation margin** | +5 pp | Cards above the retention target plus this margin are not offered. A smaller margin wastes less effort but empties the pool sooner |
| **Urgent threshold** | 50% | Cards below this R are never pushed out of a session by the composition slider |

The command **Toggle r-mode (retrievability sessions)** switches the mode without opening settings. Switching is fully reversible: the due queue and the load balancer keep running underneath, so no card data changes.

### What Changes in the UI

- **Dashboard**: the today bar counts "review" instead of "due" (hover shows "N selected from M currently available review cards"), the note filters offer **Worth it** (the pool) instead of Due and Overdue, and each project or note row has a number field pre-filled with the default review count next to its Study button.
- **Flashcard Panel**: an R-Mode block for the open note shows the note's average retention, how many review cards are available, a size field with quick picks (10, 20, 50, all) and a **Study** button. When everything is fresh it says "Nothing to review, everything here is still fresh."
- **Review session**: the summary screen (and the waiting screen while learning cards cool down) shows a **Top Up** panel. Pick **Review** or **New**, type a count and click **Top up** to continue in the same session. Since 2.2.0 top-ups, review comments and card moves all work mid-session, and a top-up that cannot start refreshes the availability instead of ending the session.

:::tip[Who R-Mode Is For]
R-Mode suits people who study in fixed-size sittings and dislike the moral weight of an "overdue" counter. If you rely on the daily due count as a commitment device, leave it off: the due queue with load balancing is the better fit.
:::

## Easy Days

Easy Days reduce review load on specific days (weekends, holidays, busy periods) by moving excess cards to adjacent days. Cards shift by 1-2 days with minimal impact on retention.

Configure in `Settings → True Recall → FSRS → "Easy days"`. The card summarizes the current setup ("Recurring: Sat, Sun | Specific dates: 2 | Workload: 50%") and has two buttons:

- **Configure...** opens the **Easy Days Configuration** dialog with a weekday selector for recurring days, a list of specific dates (YYYY-MM-DD) for holidays, and a **Workload reduction** slider from 0% to 100% in steps of 10. **Save** stores the setup; **Apply Now** stores it and reschedules affected cards immediately.
- **Apply now** reschedules affected cards with the saved setup (undoable with `Ctrl+Z`).

One multiplier applies to all easy days:

| Workload | Effect |
|----------|--------|
| **0%** | No reviews on easy days |
| **25%** | A quarter of the normal load |
| **50%** (default) | Half the normal load |
| **75%** | Slight reduction |

:::note[Which Cards Are Affected]
Easy Days only moves review-stage cards with an interval of 3 days or longer. Learning and relearning cards, and any card with a very short interval, keep their original schedule. This means you may still see a few cards on "easy" days; that's normal.
:::

### Example Setups

**Weekend light:** recurring Saturday and Sunday, workload 50%. Half the cards each weekend day, excess spread to weekdays. A good starting point for most people.

**Full day off:** recurring Sunday, workload 0%. No reviews at all on Sundays; cards move to Saturday and Monday.

**Busy work schedule:** recurring Monday, Wednesday and Friday, workload 75%. Slight reduction on busy weekdays, full load on quieter days.

:::tip[Start Gentle]
Begin with 75% on 1-2 days and see how it feels. You can always add more easy days or lower the multiplier later. Avoid making more than 2-3 days easy per week: the remaining days absorb all the extra cards, which can create the spikes you were trying to avoid.
:::

:::caution[The Bunching Problem]
If you set 4+ days to 0%, you're compressing a full week of reviews into 2-3 days. A 200-card daily load becomes 400+ on study days. This is worse than no easy days at all. Keep at least 4 full study days per week.
:::

## Scheduled Breaks

Scheduled breaks handle longer time away (vacations, trips, exam periods) by redistributing reviews that fall inside the break window to the days around it.

### Adding a Break

Go to `Settings → True Recall → FSRS → "Scheduled breaks" → "Add scheduled break"` and click **Add break...**. Two prompts ask for the **Start date (YYYY-MM-DD)** and the **End date (YYYY-MM-DD)**. Reviews due inside the window are spread to both sides of the break.

Existing breaks are listed in the same card as "start to end" rows with a **Delete** action.

:::tip[Plan Ahead]
Add breaks at least a week in advance. The earlier you configure a break, the more days are available for redistribution, keeping the per-day increase small. A break added the day before gives the system almost no room to spread cards.
:::

### Per-Project Breaks

The [Dashboard](/views/dashboard/) can schedule a break for one project only: the **Schedule a break** action asks for the two dates and shows how many cards due during the break will be redistributed before you confirm.

### Example: Week Vacation

```
Start: 2026-07-14
End: 2026-07-20
```

Cards due July 14-20 move to the week before and the week after. The increase on any single day stays modest.

### What to Expect When You Return

Don't panic about retention after a break. FSRS is designed to handle delayed reviews gracefully: unlike older algorithms, it recalculates intervals based on actual time elapsed. The first few sessions back may feel harder (more cards, lower recall), but this is temporary. Within a week, FSRS adapts and your rhythm returns to normal. If a pile did build up, **Balance now** spreads it forward.

## Sibling Dispersal

Siblings are cards generated from the same note:

| Note Type | Siblings |
|-----------|----------|
| Basic | 1 card (no siblings) |
| Cloze | Multiple clozes from the same text |
| Reversed | 2 cards (Q→A and A→Q) |
| Image Occlusion | Multiple regions from the same image |

Without dispersal, siblings can land on the same day, and seeing one gives away the answer to the other. Sibling dispersal spaces them apart by a minimum interval so each card tests independent recall.

:::tip[Keep Dispersal Enabled]
FSRS developers strongly recommend keeping sibling dispersal on at all times. Disabling it reduces the effectiveness of spaced repetition because related cards leak context to each other when reviewed close together. Dispersal is also strictly better than burying: burying only prevents siblings on the *same* day, while dispersal separates them by multiple days.
:::

### Enabling

Go to `Settings → True Recall → FSRS → "Sibling dispersal"`:

| Setting | Default | Description |
|---------|---------|-------------|
| **Enable sibling dispersal** | Off | Automatically space out cards from the same note |
| **Minimum sibling interval** | 3 days | Minimum days between siblings from the same source |
| **Disperse siblings now** | | The **Disperse now** button spreads out siblings that are currently too close |

### Choosing Your Minimum Interval

| Interval | Best For |
|----------|----------|
| 1-2 days | Reversed cards (Q→A and A→Q) where context leakage is minimal |
| 3-4 days | Standard use: cloze deletions, most note types (recommended) |
| 5-7 days | Heavy cloze notes where one deletion strongly hints at another |

### Automatic vs Manual

When enabled, siblings are automatically dispersed whenever new cards are created or cards are answered. You can also run **Disperse now** in settings to immediately space all siblings that are currently too close, useful after a bulk import.

### Dispersal Rules

When siblings are too close:

1. The first-reviewed card keeps its due date.
2. Later-reviewed siblings are moved forward.
3. Cards won't be moved beyond their current interval or the maximum dispersal window.

Learning cards are not dispersed; they must graduate to review first. After a bulk import, run manual dispersal to clean up any clustering.

## Quick Setup Guide

Not sure where to start? Pick the scenario closest to yours:

### New User

Just start with the basics; you can always add more later.

```
Load balancing: On
  Daily target: Automatic
  Maximum deviation: 20%
Easy days: Off (add later once you have a routine)
Sibling dispersal: On
  Minimum sibling interval: 3 days
Scheduled breaks: None yet
```

### Busy Professional

Protect your weekends and keep weekday reviews predictable.

```
Load balancing: On
  Daily target: Manual, 80-100 cards
  Maximum deviation: 20%
Easy days: Saturday, Sunday, workload 50%
Sibling dispersal: On
  Minimum sibling interval: 3 days
```

### Student Preparing for Exams

Higher daily volume with a break scheduled for exam week itself.

```
Load balancing: On
  Daily target: Manual, 150-200 cards
  Maximum deviation: 20%
Easy days: Off (maximize study days)
Sibling dispersal: On
  Minimum sibling interval: 3 days
Scheduled break: exam week
```

### Casual Learner

Minimal time commitment, one full day off per week.

```
Load balancing: On
  Daily target: Manual, 50 cards
  Maximum deviation: 30%
Easy days: Sunday, workload 0%
Sibling dispersal: On
  Minimum sibling interval: 3 days
```

### Fixed-Size Sittings

You want "30 cards, then stop" and no overdue counter.

```
R-Mode: On
  Default review count: 30
  Session composition: 30% known
Load balancing: On (still shapes the due dates underneath)
Sibling dispersal: On
```

## How These Features Interact

These tools complement each other and can all be active at once:

1. **Easy Days** set your base weekly pattern: which days are lighter and by how much. The balancer respects them when it picks a day.
2. **Load Balancing** smooths the remaining distribution, targeting a steady daily count within your deviation range.
3. **Scheduled Breaks** move reviews out of the break window to the surrounding days.
4. **Sibling Dispersal** works alongside all of the above, ensuring related cards stay separated regardless of how other features shift dates.
5. **R-Mode** changes only what a session shows you. Due dates, balancing and dispersal keep working underneath, so you can switch it off at any time and land back on a sane due queue.

## What to Read Next

- [Presets & Optimization](/scheduling/presets/): reusable scheduling configurations per project
- [Scheduling](/scheduling/overview/): day boundaries, learning steps, review order, and daily limits
- [Custom Study](/review/cramming/): extra sessions on top of the daily queue
- [Statistics](/views/statistics/): see the effect of workload management on your review distribution
