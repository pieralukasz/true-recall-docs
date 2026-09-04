---
title: Frontmatter Fields Reference
sidebar:
  order: 3
description: Canonical True Recall frontmatter contract for note IDs, projects, archiving, and FSRS preset inheritance.
---

:::caution[My Notes]
:::

**True Recall** reads six frontmatter fields as its canonical API. They are indexed by the plugin's frontmatter index, so a change takes effect as soon as Obsidian's metadata cache picks it up; no re-collection is needed. Most fields can also be set from commands, the Dashboard, or the CLI and MCP server instead of by hand.

## Canonical fields

### `flashcard_uid`

Stable note identifier linking cards to the source note.

- Type: string (unique across the vault)
- Auto-generated as short hex (8 chars), e.g. `a1b2c3d4`
- Should stay stable once assigned. If you remove it, True Recall offers to restore it so the cards stay linked
- Added automatically when the first card is created; the command **Add flashcard UID to current note** (CLI: `add_flashcard_uid`) adds one up front

```yaml
---
flashcard_uid: a1b2c3d4
---
```

### `parents`

Assign a note to one or more projects (parent notes).

- Type: array of wiki-links
- Multi-parent supported
- Surrounding `[[` `]]` are stripped and the name is resolved the way Obsidian resolves a link
- Set from the Dashboard or with the CLI `set_note_parent` command

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

### `project`

Mark a note as an explicit project, even if it has no children.

- Type: boolean
- When set, the note appears in the Projects tab on the Dashboard
- Removed automatically when dissolving a project

```yaml
---
project: true
---
```

### `archive`

Exclude note from active study.

- Type: boolean
- Canonical archive marker: `archive: true`
- Commands **Archive current note** and **Unarchive current note** toggle it (CLI: `set_note_archive`)

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
- Command **Set FSRS preset for current note** writes it (CLI: `set_note_preset`; pass no preset name to remove the override)

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
project: true
archive: true
fsrs_preset: intensive
---
```

## Known limitations

1. Avoid aliases in `parents` (for example `[[Target|Alias]]`).
- Only the brackets are stripped, so the alias form can break parent resolution.

2. Prefer unique basenames for project notes.
- Duplicate basenames can lead to ambiguous navigation/filtering.

3. `include: folder` does not include subfolders.

## What to Read Next

- [Projects](/creation/projects-and-notes/): how projects, parents and archiving work day to day
- [Presets](/scheduling/presets/): what an FSRS preset contains and how to create one
- [Claude Code Skill](/reference/claude-code-skill/): set parents, presets and archive state from the terminal
