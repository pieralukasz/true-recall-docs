---
title: Projects & Sub-projects
description: Organize flashcards into hierarchical study groups spanning multiple notes
---

Projects help you organize flashcards into logical groups for focused study. A project can span multiple notes, a note can belong to multiple projects, and projects can be nested inside other projects — forming a flexible hierarchy (like Anki decks).

## What Are Projects?

Projects are named collections of notes. Examples:
- "Spanish Course"
- "Machine Learning Fundamentals"
- "Book: Atomic Habits"
- "Exam: Biology 101"

### Key Concepts

- **Notes belong to projects** (not individual cards)
- **Cards inherit** their source note's project memberships
- **Many-to-many**: A note can be in multiple projects
- **Nestable**: A project can be a sub-project of another project
- **Review cascading**: Reviewing a parent project includes all sub-project cards

## How Projects Work

Projects are stored as wikilinks in note frontmatter:

```yaml
---
projects:
  - "[[Machine Learning]]"
  - "[[Python Course]]"
---
```

True Recall uses `[[wikilinks]]` so Obsidian creates backlinks automatically — you can see which notes belong to a project by checking the project note's backlinks.

### Project = Note with Self-Reference

A note becomes a **project** when it references itself in its `projects` field. For example, a note named `Machine Learning.md` with:

```yaml
---
projects:
  - "[[Machine Learning]]"
---
```

This self-reference tells True Recall: "this note IS a project, not just a member of one."

### Sub-Projects (Nesting)

A project becomes a **sub-project** when its project-note also belongs to another project. For example, `Neural Networks.md`:

```yaml
---
projects:
  - "[[Neural Networks]]"
  - "[[Machine Learning]]"
---
```

This means:
- "Neural Networks" is a project (self-reference)
- "Neural Networks" belongs to "Machine Learning" — it's a sub-project

### Full Hierarchy Example

```
Machine Learning/                        ← root project
├── Neural Networks/                     ← sub-project of ML
│   ├── backpropagation-notes.md         ← regular note
│   └── CNN Architectures/              ← sub-sub-project
│       └── resnet-paper.md              ← regular note
├── Decision Trees/                      ← sub-project of ML
│   └── random-forests.md               ← regular note
└── feature-engineering.md               ← regular note in ML
```

The frontmatter for each:

```yaml
# Machine Learning.md (root project)
---
projects:
  - "[[Machine Learning]]"
---

# Neural Networks.md (sub-project of ML)
---
projects:
  - "[[Neural Networks]]"
  - "[[Machine Learning]]"
---

# CNN Architectures.md (sub-project of Neural Networks)
---
projects:
  - "[[CNN Architectures]]"
  - "[[Neural Networks]]"
---

# backpropagation-notes.md (regular note in Neural Networks)
---
projects:
  - "[[Neural Networks]]"
---
```

### It's a Graph, Not a Tree

Unlike Anki's strict deck tree, True Recall projects form a **directed graph**:
- A project can have **multiple parents** (e.g., "Linear Algebra" belongs to both "Machine Learning" and "Mathematics")
- A note can belong to **multiple projects** at any depth
- This mirrors how knowledge actually connects — topics don't fit neatly into one hierarchy

```yaml
# Linear Algebra.md — belongs to two parent projects
---
projects:
  - "[[Linear Algebra]]"
  - "[[Machine Learning]]"
  - "[[Mathematics]]"
---
```

In the Projects View, "Linear Algebra" appears under both "Machine Learning" and "Mathematics".

## Creating Projects

### From Projects View

1. Click the **+** button in the Projects panel header
2. Select a note to become the project
3. The note gets a self-reference in its `projects` frontmatter

### Creating Sub-Projects

1. In the Projects View, find the parent project
2. Click the **folder-plus** icon (Create sub-project)
3. Select a note to become the sub-project
4. The note gets both a self-reference AND the parent project in its frontmatter

### Manual Frontmatter

Add directly to note frontmatter:

```yaml
---
projects:
  - "[[My Project]]"
---
```

