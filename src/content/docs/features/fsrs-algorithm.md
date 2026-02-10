---
title: FSRS Algorithm
description: Understanding the Free Spaced Repetition Scheduler v6 algorithm
links:
  - /advanced/fsrs-optimization/
  - /configuration/fsrs-parameters/
  - /features/review-system/
---

True Recall uses **FSRS v6** (Free Spaced Repetition Scheduler), the most advanced open-source spaced repetition algorithm available. It's more efficient than Anki's SM-2, adapting to your learning patterns for optimal retention.

## What is FSRS?

FSRS is a modern spaced repetition algorithm developed by the open-source community. It uses machine learning principles to:

- **Predict forgetting probability** for each card
- **Calculate optimal review intervals** based on your history
- **Adapt to your learning patterns** over time

## Key Concepts

### Stability (S)
How many days until you have a 90% chance of forgetting the card. Higher stability = longer intervals.

- New cards start with low stability
- Successful reviews increase stability
- Failed reviews (rating "Again") decrease stability

### Difficulty (D)
How hard the card is for you specifically, on a scale of 0-10.

- Starts at a default value (around 5)
- "Hard" ratings increase difficulty
- "Easy" ratings decrease difficulty
- Affects how quickly stability grows

### Retrievability (R)
Current probability of successful recall, based on time since last review.

- Starts at 100% right after review
- Decreases over time following the forgetting curve
- When it reaches your desired retention, card becomes due

### Desired Retention
Your target probability of recall when cards are due. Default: 90%

- Higher retention (95%) = more frequent reviews
- Lower retention (85%) = fewer reviews, more forgetting
- Trade-off between workload and retention

## FSRS vs SM-2 (Anki)

| Aspect | FSRS | SM-2 (Anki) |
|--------|------|-------------|
| **Parameters** | 21 (trainable) | 4 (fixed) |
| **Adaptability** | Learns from your data | One-size-fits-all |
| **Forgetting Model** | Power-law decay | Exponential decay |
| **Difficulty** | Per-card, continuous | Per-card, discrete |
| **Efficiency** | ~15% fewer reviews | Baseline |

## How Scheduling Works

### New Card Flow

```
New → Learning Steps → Graduate → Review
       (1m, 10m)        (1 day)    (growing)
```

1. **New state**: Card never seen
2. **Learning**: Short intervals (minutes)
3. **Graduate**: First review interval (default: 1 day)
4. **Review**: FSRS calculates optimal intervals

### Review Interval Calculation

When you review a card, FSRS:

1. Updates stability based on your rating
2. Updates difficulty based on your history
3. Calculates new interval from stability and desired retention

### Rating Effects

| Rating | Stability | Difficulty | Next Interval |
|--------|-----------|------------|---------------|
| Again | Decreased | Increased | Short (relearn) |
| Hard | Slightly increased | Slightly increased | Below optimal |
| Good | Increased | Unchanged | Optimal |
| Easy | More increased | Decreased | Above optimal |

## FSRS Parameters

FSRS uses 21 parameters (called "weights") that control:

- Initial stability values
- Stability growth rate
- Difficulty adjustment
- Forgetting decay rate
- And more...

### Default Parameters
Work well for most users without optimization.

### Optimized Parameters
Train on your review history for personalized scheduling:

1. Go to Settings → True Recall → FSRS
2. Click "Optimize Parameters"
3. Requires 400+ reviews for meaningful optimization
4. Review the suggested weights
5. Apply to use them

## Configuration

### Settings → True Recall → FSRS

| Setting | Description | Default |
|---------|-------------|---------|
| **Desired Retention** | Target recall probability | 0.9 (90%) |
| **Maximum Interval** | Longest possible interval | 36500 days |
| **FSRS Weights** | Custom or optimized parameters | Default |

### Settings → True Recall → Scheduling

| Setting | Description | Default |
|---------|-------------|---------|
| **Learning Steps** | Minutes for learning phase | 1, 10 |
| **Relearning Steps** | Minutes for relearning | 10 |
| **Graduating Interval** | First review interval | 1 day |
| **Easy Interval** | Interval after "Easy" on new card | 4 days |

## Fuzzing

FSRS applies ±2.5% randomization to intervals to prevent:
- Cards bunching on the same day
- Artificial patterns in your schedule

## Understanding Your Data

### Retrievability Distribution
- Most cards should be 80-95% when due
- Lower values indicate overdue cards
- Higher values might mean over-review

### True Retention
Actual success rate vs predicted:
- Should be close to desired retention
- Much lower → difficulty is underestimated
- Much higher → might be over-reviewing

## Advanced: The Math

For those interested, FSRS uses these core formulas:

**Stability after review:**
```
S' = S × (1 + a × D^b × S^c × (exp(G) - 1))
```

**Retrievability over time:**
```
R = (1 + t/S × FACTOR)^DECAY
```

Where `a`, `b`, `c`, `FACTOR`, and `DECAY` are among the 21 trainable parameters.

## Resources

- [FSRS4Anki Wiki](https://github.com/open-spaced-repetition/fsrs4anki/wiki) - Detailed algorithm documentation
- [FSRS Paper](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm) - Technical paper on the algorithm
- [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) - TypeScript implementation used by True Recall
