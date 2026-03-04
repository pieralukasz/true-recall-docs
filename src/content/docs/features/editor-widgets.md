---
title: Editor Widgets & Codeblocks
description: Embed live learning metrics directly in your notes with embeddable widgets
links:
  - /features/statistics/
  - /views/flashcard-panel/
---

True Recall embeds learning metrics directly into your editing workflow. Instead of switching to a separate dashboard, you see card status, review forecasts, and per-note stats right where you write.

## Widget Overview

| Widget | Where | What it does |
|--------|-------|--------------|
| **Status Bar** | Bottom of every tab | Global due/new/learning counts at a glance |
| **Inline Link Indicators** | Next to `[[links]]` | Donut charts and counts per linked note |
| **Hover Tooltip** | Hover on any indicator | Retention, difficulty, review history per note |
| **Quick Review** | Flashcard Panel sidebar | Review cards without leaving the editor |
| **Dashboard Codeblocks** | Any note (opt-in) | 11 embeddable widgets you add with fenced code blocks |

---

## Status Bar Widget

The status bar shows a compact summary of your global card status at the bottom of every Obsidian tab.

```
                              42 due · 5 new · 3 lrn · 23 done · 85%
```

### What each value means

| Value | Description |
|-------|-------------|
| **N due** | Review-state cards whose due date has passed (blue) |
| **N new** | Cards that have never been reviewed (green) |
| **N lrn** | Cards in learning or relearning steps (orange) |
| **N done** | Cards reviewed today |
| **N%** | Today's accuracy (Good + Easy / total reviews) |

Values that are zero are hidden automatically.

**Click** the status bar text to open the Custom Study modal.

:::tip[When to use]
The status bar is your always-visible reminder. Glance down to see if you have cards due, then click to start a session.
:::

---

## Inline Link Indicators

When **Show link status indicators** is enabled (default), `[[links]]` to notes with flashcards show small donut charts and text counts.

### Donut Charts

A small colored donut appears **before** each `[[wiki-link]]` pointing to a note with flashcards. The segments show:

- **Blue** -- due cards
- **Green** -- new cards
- **Orange** -- learning/relearning cards

The donut scales automatically for headings (larger for H1, smaller for H6).

**Click** any donut to start reviewing that linked note's cards.

### Text Counts

Compact colored text appears **after** each link, like: `3 new · 2 lrn · 5 due (10)`.

### Heading Summaries

If a heading's section contains 2+ links to flashcard notes, True Recall shows aggregated donut + counts next to the heading text. Click to review all linked notes in that section.

### Hover Tooltip

Hover over any donut or text count for 300ms to see a detailed tooltip:

```
┌──────────────────────────────────┐
│ Retention: 87%    Reviews: 142   │
│ Last: Jan 15      Lapses: 1.3   │
│ Difficulty: 4.2                  │
├──────────────────────────────────┤
│ Next 7d: ▃▅▇▃▂▁▃                │
└──────────────────────────────────┘
```

| Field | Description |
|-------|-------------|
| **Retention** | Percentage of successful recalls |
| **Reviews** | Total reviews across all cards in that note |
| **Last** | Date of the most recent review |
| **Lapses** | Average times cards were forgotten |
| **Difficulty** | Average FSRS difficulty (1 = easy, 10 = hard) |
| **Next 7d** | Sparkline showing due cards per day for the next 7 days |

---

## Quick Review

The Quick Review widget appears at the top of the **Flashcard Panel** (sidebar). It lets you review a few cards without opening a full review session.

### Collapsed state

```
┌─ Quick Review ─────────────── 8 due  3 new  2 lrn  ▼ ─┐
└────────────────────────────────────────────────────────┘
```

Click to expand.

### Expanded state

