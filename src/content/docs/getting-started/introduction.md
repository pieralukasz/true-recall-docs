---
title: Introduction
description: Learn what True Recall is and how it can help you remember everything you learn
links:
  - /getting-started/installation/
  - /features/review-system/
  - /features/fsrs-algorithm/
---

```markdown
# My Study Notes

What is the mitochondria? #flashcard
The powerhouse of the cell. It generates most of the cell's
ATP through oxidative phosphorylation.

What does DNA stand for? #flashcard
Deoxyribonucleic acid — the molecule that carries genetic
instructions for growth, development, and reproduction.
```

True Recall is an Obsidian plugin for spaced repetition. You write flashcards directly in your notes with `#flashcard` tags, and the plugin schedules reviews using FSRS (Free Spaced Repetition Scheduler) — the most advanced open-source algorithm for long-term memory.

## Your note is the deck

In Anki, flashcards live in decks separate from your study material. In True Recall, the note itself is the deck.

```markdown
# Chapter 3: Cell Biology          ← this note is the deck

What is the mitochondria? #flashcard
The powerhouse of the cell.

What is the cell membrane? #flashcard
A lipid bilayer that controls what enters and exits the cell.

What is apoptosis? #flashcard
Programmed cell death — the body's way of removing
damaged or unnecessary cells.
```

Your flashcards stay next to the material they came from. When you revisit a note months later, the cards are right there — not buried in a separate app.

## How it works

```
Write cards → Collect → Review → FSRS schedules next review
```

1. **Write** flashcards in any note using `#flashcard` tags
2. **Collect** them with one click in the Flashcard Panel
3. **Review** when they come due — rate each card Again, Hard, Good, or Easy
4. **FSRS v6** calculates the optimal time to show each card again based on your performance

The algorithm tracks two things per card: **stability** (how long until you might forget) and **difficulty** (how hard this card is for you). Every review refines these values, so your schedule gets more accurate over time.

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
