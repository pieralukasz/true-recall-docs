---
title: Introduction
description: Learn what True Recall is and how it can help you remember everything you learn
---

True Recall is an Obsidian plugin that combines **manual flashcard creation** with **spaced repetition (FSRS v6)**. It's a note-taking system where **each note contains its flashcards** — your knowledge and source material live together.

## What is True Recall?

True Recall turns your Obsidian vault into an intelligent learning system:

- **Write flashcards in your notes** using `#flashcard` tags
- **Review with spaced repetition** using the FSRS v6 algorithm
- **Track your progress** with comprehensive statistics
- **Organize with projects** to group related content
- **Sync across devices** with optional cloud sync (coming soon)

## Who is it for?

True Recall is perfect for:

- **Students** studying for exams or learning new subjects
- **Researchers** retaining information from papers and articles
- **Language learners** building vocabulary
- **Professionals** keeping up with industry knowledge
- **Lifelong learners** who want to remember what they read

## Core Concept: Note = Deck

Unlike traditional flashcard apps where decks contain cards:

- **In Anki**: A deck contains many flashcards (separate from source material)
- **In True Recall**: A **note is the deck** — flashcards live inside your notes

This enables:
- Flashcards stay with their source content
- Same note can belong to multiple projects
- Your knowledge graph and flashcards are unified

## Project-Based Organization

Projects allow you to group notes across your vault:

- One note can belong to multiple projects
- Review all flashcards from a project together
- Unlike Anki where one card belongs to one deck

## Comparing Spaced Repetition Tools

| Feature | True Recall | Anki | RemNote | Logseq | Obsidian-to-Anki |
|---------|-------------|------|---------|--------|------------------|
| **Core Model** | Note = Deck | Deck → Cards | Document → Cards | Block → Cards | Note → Anki Deck |
| **Algorithm** | FSRS v6 | FSRS v6 (supported) | SM-2 | SM-2 | Uses Anki |
| **Notes + Cards** | Unified in note | Separate app | Unified | Unified | Synced separately |
| **Obsidian Native** | Yes | No | No | No | Plugin (bridge) |
| **Local-First** | Yes (SQLite per device) | Yes | Cloud-first | Yes | Via Anki |
| **Multi-Project** | Yes (same note in many) | No (1 card = 1 deck) | Limited | Limited | No |
| **Source in Card** | Yes (embedded) | No | Yes | Yes | No |

### Coming from Another Tool?

See our [migration guides](/migration/from-anki/) for step-by-step instructions on transitioning from Anki, Obsidian-to-Anki, RemNote, or Logseq.

## Key Features at a Glance

### Flashcard Creation
Write flashcards directly in your notes using simple markup:
- Add `#flashcard` after a question line, then write the answer below
- Use `#flashcard-reverse` for automatically creating reversed cards
- Support for cloze deletions with `#flashcard` tag

### FSRS v6 Algorithm
The Free Spaced Repetition Scheduler version 6 is the most advanced open-source scheduling algorithm:
- **Stability-based**: Tracks how well you know each card
- **Difficulty-aware**: Adapts to your learning patterns
- **Optimizable**: Train parameters on your review history

### Local-First Data
All your flashcard data is stored in `.true-recall/true-recall.db`:
- Portable SQLite database
- No vendor lock-in
- Works offline
- Backs up with your vault

### Comprehensive Statistics
- Retention curves
- Workload forecasts
- Calendar heatmaps
- Natural language queries

## Next Steps

Ready to get started? Continue to [Installation](/getting-started/installation/) to set up True Recall in your Obsidian vault.
