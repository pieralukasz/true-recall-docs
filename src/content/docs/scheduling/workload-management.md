---
title: "Workload Management"
sidebar:
  order: 3
description: "Control your daily review workload with load balancing, easy days, scheduled breaks, and sibling dispersal."
---

:::caution[My Notes]
:::

**True Recall** provides several tools to control when and how many reviews appear each day. Rather than accepting whatever the algorithm schedules, you can shape your workload to fit your life — lighter weekends, zero reviews on vacation, and a steady daily rhythm.

## Load Balancing

Without load balancing, your workload can spike unpredictably. Load balancing smooths this by redistributing reviews within FSRS constraints, creating a steady rhythm.

Enable in `Settings → FSRS → Load Balancing`:

| Setting | Description |
|---------|-------------|
| **Enable** | Turn the feature on/off |
| **Target Daily Reviews** | Desired reviews per day |
| **Maximum Deviation** | Acceptable variation from target (%) |

### Choosing Your Target

Consider your available daily time:

| Target | Time (~10s/card) | Suitable For |
|--------|-------------------|--------------|
| 50 | ~8 minutes | Light study |
| 100 | ~15 minutes | Moderate study |
| 150 | ~25 minutes | Heavy study |
| 200 | ~35 minutes | Intensive study |

Set target slightly below your maximum to allow room for variation. Formula: `available_minutes × 6 = cards`.

:::tip[Start from Reality, Not Ambition]
Check your current daily average in [Statistics](/views/statistics/) and set your target near that number. Setting it too low causes cards to pile up as overdue; setting it too high defeats the purpose of balancing.
:::

:::note[No Retention Impact]
Load balancing uses FSRS's built-in fuzz range — the same slight randomization the algorithm already applies to intervals. A 7-day card might land on day 6 or day 8 regardless. Balancing just biases that fuzz toward days with fewer reviews. Your retention stays the same.
:::

### Deviation Setting

Controls how strictly the algorithm hits your target. With a target of 100:

| Deviation | Range | Best For |
|-----------|-------|----------|
| **10%** | 90–110 cards | Strict schedule, consistent daily routine |
| **20%** | 80–120 cards | Most users (recommended) |
| **30%** | 70–130 cards | Flexible schedule, minimal interval disruption |

Use **10%** if you study at the same time every day and want predictability. Use **30%** if you don't mind some variation and prefer intervals to stay closer to their natural FSRS values.

### When to Rebalance

Click **"Balance Now"** after:

- **First enabling** load balancing — applies to your existing schedule
- **Bulk imports** — new cards can create future spikes
- **Returning from a break** — redistributes the post-break pile
- **Changing presets or optimizing parameters** — intervals may have shifted

### Balance Now

Click **"Balance Now"** to immediately redistribute upcoming reviews across the next 30 days. You'll see a summary of how many cards moved and the resulting average:

```
Balanced 45 cards across 14 days
Average: 98 cards/day
Max deviation: 18%
```

Check [Statistics](/views/statistics/) to see the smoothed distribution.

## Easy Days

Easy Days reduce review load on specific days — weekends, holidays, or busy periods — by redistributing excess cards to adjacent days. Cards shift by 1–2 days with minimal impact on retention.

Configure in `Settings → FSRS → Configure Easy Days`:

**Recurring days** — select weekdays that repeat weekly (e.g., Saturday, Sunday).

**Specific dates** — add individual dates in YYYY-MM-DD format for holidays or one-off reductions.

**Multiplier** — controls how much the load is reduced:

| Multiplier | Effect |
|------------|--------|
| **0%** | No reviews on this day |
| **25%** | Quarter the normal load |
| **50%** | Half the normal load |
| **75%** | Slight reduction |

After configuring, click **"Apply Easy Days"** to reschedule affected cards.

:::note[Which Cards Are Affected]
Easy Days only moves review-stage cards with an interval of 3 days or longer. Learning and relearning cards, and any card with a very short interval, keep their original schedule. This means you may still see a few cards on "easy" days — that's normal.
:::

### Example Setups

**Weekend light:**
```
Saturday: 50%
Sunday: 50%
```
Half the cards each weekend day, excess spread to weekdays. Good starting point for most people.

**Full day off:**
```
Sunday: 0%
```
No reviews at all on Sundays; cards move to Saturday and Monday.

**One light day, one off:**
```
Saturday: 75%
Sunday: 0%
```
Slightly lighter Saturday, completely free Sunday. A good compromise if you want one guaranteed day off without overloading Saturday.

**Busy work schedule:**
```
Monday: 75%
Wednesday: 75%
Friday: 75%
```
Slight reduction on busy weekdays, full load on quieter days. Works well if your schedule varies by day.

:::tip[Start Gentle]
Begin with 75% on 1–2 days and see how it feels. You can always add more easy days or lower the multiplier later. Avoid making more than 2–3 days easy per week — the remaining days absorb all the extra cards, which can create the spikes you were trying to avoid.
:::

:::caution[The Bunching Problem]
If you set 4+ days to 0%, you're compressing a full week of reviews into 2–3 days. A 200-card daily load becomes 400+ on study days. This is worse than no easy days at all. Keep at least 4 full study days per week.
:::

## Scheduled Breaks

Scheduled breaks handle longer time away — vacations, trips, exam periods — by redistributing all reviews from the break window to surrounding days.

### Adding a Break

Go to `Settings → FSRS → Scheduled Breaks → Add scheduled break`:

| Field | Description |
|-------|-------------|
| **Start date** | First day of break (YYYY-MM-DD) |
| **End date** | Last day of break (YYYY-MM-DD) |
| **Redistribution** | Before, After, or Both |

