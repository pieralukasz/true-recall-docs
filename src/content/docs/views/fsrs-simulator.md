---
title: FSRS Simulator
sidebar:
  order: 9
description: Interactive FSRS visualization to simulate review sequences and experiment with algorithm parameters.
---

The **FSRS Simulator** lets you visualize how FSRS scheduling works by simulating review sequences. Perfect for understanding the algorithm and experimenting with parameters.

## Opening

Cmd/Ctrl + P -> "Open FSRS simulator"

## Controls

### Rating Sequence

Build a review sequence by clicking rating buttons (Again, Hard, Good, Easy). Each click adds to the sequence.

| Button | Action |
|--------|--------|
| **+ Add Rating** | Add rating to sequence |
| **Simulate** | Run the simulation |
| **Reset** | Clear sequence |

## Simulation Chart

Visualizes the simulated reviews with selectable metrics:

| Metric | Description |
|--------|-------------|
| **Retention** | Probability of recall (0-1) |
| **Stability** | Memory stability in days |
| **Retrievability** | Current recall probability |

Chart elements: Lines show metric over time, markers indicate review events, dips show forgetting (Again ratings), rises show strengthening.

Options: Log scale for long sequences, Animate the simulation.

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| Desired Retention | 0.90 | Target recall probability |
| Max Interval | 36500 | Maximum interval in days |

Plus 21 FSRS weight sliders for fine control with Reset/Undo/Redo.

## Results Table

Shows each simulated review with: Review number, Rating, Interval, Stability, and Retrievability.

## Use Cases

- **Understanding FSRS** — Simulate Good, Good, Good to watch stability grow
- **Seeing lapse effects** — Simulate Good, Good, Again, Good to see how "Again" resets progress
- **Comparing ratings** — Run same sequence with different ratings to compare intervals
- **Testing parameters** — Adjust desired retention and see how intervals change

## Tips

- Start with short sequences (3-5 ratings) to understand patterns
- Compare scenarios by running same sequence with different parameters
- Use log scale for long sequences
- Watch retrievability dips to see when you're likely to forget
