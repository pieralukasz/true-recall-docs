---
title: FSRS Presets
description: Multiple scheduling profiles for different subjects and learning needs
links:
  - /configuration/fsrs-parameters/
  - /configuration/scheduling/
  - /features/projects/
  - /advanced/fsrs-optimization/
---

FSRS presets are named scheduling profiles — like Anki's "Deck Options". Each preset holds its own retention target, learning steps, daily limits, and FSRS weights.

Settings → True Recall → FSRS tab → **preset dropdown** at the top.

## What's in a Preset

| Parameter | Description | Default |
|-----------|-------------|---------|
| **Desired retention** | Target recall probability (0.70–0.99) | 0.90 |
| **Maximum interval** | Longest review gap in days | 36500 |
| **FSRS weights** | 21 algorithm parameters | Built-in defaults |
| **Learning steps** | Minutes before graduation (e.g. `1, 10`) | 1, 10 |
| **Relearning steps** | Minutes after a lapse (e.g. `10`) | 10 |
| **New cards per day** | Daily new-card limit | 20 |
| **Reviews per day** | Daily review-card limit | 200 |

### Why Use Multiple Presets?

Different subjects need different strategies:

| Preset example | Retention | Learning steps | New/day | Use case |
|----------------|-----------|----------------|---------|----------|
| Critical | 0.95 | 1, 10, 60, 1440 | 5 | Medical, exam content |
| Default | 0.90 | 1, 10 | 20 | General learning |
| Bulk | 0.85 | 10 | 50 | High-volume content |
| Languages | 0.92 | 1, 5, 10, 30 | 15 | Vocabulary building |

## Creating & Managing Presets

Click **"New"** next to the dropdown to create a copy of the current preset. Rename it to something descriptive (e.g. "Medical School") and adjust parameters.

The **Default** preset is created automatically, cannot be deleted, and acts as the fallback when no other preset applies. Changes to any preset save automatically.

:::caution
Deleting a preset does not delete cards. Cards fall back to the [resolution hierarchy](#resolution-hierarchy).
:::

## Assigning Presets to Notes

There are three ways a note gets its preset:

### 1. Command Palette (Recommended)

1. Open the note you want to configure
2. Press `Cmd/Ctrl+P` → search **"Set FSRS preset for current note"**
3. Select a preset from the list (or choose "Default" to remove the override)
4. The plugin adds `fsrs_preset: "name"` to the note's frontmatter

### 2. Manual Frontmatter

Add the field directly:

```yaml
---
flashcard_uid: abc-123-def
fsrs_preset: "Medical School"
---
```

Set to `null` or remove the field to clear the override.

### 3. Project Hierarchy (Implicit)

Assign a preset to a **project note** and all child notes inherit it automatically — no per-note configuration needed. See [Resolution Hierarchy](#resolution-hierarchy) below.

## Resolution Hierarchy

When a card comes up for review, True Recall determines which preset to use with a 3-tier lookup:

```
1. Note frontmatter  →  fsrs_preset: "name"
         ↓ (not found)
2. Project walk-up   →  check parent projects
         ↓ (not found)
3. Default preset    →  always available
```

### Tier 1: Note-Level Override

If the source note has `fsrs_preset: "Medical"` in its frontmatter, that preset is used. This is the highest priority.

### Tier 2: Project Hierarchy

If reviewing from a project session, True Recall walks up the project tree, checking each project note's `fsrs_preset` field. The first match wins.

### Tier 3: Default Fallback

When no explicit or inherited preset is found, the default preset is used.

### Example

```
Medical/              (fsrs_preset: "Critical")
├── Anatomy/          (no preset → inherits "Critical")
│   └── muscle-note   (no preset → inherits "Critical")
└── Pharmacology/     (fsrs_preset: "Pharm")
    └── drug-note     (no preset → inherits "Pharm")
```

| Note | Note preset | Nearest project preset | Result | Why |
|------|------------|------------------------|--------|-----|
| muscle-note | — | Medical → "Critical" | Critical | Project inheritance |
| drug-note | — | Pharmacology → "Pharm" | Pharm | Closest project wins |
| random-note | "Medical" | — | Medical | Note-level override |
| unassigned-note | — | — | Default | Fallback |

:::tip
Assign presets to project notes rather than individual notes. This way entire subject areas inherit the right scheduling profile automatically.
:::

## Per-Preset Optimization

Each preset tracks optimization independently — separate weights, separate review history (`review_log.preset_name`), and a separate **400+ review** threshold before optimization is meaningful.

Select a preset → click **"Optimize Parameters"** → review suggested weights → **Apply** or **Cancel**. Optimize the Default preset first (it usually has the most data), then specialized presets as they accumulate reviews.

:::note
Historical reviews from before presets were introduced count as "Default" preset reviews.
:::

:::tip
Start with the default preset for everything. Add specialized presets only when you notice different subjects need different strategies — most users need 2–3 presets at most.
:::
