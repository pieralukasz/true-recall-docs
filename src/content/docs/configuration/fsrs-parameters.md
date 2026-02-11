---
title: FSRS Parameters
description: Configure FSRS algorithm parameters and optimization
links:
  - /features/fsrs-algorithm/
  - /advanced/fsrs-optimization/
  - /configuration/fsrs-presets/
  - /views/fsrs-simulator/
---

FSRS (Free Spaced Repetition Scheduler) parameters control how your cards get scheduled. You'll find them in **Obsidian Settings > True Recall > FSRS**, with a preset dropdown at the top. Pick a preset, and everything on the page applies to that preset only.

All settings on this page — retention, max interval, weights, optimization — are **per-preset**. Switching the dropdown changes which preset you're configuring.

## Desired Retention

Your target probability of recalling a card when it comes up for review. Drag the slider anywhere from 0.70 to 0.99.

| Setting | Reviews | Retention |
|---------|---------|-----------|
| **0.95** | Many more | Very high |
| **0.90** | Default | Good balance |
| **0.85** | Fewer | Acceptable |
| **0.80** | Minimum | Significant forgetting |

Higher values like 0.92-0.95 make sense for exam prep or professional knowledge. Standard 0.88-0.92 works for most general learning. Lower values like 0.80-0.87 suit bulk learning when you're short on time.

:::tip
Start with 0.90 and adjust based on actual retention in statistics.
:::

## Maximum Interval

The longest gap a card can have before its next review. The default is 36500 days (effectively forever).

You might cap exam content at 180 days while leaving general knowledge unlimited. A few common setups:

| Setting | Effect |
|---------|--------|
| **36500** | Effectively unlimited |
| **365** | Maximum 1 year |
| **180** | Maximum 6 months |

## FSRS Weights

21 numerical parameters that shape how FSRS behaves — initial stability, growth rates, difficulty adjustments, and the forgetting curve. Each preset has its own weight set, so different subjects can be tuned independently.

### Default Weights

Pre-calibrated values that work well out of the box. Use these unless you have optimization data telling you otherwise.

### Custom Weights

Paste weights as comma-separated values:

```
0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61, 0.11, 0.78, 0.35, 0.77
```

### Weight Groups

| Group | Weights | Controls |
|-------|---------|----------|
| **Stability** | w0-w3 | Initial stability after Again, Hard, Good, Easy |
| **Difficulty** | w4-w6 | Initial difficulty, increase factor, decrease factor |
| **Stability Growth** | w7-w16 | Rate of increase, effect of difficulty, effect of retrievability |
| **Forgetting** | w17-w20 | Retained stability, effect of time since last review, recovery rate |

## Parameter Optimization

You can generate personalized weights from your review history. Optimization is **per-preset** — each preset uses only its own reviews.

To optimize a preset:

1. Select the preset in the dropdown
2. Review at least 400 cards with that preset
3. Click **Optimize Parameters**
4. Wait for analysis
5. Review the suggested weights
6. Click **Apply** to use them, or **Cancel** to keep your current weights

:::caution
Optimization requires sufficient data. With few reviews, results may not be meaningful.
:::

## Reset Options

If optimization goes sideways or you just want a clean slate, click **Reset to Defaults** and confirm. Your weights go back to the pre-calibrated values.