```
┌─ Quick Review ─────────────── 8 due  3 new  2 lrn  ▲ ─┐
│                                                         │
│  Q: What is the capital of France?                      │
│  ─────────────────────────────────────────────────────  │
│  A: Paris                                               │
│                                                         │
│      [Again]  [Hard]  [Good]  [Easy]                    │
│       <1m      6m      10m     4d                       │
│                                                         │
│                 7 remaining                              │
└─────────────────────────────────────────────────────────┘
```

**Card priority:** Learning/Relearning first, then Review (overdue), then New.

**What it does NOT do:**
- No formal session stats or summary screen
- No keyboard shortcuts
- Hides automatically when a formal review session is active

:::tip[When to use]
Quick Review is for 5-minute sessions while you're writing. Open the sidebar, expand Quick Review, knock out a few cards, and keep working.
:::

---

## Codeblock Widgets

Embed live stats directly in any markdown note using fenced code blocks. There are 11 widgets -- 7 global, 3 per-note, and 1 project-scoped.

### Configuration

All codeblock widgets accept optional configuration inside the code block:

````markdown
```true-recall-health
target: 90
showBuckets: true
```
````

Lines starting with `#` are comments. Blank lines are ignored. Unrecognized keys are silently skipped.

---

### `true-recall-dashboard`

**Scope:** Global

````markdown
```true-recall-dashboard
```
````

```
┌─────────────────────────────────────────────┐
│ Today: 23 studied · 12m · 85% · 5d streak  │
├─────────────────────────────────────────────┤
│ This week:                                  │
│ Mon  ████████████ 42                        │
│ Tue  █████████ 31                           │
│ Wed  ██████████████ 52                      │
│ Thu  ████████ 28                            │
│ Fri  ██████ 19                              │
│ Sat  ███ 8                                  │
│ Sun  ████ 12                                │
├─────────────────────────────────────────────┤
│ 892 total · 156 due · 43 new · 12 learning │
└─────────────────────────────────────────────┘
```

Shows today's session (cards, time, accuracy, streak), a 7-day workload forecast, and global counts.

:::tip[When to use]
Put this in your daily note template for a morning overview of your study workload.
:::

---

### `true-recall-note-stats`

**Scope:** Per-note (requires `flashcard_uid` in frontmatter)

````markdown
```true-recall-note-stats
```
````

```
┌───────────────────────────────────────┐
│ 24 cards · 8 due · 3 new · 2 lrn     │
│ Last reviewed: Feb 18                 │
├───────────────────────────────────────┤
│ Mon ████ 8   Tue ██ 4   Wed ███ 6    │
│ Thu ██ 3     Fri █ 2    Sat ▏ 0      │
│ Sun █ 1                               │
└───────────────────────────────────────┘
```

Stats scoped to this specific note's cards: counts, last reviewed date, and 7-day forecast.

:::tip[When to use]
Add to the top of each study topic note (e.g., "Spanish Vocabulary") to track per-topic progress.
:::

---

### `true-recall-streak`

**Scope:** Global

````markdown
```true-recall-streak
showLongest: true
showWeekDots: true
```
````

```
┌───────────────────────────────────────────────────────┐
│  12d streak  (longest: 47d)   87% today  [Review →]  │
│  Mon  Tue  Wed  Thu  Fri  Sat  Sun                    │
│   ●    ●    ●    ●    ○    ○    ○                     │
└───────────────────────────────────────────────────────┘
```

Current streak, longest streak, today's accuracy, and a week activity row. Filled dots for days with reviews, empty for days without. Today's dot pulses if no reviews yet.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `showLongest` | boolean | `true` | Show longest streak |
| `showWeekDots` | boolean | `true` | Show Mon--Sun activity dots |
| `showTodayRate` | boolean | `true` | Show today's correct rate |

**Click:** Streak number opens Statistics. "Review" button opens Custom Study modal.

:::tip[When to use]
A daily motivation widget. Put it at the top of your daily note -- the fear of breaking a streak keeps you coming back.
:::

---

### `true-recall-health`

**Scope:** Global

````markdown
```true-recall-health
target: 90
showBuckets: true
```
````

