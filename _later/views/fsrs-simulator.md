---
title: FSRS Simulator
sidebar:
  order: 9
description: Interactive FSRS visualization to simulate review sequences and understand how ratings affect scheduling and memory stability.
---

:::caution[My Notes]
:::

The **FSRS Simulator** lets you run "what if" experiments on the algorithm before touching your real cards. Build a sequence of ratings, hit Simulate, and watch how memory stability, retrievability, and review intervals evolve over time. It's the fastest way to develop intuition for FSRS without waiting months for real results.

## Opening the Simulator

`Cmd/Ctrl + P` → "Open FSRS simulator"

TODO PHOTO

---

## How FSRS Works (the short version)

FSRS tracks two values per card:

- **Stability (S)** — how many days until there's a 90% chance you'll forget. A card with S=30 needs to be reviewed in about 30 days to maintain 90% retention.
- **Difficulty (D)** — how hard this card is for you personally. Difficulty changes slowly based on your ratings.

After each review, FSRS recalculates both values. A "Good" rating increases stability — the next interval gets longer. An "Again" rating (lapse) causes stability to drop sharply, and the card enters a short relearning sequence.

The simulator lets you watch these mechanics play out in real time.

---

## Building a Rating Sequence

The sequence builder is a row of buttons: **Again**, **Hard**, **Good**, **Easy**.

Click buttons in order to build the sequence you want to simulate. Each click adds one rating event:

```
Good → Good → Good → Again → Good → Good
```

This represents six reviews. The third review was a lapse (Again), then you recovered with two Good ratings.

| Button | Action |
|--------|--------|
| **+ Add Rating** | Add the selected rating to the sequence |
| **Simulate** | Run the simulation with the current sequence and parameters |
| **Reset** | Clear the sequence and chart |

---

## The Simulation Chart

After clicking **Simulate**, the chart renders the full sequence.

TODO PHOTO

### What each metric shows

| Metric | Y-axis range | What to look for |
|--------|-------------|------------------|
| **Retention** | 0–1 | The recall probability at the moment of each review. Drops between reviews, spikes back up after a correct answer. |
| **Stability** | Days | Grows after each Good/Easy rating. Drops sharply after Again. Shows the long-term growth of memory strength. |
| **Retrievability** | 0–1 | Like Retention but shown continuously between reviews — the smooth curve of forgetting. |

**Chart elements:**
- Lines show the metric over the full simulated time period
- Markers on the line indicate when a review occurred
- Sharp dips indicate Again ratings (lapses)
- The steepness of the forgetting curve between reviews reflects the stability at that point

**Options:**
- **Log scale** — useful for long sequences where late intervals dwarf early ones
- **Animate** — plays the simulation step by step instead of showing everything at once

---

## Parameters

Adjust these before running a simulation to see how they change scheduling:

| Parameter | Default | Description |
|-----------|---------|-------------|
| **Desired Retention** | 0.90 | The target recall probability. Higher retention = more frequent reviews. Lower retention = longer intervals but more forgetting. |
| **Max Interval** | 36500 | Maximum interval in days (36500 = 100 years, effectively unlimited). Lowering this caps how long intervals can grow. |
| **FSRS Weights** | 21 sliders | The algorithm's internal parameters. Correspond to the weights in your FSRS settings. Reset/Undo/Redo available. |

---

## Results Table

Below the chart, a table shows each simulated review:

| Column | Description |
|--------|-------------|
| Review # | Sequential review number |
| Rating | The rating you assigned (Again / Hard / Good / Easy) |
| Interval | Days since the previous review |
| Stability | Memory stability (days) after this review |
| Retrievability | Recall probability at the time of this review |

Use the table to see exact values when the chart lines overlap or are hard to read.

---

## Worked Examples

### Scenario 1: Consistent Good ratings

Sequence: `Good → Good → Good → Good → Good`

What you'll see: Stability grows exponentially. The first Good might give a 1-day interval. The second gives 4 days. The third gives 10 days. By the fifth review the interval is in the months range. This is the ideal learning curve — each successful review makes the next one further away.

### Scenario 2: A lapse and recovery

Sequence: `Good → Good → Good → Again → Good → Good`

What you'll see: The three Good ratings build stability normally. Then "Again" causes a sharp stability drop — the card enters relearning with a short interval (hours or days). The following two Good ratings rebuild stability, but from a lower base than if the lapse hadn't happened. This shows why lapses set you back, but also how recovery works.

### Scenario 3: Hard vs Good comparison

Run the same 5-rating sequence twice:
- First run: `Good → Good → Good → Good → Good`
- Second run: `Hard → Hard → Hard → Hard → Hard`

Compare the final stability. Hard ratings produce shorter intervals than Good. Over 5 reviews this compounds — you end up reviewing the "Hard" card far more often for the same level of retention.

### Scenario 4: Effect of Desired Retention

Run `Good → Good → Good → Good → Good` at 90% retention, then again at 80%.

At 80% you'll see longer intervals — you're accepting a higher chance of forgetting between reviews in exchange for reviewing less often. At 95% the intervals shrink significantly — you're reviewing more often to maintain very high retention.

---

## Use Cases

| Goal | How to use the simulator |
|------|--------------------------|
| **Understand FSRS** | Run a simple Good×5 sequence and watch stability grow |
| **See lapse effects** | Insert an "Again" mid-sequence and observe the stability drop |
| **Compare ratings** | Same sequence with all-Good vs all-Hard — compare final intervals |
| **Tune Desired Retention** | Run the same sequence at 80%, 90%, 95% — see the tradeoff |
| **Understand weight impact** | Adjust a weight slider, re-simulate, and observe the change |

---

## Tips

- Start with short sequences (3–5 ratings) to understand the basic patterns before trying long simulations.
- Use **log scale** when you have 8+ reviews — otherwise early intervals are invisible on the chart.
- The simulator uses your actual FSRS weight settings by default, so results reflect how *your* configuration would behave.
- Compare scenarios by running one sequence, noting the results, then resetting and running the alternative.

---

## Related

- [FSRS Algorithm](/scheduling/fsrs-algorithm/) — deep dive into stability, difficulty, and retrievability
- [Why FSRS?](/scheduling/why-fsrs/) — how FSRS compares to older algorithms
- [FSRS Settings](/configuration/fsrs-settings/) — configure weights and retention targets
- [FSRS Optimization](/scheduling/fsrs-optimization/) — optimize weights from your review history
