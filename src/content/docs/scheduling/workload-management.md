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

### Deviation Setting

Controls how strictly the algorithm hits your target. With a target of 100:

| Deviation | Range | Notes |
|-----------|-------|-------|
| **10%** | 90–110 cards | Strict, may shift more intervals |
| **20%** | 80–120 cards | Balanced (recommended) |
| **30%** | 70–130 cards | Flexible, closer to natural scheduling |

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

### Example Setups

**Weekend light:**
```
Saturday: 50%
Sunday: 50%
```
Half the cards each weekend day, excess spread to weekdays.

**Full day off:**
```
Sunday: 0%
```
No reviews at all on Sundays; cards move to Saturday and Monday.

:::tip
Start with a 75% multiplier and adjust from there. Avoid making more than 2–3 days easy per week, or you'll bunch too many cards onto remaining days.
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

- **Before** — cards move to days before the break. Best when you want to get ahead before leaving.
- **After** — cards move to days after the break ends. Avoids pre-break cramming but increases post-return load.
- **Both** — cards split evenly before and after. Best for longer breaks to keep the load manageable on both sides.

### Managing Breaks

View all configured breaks in `Settings → FSRS → Scheduled Breaks`. Click a break to edit dates or redistribution, or delete it (cards return to their original dates). Add breaks at least a week in advance so the redistribution has room to spread.

### Example: Week Vacation

```
Start: 2025-04-01
End: 2025-04-07
Redistribution: Both
```

Half of April 1–7 cards move to late March, the other half to early April. The increase on any single day stays modest. For breaks longer than a week, "Both" is almost always the right choice.

:::note
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

### Enabling

Go to `Settings → FSRS → Sibling Dispersal`:

| Setting | Default | Description |
|---------|---------|-------------|
| **Enable** | Off | Activate sibling dispersal |
| **Minimum interval** | 3 days | Minimum gap between siblings |

Recommended minimums: 1–2 days for minimal spacing, 3–4 days for standard use, 5–7 days for strong separation.

### Automatic vs Manual

When enabled, siblings are automatically dispersed whenever new cards are created or cards are answered. You can also run **"Disperse siblings now"** in settings to immediately space all siblings that are currently too close — useful after a bulk import.

### Dispersal Rules

When siblings are too close:

1. The first-reviewed card keeps its due date.
2. Later-reviewed siblings are moved forward.
3. Cards won't be moved beyond their current interval or the maximum dispersal window.

Learning cards are not dispersed — they must graduate to review first. After a bulk import, run manual dispersal to clean up any clustering.

## How These Features Interact

These four tools complement each other and can all be active at once:

1. **Easy Days** set your base weekly pattern — which days are lighter and by how much.
2. **Load Balancing** smooths the remaining distribution, targeting a steady daily count within your deviation range.
3. **Scheduled Breaks** override Easy Days for their dates, redistributing all reviews to surrounding days.
4. **Sibling Dispersal** works alongside all of the above, ensuring related cards stay separated regardless of how other features shift dates.

For reusable scheduling configurations across different decks, see [Presets](/scheduling/presets/). For a broader overview of how FSRS scheduling works, see [Scheduling Overview](/scheduling/overview/).
