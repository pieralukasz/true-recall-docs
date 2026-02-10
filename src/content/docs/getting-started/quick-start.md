---
title: Quick Start
description: Create and review your first flashcards in 5 minutes
---

This guide will walk you through creating and reviewing your first flashcards with True Recall.

:::note[Not installed yet?]
See the [Installation guide](/getting-started/installation/) for instructions on installing True Recall via BRAT or manually.
:::

## Step 1: Write Your First Flashcard

Open any note and write a flashcard using the `#flashcard` tag:

```markdown
What is spaced repetition? #flashcard
A learning technique that reviews information at increasing intervals
to optimize long-term retention.
```

The format is: **Question** `#flashcard` on one line, followed by the **answer** on the next line(s).

## Step 2: Collect Flashcards

1. **Open the Flashcard Panel** — click the brain ribbon icon in the left sidebar
2. **Click "Collect"** — the panel will detect `#flashcard` tags in your note and import them

## Step 3: Start Reviewing

Once you have flashcards, it's time to review them:

1. **Click the brain ribbon icon** or use Command Palette → "Start review session"
2. **Read the question** displayed on the card
3. **Think of the answer** before revealing
4. **Press Space** or click "Show Answer"
5. **Rate your recall**:
   - **1 (Again)**: Forgot completely, see again soon
   - **2 (Hard)**: Struggled to recall
   - **3 (Good)**: Recalled with some effort
   - **4 (Easy)**: Recalled instantly

## Step 4: Check Your Progress

After reviewing, check your statistics:

1. **Click the chart ribbon icon** (orange) in the sidebar
2. **View today's summary**: Cards reviewed, time spent, accuracy
3. **Explore charts**: Retention over time, workload forecast, calendar heatmap

## Keyboard Shortcuts

During review sessions, these shortcuts speed up your workflow:

| Key | Action |
|-----|--------|
| `Space` | Show answer / Rate Good |
| `1` | Rate Again |
| `2` | Rate Hard |
| `3` | Rate Good |
| `4` | Rate Easy |
| `Cmd/Ctrl+Z` | Undo last rating |

## What's Next?

You've mastered the basics! Here's where to go next:

- **[Cloze Deletions](/features/cloze-deletions/)**: Create fill-in-the-blank cards with `{{c1::text}}` syntax
- **[Reversed Cards](/features/reversed-cards/)**: Auto-generate bidirectional cards with `#flashcard-reverse`
- **[Review System](/features/review-system/)**: Learn about card states and scheduling
- **[FSRS Algorithm](/features/fsrs-algorithm/)**: Understand and optimize the spaced repetition algorithm
- **[Projects](/features/projects/)**: Organize flashcards into study groups

## Tips for Success

1. **Review daily**: Consistency beats intensity. 10 minutes daily is better than 1 hour weekly.
2. **Write clear questions**: Good flashcards have specific questions with concise answers.
3. **Rate honestly**: Don't inflate your ratings—the algorithm learns from your honesty.
4. **Use projects**: Group related notes for focused study sessions.
5. **Check stats weekly**: Monitor retention and adjust your study habits.
