---
title: "Archiving Notes"
sidebar:
  order: 4
description: Canonical archive behavior in True Recall using archive:true, including project-level cascading.
---

:::caution[My Notes]
:::

Archiving excludes notes from active study without deleting cards.

## Canonical field

Use `archive: true`.

```yaml
---
archive: true
---
```

To unarchive, remove the field (or set `false`).

## Archive/unarchive paths

### Dashboard

- note row: Archive / Unarchive
- project row: Archive project / Unarchive project
- notes selection mode: bulk Archive

### Commands

- Archive current note
- Unarchive current note

### Frontmatter

- set/remove `archive: true`

## Project cascading

Archiving a project note excludes descendant notes/cards from active study.

## Card Browser interaction

- archived cards are hidden by default
- use **Show archived** toggle to include them

## Known limitations

1. Archive visibility is view-toggle dependent.
2. Notes under archived parent projects are effectively hidden from active study views.
