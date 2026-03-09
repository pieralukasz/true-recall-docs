---
title: FSRS Algorithm
sidebar:
  order: -2
description: "How FSRS v6 works and why it outperforms older spaced repetition algorithms."
---

:::caution[My Notes]
:::

**True Recall** uses FSRS v6 (Free Spaced Repetition Scheduler), a machine learning-based algorithm developed by [Jarrett Ye](https://github.com/open-spaced-repetition/fsrs4anki) that significantly outperforms classic spaced repetition systems.

## Why FSRS

### Problems with older algorithms

The **Leitner system** uses fixed boxes with arbitrary intervals (1, 3, 7 days...). It has no memory model, no personalization, and no way to target a specific retention rate.

**SM-2**, Anki's default for over 20 years, improves on this with an ease factor multiplier — but suffers from "ease hell" where repeatedly difficult cards get stuck in too-short intervals. With only 3 parameters, no retention target, and no optimization, it can't model real memory behavior.

### What FSRS does differently

Instead of a single ease factor, FSRS models memory with three components:

![3D visualization of how stability increase depends on difficulty, current stability, and retrievability](../../../assets/concepts/fsrs-stability-increase-3d.png)

- **Stability** — How long until you're likely to forget (in days)
- **Difficulty** — How hard this particular card is for you (0–10)
- **Retrievability** — Your current probability of recalling the answer (0–100%)

With 21 trainable weights, FSRS captures patterns that SM-2's 3 parameters simply cannot.

## Algorithm comparison

|  | Leitner | SM-2 | FSRS v6 |
|---|---|---|---|
| **Memory model** | None (fixed boxes) | Ease factor | Stability + Difficulty + Retrievability |
| **Parameters** | 0 | 3 | 21 trainable weights |
| **Personalization** | None | None | ML-based optimization from your data |
| **Retention target** | No | No | Yes (configurable 70–99%) |
| **Short-term memory** | No | No | Yes |
| **Same-day reviews** | No | No | Yes |

## Core Concepts

### Stability

Stability is the time (in days) at which retrievability drops to your desired retention. Higher stability means longer intervals between reviews.

Factors that increase stability: successful recall (especially "Good" and "Easy"), multiple successful reviews, and longer previous intervals. Factors that decrease it: forgetting ("Again" rating) and long gaps without review.

### Difficulty

Difficulty represents how hard a card is to learn, on a 0–10 scale. Low difficulty (0–3) means easy concepts; medium (4–6) is average; high (7–10) means challenging material needing more reviews. Difficulty updates after each review but stabilizes over time.

### Retrievability

Retrievability is the current probability you can recall the answer. It decreases over time according to the forgetting curve — FSRS uses this to determine when to schedule your next review.

### Desired retention

Set a desired retention (default: 90%) and FSRS calculates intervals to maintain that target. Want 95% recall for medical exams? 85% for casual vocabulary? Adjust per [preset](/scheduling/presets/).

| Desired Retention | Effect |
|-------------------|--------|
| 85% | Fewer reviews, more forgetting |
| 90% (default) | Balanced for most learners |
| 95% | More reviews, less forgetting |

Higher retention means more daily reviews. The chart below shows how workload scales — the green zone (75–88%) is efficient, while pushing above 93% increases workload dramatically:

![Workload vs Desired Retention — green zone is efficient, yellow is moderate, red requires significantly more daily study time](../../../assets/concepts/fsrs-workload-retention.png)

## The 21 FSRS Weights

FSRS uses 21 weights that control how the algorithm behaves. Use [optimization](/scheduling/presets/#optimizing-parameters) rather than editing these manually.

| Weight Group | Purpose |
|--------------|---------|
| w[0–1] | Initial stability (from rating) |
| w[2–3] | Initial difficulty |
| w[4–5] | Difficulty update after review |
| w[6–7] | Stability update for hard/good |
| w[8] | Stability update for easy |
| w[9–10] | Stability after lapse |
| w[11–16] | Hard/good/easy stability multipliers |
| w[17–20] | Short-term memory and learning/relearning stability |

After 400+ reviews, FSRS can [optimize its weights](/scheduling/presets/#optimizing-parameters) from your actual review history to personalize scheduling to your memory patterns.

## FSRS States

Cards progress through four states:

```
New → Learning → Review → (lapse) → Relearning → Review
```

- **New** — Never reviewed, no stability or difficulty data yet
- **Learning** — First few reviews based on learning steps, short intervals
- **Review** — Graduated from learning, longer intervals (days/months/years)
- **Relearning** — After a lapse (forgot during review), similar to learning but with retained memory data

The next interval is calculated to maintain your desired retention, with fuzz applied (plus/minus 2.5% by default) to prevent review bunching.

## Advanced Mechanics

### Post-lapse stability

When you forget a card, FSRS doesn't reset to zero. The post-lapse stability function models how much memory strength remains after a lapse, factoring in the card's difficulty and previous stability.

![Post-lapse stability function — stability after forgetting converges to an upper limit based on difficulty and previous stability](../../../assets/concepts/fsrs-post-lapse-stability.png)

### Handling overdue reviews

FSRS models what happens when you review a card later than scheduled. Unlike SM-2's linear multiplier, FSRS uses a bounded function where stability increase converges to an upper limit — reviewing a card months late doesn't give infinite credit.

![FSRS stability increase (red) vs SM-2's linear model (blue) for overdue reviews — FSRS converges while SM-2 grows without bound](../../../assets/concepts/fsrs-forgetting-curve.png)

## What's New in v6

FSRS v6 adds four weights (17–20) for short-term memory modeling:

- **Same-day review handling** — Cards reviewed multiple times in one day are scheduled more accurately
- **Improved forgetting curve** — Better predictions for when you'll actually forget
- **Short-term stability** — Separate modeling for cards still in the learning phase

These improvements are especially noticeable during intensive study sessions with many new cards.

## Real-World Performance

Benchmarks on 9,999 Anki user collections show FSRS consistently outperforms all other algorithms. The matrix below shows the percentage of users for whom algorithm A (row) outperforms algorithm B (column):

![Superiority matrix — FSRS-5 outperforms SM-2 in over 91% of user collections](../../../assets/concepts/fsrs-superiority-benchmark.png)

FSRS achieves 10–20% better retention with 15–20% fewer reviews compared to SM-2. You remember more while studying less.

## Further Reading

- [Scheduling Overview](/scheduling/overview/) — how intervals, learning steps, and daily limits work
- [Presets & Optimization](/scheduling/presets/) — different FSRS settings and personalizing weights from your review history
- [FSRS Simulator](/views/fsrs-simulator/) — interactive visualization of how FSRS schedules cards
- [FSRS GitHub](https://github.com/open-spaced-repetition/fsrs4anki) — source code and research