To make it a sub-project, add the parent too:

```yaml
---
projects:
  - "[[My Project]]"
  - "[[Parent Project]]"
---
```

## Reviewing by Project

### Cascading Review

When you review a project, True Recall includes cards from:
1. **Direct notes** — notes that belong to this project
2. **Sub-project notes** — all notes in sub-projects, recursively

Example: Reviewing "Machine Learning" includes cards from:
- `feature-engineering.md` (direct note)
- `backpropagation-notes.md` (in sub-project Neural Networks)
- `resnet-paper.md` (in sub-sub-project CNN Architectures)
- `random-forests.md` (in sub-project Decision Trees)

### Start Project Review

1. Open the **Projects View** panel
2. Click the **play** button on any project
3. A review session opens filtered to that project (including all sub-projects)

### Custom Study

For more control:
1. Click the **sliders** icon on a project
2. The Session Builder opens scoped to that project
3. Configure additional filters (new only, due only, etc.)

## Project Statistics

Each project shows **aggregated statistics** that include sub-project cards:

| Stat | Color | Description |
|------|-------|-------------|
| **New** | Blue | Cards never reviewed |
| **Learning** | Orange | Cards in learning/relearning phase |
| **Due** | Green | Review cards due today |
| **Total** | — | All active cards |

A parent project's counts are the sum of its own cards plus all descendant sub-project cards.

## Comparison with Anki Decks

| Feature | Anki | True Recall |
|---------|------|-------------|
| **Structure** | Strict tree (`::` separator) | Flexible graph (multi-parent) |
| **Nesting** | Via deck name: `A::B::C` | Via frontmatter membership |
| **Multi-parent** | Not possible | Supported |
| **Storage** | SQLite `decks` table | Note frontmatter (wikilinks) |
| **Backlinks** | None | Obsidian backlinks work |
| **Review cascade** | Yes | Yes |
| **Stats aggregation** | Yes | Yes |

## Best Practices

### Start Simple

- Create a few broad projects first
- Add sub-projects only when a project grows large
- Too many levels of nesting = harder to navigate

### Use Obsidian Notes as Projects

Since projects ARE notes, you can:
- Write overview content in the project note
- Use the project note as a MOC (Map of Content)
- Link to related resources
- Add study goals or exam dates

### Naming Conventions

Use consistent names:
- `Book: <title>` for book reading projects
- `Course: <name>` for educational content
- `Exam: <subject> <date>` for exam preparation

### Review Rotation

- Review root projects for broad coverage
- Review sub-projects for focused deep dives
- Use the aggregated stats to spot which areas need attention

## Technical Details

### How Hierarchy Is Determined

1. True Recall scans all notes' `projects` frontmatter
2. A note with a self-reference (basename in own projects) is a **project-note**
3. Other projects listed in that note's frontmatter become **parent projects**
4. Parent-child relationships are computed at runtime — no separate database

### Cycle Protection

If Project A belongs to Project B, and Project B belongs to Project A, True Recall handles this gracefully with visited-set tracking. No infinite loops.

### Performance

- Project graph is built once during `loadProjects()` and cached in state
- Stats aggregation uses a single pass over all cards
- Descendant computation uses DFS with cycle protection

## Troubleshooting

### Project Not Showing as Sub-Project

- Verify the child project note has **both** a self-reference AND the parent project in frontmatter
- Both the child and parent must be valid project-notes (with self-reference)
- Check for case differences: "Machine Learning" vs "machine learning"

### Stats Don't Aggregate

- Ensure the parent-child relationship is valid (both notes have self-references)
- Reload the plugin to rebuild the index
- Check the Projects View — sub-projects should appear indented under the parent

### Cards Not Appearing in Parent Review

- Verify the note belongs to the sub-project (check frontmatter)
- The sub-project must be a valid project-note (self-reference)
- The sub-project must list the parent in its frontmatter

### Duplicate Projects

- Check for case differences ("Project" vs "project")
- Check for trailing spaces in frontmatter
- Standardize naming across notes
