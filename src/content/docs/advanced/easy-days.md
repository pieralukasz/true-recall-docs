---
title: Easy Days
description: Reduce review workload on specific days while maintaining scheduling integrity
links:
  - /configuration/scheduling/
  - /advanced/load-balancing/
---

Easy Days let you reduce review load on certain days—weekends, holidays, or busy periods—while redistributing cards to maintain your learning schedule.

## What Are Easy Days?

Easy Days reduce the number of cards scheduled for specific days:
- Recurring weekdays (every Saturday)
- Specific dates (December 25)
- Configurable reduction percentage

## How It Works

When you configure an easy day:
1. Cards due on that day are reduced by your multiplier
2. Excess cards redistribute to adjacent days
3. Overall review count is maintained
4. Intervals remain optimal

### Example

With Saturday as 50% easy day:
- Normal Saturday: 100 due cards
- Easy Saturday: 50 cards
- Other 50 cards: spread to Fri/Sun

## Configuring Easy Days

### Accessing Settings

1. Go to **Settings** → **True Recall** → **FSRS**
2. Click **"Configure Easy Days"**

### Setting Recurring Days

Select days that repeat weekly:

| Day | Typical Use |
|-----|-------------|
| Saturday | Weekend rest |
| Sunday | Weekend rest |
| Monday | Busy work start |

### Setting Specific Dates

Add individual dates:
- Format: YYYY-MM-DD
- For holidays, vacations
- Temporary reductions

### Setting Multiplier

Configure the reduction:

| Multiplier | Effect |
|------------|--------|
| **0%** | No reviews on this day |
| **25%** | Quarter the normal load |
| **50%** | Half the normal load |
| **75%** | Slight reduction |

## Applying Easy Days

### After Configuration

1. Review your settings
2. Click **"Apply Easy Days"**
3. System reschedules affected cards
4. Confirmation shows cards moved

### What Gets Rescheduled

- Cards due on easy days
- Excess beyond multiplier
- To nearest non-easy days
- With minimal interval change

## Use Cases

### Weekend Light

For weekend breaks:
```
Saturday: 50%
Sunday: 50%
```

Result: 50% fewer cards each weekend day.

### Day Off

For complete rest:
```
Sunday: 0%
```

Result: No reviews on Sundays.

### Holiday Break

For specific holidays:
```
December 24: 25%
December 25: 0%
December 26: 25%
```

Result: Light load around Christmas.

### Busy Workday

For heavy work days:
```
Monday: 75%
```

Result: Lighter start to the week.

## Best Practices

### Start Conservative

Begin with mild reductions:
- Start at 75% multiplier
- Observe impact
- Adjust as needed

### Balance the Week

Don't make too many days easy:
- Maximum 2-3 easy days/week
- Keep some "hard" days
- Maintain total volume

### Plan Ahead

Configure before you need it:
- Set up vacations early
- Cards redistribute gradually
- Less sudden bunching

## Impact on Learning

### Positive Effects

- Sustainable long-term habit
- Prevents burnout
- Maintains consistency

### Potential Drawbacks

- Heavier adjacent days
- Slightly longer intervals
- Needs balancing

### Retention Impact

Minimal if used reasonably:
- Cards still reviewed
- Just shifted timing
- FSRS compensates

## Combining with Other Features

### With Load Balancing

Easy days + load balancing:
- Easy days set base reduction
- Load balancing smooths further
- Complementary features

### With Scheduled Breaks

For vacations:
- Use scheduled breaks for longer periods
- Use easy days for regular pattern
- Don't overlap conflictingly

## Monitoring Easy Days

### Checking Current Settings

In Settings → FSRS:
- See active recurring days
- See specific dates
- See multipliers

### Viewing Impact

In Statistics:
- Check workload forecast
- See distribution changes
- Monitor actual vs predicted

## Troubleshooting

### Cards Not Redistributing

If cards stay on easy days:
- Check you clicked "Apply"
- Verify multiplier < 100%
- Check adjacent days aren't also easy

### Too Many Cards on Adjacent Days

If bunching occurs:
- Increase multiplier (less reduction)
- Spread easy days across week
- Enable load balancing

### Easy Days Not Saving

If settings don't persist:
- Check settings saved
- Reload plugin
- Verify configuration format

## Removing Easy Days

### Clearing Configuration

1. Go to Settings → FSRS
2. Click "Configure Easy Days"
3. Remove days or set multiplier to 100%
4. Click "Apply"

### Effect of Removal

When removed:
- Future days return to normal
- Already-scheduled cards unchanged
- Gradual normalization

## FAQ

**Q: Will I forget more if I use easy days?**
A: Minimal impact—cards shift by 1-2 days maximum.

**Q: Can I have easy days in the middle of the week?**
A: Yes, any day can be an easy day.

**Q: What happens if all days are easy?**
A: Effectively reduces overall review volume, which may hurt retention.

**Q: Do easy days affect new cards?**
A: Primarily affects review cards; new cards follow daily limits.
