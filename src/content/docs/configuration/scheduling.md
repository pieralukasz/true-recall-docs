---
title: Scheduling Settings
description: Configure how cards progress through learning stages
links:
  - /features/review-system/
  - /features/fsrs-algorithm/
  - /configuration/fsrs-parameters/
---

Scheduling settings control how cards move through learning stages, from new cards to long-term review.

## Accessing Settings

1. Open Obsidian Settings (`Cmd/Ctrl+,`)
2. Scroll to "True Recall"
3. Select "Scheduling" tab

## Learning Steps

### What Are Learning Steps?

Learning steps are short intervals for new cards before they "graduate" to the review phase. They help you learn new material before long-term scheduling kicks in.

### Learning Steps Configuration

Default: `1, 10` (minutes)

The card progresses:
1. First review → Wait 1 minute
2. Second review → Wait 10 minutes
3. Third review → Graduate (first review interval)

### Customizing Steps

**More steps** (e.g., `1, 10, 60, 1440`):
- Slower graduation
- More initial reinforcement
- Better for difficult material

**Fewer steps** (e.g., `10`):
- Faster graduation
- Less initial review
- For easier material

**Format**: Comma-separated minutes

### Examples

| Steps | Progression | Use Case |
|-------|-------------|----------|
| `1, 10` | 1m → 10m → graduate | Default, most content |
| `1, 10, 60` | 1m → 10m → 1h → graduate | Moderate difficulty |
| `5, 30, 1440` | 5m → 30m → 1day → graduate | Difficult content |
| `10` | 10m → graduate | Easy content |

## Relearning Steps

### What Are Relearning Steps?

When you rate a review card "Again" (forgot), it enters relearning. These steps are similar to learning but typically shorter.

### Relearning Steps Configuration

Default: `10` (minutes)

### Customizing Relearning

**Longer relearning** (e.g., `10, 60`):
- More reinforcement after lapse
- Helps prevent repeated failures

**Shorter relearning** (e.g., `5`):
- Quick re-exposure
- Faster return to review

## Graduating Interval

### What Is It?

The first review interval after a card completes learning steps.

Default: `1` day

### Customizing

| Setting | Effect |
|---------|--------|
| **1 day** | Standard, card reviewed tomorrow |
| **2-3 days** | Longer initial wait |
| **Same day** | (Not recommended) |

**Recommendation**: Keep at 1 day for optimal retention.

## Easy Interval

### What Is It?

When you rate a new card "Easy" during learning, it skips to this interval.

Default: `4` days

### Customizing

| Setting | Effect |
|---------|--------|
| **4 days** | Default skip for easy cards |
| **7 days** | Larger skip |
| **2 days** | Smaller skip |

**Use**: For cards you already know well.

## Card Order Settings

### New Card Order

How new cards are introduced:

| Order | Description |
|-------|-------------|
| **Random** | Random selection |
| **Oldest First** | Oldest created first |
| **Newest First** | Most recent first |

**Recommendation**: Random prevents patterns.

### Review Order

How review cards are presented:

| Order | Description |
|-------|-------------|
| **Due Date** | Most overdue first |
| **Random** | Random among due cards |
| **Due Date + Random** | Overdue first, then random |
| **By Retrievability** | Lowest recall probability first |

**Recommendation**: Due Date for efficient scheduling.

### New/Review Mix

How new cards mix with reviews:

| Setting | Description |
|---------|-------------|
| **Mix With Reviews** | Interleave throughout |
| **Show After Reviews** | Reviews first, then new |
| **Show Before Reviews** | New cards first |

**Recommendation**: Mix for varied sessions.

## Understanding Card Flow

```
NEW CARD
    │
    ▼
LEARNING (steps: 1m, 10m)
    │ ← Rate "Again": restart
    ▼ Rate "Good": continue
GRADUATED (interval: 1 day)
    │
    ▼
REVIEW (FSRS intervals)
    │ ← Rate "Again": RELEARNING
    ▼ Rate "Good": longer interval
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

## Tips

### Finding Your Steps

1. Start with defaults
2. Monitor graduation rate
3. If forgetting after graduation, add steps
4. If bored during learning, reduce steps

### Avoiding Overload

- More learning steps = more daily reviews
- Balance thoroughness with time
- Consider your available study time

### Adapting Over Time

- Adjust based on experience
- Different subjects may need different steps
- Review your retention statistics

## Common Issues

### Cards Not Graduating

If cards stay in learning:
- Check you're rating "Good" or better
- Verify steps are achievable
- Consider shorter steps

### Forgetting After Graduation

If retention drops after graduation:
- Add more learning steps
- Check graduating interval
- Review note quality

### Too Many Learning Cards

If learning pile grows:
- Reduce new cards per day
- Simplify learning steps
- Clear backlog before adding new
