---
title: FSRS Algorithm
description: How FSRS v6 schedules your reviews and what happens behind the scenes
links:
  - /advanced/fsrs-optimization/
  - /configuration/fsrs-parameters/
  - /features/review-system/
---

```
Day 1:  You review a card, rate it "Good"
        → FSRS schedules next review in 1 day

Day 2:  You see it again, rate "Good"
        → Next review in 3 days

Day 5:  Rate "Good" again
        → Next review in 8 days

Day 13: Still remember it, "Good"
        → Next review in 20 days
```

That growing gap between reviews is FSRS at work. It watches how you rate each card and builds a model of your memory -- predicting exactly when you're about to forget so you review at the right moment.

**FSRS v6** (Free Spaced Repetition Scheduler) is the open-source algorithm that powers True Recall. It replaces older systems with a machine-learning approach that adapts to *you*.

## How FSRS Thinks About Your Memory

FSRS tracks three numbers for every card. Together they decide when you see it next.

**Stability** is how long a memory lasts. Think of it as the number of days until your recall drops to 90%. A card with stability of 20 means FSRS expects you to still remember it 20 days after your last review. Every time you answer correctly, stability grows. Answer "Again" and it shrinks.

**Difficulty** is how hard the card is *for you*, on a scale of 0 to 10. Rating "Easy" pushes difficulty down. Rating "Hard" pushes it up. Harder cards gain stability more slowly, so you see them more often.

**Retrievability** is your probability of remembering the card *right now*. It starts at 100% right after a review and drops over time following a forgetting curve. When retrievability falls to your target (default 90%), the card becomes due.

:::tip
You don't need to think about these numbers while reviewing. FSRS handles them automatically. But if you're curious, the [Statistics](/features/statistics/) view shows retrievability across your collection.
:::

## What Your Ratings Do

| Rating | Stability | Difficulty | Next Interval |
|--------|-----------|------------|---------------|
| Again | Decreased | Increased | Short (relearn) |
| Hard | Slightly increased | Slightly increased | Below optimal |
| Good | Increased | Unchanged | Optimal |
| Easy | More increased | Decreased | Above optimal |

"Good" is the sweet spot for most reviews. Use "Again" when you genuinely forgot, and "Easy" when the answer was instant and effortless.

## FSRS vs SM-2

SM-2 is the algorithm Anki has used since the 1990s. FSRS is its modern replacement.

| | FSRS | SM-2 |
|---|------|------|
| **Parameters** | 21 (trainable from your data) | 4 (fixed) |
| **Adaptability** | Learns your patterns | Same formula for everyone |
| **Efficiency** | ~15% fewer reviews | Baseline |
| **Forgetting model** | Power-law decay | Exponential decay |

The biggest difference is adaptability. SM-2 uses the same formula no matter who you are. FSRS can optimize its 21 parameters based on your review history, giving you a personalized schedule after about 400 reviews.

## Desired Retention

```
desired_retention = 0.9   → cards due at ~90% recall (default)
desired_retention = 0.95  → more reviews, less forgetting
desired_retention = 0.85  → fewer reviews, more forgetting
```

Desired retention is the recall probability you want when cards come due. At the default 0.9, FSRS schedules reviews so you have a 90% chance of remembering each card.

Raising it means shorter intervals and more daily reviews. Lowering it means longer intervals but more forgotten cards. For most people, 0.85--0.9 is the sweet spot.

## Optimizing Parameters

FSRS works well out of the box with default parameters. After you've done 400+ reviews, you can train it on your data for better scheduling.

```
Settings → True Recall → FSRS → Optimize Parameters
```

Optimization analyzes your review history and adjusts FSRS's 21 internal weights to match your actual forgetting patterns. See [FSRS Optimization](/advanced/fsrs-optimization/) for a deeper look.

## Interval Fuzzing

FSRS adds a small random offset (around 2.5%) to every interval. If two cards would both be due on Thursday, fuzzing might push one to Wednesday and the other to Friday. This prevents review pile-ups and keeps your daily workload smooth.

## The Math (Optional)

:::note
You can skip this section entirely. It's here for the curious.
:::

FSRS uses two core formulas.

**Retrievability** decays over time `t` (in days) since your last review:

```
R = (1 + t/S × FACTOR)^DECAY
```

**Stability** updates after each review based on your rating:

```
S' = S × (1 + a × D^b × S^c × (exp(G) - 1))
```

The variables `a`, `b`, `c`, `FACTOR`, and `DECAY` are among the 21 trainable parameters. When you optimize, these get tuned to your personal forgetting curve.

## Resources

- [FSRS4Anki Wiki](https://github.com/open-spaced-repetition/fsrs4anki/wiki) -- Detailed algorithm documentation
- [FSRS Paper](https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-Algorithm) -- Technical paper on the algorithm
- [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) -- TypeScript implementation used by True Recall
