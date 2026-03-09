---
title: Projects
description: "How projects organize notes hierarchically using parent-child relationships with per-project FSRS presets."
---

**Projects** organize your notes into hierarchical groups, similar to decks in Anki. Each project can have its own FSRS preset, allowing different scheduling rules for different subjects.

## What are Projects?

A project is any note that other notes point to as their parent. Projects enable:

- **Organization** — Group related notes together
- **Per-project settings** — Different FSRS presets per subject
- **Inheritance** — Child notes inherit settings from parent projects
- **[Dashboard](/views/dashboard/) views** — See project-level statistics

## Defining Projects

Projects are built from **parent-child relationships** declared in frontmatter. A note declares its parent(s) using the `parents` field with wiki-links:

```yaml
---
parents:
  - "[[Biology]]"
---
```

This makes the note a child of `Biology.md`. The "Biology" note automatically becomes a project in the Dashboard.

### Multiple Parents

A note can belong to multiple projects:

```yaml
---
parents:
  - "[[Biology]]"
  - "[[Exam Prep]]"
---
```

### Project Hierarchy

Nest projects by making a child note also be a parent:

```
Medicine (root project)
├── Anatomy (child of Medicine, parent of notes below)
│   ├── upper-body-notes.md
│   └── lower-body-notes.md
├── Physiology
│   └── cardiovascular.md
└── pharmacology-notes.md
```

Each note in this tree has `parents: ["[[ParentName]]"]` pointing up.

## FSRS Presets per Project

Each project can have its own FSRS preset via `fsrs_preset` in the project note's frontmatter:

```yaml
# In Medicine.md
---
fsrs_preset: medical-school
---
```

### Inheritance

Notes inherit presets from their project hierarchy:

1. Note's own `fsrs_preset` (highest priority)
2. Parent project's preset
3. Grandparent project's preset
4. Default preset

## Project Statistics

In the Dashboard, each project shows aggregated stats: total cards, due today, new cards, retention rate, and estimated study time. For detailed analytics, see [Statistics](/views/statistics/). Stats include all descendant sub-project cards.

## Folder-Based Projects

Add `include: folder` to a note's frontmatter to automatically make all notes in the same folder its children — no need to add `parents` to each child note.

## Unassigned Notes

Notes with flashcards but no `parents` field appear in **Unassigned** in the Dashboard. Assign them by dragging onto a project or adding `parents` to frontmatter.

## Project vs Tags

| Feature | Projects | Tags |
|---------|----------|------|
| Hierarchy | Nested via parent-child | Flat |
| FSRS presets | Per-project | No |
| Inheritance | Child inherits | No |
| Dashboard | Project tree | No |

Use **projects** for organization and scheduling, **tags** for categorization.

## Best Practices

1. **Start broad** — Create top-level projects first (e.g., "Work", "Study")
2. **Go deep** — Add sub-projects as subjects grow
3. **Use presets wisely** — Different subjects may need different scheduling
4. **Multiple parents** — Use when a note is relevant to multiple projects
5. **Document projects** — Add overviews and study goals to project notes
