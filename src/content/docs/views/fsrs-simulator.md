---
title: FSRS Simulator
sidebar:
  order: 10
description: Experiment with FSRS parameters and scheduling outcomes before applying them, using True Recall's interactive simulator.
---

:::caution[My Notes]
:::

The **FSRS Simulator** lets you see how the scheduler behaves under different parameters and review patterns — without touching your real cards. It's the safe place to build intuition for [FSRS](/scheduling/fsrs-algorithm/) before you change a preset.

## Opening the Simulator

Open it with the **Open FSRS simulator** command from the Command Palette.

<!-- TODO PHOTO -->

## What You Can Adjust

- **Parameter bar** — the FSRS weights and target retention driving the simulation.
- **Sliders** — vary inputs (such as stability, difficulty, or rating patterns) and watch the schedule respond.

## Reading the Results

- **Chart** — visualizes how intervals and retrievability evolve under the chosen parameters.
- **Results table** — the concrete scheduling outcomes step by step.
- **Comparison sequences** — run more than one parameter set side by side to see which schedules your material better.

## What to Read Next

- [The FSRS Algorithm](/scheduling/fsrs-algorithm/) — what the parameters mean
- [Presets & Optimization](/scheduling/presets/) — apply tuned parameters to real cards
- [Statistics](/views/statistics/) — measure true retention on your actual reviews
