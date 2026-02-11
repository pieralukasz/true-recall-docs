---
title: Review System
description: How the spaced repetition review system works in True Recall
links:
  - /views/review-view/
  - /features/fsrs-algorithm/
  - /configuration/scheduling/
---

```
         ┌─────┐    learn    ┌──────────┐   graduate   ┌────────┐
         │ New │ ──────────▶ │ Learning │ ───────────▶ │ Review │
         └─────┘             └──────────┘              └────────┘
                                  ▲                        │
                                  │        forget          │
                                  │    ┌────────────┐      │
                                  └────│ Relearning │◀─────┘
                                       └────────────┘
```

Every card flows through this lifecycle. You create it (**New**), study it through short intervals (**Learning**), then it graduates to long-term scheduling (**Review**). Forget one? It drops into **Relearning** -- a faster path back to Review than starting from scratch.

## Card States in Practice

```markdown
## My Biology Note

Q: What organelle produces ATP?
A: The mitochondria

<!-- This card's journey: -->
<!-- Day 1: New → rated Good → Learning (see again in 1 min) -->
<!-- Day 1: Learning → rated Good → Learning (see again in 10 min) -->
<!-- Day 1: Learning → rated Good → Review (see again tomorrow) -->
<!-- Day 4: Review → rated Good → Review (see again in 4 days) -->
<!-- Day 8: Review → rated Again → Relearning (forgot it!) -->
```

**New** -- never reviewed, waiting for you to study it. Subject to your daily new card limit.

**Learning** -- short intervals (minutes to hours) while the memory forms. Goes through learning steps before graduating.

**Review** -- graduated to long-term scheduling. Intervals measured in days. This is where most of your cards live.

**Relearning** -- you forgot a Review card, so it re-enters a shorter learning phase to get back on track.

## How a Review Session Works

```
┌─────────────────────────────────────┐
│  New: 5  |  Learning: 3  |  Due: 12 │
├─────────────────────────────────────┤
│                                     │
│  Q: What organelle produces ATP?    │
│                                     │
│         [ Show Answer ]             │
│                                     │
├─────────────────────────────────────┤
│  Again(1)  Hard(2)  Good(3)  Easy(4)│
└─────────────────────────────────────┘
```

Start a session from the ribbon icon or command palette. You see the question, think of the answer, reveal it, then rate how well you remembered. The header tracks your progress -- **New** cards left to introduce, **Learning** cards in progress, and **Due** reviews for today.

## Rating Scale

| Rating | Name | Meaning | What Happens |
|--------|------|---------|--------------|
| **1** | Again | Forgot completely | Card resets to learning |
| **2** | Hard | Had to struggle | Shorter next interval |
| **3** | Good | Recalled with some effort | Normal interval |
| **4** | Easy | Instant recall | Longer interval |

FSRS (Free Spaced Repetition Scheduler) uses these ratings to calculate your optimal review timing. Rate honestly -- inflated ratings teach the algorithm wrong patterns and hurt your retention over time.

## Queue Order

```
Due Learning cards → Reviews + New cards → Pending Learning cards
```

Learning cards that are actually due come first because they need timely review. Reviews and new cards make up the bulk of your session. Cards you recently got wrong ("pending learning") appear last -- this gives them time to breathe before you see them again.

If only pending learning cards remain, you'll see a waiting screen with a countdown. Review cards can be studied up to 20 minutes early, but learning cards must be actually due to preserve the spacing effect.

## Session Types

**Standard review** runs all your due cards while respecting daily limits. This is what you'll use most days.

**Custom sessions** let you filter by source note, card state, or project. You can also ignore daily limits or bypass scheduling entirely to study cards that aren't due yet.

**Quick sessions** are one-click shortcuts:

```
From current note    →  review only the active note's cards
Today's new cards    →  cards you created today
Weak cards           →  cards with low retrievability
```

## Card Actions During Review

| Action | Shortcut | Description |
|--------|----------|-------------|
| Suspend | `!` (Shift+1) | Remove from review indefinitely |
| Bury | `-` | Hide until tomorrow |
| Bury Note | `=` | Bury all cards from the same source |
| Edit | `E` | Open card editor |
| Move | `M` | Move to a different note |
| Branch | `B` | Duplicate the card |
| New Card | `N` | Create a card manually |

Spot a typo mid-review? Press `E` to fix it. Card not relevant anymore? `!` suspends it until you manually unsuspend. Need to skip something for today? `-` buries it and it comes back tomorrow.

## Undo

```
Cmd/Ctrl+Z  →  undo last rating
```

Tapped "Again" by accident? Undo restores the card's previous state so you can rate again.

## Review Modes

**Fullscreen** takes over Obsidian's main content area for distraction-free study.

**Panel** opens as a side panel so you can keep your notes visible while reviewing -- useful when cards reference content you want to look up.

Set your preference in **Settings -> True Recall -> General -> Review Mode**.

## Daily Limits

```
New cards/day:  20    ← how many new cards to introduce
Reviews/day:   200    ← maximum reviews per session
```

Set these in **Settings -> True Recall -> General**.

:::tip
Learning cards don't count against daily limits. They always appear because they need frequent review to graduate properly.
:::
