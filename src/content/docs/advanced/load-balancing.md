---
title: Load Balancing
description: Automatically distribute reviews evenly across days
links:
  - /configuration/scheduling/
  - /advanced/easy-days/
---

Without load balancing, your workload can spike unpredictably—some days 150 cards, other days 20. Load balancing smooths this by redistributing reviews within FSRS constraints, creating a steady, sustainable rhythm.

## Configuration

Enable in **Settings** → **True Recall** → **FSRS**:

| Setting | Description |
|---------|-------------|
| **Enable** | Turn feature on/off |
| **Target Daily Reviews** | Desired reviews per day |
| **Maximum Deviation** | Acceptable variation (%) |

The algorithm calculates your target, identifies days above/below it, and shifts cards within acceptable ranges while respecting FSRS interval constraints.

## Choosing Your Target

Consider your available daily time:

| Target | Time Required* | Suitable For |
|--------|---------------|--------------|
| 50 | ~8 minutes | Light study |
| 100 | ~15 minutes | Moderate study |
| 150 | ~25 minutes | Heavy study |
| 200 | ~35 minutes | Intensive study |

*Assuming ~10 seconds per card

Calculate: `available_time × 6 = cards`. Set target slightly below your maximum to allow room for variation.

## Deviation Setting

The allowed variation from target. With a target of 100:

| Deviation | Effect | Range |
|-----------|--------|-------|
| **10%** | Strict, may shift intervals more | 90-110 cards |
| **20%** | Balanced (recommended) | 80-120 cards |
| **30%** | Flexible, closer to natural scheduling | 70-130 cards |

:::tip
Start with 20% deviation. Lower percentages give tighter control but may shift more intervals.
:::

## Balance Now

Click **"Balance Now"** to immediately apply balancing:
- Analyzes upcoming 30 days
- Redistributes cards
- Shows summary of changes

After balancing:
```
Balanced 45 cards across 14 days
Average: 98 cards/day
Max deviation: 18%
```

Check **Statistics** → **Workload** to see the smoothed distribution.

:::note[Works with Easy Days]
Load balancing complements [Easy Days](/advanced/easy-days/)—Easy Days set the base pattern, load balancing smooths within it.
:::
