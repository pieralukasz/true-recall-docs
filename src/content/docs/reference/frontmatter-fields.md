---
title: Frontmatter Fields Reference
description: All YAML frontmatter fields used by True Recall for flashcard linking, projects, presets, and archiving.
---

True Recall uses YAML frontmatter to store metadata about notes and their flashcards.

## True Recall Fields

### flashcard_uid

Unique identifier linking note to its flashcards.

**Type:** String (auto-generated UUID)

```yaml
---
flashcard_uid: abc123-def456-ghi789
---
```

- Auto-added when first card is collected
- Must be unique across vault
- Don't modify unless you know what you're doing

### parents

Assign note to one or more projects by declaring parent notes as wiki-links.

**Type:** Array of wiki-link strings

```yaml
---
parents:
  - "[[Medicine]]"
  - "[[Exam Prep]]"
---
```

- Each entry is a wiki-link resolved to a note path
- The referenced note becomes a project in the Dashboard
- A note can have multiple parents (belongs to multiple projects)
- Remove all entries (or the field) to make the note unassigned

### fsrs_preset

Set FSRS preset for this note's cards.

**Type:** String (preset name)

```yaml
---
fsrs_preset: medical-school
---
```

- Overrides project preset
- Must match existing preset name
- Case-sensitive

### include

Auto-include folder contents as children of this note.

**Type:** String (currently only `"folder"` is supported)

```yaml
---
include: folder
---
```

- All notes in the same folder become children of this note
- No need to add `parents` to each child note
- Useful for folder-structured vaults

### archive

Exclude note (and its descendants if it's a project) from reviews.

**Type:** String

```yaml
---
archive: true
---
```

- Archived notes hidden from Dashboard (by default)
- Cards not included in review queue
- Reversible — remove to unarchive

## Field Priority

When multiple fields could apply for FSRS preset resolution:

| Priority | Source |
|----------|--------|
| 1 (highest) | Note's `fsrs_preset` |
| 2 | Immediate parent project's preset |
| 3 | Grandparent project's preset |
| 4 | Default preset |

## Complete Example

```yaml
---
flashcard_uid: abc123-def456-ghi789
parents:
  - "[[Medicine/Anatomy]]"
fsrs_preset: intensive
tags:
  - biology
  - exam-prep
---
```

## Common Patterns

### Course Notes

```yaml
---
parents:
  - "[[Biology 101]]"
fsrs_preset: exam-prep
---
```

### Project Note with Folder Inclusion

```yaml
---
include: folder
fsrs_preset: medical-school
---
```

### Shared Notes (Multiple Projects)

```yaml
---
parents:
  - "[[Medicine/Anatomy]]"
  - "[[Biology/Systems]]"
---
```

## Editing Frontmatter

### In Obsidian

Click "..." at top right of note -> "Edit frontmatter"

### Manually

Edit YAML content between `---` delimiters at top of note.

## Troubleshooting

### flashcard_uid Conflicts

If two notes have same UID: Run [integrity check](/data/integrity-check/) to detect and repair duplicates.

### Invalid YAML

If frontmatter has syntax errors, Obsidian shows a warning. Fix YAML syntax and reload.