```
┌───────────────────────────────────────────────────────┐
│  Memory Health                                   87%  │
│  [═══════════════════════════════───]  (target: 90%)  │
│                                                       │
│  Strong  High  Medium  Low  At risk     280 active    │
│   142     89     34     12     3                       │
│   ███    ███    ██      █     ▌                        │
└───────────────────────────────────────────────────────┘
```

Average predicted retention across your entire collection, shown as a color-coded progress bar with a target marker. Below, a distribution of cards across 5 health buckets.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `target` | number | `90` | Target retention percentage |
| `showBuckets` | boolean | `true` | Show health bucket distribution |

**Click:** Progress bar starts review of overdue cards. Click any health bucket to review cards in that stability range. Click "N active" to open Card Browser.

:::tip[When to use]
The single most important metric for spaced repetition. Put it on your dashboard note to see at a glance whether your memory is on track.
:::

---

### `true-recall-leaderboard`

**Scope:** Global

````markdown
```true-recall-leaderboard
limit: 5
sort: retention
dangerBelow: 65
```
````

```
┌───────────────────────────────────────────────────────┐
│  Note Leaderboard                   sort: retention   │
│                                                       │
│  #  Note                Cards  Retention  Lapses      │
│  1  Organic Chemistry     42     62% !!    3.2        │
│  2  Japanese Kanji N3     89     71% !     2.1        │
│  3  Data Structures       31     78%       1.4        │
│  4  Spanish Vocab B2      56     84%       0.9        │
│  5  Linear Algebra        23     91%       0.4        │
│                                                       │
│        [Review weakest →]     [See all in browser]    │
└───────────────────────────────────────────────────────┘
```

Ranks your notes by retention. Notes below warning thresholds are flagged with `!` (warning) or `!!` (danger).

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `limit` | number | `5` | Number of notes to show |
| `sort` | string | `"retention"` | Sort by: `retention`, `lapses`, `lastReviewed`, `cards` |
| `order` | string | `"asc"` | `asc` (worst first) or `desc` (best first) |
| `warnBelow` | number | `75` | Retention threshold for warning `!` |
| `dangerBelow` | number | `65` | Retention threshold for danger `!!` |

**Click:** Click any note row to review that note's cards. "Review weakest" reviews the #1 note. "See all in browser" opens Card Browser.

:::tip[When to use]
A weekly check-in. Which topics are struggling? Click directly to fix them. Great in a "Study Hub" note.
:::

---

### `true-recall-heatmap`

**Scope:** Global

````markdown
```true-recall-heatmap
months: 12
showLegend: true
```
````

```
┌───────────────────────────────────────────────────────┐
│  Activity (last 12 months)          312 days active   │
│                                                       │
│     Jan  Feb  Mar  Apr  May  Jun  Jul  Aug  Sep  Oct  │
│ Mon  ·█  ██·  ███  ·██  ██·  ·█·  ███  ██·  ·██  ██· │
│ Wed  ██  ·██  ██·  ███  ·█·  ██·  ·██  ███  ██·  ·█· │
│ Fri  ·█  ██·  ·██  ██·  ███  ·█·  ██·  ·██  ██·  ███ │
│                                                       │
│   Less  [·] [░] [▒] [▓] [█]  More     Total: 14,231  │
└───────────────────────────────────────────────────────┘
```

A GitHub-style calendar showing your review activity over time. Greener = more reviews. Hover any cell for exact count and date.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `months` | number | `12` | Number of months to display |
| `showLegend` | boolean | `true` | Show the Less/More legend |
| `showTotal` | boolean | `true` | Show total review count |

**Click:** "Days active" or "Total" opens Statistics view. Hover cells for tooltips.

:::tip[When to use]
Your motivation wall. Embed in a dashboard note to see a year of progress at a glance. The visual impact of a filled calendar is powerful.
:::

---

### `true-recall-comparison`

**Scope:** Global

````markdown
```true-recall-comparison
period: week
showStreak: true
```
````

