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
| Maximum interval | Longest possible interval in days |
| Fuzz review intervals | Whether intervals get Anki-style fuzz |
| New cards per day | Daily new card limit |
| Reviews per day | Daily review limit |
| Learning steps | Initial review intervals |
| Relearning steps | Post-lapse intervals |
| Display order | New card order, review order, new/review mix |
| Bury sibling cards | Whether siblings are hidden until tomorrow |
| Leech threshold and action | When a card counts as a [leech](/review/leeches/) and what happens then |
| FSRS weights | 17, 19 or 21 algorithm parameters |

Since 1.9.7 the display order stored in a preset is what the review queue actually uses (older versions silently fell back to the global setting).

## Default Preset

True Recall includes a "Default" preset with sensible defaults:

- Desired retention: 90%
- New cards per day: 20
- Reviews per day: 200
- Learning steps: 1, 10 minutes
- Relearning steps: 10 minutes
- Maximum interval: 36500 days

This preset cannot be deleted.

## Managing Presets

### Opening Preset Settings

`Settings → True Recall → FSRS → "FSRS presets" → "Active preset"`

Everything on the FSRS tab between **FSRS presets** and **Easy days** edits the preset selected here. The sections below it (R-Mode, Load balance, Sibling dispersal, Scheduled breaks, Bulk operations) are global.

### Creating a New Preset

1. Click **New**
2. The copy is created as "<current preset> (copy)" and selected
3. Enter a name in **Preset name** (press Enter or click away to apply)
4. Adjust the settings; changes save automatically

New presets are copies of the currently selected preset, including its weights and leech settings.

### Editing a Preset

1. Select the preset from the **Active preset** dropdown
2. Modify settings
3. Changes save automatically

### Deleting a Preset

1. Select the preset
2. Click **Delete**

Note: the Default preset cannot be deleted. Notes using a deleted preset fall back to Default.

### The Preset Options Dialog

Clicking the preset indicator on a project or note row in the [Dashboard](/views/dashboard/) opens a compact **preset options** dialog with the same preset, grouped as **Preset**, **Daily limits**, **New cards**, **Scheduling**, **Lapses** (relearning steps, leech threshold, leech action), **FSRS parameters** and **Usage**. Changes are staged and written when you click **Save**. This dialog is the only place where the leech settings are edited.

## Preset Settings

### FSRS Algorithm

| Setting | Range | Description |
|---------|-------|-------------|
| Desired retention | 0.70-0.99 | Target recall rate (default 0.9) |
| Maximum interval (days) | Days | Longest possible interval (default 36500) |
| Fuzz review intervals | On/Off | Randomize intervals slightly to avoid bunching (default on) |

### Daily Limits

| Setting | Description |
|---------|-------------|
| New cards per day | Max new cards to introduce |
| Reviews per day | Max reviews per day (0 = unlimited) |

### Learning Steps

| Setting | Format | Description |
|---------|--------|-------------|
| Learning steps (minutes) | `1, 10` | Minutes for new cards |
| Relearning steps (minutes) | `10` | Minutes after a lapse |

### Display Order

| Setting | Options |
|---------|---------|
| New card order | Random, Oldest first, Newest first |
| Review order | By due date, Due date then random, Random, By retrievability (lowest R first), Relative overdueness, Most lapses first, Lowest stability, Order added |
| New/review mix | Mix with reviews, Show after reviews, Show before reviews |

