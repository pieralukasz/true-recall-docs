---
title: FSRS Simulator
description: Interactive visualization of the FSRS spaced repetition algorithm
links:
  - /features/fsrs-algorithm/
  - /advanced/fsrs-optimization/
  - /configuration/fsrs-parameters/
---

The FSRS Simulator lets you play with FSRS (Free Spaced Repetition Scheduler) parameters and instantly see how they change your review schedule. Open it from the Command Palette: `Cmd/Ctrl+P` then search "True Recall: Open FSRS simulator".

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

Tweak the sliders on the left, hit **Simulate**, and watch the results table and chart update on the right.

### Desired Retention

How likely you want to remember a card when it comes due.

| Value | Effect |
|-------|--------|
| **0.95** | More reviews, higher retention |
| **0.90** | Default, balanced |
| **0.85** | Fewer reviews, more forgetting |
| **0.80** | Minimal reviews, significant forgetting |

### Initial Stability

Starting stability for new cards, measured in days.

| Value | Effect |
|-------|--------|
| **Low (0.5)** | Shorter initial intervals |
| **Default (1.0)** | Normal progression |
| **High (2.0)** | Longer initial intervals |

### Initial Difficulty

Starting difficulty for new cards on a 0--10 scale.

| Value | Effect |
|-------|--------|
| **Low (3)** | Faster stability growth |
| **Default (5)** | Normal growth |
| **High (7)** | Slower stability growth |

You can also pick which weight set to use: **Default** (standard FSRS), **Your Optimized** (trained on your reviews), or **Custom** (enter values manually).

## Simulation Output

The results table shows what happens at each review:

| Column | Description |
|--------|-------------|
| **Day** | Day of review |
| **Interval** | Time until next review |
| **R(t)** | Retrievability at review |
| **Stability** | Current stability value |
| **Difficulty** | Current difficulty value |

The interval chart plots how quickly your review gaps grow over time. Steep growth means easy material or low retention targets. Flat growth means hard material or a high retention target.

## Practical Examples

Need rock-solid recall for exam material? Set retention to **0.95**. You will review more often, but very little slips through.

```
Retention: 0.95
Result: More frequent reviews, shorter intervals
```

Studying something low-stakes? Drop retention to **0.85** and let the intervals stretch out.

```
Retention: 0.85
Result: Fewer reviews, longer intervals
```

Want to see how the algorithm handles tough cards? Crank initial difficulty up to **8** and watch intervals grow more slowly.

```
Initial Difficulty: 8
Result: Slower interval growth
```

:::note
The simulator is great for building intuition. For real scheduling improvements, run [FSRS optimization](/advanced/fsrs-optimization/) on your actual review data.
:::
