---
title: Basic Concepts
sidebar:
  label: "Basic Concepts (P)"
  order: 4
description: Core concepts of True Recall including flashcard types, FSRS algorithm, projects, presets, and day boundaries.
---

:::caution[My Notes]

- poprawic wszystkie notatkie #type/basic
  :::

Before diving deeper, understanding these core concepts will help you get the most out of True Recall.

## Flashcards

A **flashcard** is a learning unit with a question (front) and answer (back). True Recall uses a **block format** with note types:

```markdown
#type/basic
Front: What is photosynthesis?
Back: The process by which plants convert sunlight into energy.

---
```

| Type            | Tag                     | Fields      | Description                     |
| --------------- | ----------------------- | ----------- | ------------------------------- |
| Basic           | `#type/basic`           | Front, Back | Simple Q&A card                 |
| Cloze           | `#type/cloze`           | Text, Extra | Fill-in-the-blank               |
| Reversed        | `#type/basic-reversed`  | Front, Back | Creates two cards (Q→A and A→Q) |
| Image Occlusion | `#type/image-occlusion` | Custom      | Hide regions of an image        |

Cards are stored in your notes and linked to the database for scheduling. Manage cards for a specific note in the [Flashcard Panel](/views/flashcard-panel/), or browse your entire collection in the [Card Browser](/views/card-browser/).

## FSRS Algorithm

**[Free Spaced Repetition Scheduler (FSRS)](/scheduling/fsrs-algorithm/)** is a modern algorithm that predicts when you'll forget something and schedules reviews at the optimal time.

### Key FSRS Concepts

- **Stability** — How long you'll remember something before forgetting
- **Difficulty** — How hard a card is to learn
- **Retrievability** — Current probability of successful recall
- **Desired Retention** — Target recall probability (default: 90%)

When you answer a card, FSRS updates its predictions and schedules the next review.

### Card States

| State          | Description                                 |
| -------------- | ------------------------------------------- |
| **New**        | Never reviewed (green)                      |
| **Learning**   | First few reviews, short intervals (orange) |
| **Review**     | Graduated to longer intervals (blue)        |
| **Relearning** | Forgotten and being relearned (orange)      |
| **Suspended**  | Manually paused (red)                       |

## Note Types

**Note Types** are templates that define how flashcards are structured, similar to Anki's note types. The `#type/<slug>` tag in your markdown tells True Recall which note type to use.

Each note type has:

- **Fields** — Data slots (e.g., Front, Back for basic; Text, Extra for cloze)
- **Templates** — How fields are displayed on cards
- **CSS** — Styling for cards

Built-in note types: Basic, Basic Reversed, Cloze, and Image Occlusion. You can create custom note types with any fields you need.

## Projects

**Projects** organize your notes hierarchically. A project is any note that other notes point to as their parent, declared in frontmatter:

```yaml
---
parents:
  - "[[Biology]]"
fsrs_preset: medical-school
---
```

Child notes inherit FSRS presets from parent projects. A note can belong to multiple projects.

## Day Boundaries

True Recall uses configurable **day boundaries** (default: 4 AM) to determine when cards become "due today." This matches Anki's behavior — if you review at 2 AM, it counts as the previous day.

Configure in Settings → General → "Next day starts at".

## Presets

A **Preset** is a collection of FSRS settings including:

- Desired retention percentage
- Daily new card limit
- Daily review limit
- Learning steps
- FSRS weights (21 parameters)

You can have multiple presets (e.g., "Intensive" for exam prep, "Casual" for general learning).

## The Review Loop

1. **Due cards** appear in your review queue
2. You **answer** each card
3. FSRS **schedules** the next review
4. **[Statistics](/views/statistics/)** track your progress

Daily limits prevent overload while ensuring consistent progress.

## Next Steps

- [Flashcards Deep Dive](/creation/flashcards/)
- [FSRS Algorithm](/scheduling/fsrs-algorithm/)
- [Note Types](/creation/note-types/)
- [Projects](/creation/projects-and-notes/)