```
┌───────────────────────────────────────────────────────┐
│  This Week vs Last Week                               │
│                                                       │
│                 Current   Previous   Change            │
│  Reviewed          142         118   +20%  ↑          │
│  Correct rate       87%         83%  +4pp  ↑          │
│  Time spent         45m         52m  -13%  ↓          │
│  New cards           23          31  -26%  ↓          │
│                                                       │
│  Streak: 12d (longest: 47d)                           │
└───────────────────────────────────────────────────────┘
```

Compares current period against the previous one. Green arrows for improvements, red for regressions.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `period` | string | `"week"` | `week` or `month` |
| `showStreak` | boolean | `true` | Show streak in footer |

**Click:** Anywhere on the widget opens Custom Study modal.

:::tip[When to use]
"Am I getting better?" Put this in your weekly review note to track your trajectory.
:::

---

### `true-recall-workload`

**Scope:** Global

````markdown
```true-recall-workload
days: 14
showTime: true
heavyThreshold: 1.5
```
````

```
┌───────────────────────────────────────────────────────┐
│  Workload Planner (14 days)        avg: 23 cards/day  │
│                                                       │
│  Today ████████████████████  42  ~21m  [Review →]     │
│  Tue   ████████████          28  ~14m                 │
│  Wed   ██████████████████    38  ~19m  heavy          │
│  Thu   ████████              18  ~9m                   │
│  Fri   ██████                12  ~6m                   │
│  Sat   ████                   8  ~4m   lightest       │
│  Sun   █████████             19  ~10m                  │
│                                                       │
│  Peak: Wed (38)  │  Balance: needs attention           │
└───────────────────────────────────────────────────────┘
```

Forecasts your workload with estimated study time per day. Flags heavy days and identifies the lightest day.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `days` | number | `14` | Forecast horizon (max 30) |
| `showTime` | boolean | `true` | Show estimated time column |
| `showFlags` | boolean | `true` | Show heavy/lightest/Review labels |
| `heavyThreshold` | number | `1.5` | Multiplier of average to flag as heavy |
| `minutesPerCard` | number | auto | Override estimated time per card (minutes). Auto-calculated from your recent review speed |

**Click:** Today's row opens Custom Study modal. **Click any future day to study ahead** -- this pre-reviews cards scheduled for that day so you can balance your workload.

:::tip[When to use]
Planning your week? This tells you which days will be heavy so you can front-load or study ahead. Essential for students with exam schedules.
:::

---

### `true-recall-note-health`

**Scope:** Per-note (requires `flashcard_uid` in frontmatter)

````markdown
```true-recall-note-health
showActions: true
showDetails: true
```
````

```
┌───────────────────────────────────────────────────────┐
│  Health: 78%  [════════════════════════════──────]     │
│  24 cards  │  avg stab: 12d  │  3 at risk  │  2 due  │
│  [Review 2 due →]                    [Fix 3 weak →]   │
└───────────────────────────────────────────────────────┘
```

Per-note retention as a color-coded health bar (green/cyan/orange/red). Shows average stability, at-risk count, and due count with action buttons.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `showActions` | boolean | `true` | Show Review/Fix action buttons |
| `showDetails` | boolean | `true` | Show details row (cards, stability, at-risk, due) |

**Click:** "Review N due" starts a review of this note's due cards. "Fix N weak" reviews only the at-risk cards (retrievability below 50%).

:::note
This is different from `true-recall-note-stats` which shows **counts** (due/new/learning). Note-health shows **quality** (retention, stability, at-risk).
:::

:::tip[When to use]
Put this at the top of study topic notes where you care about retention quality, not just card counts.
:::

---

### `true-recall-decay`

**Scope:** Per-note (requires `flashcard_uid` in frontmatter)

````markdown
```true-recall-decay
limit: 10
sort: retrievability
target: 0.9
```
````

