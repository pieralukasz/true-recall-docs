---
title: Introduction
description: Learn what True Recall is and how it can help you remember everything you learn
links:
  - /getting-started/installation/
  - /features/review-system/
  - /features/fsrs-algorithm/
---

True Recall is an Obsidian plugin for spaced repetition. Open a note, open the Flashcard Panel, and create cards with the **+ Add Card** button. The plugin schedules reviews using FSRS (Free Spaced Repetition Scheduler) — the most advanced open-source algorithm for long-term memory.

## Cards are linked to notes

In Anki, flashcards live in decks separate from your study material. In True Recall, every card is linked to the note you created it from.

```
Chapter 3: Cell Biology       ← your note
  ├── What is the mitochondria?      ← card created from this note
  ├── What is the cell membrane?     ← card created from this note
  └── What is apoptosis?             ← card created from this note
```

Open the note, open the Flashcard Panel, and all its cards are right there — not buried in a separate app. You can review, edit, or add more cards without leaving the context of your study material.

## How it works

```
Open panel → Add cards → Review → FSRS schedules next review
```

1. **Open** the Flashcard Panel and click **+ Add Card**
2. **Write** your question and answer, then save
3. **Review** when cards come due — rate each card Again, Hard, Good, or Easy
4. **FSRS v6** calculates the optimal time to show each card again based on your performance

The algorithm tracks two things per card: **stability** (how long until you might forget) and **difficulty** (how hard this card is for you). Every review refines these values, so your schedule gets more accurate over time.

:::tip[Prefer writing in your notes?]
You can also write cards directly in your notes with `#flashcard` tags and click **Collect** in the panel to import them. See [Batch Adding](/features/batch-adding/) for details.
:::

## Projects group notes together

A project is a collection of notes you want to study together. One note can belong to multiple projects.

```
Project: "Biology Exam"
  ├── Chapter 3: Cell Biology       (12 cards)
  ├── Chapter 4: Genetics           (8 cards)
  └── Lab Notes: Microscopy         (5 cards)

Project: "Science Fundamentals"
  ├── Chapter 3: Cell Biology       (same 12 cards)
  └── Physics: Thermodynamics       (10 cards)
```

"Chapter 3: Cell Biology" appears in both projects. The cards are the same — no duplication.

## True Recall vs Anki

| | True Recall | Anki |
|---|---|---|
| **Where cards live** | Inside your notes | Separate from source material |
| **Algorithm** | FSRS v6 | FSRS v6 (optional) or SM-2 |
| **Organization** | Notes belong to multiple projects | 1 card = 1 deck |
| **Runs in** | Obsidian | Standalone app |
| **Data storage** | Local SQLite in your vault | Local database |

:::tip[Coming from Anki?]
See the [migration guide](/migration/from-anki/) for step-by-step instructions.
:::

## Local-first data

Your flashcard data lives in `.true-recall/true-recall.db` inside your vault — a portable SQLite database. Nothing leaves your machine unless you opt into cloud sync. It backs up with the rest of your vault.

## Next steps

Head to [Installation](/getting-started/installation/) to set up True Recall, then follow the [Quick Start](/getting-started/quick-start/) to create your first cards.
