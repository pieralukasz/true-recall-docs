---
title: FSRS Optimization
description: Train FSRS parameters on your review history for personalized scheduling
links:
  - /features/fsrs-algorithm/
  - /configuration/fsrs-parameters/
  - /configuration/fsrs-presets/
---

FSRS (Free Spaced Repetition Scheduler) optimization analyzes your review history to calculate personalized algorithm parameters. This improves scheduling accuracy by adapting to your specific learning patterns.

:::note
**Per-Preset Optimization**: Each [FSRS preset](/configuration/fsrs-presets/) optimizes independently using only reviews from that preset. This means you need 400+ reviews **per preset**, not just 400 total.
:::

## Prerequisites

You need **400+ reviews per preset** minimum before optimizing. **1000+ reviews per preset** is recommended for reliable results.

Since database v22, True Recall tracks which preset was used for each review. Each preset builds its own optimization data independently. Historical reviews from before presets were introduced count as "Default" preset reviews.

When a note belongs to multiple projects with different presets, preset attribution is **deterministic** -- the alphabetically first project's preset is used consistently. This ensures optimization data stays clean even for multi-project notes.

:::caution
Changing a note's preset does **not** transfer historical reviews to the new preset. If you reassign 500 cards from "Default" to a new "Medical" preset, the "Medical" preset starts with 0 reviews for optimization — you'll need to accumulate 400+ reviews under "Medical" before optimizing it. See [What Happens When You Change a Preset](/configuration/fsrs-presets/#what-happens-when-you-change-a-preset) for details.
:::

:::note
**Archived notes and optimization**: Review history from archived notes is included in FSRS optimization. This is intentional — your past reviews are valid calibration data for how your memory works, regardless of whether you're currently studying that material. Archiving a note only stops future reviews from being scheduled; it doesn't remove historical data from the optimizer.
:::

Check your review count in Statistics before optimizing.

## Running Optimization

Go to **Settings** → **True Recall** → **FSRS**, then select the preset from the dropdown at the top. Verify that preset has sufficient reviews, then click **"Optimize Parameters"**.

The optimizer loads review history for the selected preset only, builds a learning model, trains on your data, and finds best-fit parameters for that preset. Review the suggested weights, then click **"Apply"** or **"Cancel"**.

## Understanding Results

After optimization, you'll see suggested weights like:
```
0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49...
```

Significant changes from defaults indicate your learning differs from average and personalization will help. Minor changes indicate default parameters already work well for you.

The 21 weights control different aspects of the algorithm:

| Weights | Controls |
|---------|----------|
| w0-w3 | Initial stability after first rating |
| w4-w6 | Difficulty calculation |
| w7-w16 | Stability growth factors |
| w17-w20 | Stability after forgetting |

## When to Optimize

Optimize after accumulating 1000+ reviews, then every 3-6 months. Also optimize after changing study habits or when retention seems off.

If you use multiple presets, optimize the Default preset first (usually has the most review data), then specialized presets after each reaches 400+ reviews. Don't optimize all presets at once—stagger optimizations and wait 3-6 months between optimizations per preset.

Don't optimize with fewer than 400 reviews per preset, after changing rating behavior, while learning the system, or too frequently (monthly+).

## After Optimization

Continue reviewing normally and check retention in Statistics. Compare to pre-optimization performance to verify improvement.

Good optimization shows true retention matching target, appropriate intervals, fewer surprising failures, and stable performance. Bad optimization shows retention dropping significantly, intervals seeming very wrong, or many unexpected lapses—consider reverting.

## Reverting Changes

If optimization didn't help, go to Settings → FSRS and click "Reset to Defaults" to restore default weights. If you saved previous weights, paste them into the Custom Weights field and save.