See [Scheduling](/scheduling/overview/#review-order) for what each order does.

### Siblings

**Bury sibling cards** hides the remaining cards of a cloze or image occlusion note until tomorrow once you have answered one of them. See [Sibling Burying](/scheduling/overview/#sibling-burying).

### FSRS Parameters

Advanced: customize the 17, 19 or 21 FSRS weights, or let the optimizer compute them. See [Optimizing Parameters](#optimizing-parameters).

## Example Presets

### Exam Prep (Intensive)

```yaml
Name: exam-prep
Desired retention: 90%
New cards per day: 40
Reviews per day: 300
Learning steps: 15
Maximum interval: 180
```

For intensive study periods before exams. Maximum interval is capped at 180 days so cards stay relevant through exam day. High daily limits accommodate the compressed timeline.

### Maintenance (Casual)

```yaml
Name: casual
Desired retention: 85%
New cards per day: 5
Reviews per day: 50
Learning steps: 15
```

For low-priority topics you want to maintain long-term without spending much time. Lower retention means longer intervals and fewer daily reviews.

### Language Learning

```yaml
Name: language
Desired retention: 88%
New cards per day: 20
Reviews per day: 200
Learning steps: 15
```

For vocabulary and grammar. Slightly lower retention keeps daily workload manageable when you have thousands of cards. 20 new cards a day is sustainable long-term; going higher leads to review backlogs within weeks.

### Medical / Professional

```yaml
Name: medical
Desired retention: 90%
New cards per day: 30
Reviews per day: 250
Learning steps: 15
```

For high-stakes professional knowledge. At 90% desired retention, your actual recall across the full collection is approximately 95%: most cards sit well above the threshold at any given time.

### Programming / Technical

```yaml
Name: technical
Desired retention: 87%
New cards per day: 15
Reviews per day: 150
Learning steps: 20
```

For programming concepts, APIs, and technical references. Moderate pace: technical cards often need context to be useful, so quality matters more than volume.

### History / Humanities

```yaml
Name: humanities
Desired retention: 85%
New cards per day: 15
Reviews per day: 100
Learning steps: 15
```

For factual knowledge like dates, events, geography, and cultural concepts. Lower retention is fine for material where approximate recall is acceptable.

## How to Choose Your Settings

### Desired Retention: The Most Important Setting

Desired retention is the probability that you'll successfully recall a card when it comes due. It's the single most important setting in FSRS; everything else follows from it.

**The 80-90% sweet spot.** FSRS developers and researchers consistently recommend staying in this range. Here's why:

- **Below 80%**: you forget too much and spend time relearning, which is inefficient. The workload from lapses can actually exceed the workload you'd have at higher retention.
- **80-90%**: the optimal zone. Workload increases gradually and each percentage point gives meaningful knowledge gains.
- **Above 90%**: workload increases exponentially. Going from 90% to 95% can double your daily reviews while only marginally improving recall.

:::note[90% Desired ≠ 90% Actual]
When you set desired retention to 90%, your actual recall across the entire collection is approximately 95%. That's because most of your cards aren't due yet; they're sitting comfortably above the 90% threshold. Only cards that are due hover around 90%.
:::

**Practical guidelines:**

| Goal | Recommended Retention |
|------|----------------------|
| High-stakes (exams, professional certifications) | 90% |
| Active daily study (language, technical skills) | 87-90% |
| Long-term maintenance (low priority material) | 82-85% |
| Bulk learning (large volume, lower stakes) | 80-85% |

:::tip[Start at 90% and Adjust Down]
Begin with the default 90%. After a few weeks, check your actual retention in [Statistics](/views/statistics/). If reviews feel overwhelming, try 87% or 85%. You'll barely notice the difference in recall but your daily workload will drop significantly.
:::

### New Cards Per Day: Finding Your Sustainable Pace

Every new card you learn today creates reviews tomorrow, next week, and for months to come. A rough rule of thumb: **10 new cards a day eventually generates around 100 reviews a day** at steady state.

| New Cards/Day | Eventual Daily Reviews | Time Commitment |
|---------------|----------------------|-----------------|
| 5 | ~50 | ~15 min/day |
| 10 | ~100 | ~30 min/day |
| 20 | ~200 | ~60 min/day |
| 40 | ~400 | ~2 hours/day |

**Start lower than you think.** It's much easier to increase new cards later than to dig out of a review backlog. If you skip a few days, the backlog compounds fast. The [conscious daily target](/scheduling/workload-management/#the-daily-target) in the load-balance settings shows you what a given pace commits you to.

:::caution[The Backlog Trap]
Adding 50 new cards a day sounds productive, but within two weeks you may face 500+ daily reviews. If you miss even one day, the pile grows. It's better to do 15 cards a day consistently than 50 cards a day for a week and then quit.
:::

### Learning Steps: Keep It Simple

With FSRS, **a single learning step of 15-20 minutes is ideal**. This may seem counterintuitive if you're used to multiple steps like `1, 10, 30, 60`, but here's why:

- **FSRS doesn't use learning steps** in its scheduling algorithm. Steps only control the initial same-day experience before a card graduates to FSRS scheduling.
- **Same-day repetitions have minimal impact on long-term memory.** Research shows that repeating a card 5 times in one session barely moves the needle compared to a single review followed by spaced reviews on subsequent days.
- **Multiple steps delay FSRS scheduling.** The sooner a card graduates, the sooner FSRS can schedule it optimally based on your actual memory patterns.

A single step of `15` means: see the card, wait 15 minutes, review once, then FSRS takes over. That's all you need.

### When to Use Multiple Presets

Use separate presets when your material has genuinely different requirements:

- **Different retention targets**: exam material at 90%, hobby material at 85%
- **Different daily limits**: an intensive project with 40 new a day alongside casual maintenance at 5 a day
- **Different maximum intervals**: exam prep capped at 180 days, general knowledge unlimited
- **Different FSRS weights**: after optimization, each preset can have parameters tuned to that specific type of material

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

### From the Command Palette

Run **Set FSRS preset for current note** while a Markdown note is open. The **FSRS Preset** dialog shows how the preset is resolved for that note (note, parent project, default) and offers **Set preset...** and **Clear note preset**.

### From Dashboard

1. Open the [Dashboard](/views/dashboard/)
2. Click the preset indicator on a project or note row
3. The preset options dialog opens for the effective preset of that path

### From Review

Click the `FSRS: <preset>` label under the card to pick a different preset for the current card's source note. This updates that note's frontmatter:

```yaml
---
fsrs_preset: your-preset-name
---
```

Because presets resolve at note/project level, this affects all cards from that source note.

### From the API, CLI and MCP Server

Since 2.0.0 presets can be read and changed from outside Obsidian: the [local API](/reference/mcp-server/) exposes `GET /presets`, `POST /presets`, `POST /presets/:id`, `POST /notes/set-preset`, `POST /settings/load-balance` and `GET /fsrs/forecast`; the CLI wraps them as `get_fsrs_presets`, `create_fsrs_preset`, `update_fsrs_preset` and `set_load_balance`, and the [Claude Code skill](/reference/claude-code-skill/) uses the same commands.

## Preset Inheritance

Preset resolution order:

1. **Note preset**: the note's own `fsrs_preset` in frontmatter
2. **Project/parent preset**: the nearest parent in the hierarchy with `fsrs_preset`
3. **Default preset**: the global fallback

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

The **FSRS parameters** section of the settings shows, for the selected preset:

| Stat | Description |
|------|-------------|
| Current reviews | Reviews attributed to this preset (and whether that is enough to optimize) |
| Last optimized | When the weights were last optimized and how many reviews were used |

The **Usage** section of the preset options dialog shows how many notes use the preset and lists them.

## What Gets Saved (Practical + Technical)

When you work with presets, three different things are stored in different places:

1. **Preset definitions** (retention, steps, weights, limits)  
   Saved in True Recall settings (`data.json`), typically:
   `<vault>/.obsidian/plugins/<plugin-id>/data.json`
2. **Preset assignment to note/project** (`fsrs_preset`)  
   Saved in the Markdown frontmatter of that note/project file
3. **Per-card FSRS memory state + review history** (`due`, `stability`, `difficulty`, reps, lapses, logs)  
   Saved in the device SQLite database under `<vault>/.true-recall/` (see [Data & Backup](/data/backup-restore/) for the exact location in each sync mode)

### Assignment vs Parameter Changes

- **Changing assignment** (for example from the label under the card during review) changes which preset a note resolves to.
- **Changing preset parameters** in Settings edits the preset definition itself.
- Neither action immediately recalculates all cards in the collection.

## What Happens When You Change a Preset

When you change a note's preset:

- Existing cards keep their FSRS data
- New reviews use the new preset settings
- No immediate rescheduling happens

To reschedule all cards with a new preset: `Settings → True Recall → FSRS → "Bulk operations" → "Reschedule all cards"` (**Preview reschedule** shows how many cards would move before you confirm).

## Optimizing Parameters

FSRS optimization analyzes your review history to calculate personalized algorithm weights. This improves scheduling accuracy by adapting to your specific learning patterns. Since 2.0.0 the optimizer is replay-based: it replays your review log through the scheduler to score candidate weights.

:::note[Per-Preset Optimization]
Each preset optimizes independently using only reviews attributed to that preset. You need 400+ reviews **per preset**, not just 400 total.
:::

### Prerequisites

You need **400+ reviews per preset** minimum before optimizing; the **Optimize now** button stays disabled below that. **1000+ reviews per preset** is recommended for reliable results. The **FSRS parameters** section shows the current count for the selected preset.

True Recall tracks which preset was used for each review. Historical reviews from before presets were introduced count as "Default" preset reviews. Preset attribution follows normal resolution order (note → parent → Default).

:::caution[Changing Presets Doesn't Transfer Reviews]
Reassigning cards to a new preset does **not** move historical reviews. If you move 500 cards from "Default" to a new "Medical" preset, "Medical" starts with 0 reviews for optimization. You'll need to accumulate 400+ new reviews under "Medical" before you can optimize it.
:::

:::note[Archived Notes Included]
Review history from archived notes is included in optimization. Past reviews are valid calibration data regardless of whether you're currently studying that material.
:::

### Running Optimization

1. Go to `Settings → True Recall → FSRS`
2. Select the preset in **Active preset**
3. Check the review count in **FSRS parameters**
4. Click **Optimize now**

The optimizer loads the review history for the selected preset only, fits the weights and saves them to the preset straight away, with a notification showing the resulting RMSE (lower is a better fit). There is no separate confirmation step; use **Reset to defaults** if you want the stock weights back.

### Understanding Results

After optimization, **Custom FSRS weights** shows values like `0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49...`. Significant changes from defaults indicate your learning differs from average and personalization will help. Minor changes indicate defaults already work well for you.

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

If optimization didn't help, click **Reset to defaults** in the **FSRS parameters** section to restore the default weights. If you saved previous weights, paste them into **Custom FSRS weights** (17, 19 or 21 comma-separated values) and they are applied on save. Check retention in [Statistics](/views/statistics/) to compare pre- and post-optimization performance.

## What to Read Next

- [FSRS Algorithm](/scheduling/fsrs-algorithm/): how FSRS models memory and what the 21 weights control
- [Scheduling](/scheduling/overview/): day boundaries, learning steps, review order, and daily limits
- [Workload Management](/scheduling/workload-management/): load balancing, R-Mode, easy days, and scheduled breaks
- [Leeches](/review/leeches/): the per-preset leech threshold and action
- [Projects & Notes](/creation/projects-and-notes/): preset inheritance through project hierarchies
