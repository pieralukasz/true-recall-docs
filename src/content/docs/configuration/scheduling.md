---
title: Scheduling Settings
description: Configure how cards progress through learning stages
links:
  - /features/review-system/
  - /configuration/fsrs-presets/
  - /configuration/fsrs-parameters/
---

Scheduling settings control how cards move through learning stages, from new cards to long-term review. You'll find them under **Settings > True Recall > Scheduling**.

:::note
Learning and relearning steps are configured **per preset**. Each [FSRS preset](/configuration/fsrs-presets/) has its own step configuration. To configure: Settings > True Recall > FSRS tab > select preset.
:::

## Learning Steps

Learning steps are short intervals a new card goes through before it "graduates" into the review phase. They give you repeated exposure to fresh material before FSRS takes over long-term scheduling.

Default: `1, 10` (minutes)

Here's how a card with the default steps progresses:

1. First review -- wait 1 minute
2. Second review -- wait 10 minutes
3. Third review -- graduate (moves to first review interval)

**More steps** like `1, 10, 60, 1440` mean slower graduation and stronger initial reinforcement. Great for difficult material.

**Fewer steps** like `10` mean faster graduation and less upfront review. Works well for easier material.

Steps are written as comma-separated minutes.

| Steps | Progression | Use Case |
|-------|-------------|----------|
| `1, 10` | 1m > 10m > graduate | Default, most content |
| `1, 10, 60` | 1m > 10m > 1h > graduate | Moderate difficulty |
| `5, 30, 1440` | 5m > 30m > 1day > graduate | Difficult content |
| `10` | 10m > graduate | Easy content |

## Relearning Steps

When you rate a review card "Again" (forgot it), the card enters relearning. These steps work just like learning steps but are typically shorter since you've seen the material before.

Default: `10` (minutes)

Use **longer relearning** like `10, 60` for more reinforcement after a lapse. Use **shorter relearning** like `5` for a quick re-exposure before returning to normal review.

## Graduating Interval

The first review interval after a card completes all its learning steps.

Default: `1` day

| Setting | Effect |
|---------|--------|
| **1 day** | Standard, card reviewed tomorrow |
| **2-3 days** | Longer initial wait |
| **Same day** | (Not recommended) |

Keep this at 1 day for optimal retention.

## Easy Interval

When you rate a new card "Easy" during learning, it skips ahead to this interval instead of going through the remaining steps.

Default: `4` days

| Setting | Effect |
|---------|--------|
| **4 days** | Default skip for easy cards |
| **7 days** | Larger skip |
| **2 days** | Smaller skip |

Use this for cards you already know well and don't need to drill through learning steps.

## Card Order Settings

### New Card Order

How new cards are introduced:

| Order | Description |
|-------|-------------|
| **Random** | Random selection |
| **Oldest First** | Oldest created first |
| **Newest First** | Most recent first |

Random is recommended -- it prevents you from forming patterns based on card position.

### Review Order

How review cards are presented:

| Order | Description |
|-------|-------------|
| **Due Date** | Most overdue first |
| **Random** | Random among due cards |
| **Due Date + Random** | Overdue first, then random |
| **By Retrievability** | Lowest recall probability first |

Due Date is recommended for efficient scheduling.

### New/Review Mix

How new cards mix with reviews:

| Setting | Description |
|---------|-------------|
| **Mix With Reviews** | Interleave throughout |
| **Show After Reviews** | Reviews first, then new |
| **Show Before Reviews** | New cards first |

Mix is recommended for varied sessions that keep you engaged.

## Understanding Card Flow

```
NEW CARD
    |
    v
LEARNING (steps: 1m, 10m)
    | <- Rate "Again": restart
    v Rate "Good": continue
GRADUATED (interval: 1 day)
    |
    v
REVIEW (FSRS intervals)
    | <- Rate "Again": RELEARNING
    v Rate "Good": longer interval
LONG-TERM REVIEW
```

## Practical Configurations

### Default (Balanced)
```
Learning steps: 1, 10
Relearning steps: 10
Graduating interval: 1 day
Easy interval: 4 days
```

### Thorough Learning
```
Learning steps: 1, 10, 60, 1440
Relearning steps: 10, 60
Graduating interval: 1 day
Easy interval: 4 days
```

### Quick Learning
```
Learning steps: 10
Relearning steps: 5
Graduating interval: 1 day
Easy interval: 7 days
```

### Language Learning
```
Learning steps: 1, 5, 10, 30, 60
Relearning steps: 5, 30
Graduating interval: 1 day
Easy interval: 3 days
```

:::tip
Save frequently-used configurations as [FSRS presets](/configuration/fsrs-presets/). For example, create a "Medical" preset with thorough steps and a "Vocabulary" preset with quick steps, then assign them to different projects or notes.
:::
