---
title: "Projects & Notes"
sidebar:
  order: 8
description: "Organize notes into projects using parent relationships, folder includes, and archiving."
---

:::caution[My Notes]
:::

Projects in **True Recall** are built from note relationships, not from a separate deck entity. Any note can become a project — it just needs other notes pointing to it as their parent.

## Core Model

A note becomes a child when it declares a parent in `parents`:

```yaml
---
parents:
  - "[[Medicine]]"
---
```

A note can belong to multiple projects:

```yaml
---
parents:
  - "[[Medicine]]"
  - "[[Exam Prep]]"
---
```

## Folder-based Assignment

`include: folder` on a note makes all notes in the same folder its children:

```yaml
---
include: folder
---
```

This is same-folder only (no recursion into subfolders).

## Dashboard Workflows

### Drag-and-drop

In **Dashboard → Projects**:

- note → project: reparent note
- project → project: reparent project
- note/project → root drop zone: unnest (detach from current parent)

### Create project from note-on-note

In **Projects** or **Notes** views:

- drag one note onto another
- provide a project name
- plugin creates project note and assigns both notes as children

### Detach from project

In project-tree note context menu:

- **Detach from project**

Equivalent manual edit: remove that parent entry from `parents`.

### Create project from selected notes

In **Dashboard → Notes** selection mode:

- **Create project**

## Archiving

Archiving excludes notes from active study without deleting cards. Use `archive: true`:

```yaml
---
archive: true
---
```

To unarchive, remove the field (or set `false`).

### Archive/unarchive paths

- **Dashboard** — note row: Archive / Unarchive; project row: Archive project / Unarchive project; notes selection mode: bulk Archive
- **Commands** — Archive current note / Unarchive current note
- **Frontmatter** — set/remove `archive: true`

### Project cascading

Archiving a project note excludes descendant notes and cards from active study.

### Card Browser interaction

Archived cards are hidden by default. Use **Show archived** toggle to include them.

## Preset Inheritance

Preset resolution order:

1. Note's own `fsrs_preset`
2. Nearest parent in the hierarchy with `fsrs_preset`
3. Default preset

See [FSRS Presets](/scheduling/presets/) for details on creating and managing presets.

## Unassigned Notes

Notes with cards and no project assignment appear in **Unassigned** in the [Dashboard](/views/dashboard/).

## Best Practices

1. Keep project note basenames unique.
2. Use plain wiki-links in `parents` (`[[Project Note]]`).
3. Use `include: folder` only when folder boundaries match intended project boundaries.

## Known Limitations

1. Duplicate basenames can cause ambiguous project resolution.
2. Alias wiki-links in `parents` (`[[Target|Alias]]`) can break matching.
3. `include: folder` is same-folder only (non-recursive).
4. Archive visibility is view-toggle dependent.

## What to Read Next

- [Dashboard](/views/dashboard/) — manage projects and notes visually
- [FSRS Presets](/scheduling/presets/) — configure scheduling per project
- [Frontmatter Fields](/reference/frontmatter-fields/) — full field reference