### Redistribution Options

| Break Length | Recommended | Why |
|-------------|-------------|-----|
| 1–2 days | Before | Get ahead — the extra load is small |
| 3–5 days | Before or Both | Either works; "Both" if your pre-break days are already busy |
| 1 week | Both | Splits the load so neither side is overwhelming |
| 2+ weeks | Both | Almost always the right choice for long breaks |

- **Before** — cards move to days before the break. Best when you want to get ahead before leaving.
- **After** — cards move to days after the break ends. Avoids pre-break cramming but increases post-return load.
- **Both** — cards split evenly before and after. Best for longer breaks to keep the load manageable on both sides.

:::tip[Plan Ahead]
Add breaks at least a week in advance. The earlier you configure a break, the more days are available for redistribution, keeping the per-day increase small. A break added the day before gives the system almost no room to spread cards.
:::

### Managing Breaks

View all configured breaks in `Settings → FSRS → Scheduled Breaks`. Click a break to edit dates or redistribution, or delete it (cards return to their original dates).

### Example: Week Vacation

```
Start: 2025-07-14
End: 2025-07-20
Redistribution: Both
```

Half of July 14–20 cards move to the week before, the other half to the week after. The increase on any single day stays modest.

### What to Expect When You Return

Don't panic about retention after a break. FSRS is designed to handle delayed reviews gracefully — unlike older algorithms, it recalculates intervals based on actual time elapsed. The first few sessions back may feel harder (more cards, lower recall), but this is temporary. Within a week, FSRS adapts and your rhythm returns to normal.

:::note[Break Priority]
If a scheduled break overlaps with Easy Days, the break takes priority and Easy Day settings are ignored for those dates.
:::

## Sibling Dispersal

Siblings are cards generated from the same note:

| Note Type | Siblings |
|-----------|----------|
| Basic | 1 card (no siblings) |
| Cloze | Multiple clozes from same text |
| Reversed | 2 cards (Q→A and A→Q) |
| Image Occlusion | Multiple regions from same image |

Without dispersal, siblings can land on the same day, and seeing one gives away the answer to the other. Sibling dispersal spaces them apart by a minimum interval so each card tests independent recall.

:::tip[Keep Dispersal Enabled]
FSRS developers strongly recommend keeping sibling dispersal on at all times. Disabling it reduces the effectiveness of spaced repetition because related cards leak context to each other when reviewed close together. Dispersal is also strictly better than burying — burying only prevents siblings on the *same* day, while dispersal separates them by multiple days.
:::

### Enabling

Go to `Settings → FSRS → Sibling Dispersal`:

| Setting | Default | Description |
|---------|---------|-------------|
| **Enable** | Off | Activate sibling dispersal |
| **Minimum interval** | 3 days | Minimum gap between siblings |

### Choosing Your Minimum Interval

| Interval | Best For |
|----------|----------|
| 1–2 days | Reversed cards (Q→A and A→Q) where context leakage is minimal |
| 3–4 days | Standard use — cloze deletions, most note types (recommended) |
| 5–7 days | Heavy cloze notes where one deletion strongly hints at another |

### Automatic vs Manual

When enabled, siblings are automatically dispersed whenever new cards are created or cards are answered. You can also run **"Disperse siblings now"** in settings to immediately space all siblings that are currently too close — useful after a bulk import.

### Dispersal Rules

When siblings are too close:

1. The first-reviewed card keeps its due date.
2. Later-reviewed siblings are moved forward.
3. Cards won't be moved beyond their current interval or the maximum dispersal window.

Learning cards are not dispersed — they must graduate to review first. After a bulk import, run manual dispersal to clean up any clustering.

## Quick Setup Guide

Not sure where to start? Pick the scenario closest to yours:

### New User

Just start with the basics — you can always add more later.

```
Load Balancing: On
  Target: your current daily average from Statistics
  Deviation: 20%
Easy Days: Off (add later once you have a routine)
Sibling Dispersal: On
  Minimum interval: 3 days
Scheduled Breaks: None yet
```

### Busy Professional

Protect your weekends and keep weekday reviews predictable.

```
Load Balancing: On
  Target: 80–100 cards
  Deviation: 20%
Easy Days: Saturday 50%, Sunday 50%
Sibling Dispersal: On
  Minimum interval: 3 days
```

### Student Preparing for Exams

Higher daily volume with a break scheduled for exam week itself.

```
Load Balancing: On
  Target: 150–200 cards
  Deviation: 20%
Easy Days: Off (maximize study days)
Sibling Dispersal: On
  Minimum interval: 3 days
Scheduled Break: exam week, Redistribution: Before
```

### Casual Learner

Minimal time commitment, one full day off per week.

```
Load Balancing: On
  Target: 50 cards
  Deviation: 30%
Easy Days: Sunday 0%
Sibling Dispersal: On
  Minimum interval: 3 days
```

## How These Features Interact

These four tools complement each other and can all be active at once:

1. **Easy Days** set your base weekly pattern — which days are lighter and by how much.
2. **Load Balancing** smooths the remaining distribution, targeting a steady daily count within your deviation range.
3. **Scheduled Breaks** override Easy Days for their dates, redistributing all reviews to surrounding days.
4. **Sibling Dispersal** works alongside all of the above, ensuring related cards stay separated regardless of how other features shift dates.

## What to Read Next

- [Presets & Optimization](/scheduling/presets/) — reusable scheduling configurations per project
- [Scheduling](/scheduling/overview/) — day boundaries, learning steps, review order, and daily limits
- [Statistics](/views/statistics/) — see the effect of workload management on your review distribution
