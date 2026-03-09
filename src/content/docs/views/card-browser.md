---
title: Card Browser
sidebar:
  order: 6
description: Current Card Browser filtering syntax, facets, and bulk workflows aligned with implementation.
---

Card Browser supports token-based query filtering, chips, sidebar facets, preview, and bulk actions.

## Query syntax (current)

### State tokens

- `is:new`
- `is:learning`
- `is:review`
- `is:relearning`
- `is:suspended`
- `is:buried`
- negation: `-is:suspended`

Notes:

- `is:due` and `is:overdue` are accepted, but currently behave as review-state aliases rather than strict date-window filters.

### Property filters

Format: `prop:<property><operator><value>`

Properties:

- `s` / `stability`
- `d` / `difficulty`
- `r` / `retrievability`
- `ivl` / `interval`
- `reps`
- `lapses`

Operators: `>`, `<`, `>=`, `<=`

Examples:

- `prop:lapses>3`
- `prop:d<0.5`
- `prop:reps>=10`

### Other supported tokens

- `note:"Biology"`
- `type:basic|cloze|reversed|image-occlusion`
- `via:ai|manual|anki_import`
- `added:7`
- `reviewed:30`
- plain text terms

## UI filters and controls

### Toolbar

- search with suggestions
- state chips
- Show archived toggle
- column picker

### Sidebar facets

- Card States
- Source Notes
- Card Type
- Created Via
- Remove orphaned cards action

## Selection and bulk operations

Right-click on table/grid items selects them for bulk actions.

Bulk bar actions:

- Suspend
- Unsuspend
- Forget
- Change type
- Delete

## Known limitations

1. `project:` and `preset:` tokens are parsed/suggested but not currently applied in SQL filtering.
2. `note:` resolution is basename-based; duplicate note names can be ambiguous.
3. `is:due` and `is:overdue` are not strict due-date filters today.

## Practical recommendation

Prefer query tokens for state/property/type/source filters, and use chips/facets/toggles for fast narrowing.
