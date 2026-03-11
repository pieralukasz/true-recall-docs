---
title: Quick Start
sidebar:
  label: "Quick Start"
  order: 3
description: Create and review your first flashcards in 5 minutes
---

:::caution[My Notes]
:::

Five minutes. That's all you need to go from zero to reviewing your first flashcard.

:::note[Not installed yet?]
Head to the [Installation guide](/getting-started/installation/) first.
:::

## Create your first flashcard

The fastest way is with the **Selection Toolbar**:

1. Open any note in your vault
2. Select a paragraph of text
3. A toolbar appears above your selection
4. Click **Basic** — AI generates a flashcard

The generated card is added directly to your note in block format and immediately appears in the **[Flashcard Panel](/views/flashcard-panel/)** where you can manage and review it:

TODO: PHOTOS

```markdown
#type/basic
Front: What is spaced repetition?
Back: A learning technique that reviews information at increasing intervals to optimize long-term retention.
<!-- source: Spaced repetition reviews information at increasing intervals -->
```

:::note[Don't delete `flashcard_uid`]
Every note with flashcards gets a unique `flashcard_uid` field in its frontmatter. **True Recall generates it automatically** — you never need to create or edit it. This ID links the note to its cards in the database, so deleting it will break that connection. Leave it as-is.
:::

:::tip[The Flashcard Panel is your home base]
The [Flashcard Panel](/views/flashcard-panel/) is one of the most important views in True Recall. Keep it open while working — it automatically syncs with whatever note you're editing and shows:

- **Card status** — new, learning, and review counts at a glance
- **Collect & Generate** — add cards to the note or generate new ones
  :::

### Manual Alternative

Prefer a form over writing syntax? Click **Add** (+) in the [Flashcard Panel](/views/flashcard-panel/) to open the Add Flashcard Modal — fill in the fields and save. The card is added to the note immediately, no collection step needed.

## Start reviewing

Open the Command Palette and run **Start review session**, or click the review button in the Flashcard Panel.

You'll see a question. Think of the answer, then press `Space` to reveal it. Rate how well you recalled it:

| Rating        | What it means                                |
| ------------- | -------------------------------------------- |
| **1 (Again)** | Forgot completely — you'll see it again soon |
| **2 (Hard)**  | Got it, but struggled                        |
| **3 (Good)**  | Recalled with some effort                    |
| **4 (Easy)**  | Recalled instantly                           |

FSRS uses your ratings to figure out the best time to show each card again. Honest ratings make the algorithm work better.

## Check your progress

Open the **[Dashboard](/views/dashboard/)** (Cmd/Ctrl + P → "Open dashboard") to see:

- Cards due today
- Study time estimates
- Your notes with flashcards
- Review heatmap

## Keyboard shortcuts

These make review sessions fast:

| Key          | Action                  |
| ------------ | ----------------------- |
| `Space`      | Show answer / Rate Good |
| `1`          | Rate Again              |
| `2`          | Rate Hard               |
| `3`          | Rate Good               |
| `4`          | Rate Easy               |
| `Cmd/Ctrl+Z` | Undo last rating        |

## What's next?

Now that you've got the basics, explore more creation methods:

- [Selection Toolbar](/views/selection-toolbar/) — the most efficient way to create cards from any text
- [Cloze deletions](/creation/cloze-deletions/) — fill-in-the-blank cards with `{{c1::text}}` syntax
- [Image Occlusion](/creation/image-occlusion/) — create cards from images by hiding regions

When you're ready to go deeper, read about how the [FSRS algorithm](/scheduling/fsrs-algorithm/) schedules your reviews, or organize your cards into [projects](/creation/projects-and-notes/) for focused study sessions.

:::tip[The short version]
Review daily (10 minutes beats a weekly hour), write specific questions with concise answers, and rate honestly. The algorithm learns from your honesty — inflated ratings hurt your retention, not help it.
:::
