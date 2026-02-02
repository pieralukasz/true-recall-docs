---
title: FSRS Simulator
description: Interactive visualization of the FSRS spaced repetition algorithm
---

The FSRS Simulator helps you understand and visualize how the FSRS algorithm schedules your flashcards. Experiment with different parameters to see their effects.

## Opening the Simulator

- **Command Palette**: `Cmd/Ctrl+P` → "True Recall: Open FSRS simulator"

## Interface

```
┌─────────────────────────────────────────────────────────┐
│                    FSRS Simulator                       │
├─────────────────────────────────────────────────────────┤
│ Parameters                    │ Simulation Results      │
│                               │                         │
│ Desired Retention: [0.90]     │ Day │ Interval │ R(t)   │
│ ├───────────●──────────┤     │  1  │   1 day  │ 100%   │
│                               │  2  │   3 days │  95%   │
│ Initial Stability: [1.0]      │  5  │   8 days │  90%   │
│ ├────●─────────────────┤     │ 13  │  21 days │  90%   │
│                               │ 34  │  54 days │  90%   │
│ Initial Difficulty: [5.0]     │                         │
│ ├────────────●─────────┤     │                         │
│                               │                         │
│ [Simulate]                    │ ┌─────────────────────┐ │
│                               │ │    [Chart]          │ │
│ Weights: [Default ▼]          │ │                     │ │
│                               │ │  Interval growth    │ │
│                               │ │  over reviews       │ │
│                               │ └─────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

## Parameters

### Desired Retention

Target probability of recall when cards are due.

| Value | Effect |
|-------|--------|
| **0.95** | More reviews, higher retention |
| **0.90** | Default, balanced |
| **0.85** | Fewer reviews, more forgetting |
| **0.80** | Minimal reviews, significant forgetting |

### Initial Stability

Starting stability for new cards (days).

| Value | Effect |
|-------|--------|
| **Low (0.5)** | Shorter initial intervals |
| **Default (1.0)** | Normal progression |
| **High (2.0)** | Longer initial intervals |

### Initial Difficulty

Starting difficulty for new cards (0-10).

| Value | Effect |
|-------|--------|
| **Low (3)** | Faster stability growth |
| **Default (5)** | Normal growth |
| **High (7)** | Slower stability growth |

### FSRS Weights

Choose parameter set:
- **Default**: Standard FSRS parameters
- **Your Optimized**: Parameters from your data
- **Custom**: Enter custom values

## Simulation Output

### Results Table

Shows scheduling progression:

| Column | Description |
|--------|-------------|
| **Day** | Day of review |
| **Interval** | Time until next review |
| **R(t)** | Retrievability at review |
| **Stability** | Current stability value |
| **Difficulty** | Current difficulty value |

### Interval Chart

Visual representation of:
- Interval growth over reviews
- Comparison with different parameters
- Projected long-term schedule

## Running Simulations

### Basic Simulation

1. Set desired retention
2. Click **Simulate**
3. View results table
4. Analyze chart

### Comparing Parameters

1. Run simulation with current settings
2. Change a parameter
3. Run again
4. Compare results side-by-side

### Testing Scenarios

Simulate different review patterns:
- Always "Good" (normal progression)
- Mixed ratings (realistic)
- Some "Again" (with lapses)

## Understanding Results

### Interval Growth

Healthy pattern shows:
- Exponential-like growth initially
- Gradual tapering as intervals lengthen
- Approaching maximum interval

### Retrievability

At each review:
- Should be near desired retention
- Lower = card was overdue
- Higher = reviewed early

### Stability Evolution

After each "Good" rating:
- Stability increases
- Rate depends on difficulty
- Affects next interval

## Use Cases

### Before Optimization

Check current scheduling:
1. Enter your current weights
2. Simulate typical pattern
3. Identify issues

### After Optimization

Verify new parameters:
1. Enter optimized weights
2. Compare to old weights
3. Confirm improvement

### Learning FSRS

Understand the algorithm:
1. Try extreme values
2. See effects
3. Build intuition

## Practical Examples

### High Retention Need

For critical material:
```
Retention: 0.95
Result: More frequent reviews, shorter intervals
```

### Bulk Learning

For less critical material:
```
Retention: 0.85
Result: Fewer reviews, longer intervals
```

### Difficult Cards

Simulating hard material:
```
Initial Difficulty: 8
Result: Slower interval growth
```

## Chart Analysis

### Steep Growth
- Cards getting longer intervals quickly
- May indicate easy material
- Or low desired retention

### Flat Growth
- Intervals not increasing much
- May indicate difficult material
- Or very high retention target

### Plateaus
- Intervals stabilizing
- Normal at high stability
- May hit maximum interval

## Tips

### Start with Defaults
- Default parameters work for most
- Only adjust if needed
- Optimization usually better

### Small Changes
- Adjust one parameter at a time
- Observe effect
- Don't over-tune

### Real Data Priority
- Simulation is approximate
- Your review data is real
- Use optimization when possible

## Limitations

### Simplified Model
- Assumes consistent rating
- Real behavior varies
- Use for understanding, not prediction

### No Lapse Simulation
- Doesn't show forgetting
- Real learning includes lapses
- Factor this into expectations

## Troubleshooting

### Simulation Won't Run
- Check all parameters filled
- Ensure valid ranges
- Try resetting defaults

### Chart Not Displaying
- Wait for calculation
- Check browser compatibility
- Reload if stuck

### Unexpected Results
- Verify parameter values
- Compare to defaults
- Check weight format
