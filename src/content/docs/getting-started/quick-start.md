---
title: Quick Start
description: Create and review your first flashcards in 5 minutes
links:
  - /features/basic-flashcards/
  - /features/cloze-deletions/
  - /features/review-system/
---

Five minutes. That's all you need to go from zero to reviewing your first flashcard.

:::note[Not installed yet?]
Head to the [Installation guide](/getting-started/installation/) first.
:::

## Create your first flashcard

1. Open any note
2. Click the brain icon in the left ribbon to open the **Flashcard Panel**
3. Click **+ Add Card**
4. Write your question and answer in the editor:

```markdown
What is spaced repetition? #flashcard
A learning technique that reviews information at increasing intervals
to optimize long-term retention.
```

5. Click **Save** (or press `Ctrl+Enter`)

Question on the first line with `#flashcard`, answer on the next line(s). You can add multiple cards at once — separate them with blank lines:

```markdown
What is spaced repetition? #flashcard
A learning technique that reviews information at increasing intervals
to optimize long-term retention.

What does FSRS stand for? #flashcard
Free Spaced Repetition Scheduler — an open-source algorithm
that adapts to your memory patterns.
```

## Start reviewing

Open the Command Palette and run **Start review session**, or click the brain ribbon icon.

You'll see a question. Think of the answer, then press `Space` to reveal it. Rate how well you recalled it:

| Rating | What it means |
|--------|---------------|
| **1 (Again)** | Forgot completely -- you'll see it again soon |
| **2 (Hard)** | Got it, but struggled |
| **3 (Good)** | Recalled with some effort |
| **4 (Easy)** | Recalled instantly |

FSRS (the scheduling algorithm) uses your ratings to figure out the best time to show each card again. Honest ratings make the algorithm work better.

## Check your progress

Click the orange chart icon in the ribbon to open the **Statistics Panel**. You'll see today's summary -- cards reviewed, time spent, accuracy -- plus charts for retention over time, workload forecasts, and a calendar heatmap.

## Keyboard shortcuts

These make review sessions fast:

| Key | Action |
|-----|--------|
| `Space` | Show answer / Rate Good |
| `1` | Rate Again |
| `2` | Rate Hard |
| `3` | Rate Good |
| `4` | Rate Easy |
| `Cmd/Ctrl+Z` | Undo last rating |

## What's next?

Now that you've got the basics down, try [cloze deletions](/features/cloze-deletions/) -- fill-in-the-blank cards you create with `{{c1::text}}` syntax. Or add `#flashcard-reverse` to auto-generate [reversed cards](/features/reversed-cards/) that quiz you in both directions.

When you're ready to go deeper, read about how the [FSRS algorithm](/features/fsrs-algorithm/) schedules your reviews, or organize your cards into [projects](/features/projects/) for focused study sessions.

## Tips

:::tip[The short version]
Review daily (10 minutes beats a weekly hour), write specific questions with concise answers, and rate honestly. The algorithm learns from your honesty -- inflated ratings hurt your retention, not help it.
:::
