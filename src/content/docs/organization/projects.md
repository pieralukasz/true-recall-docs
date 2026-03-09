---
title: "Projects & Sub-projects"
sidebar:
  order: 1
description: Current project workflows in Dashboard, including drag-and-drop, detach, create-project actions, and known constraints.
---

:::caution[My Notes]
:::

This page documents current operational project workflows in True Recall.

## Canonical fields

Use:

- `parents`
- `include: folder`

## Dashboard workflows (current)

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

### Bulk archive selected notes

In **Dashboard → Notes** selection mode:

- **Archive**

## Named actions vs UI labels

The capabilities below are available as workflows (drag-and-drop/selection), even if there is no separate menu item with the exact same label:

- **Assign to project** = drag note -> project
- **Move to project** = drag/reparent note or project
- **Create sub-project** = drag note -> note (create-project flow) or create project from selected notes

## Best practices

1. Keep project note basenames unique.
2. Use plain wiki-links in `parents` (`[[Project Note]]`).
3. Use `include: folder` only when folder boundaries match intended project boundaries.

## Known limitations

1. Duplicate basenames can cause ambiguous filtering/navigation.
2. Alias wiki-links in `parents` can break matching.
3. `include: folder` is same-folder only.

## Related

- [Projects concept](/organization/projects-model/)
- [Dashboard](/views/dashboard/)
- [Archiving](/organization/archiving/)
