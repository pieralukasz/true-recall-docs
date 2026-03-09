---
title: Introduction
sidebar:
  order: 1
description: Learn what True Recall is and how it can help you remember everything you learn
---

True Recall is an Obsidian plugin for spaced repetition. Your flashcards live alongside your notes, scheduled by FSRS v6 — the most advanced open-source algorithm for long-term memory.

## Cards are linked to notes

In Anki, flashcards live in decks separate from your study material. In True Recall, every card is linked to the note you created it from.

```
Chapter 3: Cell Biology       ← your note
  ├── What is the mitochondria?      ← card created from this note
  ├── What is the cell membrane?     ← card created from this note
  └── What is apoptosis?             ← card created from this note
```

Open the note, open the [Flashcard Panel](/views/flashcard-panel/), and all its cards are right there. You can also search and filter across all cards using the [Card Browser](/views/card-browser/).

## How it works

1. **Create** flashcards — select text and use the [Selection Toolbar](/creation/selection-toolbar/), or write them manually in [block format](/creation/basic-cards/)
2. **[Collect](/creation/collecting/)** cards into the database via the Flashcard Panel
3. **Review** when cards come due — rate each card Again, Hard, Good, or Easy
4. **FSRS v6** calculates the optimal time to show each card again

The algorithm tracks two things per card: **stability** (how long until you might forget) and **difficulty** (how hard this card is for you). Every review refines these values, so your schedule gets more accurate over time.

## Key Features

- **AI-Powered Generation** — Select text and instantly create Q&A cards, cloze deletions, or reversed cards
- **[FSRS v6 Algorithm](/concepts/why-fsrs/)** — State-of-the-art spaced repetition that adapts to your patterns
- **Image Occlusion** — Create flashcards from images by hiding regions, with AI auto-detection
- **Type-in Mode** — Type answers and get AI-powered semantic grading or diff
- **Note Types** — Anki-style templates with customizable fields
- **Projects** — Organize notes into hierarchies with per-project FSRS presets
- **Cloud Sync** — Sync progress across devices
- **25+ Widgets** — Embed analytics and gamification in your notes

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

|                      | True Recall                       | Anki                          |
| -------------------- | --------------------------------- | ----------------------------- |
| **Where cards live** | Inside your notes                 | Separate from source material |
| **Algorithm**        | FSRS v6                           | FSRS v6 (optional) or SM-2    |
| **Organization**     | Notes belong to multiple projects | 1 card = 1 deck               |
| **AI Generation**    | Built-in                          | No                            |
| **Image Occlusion**  | Built-in with AI detection        | Plugin required               |
| **Type-in Grading**  | AI semantic grading               | Exact match only              |
| **Cloud Sync**       | Built-in                          | Paid add-on                   |
| **Runs in**          | Obsidian                          | Standalone app                |

:::tip[Coming from Anki?]
See the [migration guide](/migration/from-anki/) for a complete walkthrough — note types, media, scheduling, everything transfers.
:::

## Local-first data

Your flashcard data lives in `.true-recall/true-recall.db` inside your vault — a portable SQLite database. Nothing leaves your machine unless you opt into cloud sync.

## Next steps

Head to [Installation](/getting-started/installation/) to set up True Recall, then follow the [Quick Start](/getting-started/quick-start/) to create your first cards.
