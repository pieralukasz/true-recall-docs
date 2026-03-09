---
title: "Projects & Sub-projects"
description: "Organize flashcards into hierarchical study groups using parent-child note relationships."
---

Projects group notes together for focused study. A project is simply a note that other notes point to as their parent. Projects can nest, a note can belong to multiple projects, and the hierarchy is built automatically from these relationships.

## How Projects Work

A **project** is any note that has children. A note becomes a child by declaring its parent in frontmatter using the `parents` field with wiki-links:

```yaml
# In anatomy-notes.md
---
parents:
  - "[[Medicine]]"
---
```

This makes `anatomy-notes.md` a child of `Medicine.md`. The "Medicine" project appears automatically in the [Dashboard](/views/dashboard/).

The project note (`Medicine.md`) needs no special frontmatter — it becomes a project simply because other notes reference it as a parent.

## Creating Projects

### From the Dashboard (Drag & Drop)

The easiest way:

1. Open the **Dashboard**
2. Drag a note onto another note
3. True Recall creates the parent-child relationship automatically
4. The parent note becomes a project

You can also:
- **Drag a note onto a project** to reparent it
- **Drag a note to root level** to remove it from its project (unnest)

### From the Dashboard (Right-Click)

1. Right-click a note in the Dashboard
2. Select **Assign to project**
3. Choose or type the project name

### Manually in Frontmatter

Add `parents` to a note's frontmatter:

```yaml
---
flashcard_uid: abc12345
parents:
  - "[[Biology]]"
---
```

Parents are wiki-links — True Recall resolves them to the actual note paths using Obsidian's link resolution.

## Multiple Parents

A note can belong to multiple projects:

```yaml
---
parents:
  - "[[Medicine]]"
  - "[[Exam Prep]]"
---
```

This note appears under both "Medicine" and "Exam Prep" in the Dashboard. The cards are the same — no duplication.

## Sub-Projects (Nesting)

When a child note itself has children, it becomes a **sub-project**:

```yaml
# In anatomy.md
---
parents:
  - "[[Medicine]]"
---

# In upper-body.md
---
parents:
  - "[[Anatomy]]"
---
```

This creates the hierarchy:

```
Medicine/
├── Anatomy/
│   ├── upper-body.md
│   └── lower-body.md
├── Physiology/
│   └── cardiovascular.md
└── pharmacology-notes.md
```

There's no depth limit — nest as deep as you need.

## Folder-Based Projects

Add `include: folder` to a note's frontmatter to make it automatically become the parent of all notes in its folder:

```yaml
# In Biology/Biology.md
---
include: folder
---
```

All notes in the `Biology/` folder automatically become children of `Biology.md` — no need to add `parents` to each one.

## Removing from a Project

- **Dashboard**: Drag the note to root level, or right-click → Detach from project
- **Frontmatter**: Remove the parent entry from the `parents` array

```yaml
# Before:
parents:
  - "[[Medicine]]"
  - "[[Exam Prep]]"

# After removing from Medicine:
parents:
  - "[[Exam Prep]]"
```

If all parents are removed, the `parents` field is deleted from frontmatter entirely, and the note appears as **Unassigned**.

## FSRS Presets per Project

Each project can have its own [FSRS preset](/organization/presets/). Add `fsrs_preset` to the project note's frontmatter:

```yaml
# In Medicine.md
---
fsrs_preset: medical-school
---
```

### Preset Inheritance

Notes inherit presets from their project hierarchy:

1. Note's own `fsrs_preset` (highest priority)
2. Immediate parent project's preset
3. Grandparent project's preset
4. Default preset

```
Medicine (preset: medical-school)
├── Anatomy (no preset set)
│   └── Note A (no preset) → Uses "medical-school"
├── Physiology (preset: intensive)
│   └── Note B (no preset) → Uses "intensive"
└── Pharmacology
    └── Note C (preset: casual) → Uses "casual"
```

### Context-Sensitive Presets

The same card can use different presets depending on which project you start studying from. A note linked from both "Medical Exam" (preset: Critical) and "General Review" (preset: Default) will use whichever project's preset you launch the session from.

## Reviewing by Project

### Cascading Review

When you review a project, True Recall includes cards from:
1. **Direct children** — notes with this project as parent
2. **Sub-project children** — all notes in sub-projects, recursively

### Start Project Review

1. Open the **Dashboard**
2. Click the **Study** button on any project
3. A review session opens filtered to that project (including all sub-projects)

## Project Statistics

Each project shows aggregated statistics:

| Stat | Description |
|------|-------------|
| **New** | Cards never reviewed |
| **Learning** | Cards in learning/relearning phase |
| **Due** | Review cards due today |
| **Total** | All active cards |

A parent project's counts include all descendant sub-project cards.

## Unassigned Notes

Notes with flashcards but no `parents` field appear under **Unassigned** in the Dashboard. Assign them by:
- Dragging onto a project in the Dashboard
- Right-click → Assign to project
- Adding `parents: ["[[ProjectName]]"]` to frontmatter

## Archiving Projects

Add `archive: true` to a project note's frontmatter to archive it. Archived projects and all their descendants are hidden from the Dashboard and excluded from review queues.

## It's a Graph, Not a Tree

Unlike Anki's strict deck tree, True Recall projects form a **directed graph**:

- A note can have **multiple parents** (belong to multiple projects)
- A project can have **multiple parents** too
- This mirrors how knowledge connects — topics don't fit neatly into one hierarchy

## Comparison with Anki Decks

| Feature | Anki | True Recall |
|---------|------|-------------|
| **Structure** | Strict tree (`::` separator) | Flexible graph (multi-parent) |
| **Membership** | Card belongs to one deck | Note can have multiple parents |
| **Nesting** | Via deck name: `A::B::C` | Via `parents` wiki-links |
| **Multi-parent** | Not possible | Supported |
| **Storage** | SQLite `decks` table | `parents` frontmatter + link resolution |
| **Auto-grouping** | None | `include: folder` |
| **Review cascade** | Yes | Yes |

## Best Practices

1. **Start simple** — Use drag-drop in the Dashboard for quick organization
2. **Use folder projects** for automatic grouping if your vault is folder-structured
3. **Multiple parents** — Link a note from multiple projects when it's relevant to both
4. **Use project notes as MOCs** — Add overviews, study goals, and resource links to project notes
5. **Preset by subject** — Assign different FSRS presets for different difficulty levels

## Troubleshooting

### Project Not Showing in Dashboard

- Verify at least one note has `parents: ["[[ProjectName]]"]` pointing to it
- For folder projects, check that the note has `include: folder`
- Reload the plugin to rebuild the index

### Note Not Appearing Under a Project

- Check the note's `parents` array in frontmatter
- Parent names are wiki-links — verify the link resolves to the correct note
- Try removing and re-adding the parent

### Stats Don't Aggregate

- Ensure parent-child relationships are correct
- Reload the plugin to rebuild the project graph
- Sub-projects should appear indented under parents in the Dashboard
