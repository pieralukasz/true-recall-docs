---
title: Projects
sidebar:
  order: 0
description: How projects are modeled in True Recall using parents-based note relationships and folder includes.
---

:::caution[My Notes]
:::

Projects in True Recall are built from note relationships, not from a separate deck entity.

## Core model

A note becomes a child when it declares a parent in `parents`.

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

## Folder-based project assignment

`include: folder` on a note makes all notes in the same folder its children.

```yaml
---
include: folder
---
```

This is same-folder only (no recursion into subfolders).

## Preset inheritance in project hierarchy

1. Note `fsrs_preset`
2. Parent chain nearest `fsrs_preset`
3. Default preset

## Unassigned notes

Notes with cards and no project assignment appear in **Unassigned**.

## Known limitations

1. Duplicate basenames can create ambiguous project resolution.
2. `parents` alias syntax (`[[Target|Alias]]`) is not safe.
3. `include: folder` is non-recursive.

## Related

- [Projects & Sub-projects](/organization/projects/)
- [Dashboard](/views/dashboard/)
- [Frontmatter fields](/reference/frontmatter-fields/)
