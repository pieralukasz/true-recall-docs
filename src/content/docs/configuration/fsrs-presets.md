---
title: FSRS Presets
description: Multiple scheduling profiles for different subjects and learning needs
links:
  - /configuration/fsrs-parameters/
  - /configuration/scheduling/
  - /configuration/general/
  - /advanced/fsrs-optimization/
  - /features/projects/
---

FSRS presets are named scheduling profiles — similar to Anki's "Deck Options". Each preset holds its own retention target, learning steps, daily limits, and FSRS weights, so you can schedule different subjects with different strategies.

## Accessing Settings

1. Open Obsidian Settings (`Cmd/Ctrl+,`)
2. Scroll to "True Recall"
3. Select "FSRS" tab
4. Use the **preset dropdown** at the top to switch between presets

## What Are Presets?

Each preset is a named collection of scheduling parameters:

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

### Creating a Preset

1. Open Settings → True Recall → FSRS tab
2. Click **"New"** next to the preset dropdown
3. A copy of the current preset is created with "(copy)" suffix
4. Rename it to something descriptive (e.g. "Medical School")
5. Adjust parameters as needed

### Default Preset

- Created automatically on first load (migrated from your existing global settings)
- Cannot be deleted or renamed
- Acts as the fallback when no other preset applies

### Editing a Preset

1. Select the preset from the dropdown
2. Modify any parameter (retention, steps, limits, etc.)
3. Changes save automatically

### Deleting a Preset

1. Select the preset from the dropdown
2. Click **"Delete"** (only available for non-default presets)
3. Cards previously using this preset fall back to the [resolution hierarchy](#resolution-hierarchy)

:::caution
Deleting a preset does not delete cards. Cards will use the project or default preset instead.
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

Each preset tracks its own optimization independently:

- **Separate weights**: Optimized weights apply only to the selected preset
- **Separate history**: The database tracks which preset was used for each review (`review_log.preset_name`)
- **Separate threshold**: Each preset needs **400+ reviews** before optimization is meaningful

### Running Optimization for a Preset

1. Select the preset in the dropdown
2. Verify sufficient reviews for that preset
3. Click **"Optimize Parameters"**
4. Review suggested weights (applies to that preset only)
5. Click **"Apply"** or **"Cancel"**

:::note
Historical reviews from before presets were introduced are treated as "Default" preset reviews during optimization.
:::

### Optimization Strategy

1. Optimize the **Default** preset first (it usually has the most reviews)
2. Add specialized presets after identifying different learning needs
3. Wait for **400+ reviews per preset** before optimizing each one
4. Re-optimize every 3–6 months per preset

## Practical Examples

### Medical Student

| Preset | Retention | Steps | New/day | Assigned to |
|--------|-----------|-------|---------|-------------|
| Anatomy | 0.95 | 1, 10, 60, 1440 | 5 | Project "Anatomy" |
| Physiology | 0.95 | 1, 10, 60 | 10 | Project "Physiology" |
| Clinical | 0.93 | 1, 10, 30 | 15 | Project "Clinical" |

### Language Learner

| Preset | Retention | Steps | New/day | Assigned to |
|--------|-----------|-------|---------|-------------|
| Vocabulary | 0.90 | 1, 5, 10 | 30 | Project "Vocab" |
| Grammar | 0.93 | 1, 10, 60 | 10 | Project "Grammar" |
| Phrases | 0.88 | 5, 30 | 20 | Project "Phrases" |

### Knowledge Worker

| Preset | Retention | Steps | New/day | Assigned to |
|--------|-----------|-------|---------|-------------|
| Technical | 0.92 | 1, 10, 30 | 10 | Project "Tech" |
| General | 0.88 | 10 | 20 | Default preset |
| Research | 0.90 | 1, 10, 60 | 5 | Project "Research" |

## Tips

### Starting Out

- Begin with the default preset for everything
- Add presets only when you notice different subjects need different strategies
- Most users need **2–3 presets** at most

### Naming Conventions

Use clear, descriptive names:
- "Medical School" not "MS1"
- "Language Vocab" not "Preset 2"

### Optimization Order

1. Optimize default preset first (most review data)
2. Create specialized presets as needed
3. Wait for 400+ reviews per preset before optimizing
4. Don't optimize all presets simultaneously — stagger by 3–6 months

### Changing Presets

You can reassign a note to a different preset at any time. The next review will use the new preset's parameters. Historical stability and difficulty are preserved.

## Troubleshooting

### Cards Using Wrong Preset

- Check the note's frontmatter for `fsrs_preset` field
- Verify the project hierarchy — which project note has a preset assigned?
- If reviewing from a project session, the project's preset takes priority over default

### Preset Not Appearing in List

- Ensure the preset was created and saved in Settings → FSRS tab
- Check for typos in frontmatter — preset names are case-sensitive
- Verify the preset wasn't deleted

### "Not Enough Data" for Optimization

- The 400-review threshold is **per preset**, not total
- Example: 1500 total reviews doesn't help if only 200 used the preset you're optimizing
- Use the default preset until you accumulate enough data for specialized ones

### Intervals Changed After Switching Presets

- Expected behavior — the new preset's retention and weights take effect immediately
- Card difficulty and stability are preserved from previous reviews
- The algorithm uses the new preset's parameters for the next scheduling calculation
