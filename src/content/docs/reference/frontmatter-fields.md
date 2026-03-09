---
title: Frontmatter Fields Reference
sidebar:
  order: 3
description: Canonical True Recall frontmatter contract for note IDs, projects, archiving, and FSRS preset inheritance.
---

:::caution[My Notes]
:::

True Recall currently relies on the following frontmatter fields as canonical API.

## Canonical fields

### `flashcard_uid`

Stable note identifier linking cards to the source note.

- Type: string
- Auto-generated as short hex (8 chars), e.g. `a1b2c3d4`
- Should stay stable once assigned

```yaml
---
flashcard_uid: a1b2c3d4
---
```

### `parents`

Assign a note to one or more projects (parent notes).

- Type: array of wiki-links
- Multi-parent supported

```yaml
---
parents:
  - "[[Medicine]]"
  - "[[Exam Prep]]"
---
```

### `include`

Automatically includes notes from the same folder as children.

- Type: string
- Supported value: `folder`
- Same-folder only, non-recursive

```yaml
---
include: folder
---
```

### `archive`

Exclude note from active study.

- Type: boolean
- Canonical archive marker: `archive: true`

```yaml
---
archive: true
---
```

To unarchive, remove `archive` (or set `false`).

### `fsrs_preset`

Select preset by name for the note.

- Type: string
- Must match existing preset name

```yaml
---
fsrs_preset: medical-school
---
```

## Preset inheritance

Resolution order:

1. Note `fsrs_preset`
2. Parent chain (`parents`) nearest ancestor with `fsrs_preset`
3. Default preset

When review is launched from a specific project context, that project is checked first in parent-tier resolution.

## Canonical example

```yaml
---
flashcard_uid: a1b2c3d4
parents:
  - "[[Medicine]]"
include: folder
archive: true
fsrs_preset: intensive
---
```

## Known limitations

1. Avoid aliases in `parents` (for example `[[Target|Alias]]`).
- Alias form can break parent resolution.

2. Prefer unique basenames for project notes.
- Duplicate basenames can lead to ambiguous navigation/filtering.

3. `include: folder` does not include subfolders.

## Related

- [Projects](/organization/projects/)
- [Archiving](/organization/projects/#archiving)
