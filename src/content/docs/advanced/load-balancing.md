---
title: Load Balancing
description: Automatically distribute reviews evenly across days
---

Load Balancing automatically spreads your reviews across days, preventing workload spikes and creating a more sustainable study rhythm.

## What Is Load Balancing?

Load Balancing:
- Smooths daily review counts
- Prevents extreme spikes
- Maintains steady workload
- Works within FSRS constraints

## How It Works

### The Problem

Without load balancing:
- Some days: 150 cards due
- Other days: 20 cards due
- Unpredictable workload
- Risk of skipping heavy days

### The Solution

With load balancing:
- Target: 80 cards/day
- Deviation: ±20%
- Smooth, predictable workload
- Sustainable habit

### Algorithm

Load balancing:
1. Calculates target daily reviews
2. Identifies days above/below target
3. Shifts cards within acceptable ranges
4. Respects FSRS interval constraints

## Enabling Load Balancing

### Settings Location

1. Go to **Settings** → **True Recall** → **FSRS**
2. Find **"Load Balancing"** section
3. Toggle **"Enable Load Balancing"**

### Configuration Options

| Setting | Description |
|---------|-------------|
| **Enable** | Turn feature on/off |
| **Target Daily Reviews** | Desired reviews per day |
| **Maximum Deviation** | Acceptable variation (%) |

## Configuring Target Reviews

### Choosing Your Target

Consider:
- Available daily time
- Current average reviews
- Sustainable pace

### Example Targets

| Target | Time Required* | Suitable For |
|--------|---------------|--------------|
| 50 | ~8 minutes | Light study |
| 100 | ~15 minutes | Moderate study |
| 150 | ~25 minutes | Heavy study |
| 200 | ~35 minutes | Intensive study |

*Assuming ~10 seconds per card

### Setting Target

1. Calculate: available_time × 6 = cards
2. Set target slightly below maximum
3. Allow room for variation

## Deviation Setting

### What Is Deviation?

The allowed variation from target:
- 20% deviation with 100 target = 80-120 cards
- 10% deviation = tighter control
- 30% deviation = more flexibility

### Choosing Deviation

| Deviation | Effect |
|-----------|--------|
| **10%** | Strict, may shift intervals more |
| **20%** | Balanced (recommended) |
| **30%** | Flexible, closer to natural scheduling |

## Running Load Balance

### Balance Now

To immediately apply:
1. Click **"Balance Now"**
2. System analyzes upcoming 30 days
3. Cards are redistributed
4. Summary shows changes

### Automatic Balancing

When enabled:
- Runs periodically
- Adjusts new schedules
- Maintains balance over time

## Understanding Results

### Balance Summary

After balancing:
```
Balanced 45 cards across 14 days
Average: 98 cards/day
Max deviation: 18%
```

### Workload Forecast

Check Statistics → Workload:
- See smoothed distribution
- Compare to previous
- Verify improvement

## Best Practices

### Finding Your Balance

1. Start with current average
2. Enable with 20% deviation
3. Review for one week
4. Adjust target if needed

### Combining with Easy Days

Works well together:
- Easy days set base pattern
- Load balancing smooths within that
- Complementary effects

### Avoiding Over-Optimization

Don't:
- Set deviation too tight
- Target far below natural
- Balance too frequently

## Impact on Learning

### Retention Effect

Minimal impact when reasonable:
- Shifts within ±1-2 days
- FSRS compensates
- Prioritizes critical intervals

### When Balancing Helps

- Large collections
- Irregular addition patterns
- Busy lifestyles
- Burnout prevention

### When to Skip

May not need if:
- Small collection (<500 cards)
- Already consistent workload
- Prefer natural scheduling

## Troubleshooting

### Workload Still Uneven

If spikes persist:
- Check deviation setting
- May need larger deviation
- Some variation is natural

### Target Not Reached

If consistently below target:
- Target may be too high
- Add more new cards
- Or accept lower volume

### Intervals Feel Wrong

If cards seem mis-scheduled:
- Increase deviation %
- Check FSRS settings
- May prefer natural scheduling

## Advanced: Understanding Constraints

### What Can't Be Changed

Load balancing respects:
- Minimum intervals
- Learning card schedules
- Critical due dates

### Priority Order

When balancing:
1. Keep learning cards on schedule
2. Prioritize overdue cards
3. Shift review cards within bounds
4. Never skip critical reviews

## FAQ

**Q: Does this hurt retention?**
A: Minimal impact—shifts are small (1-2 days).

**Q: Can I balance just once?**
A: Yes, disable auto and use "Balance Now" manually.

**Q: What if I add many cards at once?**
A: Balancing helps smooth the resulting spike.

**Q: Does it affect new cards?**
A: No, new cards follow daily limits, not balancing.
