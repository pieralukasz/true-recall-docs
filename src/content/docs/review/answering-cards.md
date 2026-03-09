---
title: Answering Cards
sidebar:
  order: 2
description: "How the four-button rating system works with FSRS — what each rating does to scheduling, learning phases, lapses, and intervals."
---

:::caution[My Notes]
:::

When you review a flashcard, you rate how well you remembered it. That rating feeds into FSRS, which calculates when you'll see the card next. This page explains the mechanics behind each rating — what happens to your card's scheduling data and why honest ratings matter.

For the review interface itself — opening sessions, actions, keyboard shortcuts — see [Review Interface](/review/review-interface/).

## How Ratings Affect Scheduling

After each rating, FSRS updates three parameters on the card:

1. **Stability** — How long you'll remember it (higher = longer intervals)
2. **Difficulty** — How hard the card is for you (higher = more frequent reviews)
3. **Retrievability** — Current probability you can recall it right now

The next interval depends on your rating, current stability, your desired retention setting, and your FSRS weights.

## Rating Effects in Detail

### Again

- **Stability:** Decreases significantly
- **Difficulty:** Increases
- **State:** Moves to Relearning
- **Interval:** Reset to relearning steps (default: 10 min)

Use when you completely forgot or got it wrong.

### Hard

- **Stability:** Slight decrease or small increase
- **Difficulty:** Increases slightly
- **Interval:** Shorter than Good would be

Use when you remembered but struggled significantly.

### Good

- **Stability:** Increases based on FSRS calculation
- **Difficulty:** Minor adjustment
- **Interval:** Standard FSRS interval

Use when you remembered correctly with reasonable effort.

### Easy

- **Stability:** Increases more than Good
- **Difficulty:** Decreases
- **Interval:** Longer than Good would be

Use when you remembered instantly with no effort.

## Interval Preview

Each rating button shows the predicted next interval. The notation:

| Notation | Meaning |
|----------|---------|
| `<1m` | Less than 1 minute |
| `5m` | 5 minutes |
| `1.5h` | 1.5 hours |
| `2d` | 2 days |
| `1.2mo` | 1.2 months |
| `1y` | 1 year |

### Fuzz

Intervals have small random variation (±2.5%) to prevent cards from bunching on the same day.

## Being Honest with Ratings

Accurate ratings improve FSRS predictions. Common mistakes:

| Mistake | Effect |
|---------|--------|
| Rating Good when you forgot | FSRS overestimates your memory |
| Rating Easy too often | Intervals become too long |
| Rating Hard to avoid forgetting | More reviews than needed |
| Rating Again when you knew it | FSRS underestimates your memory |

Rate based on your actual recall, not what you "should" know:

- **Again** — You didn't remember
- **Hard** — Significant effort, maybe some doubt
- **Good** — Correct, normal effort
- **Easy** — Instant, automatic recall

## Learning Phase

New cards go through learning steps before entering the long-term review queue.

### Default Steps: [1, 10]

1. First review → See again in 1 minute
2. Second review → See again in 10 minutes
3. Graduate → Move to Review state

### Ratings During Learning

| Rating | Effect |
|--------|--------|
| Again | Restart learning steps |
| Hard | Repeat current step |
| Good | Advance to next step |
| Easy | Graduate immediately |

## Review Phase

Once cards graduate from learning, they enter the Review state with longer, FSRS-calculated intervals.

### Lapses

A **lapse** is when you forget a review card (rating Again):

1. Card moves to Relearning state
2. Goes through relearning steps (default: 10 min)
3. After relearning, returns to Review with reduced stability

Mature cards with good history recover quickly from lapses — a single lapse won't erase months of successful reviews.

## Rating Strategy by Card Age

### New Cards

Be strict. If you're unsure, rate Hard or Again to reinforce early.

### Young Cards (Learning)

Use Good to graduate normally. Use Easy only if recall was truly instant.

### Mature Cards (Review)

Rate honestly. Don't be afraid of Again on a card you've known for months — FSRS accounts for this and won't over-penalize.

## What to Read Next

- [Review Interface](/review/review-interface/) — the review view, actions, and session management
- [Type-in Mode](/review/type-in-mode/) — type your answers for stricter self-testing
- [FSRS Algorithm](/scheduling/fsrs-algorithm/) — how the algorithm calculates intervals
