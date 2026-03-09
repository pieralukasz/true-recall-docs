---
title: CodeBlock Widgets
sidebar:
  order: 8
description: Current registered widget IDs and supported codeblock options in True Recall.
---

:::caution[My Notes]
:::

Widgets are live True Recall components embedded directly in your Obsidian notes using markdown codeblocks. Drop a widget into any note — your home page, a project dashboard, a study tracker — and it renders in real time with your actual review data. No separate app, no switching views.

Use them to build a personal dashboard, add a retention meter to a project note, or put an exam countdown on your study page.

TODO PHOTO

## Example: A Study Dashboard Note

Create a note called `Study Dashboard.md` and paste this to build a quick overview:

````markdown
# My Study Dashboard

```true-recall-streak
showLongest: true
```

```true-recall-workload
days: 14
showTime: true
```

```true-recall-progress
style: ring
```

```true-recall-forecast
days: 30
```
````

Each widget renders independently and updates whenever you complete a review session.

## Config Format

Widgets parse simple `key: value` lines:

- booleans: `true` / `false`
- numbers: numeric literals
- strings: plain text values
- comments: `# ...`
- unknown keys are ignored

Example:

````markdown
```true-recall-workload
days: 14
showTime: true
```
````

## Registered widget IDs

### Core

- `true-recall-dashboard`
- `true-recall-note-stats`

### Analytics

- `true-recall-streak`
- `true-recall-health`
- `true-recall-leaderboard`
- `true-recall-heatmap`
- `true-recall-comparison`
- `true-recall-workload`

### Projects

- `true-recall-project`
- `true-recall-project-hub`
- `true-recall-unassigned`

### Gamification

- `true-recall-progress`
- `true-recall-achievements`
- `true-recall-answer-streak`
- `true-recall-countdown`
- `true-recall-maturity`
- `true-recall-ratings`

### FSRS

- `true-recall-true-retention`
- `true-recall-preset-info`
- `true-recall-problem-cards`
- `true-recall-forecast`

### Note-level

- `true-recall-note-health`
- `true-recall-decay`

## Supported options by widget

### `true-recall-streak`

- `showLongest` (bool, default `true`)
- `showWeekDots` (bool, default `true`)
- `showTodayRate` (bool, default `true`)

### `true-recall-health`

- `target` (number, default `90`)
- `showBuckets` (bool, default `true`)

### `true-recall-leaderboard`

- `limit` (number, default `5`)
- `sort` (string, default `retention`)
- `order` (string, default `asc`)
- `warnBelow` (number, default `75`)
- `dangerBelow` (number, default `65`)

### `true-recall-heatmap`

- `months` (number, default `12`)
- `showLegend` (bool, default `true`)
- `showTotal` (bool, default `true`)

### `true-recall-comparison`

- `period` (string, default `week`)
- `showStreak` (bool, default `true`)

### `true-recall-workload`

- `days` (number, default `14`)
- `heavyThreshold` (number, default `1.5`)
- `showTime` (bool, default `true`)
- `showFlags` (bool, default `true`)

### `true-recall-progress`

- `showTime` (bool, default `true`)
- `style` (string, default `ring`)

### `true-recall-achievements`

- `category` (string, default `all`)
- `showLocked` (bool, default `true`)
- `limit` (number, default `6`)

### `true-recall-answer-streak`

- `showBest` (bool, default `true`)
- `showToday` (bool, default `true`)

### `true-recall-countdown`

- `date` (string)
- `target` (number, default `90`)
- `label` (string, default `Exam`)

### `true-recall-maturity`

- `showSuspended` (bool, default `false`)

### `true-recall-ratings`

- `period` (string, default `week`)
- `style` (string, default `bar`)

### `true-recall-true-retention`

- `days` (number, default `30`)
- `showSparkline` (bool, default `true`)
- `showTarget` (bool, default `true`)

### `true-recall-preset-info`

- `preset` (string)
- `showWeights` (bool, default `false`)
- `showLimits` (bool, default `true`)

### `true-recall-problem-cards`

- `limit` (number, default `5`)
- `showType` (bool, default `true`)

### `true-recall-forecast`

- `days` (number, default `14`)
- `showChart` (bool, default `true`)

### `true-recall-note-health`

- `showActions` (bool, default `true`)
- `showDetails` (bool, default `true`)

### `true-recall-decay`

- `target` (number, default `0.9`)
- `limit` (number, default `10`)
- `sort` (string, default `retrievability`)
- `showTarget` (bool, default `true`)
- `showStability` (bool, default `true`)

## Legacy IDs not current

- `true-recall-projects` (use `true-recall-project-hub`)
- `true-recall-retention` (use `true-recall-true-retention`)
- `true-recall-preset` (use `true-recall-preset-info`)
- `true-recall-problems` (use `true-recall-problem-cards`)
