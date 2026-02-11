---
title: FSRS Optimization
description: Train FSRS parameters on your review history for personalized scheduling
links:
  - /features/fsrs-algorithm/
  - /configuration/fsrs-parameters/
  - /configuration/fsrs-presets/
  - /views/fsrs-simulator/
---

FSRS optimization analyzes your review history to calculate personalized algorithm parameters, improving scheduling accuracy for your learning patterns.

:::note
**Per-Preset Optimization**: Each [FSRS preset](/configuration/fsrs-presets/) optimizes independently using only reviews from that preset. This means you need 400+ reviews **per preset**, not just 400 total.
:::

## What Is Optimization?

FSRS uses 21 parameters to schedule reviews. Optimization:
- Analyzes your review history
- Finds patterns in your learning
- Calculates optimal parameters
- Improves prediction accuracy

## Prerequisites

### Minimum Data Requirements

Before optimizing:
- **400+ reviews per preset** minimum
- **1000+ reviews per preset** recommended
- **Diverse cards** (various difficulties)
- **Consistent rating behavior**

### Per-Preset Review Tracking

Since database v22, True Recall tracks which preset was used for each review. This enables per-preset optimization:
- Each preset builds its own optimization data independently
- Historical reviews from before presets were introduced count as "Default" preset reviews
- Switching a card to a different preset means future reviews count toward the new preset

### Check Your Review Count

1. Open Statistics
2. Look at total reviews
3. Ensure sufficient data

## Running Optimization

### Step-by-Step

1. Go to **Settings** → **True Recall** → **FSRS**
2. **Select the preset** from the dropdown at the top
3. Verify sufficient reviews for that preset
4. Click **"Optimize Parameters"**
5. Wait for analysis (may take a moment)
6. Review suggested weights (applies to that preset only)
7. Click **"Apply"** or **"Cancel"**

### What Happens During Optimization

The optimizer:
1. Loads review history **for the selected preset only**
2. Builds a learning model from those reviews
3. Trains on your data
4. Finds best-fit parameters **for that preset**
5. Returns optimized weights

## Understanding Results

### Optimized Weights Display

After optimization, you'll see:
```
Suggested weights:
0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49...
```

### Comparison to Defaults

The optimizer may show:
- Percentage improvement expected
- Comparison to current weights
- Metrics like RMSE

### Interpreting Changes

**Significant changes** indicate:
- Your learning differs from average
- Personalization will help

**Minor changes** indicate:
- Default parameters work well
- Less benefit from optimization

## When to Optimize

### Good Times to Optimize

- After 1000+ reviews
- Every 3-6 months
- After changing study habits
- When retention seems off

### With Multiple Presets

If you use multiple presets, optimize them in order:
1. **Default preset first** — usually has the most review data
2. **Specialized presets** after 400+ reviews each
3. **Stagger** optimizations — don't optimize all presets at once
4. **Wait 3–6 months** between optimizations per preset

### Not Recommended

- With fewer than 400 reviews per preset
- After rating behavior changes
- While learning the system
- Too frequently (monthly+)

## After Optimization

### Monitor Results

After applying new weights:
1. Continue reviewing normally
2. Check retention in statistics
3. Compare to pre-optimization
4. Verify improvement

### Signs of Good Optimization

- True retention matches target
- Intervals feel appropriate
- Fewer "surprising" failures
- Stable performance

### Signs of Bad Optimization

- Retention drops significantly
- Intervals seem very wrong
- Many unexpected lapses
- Consider reverting

## Reverting Changes

### Reset to Defaults

If optimization didn't help:
1. Go to Settings → FSRS
2. Click "Reset to Defaults"
3. Confirm action
4. Default weights restored

### Using Previous Weights

If you saved previous weights:
1. Copy saved weight string
2. Paste into Custom Weights field
3. Save settings

## Advanced: Manual Tuning

### Understanding Each Weight

The 21 weights control different aspects:

| Weights | Controls |
|---------|----------|
| w0-w3 | Initial stability after first rating |
| w4-w6 | Difficulty calculation |
| w7-w16 | Stability growth factors |
| w17-w20 | Stability after forgetting |

### Caution

Manual tuning is:
- Not recommended for most users
- Easy to get wrong
- Can hurt performance
- Best left to optimization

## Best Practices

### Optimization Workflow

1. **Accumulate data**: Review for 2-3 months
2. **Check retention**: Note current performance
3. **Optimize**: Run the optimizer
4. **Compare**: Review suggested changes
5. **Apply**: If changes are reasonable
6. **Monitor**: Track improvement

### Data Quality

For best results:
- Rate cards honestly
- Maintain consistent habits
- Don't inflate ratings
- Review regularly

### Avoiding Problems

- Don't optimize too often
- Give changes time to work
- Keep backup of old weights
- Monitor for issues

## Troubleshooting

### "Not Enough Data"

If optimization fails:
- Check review count (need 400+)
- Wait and accumulate more reviews
- Try again later

### "Optimization Failed"

If process errors:
- Check for data corruption
- Try restarting Obsidian
- Report bug if persists

### Worse Performance After

If retention drops:
1. Note current weights
2. Reset to defaults
3. Wait 2 weeks
4. Compare performance
5. Report issue if persists

## Technical Details

### Algorithm Used

FSRS optimization uses:
- Maximum likelihood estimation
- Gradient descent
- Regularization for stability

### Metrics

The optimizer minimizes:
- Root Mean Square Error (RMSE)
- Prediction vs actual recall

### Limitations

Optimization cannot fix:
- Poor rating habits
- Insufficient data
- Fundamentally hard material

## FAQ

**Q: How often should I optimize?**
A: Every 3-6 months, or after significant changes in study habits.

**Q: Will it make my intervals shorter/longer?**
A: It adjusts to your actual performance, so intervals may shift either way.

**Q: Can I share optimized weights?**
A: Not recommended—weights are personalized to your learning patterns.

**Q: Should I optimize on mobile too?**
A: If you sync, optimize on primary device. Weights sync with settings.

**Q: Can I optimize all my presets at once?**
A: No, optimization is per-preset. Select each preset in the dropdown and optimize individually when it has 400+ reviews.

**Q: I have 2000 reviews total but optimization says "not enough data"?**
A: Check which preset is selected. You might have 1500 reviews with "Default" and 500 spread across other presets. Each preset needs 400+ reviews independently.

**Q: Will optimizing one preset affect my other presets?**
A: No. Presets are completely independent — each has its own weights and optimization history.
