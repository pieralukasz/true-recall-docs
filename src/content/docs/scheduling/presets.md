---
title: "Presets & Optimization"
sidebar:
  order: 2
description: "Configure FSRS scheduling profiles and optimize parameters from your review history"
---

:::caution[My Notes]
:::

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

Advanced: Customize the 17-21 FSRS weight parameters. See [Optimizing Parameters](#optimizing-parameters) for how to train these on your review history.

## Example Presets

### Exam Prep (Intensive)

```yaml
Name: exam-prep
Desired retention: 90%
New cards/day: 40
Reviews/day: 300
Learning steps: 15
Maximum interval: 180
```

For intensive study periods before exams. Maximum interval is capped at 180 days so cards stay relevant through exam day. High daily limits accommodate the compressed timeline.

### Maintenance (Casual)

```yaml
Name: casual
Desired retention: 85%
New cards/day: 5
Reviews/day: 50
Learning steps: 15
```

For low-priority topics you want to maintain long-term without spending much time. Lower retention means longer intervals and fewer daily reviews.

### Language Learning

```yaml
Name: language
Desired retention: 88%
New cards/day: 20
Reviews/day: 200
Learning steps: 15
```

For vocabulary and grammar. Slightly lower retention keeps daily workload manageable when you have thousands of cards. 20 new cards/day is sustainable long-term — going higher leads to review backlogs within weeks.

### Medical / Professional

```yaml
Name: medical
Desired retention: 90%
New cards/day: 30
Reviews/day: 250
Learning steps: 15
```

For high-stakes professional knowledge. At 90% desired retention, your actual recall across the full collection is approximately 95% — most cards sit well above the threshold at any given time.

### Programming / Technical

```yaml
Name: technical
Desired retention: 87%
New cards/day: 15
Reviews/day: 150
Learning steps: 20
```

For programming concepts, APIs, and technical references. Moderate pace — technical cards often need context to be useful, so quality matters more than volume.

### History / Humanities

```yaml
Name: humanities
Desired retention: 85%
New cards/day: 15
Reviews/day: 100
Learning steps: 15
```

For factual knowledge like dates, events, geography, and cultural concepts. Lower retention is fine for material where approximate recall is acceptable.

## How to Choose Your Settings

### Desired Retention: The Most Important Setting

Desired retention is the probability that you'll successfully recall a card when it comes due. It's the single most important setting in FSRS — everything else follows from it.

**The 80–90% sweet spot.** FSRS developers and researchers consistently recommend staying in this range. Here's why:

- **Below 80%** — You forget too much and spend time relearning, which is inefficient. The workload from lapses can actually exceed the workload you'd have at higher retention.
- **80–90%** — The optimal zone. Workload increases gradually and each percentage point gives meaningful knowledge gains.
- **Above 90%** — Workload increases exponentially. Going from 90% to 95% can double your daily reviews while only marginally improving recall.

:::note[90% Desired ≠ 90% Actual]
When you set desired retention to 90%, your actual recall across the entire collection is approximately 95%. That's because most of your cards aren't due yet — they're sitting comfortably above the 90% threshold. Only cards that are due hover around 90%.
:::

**Practical guidelines:**

| Goal | Recommended Retention |
|------|----------------------|
| High-stakes (exams, professional certifications) | 90% |
| Active daily study (language, technical skills) | 87–90% |
| Long-term maintenance (low priority material) | 82–85% |
| Bulk learning (large volume, lower stakes) | 80–85% |

:::tip[Start at 90% and Adjust Down]
Begin with the default 90%. After a few weeks, check your actual retention in [Statistics](/views/statistics/). If reviews feel overwhelming, try 87% or 85%. You'll barely notice the difference in recall but your daily workload will drop significantly.
:::

### New Cards Per Day: Finding Your Sustainable Pace

Every new card you learn today creates reviews tomorrow, next week, and for months to come. A rough rule of thumb: **10 new cards/day eventually generates around 100 reviews/day** at steady state.

| New Cards/Day | Eventual Daily Reviews | Time Commitment |
|---------------|----------------------|-----------------|
| 5 | ~50 | ~15 min/day |
| 10 | ~100 | ~30 min/day |
| 20 | ~200 | ~60 min/day |
| 40 | ~400 | ~2 hours/day |

**Start lower than you think.** It's much easier to increase new cards later than to dig out of a review backlog. If you skip a few days, the backlog compounds fast.

:::caution[The Backlog Trap]
Adding 50 new cards/day sounds productive, but within two weeks you may face 500+ daily reviews. If you miss even one day, the pile grows. It's better to do 15 cards/day consistently than 50 cards/day for a week and then quit.
:::

### Learning Steps: Keep It Simple

With FSRS, **a single learning step of 15–20 minutes is ideal**. This may seem counterintuitive if you're used to multiple steps like `1, 10, 30, 60`, but here's why:

- **FSRS doesn't use learning steps** in its scheduling algorithm. Steps only control the initial same-day experience before a card graduates to FSRS scheduling.
- **Same-day repetitions have minimal impact on long-term memory.** Research shows that repeating a card 5 times in one session barely moves the needle compared to a single review followed by spaced reviews on subsequent days.
- **Multiple steps delay FSRS scheduling.** The sooner a card graduates, the sooner FSRS can schedule it optimally based on your actual memory patterns.

A single step of `15` means: see the card, wait 15 minutes, review once, then FSRS takes over. That's all you need.

### When to Use Multiple Presets

Use separate presets when your material has genuinely different requirements:

- **Different retention targets** — Exam material at 90%, hobby material at 85%
- **Different daily limits** — Intensive project with 40 new/day alongside casual maintenance at 5/day
- **Different maximum intervals** — Exam prep capped at 180 days, general knowledge unlimited
- **Different FSRS weights** — After optimization, each preset can have parameters tuned to that specific type of material

You don't need a preset for every topic. If two subjects have similar settings, use the same preset. Presets are most useful when the *study pattern* differs, not just the subject.

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

## Optimizing Parameters

FSRS optimization analyzes your review history to calculate personalized algorithm weights. This improves scheduling accuracy by adapting to your specific learning patterns.

:::note[Per-Preset Optimization]
Each preset optimizes independently using only reviews attributed to that preset. You need 400+ reviews **per preset**, not just 400 total.
:::

### Prerequisites

You need **400+ reviews per preset** minimum before optimizing. **1000+ reviews per preset** is recommended for reliable results. Check your review count in [Statistics](/views/statistics/) before optimizing.

Since database v22, True Recall tracks which preset was used for each review. Historical reviews from before presets were introduced count as "Default" preset reviews. Preset attribution follows normal resolution order (note → parent → Default).

:::caution[Changing Presets Doesn't Transfer Reviews]
Reassigning cards to a new preset does **not** move historical reviews. If you move 500 cards from "Default" to a new "Medical" preset, "Medical" starts with 0 reviews for optimization. You'll need to accumulate 400+ new reviews under "Medical" before you can optimize it.
:::

:::note[Archived Notes Included]
Review history from archived notes is included in optimization. Past reviews are valid calibration data regardless of whether you're currently studying that material.
:::

### Running Optimization

1. Go to `Settings → True Recall → FSRS`
2. Select the preset from the dropdown at the top
3. Verify the preset has sufficient reviews
4. Click **"Optimize Parameters"**
5. Review the suggested weights, then click **"Apply"** or **"Cancel"**

The optimizer loads review history for the selected preset only, builds a learning model, and finds best-fit parameters.

### Understanding Results

After optimization, you'll see suggested weights like `0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49...`. Significant changes from defaults indicate your learning differs from average and personalization will help. Minor changes indicate defaults already work well for you.

The 21 weights control different aspects of the algorithm:

| Weights | Controls |
|---------|----------|
| w0-w3 | Initial stability after first rating |
| w4-w6 | Difficulty calculation |
| w7-w16 | Stability growth factors |
| w17-w20 | Stability after forgetting |

### When to Optimize

Optimize after accumulating 1000+ reviews, then every 3-6 months. Also optimize after changing study habits or when retention seems off.

If you use multiple presets, optimize the Default preset first (it usually has the most data), then specialized presets after each reaches 400+ reviews. Don't optimize with fewer than 400 reviews, while learning the system, or too frequently (monthly+).

### Reverting

If optimization didn't help, go to `Settings → FSRS` and click **"Reset to Defaults"** to restore default weights. If you saved previous weights, paste them into the Custom Weights field and save. Check retention in [Statistics](/views/statistics/) to compare pre- and post-optimization performance.

## What to Read Next

- [FSRS Algorithm](/scheduling/fsrs-algorithm/) — how FSRS models memory and what the 21 weights control
- [Scheduling](/scheduling/overview/) — day boundaries, learning steps, review order, and daily limits
- [Workload Management](/scheduling/workload-management/) — load balancing, easy days, and scheduled breaks
- [Projects & Notes](/creation/projects-and-notes/) — preset inheritance through project hierarchies