```
┌───────────────────────────────────────────────────────┐
│  Memory Decay                     24 cards  target:90%│
│                                                       │
│  Card 1 (3d)  ████████████████│███░░░░░░░░░░░░  78%  │
│  Card 2 (1d)  █████████████████████│██░░░░░░░░  85%  │
│  Card 3 (45d) ██████████████████████████████│█  96%  │
│  Card 4 (0d)  ████████████│░░░░░░░░░░░░░░░░░░  44%  │
│  ... 20 more (avg: 82%)                               │
│                                                       │
│       [Review at-risk cards (4) →]                    │
└───────────────────────────────────────────────────────┘
```

Visualizes the forgetting curve for each card. Each bar shows current retrievability with a target marker. Cards below target are colored orange or red.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `target` | number | `0.9` | Target retention (0--1 scale) |
| `limit` | number | `10` | Max cards to show (rest summarized) |
| `sort` | string | `"retrievability"` | Sort: `retrievability`, `stability`, or `due` |
| `showTarget` | boolean | `true` | Show target retention marker |
| `showStability` | boolean | `true` | Show stability value per card |

**Click:** "Review at-risk" starts a review of cards with low retrievability.

:::tip[When to use]
The most FSRS-specific widget. Use it when you want to see exactly which cards in a topic are decaying and need attention. Great for exam preparation.
:::

---

### `true-recall-project`

**Scope:** Project note (requires `project: true` in frontmatter)

````markdown
```true-recall-project
```
````

```
┌───────────────────────────────────────────────────────┐
│  Python                       5 notes · 142 cards     │
│  12 due · 8 new · 3 lrn               Health: 84%    │
│                                                       │
│  [Review project →]          [Custom study →]         │
└───────────────────────────────────────────────────────┘
```

A compact summary of all notes belonging to a project: note count, total cards, due/new/learning counts, and average retention health.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `showHealth` | boolean | `true` | Show average retention percentage |
| `includeChildren` | boolean | `true` | Include sub-project notes and their cards |

**Click:** "Review project" starts a review session scoped to the entire project. "Custom study" opens the custom study modal pre-filtered to this project.

:::note
The note must be a **project note** -- its basename must appear in its own `projects` frontmatter. For example, `Python.md` with `projects: ["[[Python]]"]`. Non-project notes show a helpful setup message.
:::

:::tip[When to use]
Put this at the top of each project note. It gives you a bird's-eye view of the entire project's study progress and lets you jump into a project-scoped review session with one click.
:::

---

## Suggested Workflows

### Morning dashboard

Put these in your daily note template:

````markdown
```true-recall-streak
```

```true-recall-dashboard
```

```true-recall-health
```
````

Glance at your streak, see today's workload, check your memory health. Click "Review" to start.

### Per-topic tracking

At the top of each study topic note:

````markdown
```true-recall-note-health
```

```true-recall-decay
limit: 5
```
````

See retention quality and which cards are slipping.

### Weekly review

In a "Study Hub" or weekly review note:

````markdown
```true-recall-comparison
period: week
```

```true-recall-leaderboard
limit: 10
sort: retention
```

```true-recall-workload
days: 14
```
````

Track your progress, identify struggling topics, plan the week ahead.

### Project overview

At the top of each project note:

````markdown
```true-recall-project
```
````

See all member notes at a glance, their card counts and due status. Click "Review project" to study the entire project in one session.

### Year in review

````markdown
```true-recall-heatmap
months: 12
```

```true-recall-comparison
period: month
```
````

Visual motivation wall plus month-over-month progress tracking.

---

## Settings Reference

These settings are under **Settings > True Recall > Editor integration**:

| Setting | Default | Description |
|---------|---------|-------------|
| **Show link status indicators** | On | Inline donut charts and text counts next to `[[links]]`, heading summaries, and hover tooltips |
| **Show status bar widget** | On | Global card counts in the bottom status bar |
| **Show quick review in panel** | On | Quick review section at the top of the Flashcard Panel |

Codeblock widgets have no on/off setting -- they're opt-in. Add the code block to a note to display, remove it to hide.
