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

## Assigning Presets

Presets can be assigned at three levels: **per note**, **per project**, and **per folder**. When a card comes up for review, True Recall walks through these levels to find the right preset.

### Per Note

Add `fsrs_preset` to a note's frontmatter — this is the highest priority override:

```yaml
---
flashcard_uid: abc-123-def
fsrs_preset: "Medical School"
---
```

### Per Project

Add `fsrs_preset` to a **project note** (a note with `project: true`). All notes linked from this project inherit the preset:

```yaml
---
project: true
fsrs_preset: "Critical"
---
```

When you study from this project (e.g. clicking Play on the project in the dashboard), all cards use the project's preset — unless a note has its own override.

### Per Folder

Add `fsrs_preset` to a **folder note** — a note that has the same name as its folder (e.g. `Biology/Biology.md`). All notes inside the folder inherit the preset:

```yaml
---
fsrs_preset: "Science"
---
```

True Recall walks up the folder hierarchy, so `Science/Biology/Cells.md` checks `Science/Biology/Biology.md` first, then `Science/Science.md`.

### Using the Command Palette

1. Open the note you want to inspect or configure
2. Press `Cmd/Ctrl+P` → search **"Set FSRS preset for current note"**
3. The **Preset Inspector** opens showing:
   - The **effective preset** currently in use
   - The full **inheritance chain** — which level provides what preset
   - Which level is active (highlighted)
4. Click **"Set preset..."** to assign a preset to this note, or **"Clear note preset"** to remove the override

:::tip
The Preset Inspector is the quickest way to debug why a card is using a particular preset — it shows the full chain at a glance.
:::

## Resolution Hierarchy

When a card comes up for review, True Recall determines which preset to use with a 4-tier lookup. The first match wins:

```
1. Note frontmatter  →  fsrs_preset: "name"
         ↓ (not found)
2. Project preset    →  project note's fsrs_preset
         ↓ (not found)
3. Folder preset     →  folder note's fsrs_preset (walks up)
         ↓ (not found)
4. Default preset    →  always available
```

### Context-Sensitive Resolution

**The preset used depends on how you start studying:**

| How you start | Tier 2 behavior |
|---------------|-----------------|
| **Play on a project** (dashboard, project view) | Uses **that project's** preset |
| **Study a note from Projects tab** | Uses **that project's** preset -- the project context is inherited |
| **Study a note from Notes tab / command / widget** | Searches all projects linking to this note -- **alphabetically first** match wins |
| **Global review session** | Each card resolves its own preset independently |

This means the same card can use different presets depending on context. For example, if a note belongs to projects "Anatomy" (preset: Critical) and "Quick Review" (preset: Bulk):

- Studying from **Anatomy** → uses Critical
- Studying from **Quick Review** → uses Bulk
- Studying the **note from Notes tab** → uses whichever project name comes first alphabetically (Anatomy → Critical)

:::tip
For deterministic behavior, study from the project level. The Projects tab also passes project context when you study individual notes within it.
:::

### Full Example

```
Medical/                          (folder note: fsrs_preset: "Critical")
├── Anatomy/                      (project note: fsrs_preset: "Medical")
│   ├── muscle-note.md            (no preset)
│   └── bone-note.md              (fsrs_preset: "NoteSpecific")
├── Pharmacology/                 (project note: fsrs_preset: "Pharm")
│   └── drug-note.md              (no preset)
└── random-note.md                (no preset, not in any project)
```

| Note | Note preset | Project preset | Folder preset | **Result** | Why |
|------|-------------|----------------|---------------|------------|-----|
| bone-note | NoteSpecific | Medical | Critical | **NoteSpecific** | Tier 1: note override |
| muscle-note | — | Medical | Critical | **Medical** | Tier 2: project preset |
| drug-note | — | Pharm | Critical | **Pharm** | Tier 2: project preset |
| random-note | — | — | Critical | **Critical** | Tier 3: folder preset |
| unrelated-note | — | — | — | **Default** | Tier 4: fallback |

### Invalid Preset Names

If a frontmatter `fsrs_preset` value doesn't match any existing preset (e.g. the preset was renamed or deleted), that tier is skipped and resolution continues to the next level. No error is thrown — the card is still reviewable.

## Dashboard Badges

Projects and notes that have an explicit `fsrs_preset` show a small badge in the dashboard:

- **Project rows** — badge appears next to the project name, showing which preset applies to the project
- **Note rows** — badge appears when the note has its own `fsrs_preset` override

These badges help you quickly see which scheduling profiles are applied across your vault without opening each note.

## Per-Preset Optimization

Each preset tracks optimization independently — separate weights, separate review history (`review_log.preset_name`), and a separate **400+ review** threshold before optimization is meaningful.

Select a preset → click **"Optimize Parameters"** → review suggested weights → **Apply** or **Cancel**. Optimize the Default preset first (it usually has the most data), then specialized presets as they accumulate reviews.

:::note
Historical reviews from before presets were introduced count as "Default" preset reviews.
:::

:::tip
Start with the default preset for everything. Add specialized presets only when you notice different subjects need different strategies — most users need 2–3 presets at most.
:::

## What Happens When You Change a Preset

True Recall records which preset was active **at the moment of each review**. This has important implications when you reassign presets.

### Future vs Historical Reviews

When you change a note's preset (via frontmatter, project, or folder):

- **Future reviews** immediately use the new preset's weights and parameters
- **Past reviews stay with their original preset** — they are not retroactively reassigned

This means:

| | Old preset | New preset |
|---|---|---|
| Scheduling | No longer used for this card | Used from now on |
| Historical reviews | Still counted for optimization | Starts from 0 reviews |
| Optimization threshold | Keeps its review count | Needs 400+ new reviews |

### Comparison with Anki

In Anki, changing a deck's preset retroactively treats all cards as belonging to the new preset. True Recall takes a different approach — review history is attributed to the preset that was actually active during each review.

This is **more accurate for optimization** (no mixing of data from different scheduling parameters) but means a newly assigned preset needs time to accumulate its own review history before optimization becomes meaningful.

:::tip
If you're reorganizing presets and want optimization data sooner, keep studying normally. The new preset will accumulate reviews quickly — a few weeks of active study usually reaches the 400-review threshold.
:::

### Renaming a Preset

Renaming a preset is safe — all historical reviews are automatically updated to the new name. Optimization data is fully preserved.

### Deleting a Preset

Deleting a preset does not delete review history. Old reviews keep their original preset name in the database, but that data is no longer used for optimization (since the preset no longer exists). Cards fall back to the [resolution hierarchy](#resolution-hierarchy).

## Preset Indicator During Review

When reviewing cards, a small **FSRS: PresetName** label appears next to the source note link once the answer is revealed. This tells you exactly which preset's weights and parameters are scheduling the current card.

This is especially useful when:
- Studying from the Notes tab, where session-level and per-card presets might differ
- A note belongs to multiple projects with different presets
- You want to verify that a custom preset assignment is working correctly

## Best Practices

### Start Simple

Use the Default preset for everything. Create a second preset only when a subject clearly needs different parameters (e.g. medical content with 95% retention).

### Assign at the Project Level

Instead of configuring each note, assign a preset to the project note. All member notes inherit it. Override individual notes only when needed.

### Use Folder Presets for Broad Categories

If your vault is organized by folder (e.g. `Science/`, `Languages/`, `Work/`), create folder notes with presets for broad scheduling defaults. Then use project-level or note-level overrides for exceptions.

### Inspect with the Command

When unsure which preset a card is using, open the note and run the **"Set FSRS preset"** command. The inheritance chain visualization shows exactly where the preset is coming from.
