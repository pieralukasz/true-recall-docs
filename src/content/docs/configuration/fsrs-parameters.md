---
title: FSRS Parameters
description: Configure FSRS algorithm parameters and optimization
---

FSRS parameters control how the spaced repetition algorithm schedules your cards. Advanced configuration for users who want to fine-tune their learning.

## Accessing Settings

1. Open Obsidian Settings (`Cmd/Ctrl+,`)
2. Scroll to "True Recall"
3. Select "FSRS" tab

## Desired Retention

### What Is It?

Target probability of recalling a card when it's due for review.

### Configuration

Slider: 0.70 to 0.99

| Setting | Reviews | Retention |
|---------|---------|-----------|
| **0.95** | Many more | Very high |
| **0.90** | Default | Good balance |
| **0.85** | Fewer | Acceptable |
| **0.80** | Minimum | Significant forgetting |

### Choosing Your Retention

**High retention (0.92-0.95)**:
- Critical information
- Exam preparation
- Professional knowledge

**Standard retention (0.88-0.92)**:
- General learning
- Hobby knowledge
- Most use cases

**Lower retention (0.80-0.87)**:
- Bulk learning
- Less critical info
- Time-constrained

:::tip
Start with 0.90 and adjust based on actual retention in statistics.
:::

## Maximum Interval

### What Is It?

Longest interval a card can have, preventing indefinitely long gaps.

### Configuration

Default: 36500 days (100 years)

### Customizing

| Setting | Effect |
|---------|--------|
| **36500** | Effectively unlimited |
| **365** | Maximum 1 year |
| **180** | Maximum 6 months |

**When to lower**:
- Testing retention research
- Ensuring periodic review
- Special requirements

## FSRS Weights

### What Are Weights?

21 numerical parameters that control FSRS algorithm behavior:
- Initial stability values
- Stability growth rates
- Difficulty adjustments
- Forgetting curve shape

### Default Weights

Pre-calibrated values that work well for most users. Use unless you have optimization data.

### Custom Weights

Enter weights as comma-separated values:
```
0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61, 0.11, 0.78, 0.35, 0.77
```

### Optimized Weights

Generate personalized weights from your review history:

1. Review at least 400 cards
2. Click "Optimize Parameters"
3. Wait for analysis
4. Review suggested weights
5. Click "Apply" to use them

## Parameter Optimization

### Requirements

- Minimum 400 reviews
- Diverse card history
- Consistent rating behavior

### How It Works

1. Analyzes your review history
2. Finds patterns in your learning
3. Calculates optimal parameters
4. Suggests new weights

### Optimization Results

After optimization, you'll see:
- New weight values
- Comparison to defaults
- Expected improvement

### Applying Optimized Weights

1. Review the suggested weights
2. Click "Apply" to activate
3. Or click "Cancel" to keep current

:::caution
Optimization requires sufficient data. With few reviews, results may not be meaningful.
:::

## Reset Options

### Reset to Defaults

Restore default FSRS weights:
1. Click "Reset to Defaults"
2. Confirm the action
3. Default weights applied

### When to Reset

- After problematic optimization
- When starting fresh
- If experiencing strange scheduling

## Understanding Weight Effects

### Stability Weights (w0-w3)

Control initial stability for different first ratings:
- w0: Initial stability after "Again"
- w1: Initial stability after "Hard"
- w2: Initial stability after "Good"
- w3: Initial stability after "Easy"

### Difficulty Weights (w4-w6)

Control difficulty calculation:
- w4: Initial difficulty
- w5: Difficulty increase factor
- w6: Difficulty decrease factor

### Stability Growth Weights (w7-w16)

Control how stability grows with reviews:
- Rate of increase
- Effect of difficulty
- Effect of retrievability

### Forgetting Weights (w17-w20)

Control stability after forgetting:
- How much stability is retained
- Effect of time since last review
- Recovery rate

## Monitoring Performance

### Check Your Retention

After changing parameters:
1. Open Statistics
2. Compare actual vs target retention
3. Adjust if significantly different

### True Retention Metric

In statistics, "True Retention" shows:
- Actual success rate
- Comparison to FSRS prediction
- Calibration indicator

### Signs of Good Calibration

- True retention ≈ desired retention
- Stable retention over time
- Reasonable interval distribution

### Signs of Poor Calibration

- True retention << desired retention
- Erratic retention
- Very short or very long intervals

## Advanced Configurations

### High-Performance Setup
```
Desired retention: 0.92
Maximum interval: 36500
Weights: Optimized after 1000+ reviews
```

### Conservative Setup
```
Desired retention: 0.95
Maximum interval: 180
Weights: Default
```

### Experimental Setup
```
Desired retention: 0.85
Maximum interval: 365
Weights: Custom tuned
```

## Tips

### For Beginners

1. Use default weights
2. Keep retention at 0.90
3. Focus on consistent reviewing
4. Optimize after months of data

### For Experienced Users

1. Optimize periodically (quarterly)
2. Monitor true retention
3. Adjust retention based on needs
4. Don't over-tune

### Common Mistakes

- Optimizing with too few reviews
- Changing retention frequently
- Ignoring true retention feedback
- Using others' weights

## Troubleshooting

### Intervals Too Short
- Check desired retention
- Verify weights aren't corrupted
- Try resetting to defaults

### Intervals Too Long
- Check maximum interval setting
- Verify retention isn't too low
- Review your rating patterns

### Optimization Failed
- Need more reviews (400+)
- Check for data issues
- Try again later with more data
