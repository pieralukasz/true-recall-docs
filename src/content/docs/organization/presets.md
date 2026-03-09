---
title: "FSRS Presets"
sidebar:
  order: 3
description: "Configure different FSRS scheduling profiles for various learning contexts"
---

**Presets** are collections of FSRS settings that you can assign to projects and notes. Use different presets for different learning contexts.

## What is a Preset?

A preset contains:

| Setting | Description |
|---------|-------------|
| Desired retention | Target recall probability |
| New cards/day | Daily new card limit |
| Reviews/day | Daily review limit |
| Learning steps | Initial review intervals |
| Relearning steps | Post-lapse intervals |
| FSRS weights | 17-21 algorithm parameters |

## Default Preset

True Recall includes a "Default" preset with sensible defaults:

- Desired retention: 90%
- New cards/day: 20
- Reviews/day: 200
- Learning steps: 1, 10 minutes
- Relearning steps: 10 minutes

This preset cannot be deleted.

## Managing Presets

### Opening Preset Settings

Settings -> FSRS -> Presets section

### Creating a New Preset

1. Click **New** button
2. Enter preset name
3. Configure settings
4. Save

New presets are copies of the currently selected preset.

### Editing a Preset

1. Select preset from dropdown
2. Modify settings
3. Changes save automatically

### Deleting a Preset

1. Select preset
2. Click **Delete**
3. Confirm deletion

Note: Default preset cannot be deleted. Notes using a deleted preset fall back to Default.

## Preset Settings

### Algorithm Settings

| Setting | Range | Description |
|---------|-------|-------------|
| Desired retention | 70-99% | Target recall rate |
| Maximum interval | Days | Longest possible interval |

### Daily Limits

| Setting | Description |
|---------|-------------|
| New cards/day | Max new cards to introduce |
| Reviews/day | Max reviews per day (0 = unlimited) |

### Learning Steps

| Setting | Format | Description |
|---------|--------|-------------|
| Learning steps | `1, 10` | Minutes for new cards |
| Relearning steps | `10` | Minutes after lapse |

### Display Order

| Setting | Options |
|---------|---------|
| New card order | Random, Oldest first, Newest first |
| Review order | Due date, Random, Retrievability, etc. |
| New/review mix | Mix, Reviews first, New first |

### FSRS Weights

Advanced: Customize the 17-21 FSRS weight parameters.

## Example Presets

### Exam Prep (Intensive)

```yaml
Name: exam-prep
Desired retention: 92%
New cards/day: 50
Reviews/day: 300
Learning steps: 1, 5, 10
```

For intensive study periods before exams.

### Maintenance (Casual)

```yaml
Name: casual
Desired retention: 85%
New cards/day: 5
Reviews/day: 50
Learning steps: 1, 10
```

For low-priority topics you want to maintain.

### Language Learning

```yaml
Name: language
Desired retention: 90%
New cards/day: 30
Reviews/day: 150
Learning steps: 1, 5, 10, 30
```

For vocabulary with more learning steps.

### Medical School

```yaml
Name: medical
Desired retention: 95%
New cards/day: 40
Reviews/day: 200
Learning steps: 1, 10
```

For high-stakes medical knowledge.

## Assigning Presets

### To a Note

```yaml
---
fsrs_preset: exam-prep
---
```

### To a Project

Add `fsrs_preset` to the project note's frontmatter:

```yaml
---
fsrs_preset: medical
---
```

All child notes in this project inherit the "medical" preset unless they specify their own.

### From Dashboard

1. Open [Dashboard](/views/dashboard/)
2. Click preset indicator on project/note row
3. Select from dropdown

### From Review

Press `P` during review to set the **source note preset** for the current card's note.

This updates that note's frontmatter:

```yaml
---
fsrs_preset: your-preset-name
---
```

Because presets resolve at note/project level, this affects all cards from that source note.

## Preset Inheritance

Preset resolution order:

1. **Note preset** -- Note's own `fsrs_preset` in frontmatter
2. **Project/parent preset** -- Nearest parent in the hierarchy with `fsrs_preset`
3. **Default preset** -- Global fallback

### Example

```
Medicine (preset: medical)
├── Anatomy (preset: intensive)
│   └── Note A (no preset) -> Uses "intensive"
├── Physiology (no preset)
│   └── Note B (no preset) -> Uses "medical"
└── Pharmacology
    └── Note C (preset: casual) -> Uses "casual"
```

## Preset Statistics

In preset settings, you can see:

| Stat | Description |
|------|-------------|
| Card count | Cards using this preset |
| Review count | Total reviews |
| Last optimized | When weights were last optimized |

## What Gets Saved (Practical + Technical)

When you work with presets, three different things are stored in different places:

1. **Preset definitions** (retention, steps, weights, limits)  
   Saved in plugin settings (`data.json`), typically:
   `<vault>/.obsidian/plugins/<plugin-id>/data.json`
2. **Preset assignment to note/project** (`fsrs_preset`)  
   Saved in Markdown frontmatter of that note/project file
3. **Per-card FSRS memory state + review history** (`due`, `stability`, `difficulty`, reps, lapses, logs)  
   Saved in device SQLite database:
   `<vault>/.true-recall/true-recall-<deviceId>.db`

### Assignment vs Parameter Changes

- **Changing assignment** (for example with `P` during review) changes which preset a note resolves to.
- **Changing preset parameters** in Settings edits the preset definition itself.
- Neither action immediately recalculates all cards in the collection.

## What Happens When You Change a Preset

When you change a note's preset:

- Existing cards keep their FSRS data
- New reviews use new preset settings
- No immediate rescheduling happens

To reschedule all cards with a new preset:
Settings -> FSRS -> Preview reschedule
