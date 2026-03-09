---
title: Statistics
sidebar:
  order: 5
description: Comprehensive analytics dashboard with FSRS insights, study patterns, retention tracking, workload forecasting, and cross-project comparison.
---

The **Statistics** view is your analytics hub. It provides deep insights into your learning progress, FSRS algorithm behavior, study patterns, and retention predictions — organized across five focused tabs.

## Opening Statistics

- **Ribbon icon** — Click the bar chart icon in the left ribbon
- **Command** — `Cmd/Ctrl + P` → "Open statistics"
- **Widget** — Embed in any note with a `true-recall-statistics` codeblock (see [Codeblock Widgets](/views/codeblock-widgets/))

## Layout

```
+================================================================+
|  FILTER BAR                                                     |
|  [Project v] [Tag v] [Preset v] [1W|1M|3M|1Y|All] [Custom v]  |
+================================================================+
|  SUMMARY CARDS                                                  |
|  [Reviews] [Retention] [Avg Time] [Health] [Streak] [Mature]   |
+================================================================+
|  [Overview] [Activity] [FSRS] [Cards] [Predictions]             |
+----------------------------------------------------------------+
|                                                                 |
|                       TAB CONTENT                               |
|                                                                 |
+================================================================+
```

The filter bar and summary cards are always visible. The five tabs below show different chart groups.

---

## Filter Bar

All filters persist across tabs and survive Obsidian restarts.

```
+------------------------------------------------------------------+
| Project: [All Projects    v]  Tag: [+ Add tags...]               |
| Preset:  [All Presets     v]  Range: [1W][1M][3M][1Y][All]      |
|                                      [Mar 1 — Mar 9 | x clear]  |
+------------------------------------------------------------------+
```

| Filter | Type | Behavior |
|--------|------|----------|
| **Project** | Dropdown with search | Hierarchical — selecting a parent includes all children |
| **Tag** | Multi-select | Cards matching ANY selected tag are included |
| **Preset** | Dropdown | Scopes to cards whose resolved FSRS preset matches |
| **Time Range** | Toggle buttons | 1W, 1M, 3M, 1Y, All |
| **Custom Range** | Date picker | Start and end date — overrides the toggle buttons |

A **Clear all filters** link appears when any non-default filter is active.

---

## Summary Cards

Six KPI cards sit below the filter bar, providing at-a-glance metrics.

```
+----------+----------+----------+----------+----------+----------+
| REVIEWS  | TRUE     | AVG TIME | HEALTH   | STREAK   | CARDS    |
| 1,247    | RETENTION| PER CARD | SCORE    |          | MATURE   |
|          | 91.2%    | 8.4s     | 82/100   | 14 days  | 68%      |
| +12% vs  | Target:  | -0.3s vs | Good     | Best: 42 | +3% vs  |
| prev     | 90%      | prev     |          |          | prev     |
+----------+----------+----------+----------+----------+----------+
```

| Card | Value | Sub-text |
|------|-------|----------|
| **Total Reviews** | Review count in filtered range | % change vs previous equivalent period |
| **True Retention** | `correct / (correct + lapses)` for review-state cards | Target retention for comparison |
| **Avg Time/Card** | Total review time / total reviews | Delta vs previous period |
| **Health Score** | Composite 0-100 based on mature %, retention, consistency, lapse rate | Rating: Excellent / Good / Fair / Needs Attention |
| **Current Streak** | Consecutive days with at least 1 review | Best streak ever |
| **Cards Mature** | % of review-state cards with interval ≥ 21 days | Delta vs previous period |

Hover any card for a tooltip with the exact formula and raw numbers. Click **True Retention** to jump to the Predictions tab. Click **Health Score** to expand a breakdown popover.

---

## Overview Tab

The default tab. Visual summary of recent activity and collection state.

### Calendar Heatmap

Year-at-a-glance review activity, similar to a GitHub contribution graph.

```
        Jan    Feb    Mar    Apr    May    Jun    Jul
Mon     .  .   #  .   ## .   .  .   #  #   .  .
Tue     .  #   .  .   ## #   #  .   .  .   #  .
Wed     #  #   #  #   ## #   #  #   #  #   #  #
Thu     .  .   .  #   ## .   .  .   .  #   .  .
Fri     .  .   .  .   #  .   .  .   .  .   .  .
Sat     .  .   .  .   .  .   .  .   .  .   .  .
Sun     .  .   .  .   .  .   .  .   .  .   .  .

Legend:  .=0  ░=1-5  ▒=6-15  ▓=16-30  █=31+
```

- **Color scale** — 5 levels using the accent purple at varying opacity
- **Hover** — Date, review count, time spent
- **Click** — Filters all charts to that specific day
- Always shows trailing 365 days regardless of time range filter (highlights the filtered range)

### Reviews Over Time

Historical review volume as a stacked bar chart.

```
Reviews
  80|          ██
  60|       ██ ██ ██
  40|    ██ ██ ██ ██ ██       ██
  20| ██ ██ ██ ██ ██ ██ ██ ██ ██
   0+--+--+--+--+--+--+--+--+--+--> Date
     M1 M3 M5 M7 M9 M11 M13

    [■ Review  ■ Relearning  ■ Learning  ■ New]
```

- **X axis** — Date. Granularity auto-adjusts: daily (1W/1M), weekly (3M/1Y), monthly (All)
- **Stacked series** — New (green), Learning (orange), Review (blue), Relearning (red)
- **Hover** — Exact count per category
- **Click** — Filters the view to that period

### Rating Distribution

Donut chart showing answer button breakdown with trend comparison.

```
         Again  Hard  Good  Easy
          12%    8%   72%    8%

         +--------+
        /  Good    \
       |   72%      |
       | +------+   |
       | |Again | H |
        \| 12% |a /
         +------+d
              8%

   Trend:  Again ▼2%  Hard ▲1%  Good ▼1%  Easy ▲2%
```

| Rating | Color |
|--------|-------|
| Again | Red |
| Hard | Yellow |
| Good | Blue |
| Easy | Green |

Trend arrows compare to the previous equivalent period.

:::caution
If Again exceeds 20%, consider reducing new cards per day.
:::

### Study Time

Area chart showing minutes spent reviewing per day.

```
Minutes
  30|            /\
  20|     /\   /    \    /\
  10|  /\/  \/        \/    \
   0+--+--+--+--+--+--+--+--+--> Date
```

- **Fill** — Accent color gradient
- **Reference line** — Average daily time (dashed)
- **Hover** — Exact minutes and card count for that day

---

## Activity Tab

Detailed study pattern analysis to optimize when and how you study.

### Hourly Breakdown

Polar/radial chart showing review performance by hour of day.

```
              12am
         23 /    \ 1
       22  |      |  2
      21   |      |  3
       20  |      |  4
        19  \    /  5
              6
         ...       ...
              12pm

    Outer ring: Review count (bar height)
    Color fill: Success rate (green=high, red=low)
```

- **Radial axis** — 24 hours in clock layout
- **Bar height** — Number of reviews in that hour
- **Bar color** — Retention rate gradient: red (<80%), yellow (80-90%), green (>90%)
- **Hover** — Hour, review count, retention rate, avg time per card

:::tip[Insight]
An insight box highlights your best study hour: "Your best study hour is **2pm-3pm** (94.2% retention, 7.1s/card)."
:::

### Day-of-Week Analysis

Grouped bar chart showing performance across weekdays.

```
Reviews & Retention by Day
   100|  ██        ██
    80|  ██ ██  ██ ██     ██
    60|  ██ ██  ██ ██ ██  ██
    40|  ██ ██  ██ ██ ██  ██  ██
    20|  ██ ██  ██ ██ ██  ██  ██
     0+--Mon--Tue--Wed--Thu--Fri--Sat--Sun-->

   [■ Reviews (left axis)]  [--- Retention % (right axis)]
```

- **Left Y / Bars** — Review count per day
- **Right Y / Line** — Retention rate
- **Hover** — Day name, review count, retention %, avg time
- Days configured as Easy Days show a calendar icon

### Review Time Distribution

Histogram showing how long individual reviews take.

```
Cards
  200|  ██
  150|  ██ ██
  100|  ██ ██ ██
   50|  ██ ██ ██ ██ ██
    0+--+--+--+--+--+--+--> Seconds
      0-3 3-5 5-8 8-12 12-20 20+

   Median: 6.2s  |  Mean: 8.4s  |  P95: 18.1s
```

- **X axis** — Time buckets in seconds
- **Y axis** — Number of reviews
- **Stats row** — Median, mean, 95th percentile

### Efficiency by Card Type

Grouped horizontal bar comparing card types.

```
         Basic  Cloze  Reversed  ImgOccl
Retention  92%    89%    88%       91%
Avg Time  6.2s   9.1s   7.8s      5.4s
Reviews   620    380    147        100
```

- **Metrics** — Retention %, avg time, review count per card type (Basic, Cloze, Reversed, Image Occlusion)
- **Hover** — Full stats for each type

:::tip[Insight]
The chart highlights your best- and worst-performing card type.
:::

---

## FSRS Tab

Deep dive into FSRS v6 algorithm metrics. Understand how the algorithm "sees" your cards.

### Stability Distribution

Histogram showing how strong your memories are across the collection.

```
Cards
  150|     ██
  100|  ██ ██ ██
   50|  ██ ██ ██ ██ ██      ██
    0+--+--+--+--+--+--+--+--+--> Stability (days)
      0  1  7  30  90 180 365 730+

   Median: 42d  |  Mean: 68d
   ---- Cumulative % ----> (right axis, 0-100%)
```

- **X axis** — Stability in days, log-scale buckets (0-1, 1-7, 7-30, 30-90, 90-180, 180-365, 365+)
- **Left Y** — Card count per bucket
- **Right Y** — Cumulative percentage line
- **Color** — Gradient from red (low stability) to green (high stability)
- **Hover** — Bucket range, exact count, cumulative %
- **Stats row** — Median stability, mean stability, % of cards with stability > 90 days

:::note
Stability is the time required for recall probability to drop from 100% to 90%. A stability of 365 means a 90% chance of recall after one year.
:::

### Difficulty Distribution

Histogram showing how difficult your cards are according to FSRS.

```
Cards
  200|        ██
  150|     ██ ██ ██
  100|  ██ ██ ██ ██ ██
   50|  ██ ██ ██ ██ ██ ██ ██
    0+--+--+--+--+--+--+--+--+--+--+--> Difficulty
      0  1  2  3  4  5  6  7  8  9  10

   [Easy 0-3: 35%] [Medium 4-6: 45%] [Hard 7-10: 20%]
```

- **X axis** — Difficulty 0-10 (integer buckets)
- **Color** — Green (0-3 easy), yellow (4-6 medium), red (7-10 hard)
- **Hover** — Difficulty value, count, percentage
- **Stats row** — Labeled percentage bands (Easy / Medium / Hard)

When a preset filter is active, an overlay shows that preset's difficulty curve vs the global average.

### Retrievability Distribution

Snapshot of current recall probability across all cards right now.

```
Cards
  250|                          ██
  200|                    ██ ██ ██
  150|              ██ ██ ██ ██ ██
  100|        ██ ██ ██ ██ ██ ██ ██ ██
   50|  ██ ██ ██ ██ ██ ██ ██ ██ ██ ██
    0+--+--+--+--+--+--+--+--+--+--+--> Retrievability %
      50 55 60 65 70 75 80 85 90 95 100

   ---- Target Retention: 90% (dashed line) ----
   Cards below target: 12% (124 cards)
```

- **X axis** — Retrievability 50-100% in 5% buckets
- **Reference line** — Desired retention (dashed vertical)
- **Color** — Red below target, green at/above
- **Hover** — Bucket range, count, percentage
- **Stats row** — Cards below target (count and %), mean retrievability

:::note
This chart is a snapshot of the current moment. The time range filter does not apply — it always shows the live state of your collection.
:::

### Stability Growth Over Reviews

Line chart showing how stability builds as cards accumulate successful reviews.

```
Stability (days)
  365|                              /
  180|                         /---
   90|                    /---
   30|              /----
    7|        /----
    1|  /----
     +--+--+--+--+--+--+--+--+--+--> Review Number
       1  2  3  4  5  6  7  8  9

   [--- Median]  [░░░ P25-P75 band]
```

- **X axis** — Review number (1st, 2nd, 3rd... review of a card)
- **Y axis** — Stability in days (log scale)
- **Line** — Median stability at each review count
- **Shaded band** — P25-P75 interquartile range
- **Hover** — Review number, median stability, P25, P75, sample size

:::tip[Insight]
The chart shows an insight like "After 6 reviews, median stability reaches 90+ days."
:::

### Forgetting Curve

Your empirical forgetting curve compared to FSRS predictions.

```
Retention %
  100|*------__
   90|         ---__           <- Predicted (FSRS)
   80|              ---__
   70|  o  o     o      o     <- Actual data points
   60|
     +--+--+--+--+--+--+--+--> Days Since Last Review
       1  3  7  14  30  60  90
```

- **Solid line** — FSRS-predicted forgetting curve using current weights
- **Data points** — Actual retention at various intervals (binned from review history)
- **Shaded band** — Confidence interval around data points (based on sample size)
- **Hover** — Interval bucket, predicted retention, actual retention, sample count

:::tip[Insight]
Shows whether your actual forgetting is faster or slower than what FSRS predicts — e.g., "Your actual forgetting is 2.1% slower than FSRS predicts."
:::

---

## Cards Tab

Collection composition and interval analysis.

### Card States

Donut chart with companion table showing your collection breakdown.

```
        +------------+
       /    Review    \       State       Count    %
      |     1,240      |     New          180    12%
      |  +--------+    |     Learning      45     3%
      | /  New    |    |     Review     1,240    82%
      ||   180    | L  |     Relearning    12     1%
       \         45/   |     Suspended     28     2%
        +--------+    /      ----------------------
                              Total     1,505
```

| Segment | Color |
|---------|-------|
| New | Green |
| Learning | Orange |
| Review | Blue |
| Relearning | Red |
| Suspended | Gray |

Click a segment to open the [Card Browser](/views/card-browser/) filtered to that state.

### Card States Over Time

Stacked area chart showing how your collection composition has changed.

```
Cards
 1500|████████████████████████████████
 1200|████████████████████████████
 1000|██████████████████████
  800|████████████████
  600|██████████
  400|██████
  200|███
    0+--+--+--+--+--+--+--+--+--+--> Date

   [■ New  ■ Learning  ■ Review  ■ Relearning  ■ Suspended]
```

- Shows growth and maturation of your collection over time
- **Hover** — Date, count per state, total

### Interval Distribution

Histogram with cumulative line showing current card intervals.

```
Cards
  120|     ██
  100|  ██ ██
   80|  ██ ██ ██
   60|  ██ ██ ██ ██
   40|  ██ ██ ██ ██ ██ ██         ██
   20|  ██ ██ ██ ██ ██ ██ ██ ██ ██ ██
    0+--+--+--+--+--+--+--+--+--+--+--> Interval
      1d 3d 1w 2w 1m 2m 3m 6m 1y 2y+

   ---- Cumulative % ----> (right axis)
   Avg interval: 45d  |  Median: 32d  |  Longest: 730d
```

- **X axis** — Interval buckets (log-scale)
- **Left Y** — Card count
- **Right Y** — Cumulative percentage line
- **Stats row** — Average interval, median interval, longest interval

### Future Due Forecast

Bar chart projecting upcoming review workload.

```
Cards Due
   60|        ██
   50|     ██ ██        ██
   40|  ██ ██ ██ ██  ██ ██ ██
   30|  ██ ██ ██ ██  ██ ██ ██ ██ ██
   20|  ██ ██ ██ ██  ██ ██ ██ ██ ██ ██
   10|  ██ ██ ██ ██  ██ ██ ██ ██ ██ ██
    0+--+--+--+--+--+--+--+--+--+--+--> Date
     Today  +3  +6  +9  +12 +15 +18

   ---- Avg daily due (dashed line) ----
   ---- Cumulative due (right axis) ---->
```

- **X axis** — Future dates (daily for 30d, weekly for 60-90d)
- **Left Y** — Cards due per day
- **Right Y** — Cumulative total due
- **Reference line** — Average daily due count (dashed)
- **Click** — Opens [Card Browser](/views/card-browser/) filtered to cards due on that date

:::note
This chart is forward-looking and is not affected by the time range filter. Project, tag, and preset filters still apply.
:::

### Answer Buttons by Maturity

Stacked bar comparing rating distribution between young and mature cards.

```
           Young (<21d)    Mature (≥21d)
  Again      18%              8%
  Hard       12%              6%
  Good       62%             78%
  Easy        8%              8%

   +--Young--+--Mature--+
   |█Again   |█Again    |
   |██Hard   |█Hard     |
   |████Good |██████Good|
   |█Easy    |█Easy     |
   +---------+----------+
```

- **Groups** — Young (interval < 21 days) vs Mature (interval ≥ 21 days)
- **Colors** — Again (red), Hard (yellow), Good (blue), Easy (green)
- **Hover** — Exact count and percentage per rating per group

:::tip[Insight]
Shows a comparison like "Mature cards have 10% lower lapse rate than young cards."
:::

---

## Predictions Tab

Forward-looking analytics and retention accuracy analysis.

### True Retention vs Predicted

Dual line chart comparing your actual retention against FSRS predictions over time.

```
Retention %
  95|  --- --- --- --- --- ---      <- Target (90%)
  92|  ___     ___         ___
  90|/    \___/   \___/___/         <- Predicted
  88|  o  o  o  o  o  o  o  o      <- Actual
  85|
    +--+--+--+--+--+--+--+--+--> Date
     W1 W2 W3 W4 W5 W6 W7 W8

   [--- Target]  [--- Predicted]  [o Actual]
```

- **Target** — Dashed line from your desired retention setting
- **Predicted** — FSRS-predicted retention (solid line)
- **Actual** — True retention from review outcomes (dots + line)
- **Y axis** — Retention % (narrow range, typically 75-100%)
- **Hover** — Date range, predicted %, actual %, delta, sample size

:::tip[Insight]
Shows FSRS accuracy: "FSRS prediction accuracy: 98.2% (avg absolute error: 1.3%)."
:::

:::caution
If actual retention is consistently below predicted by more than 3%, FSRS may need re-optimization.
:::

### Retention Trend

Rolling average showing your long-term retention trajectory.

```
Retention %
  95|
  93|                    /------
  91|          /--------/
  89|  -------/
  87|
    +--+--+--+--+--+--+--+--+--> Date

   [--- 7-day rolling avg]  [--- 30-day rolling avg]
```

- **Lines** — 7-day and 30-day rolling averages
- **Shading** — Confidence interval around each average
- **Reference** — Target retention as horizontal dashed line
- **Hover** — Date, 7d avg, 30d avg, raw daily retention

### Cross-Project Comparison

Grouped bar chart comparing key metrics across projects side by side.

```
              Biology  Chemistry  Physics  Languages
Retention       92%      88%       91%      94%
Stability(med)  45d      28d       52d      38d
Lapse Rate      8%       14%       9%       5%
Reviews/day     25       18        12       30

   +---Bio---+---Chem--+---Phys--+---Lang--+
   |████     |███      |████     |█████    |  Retention
   |███      |██       |████     |███      |  Stability
   |█        |██       |█        |         |  Lapse Rate
   +---------+---------+---------+---------+
```

- **Metrics** — Retention %, median stability, lapse rate, avg reviews/day
- **Hover** — Full stats for each project
- **Click** — Sets the global project filter to the clicked project

:::note
This chart ignores the project filter since its purpose is to compare projects. Tag and preset filters still apply.
:::

### Workload Prediction

Area chart projecting your daily review workload for the next 90 days.

```
Reviews/day
   80|
   60|     /\          /\
   40|  __/  \___   __/  \___
   20|           \_/          \___
    0+--+--+--+--+--+--+--+--+--> Future Date
     +1w +2w +3w +1m +2m +3m

   [███ Predicted reviews]  [--- Capacity (daily limit)]
```

- **Area fill** — Predicted workload with confidence band
- **Reference line** — Daily review limit from your preset settings
- **Hover** — Date, predicted reviews, predicted time
- **Warning zone** — Days where predicted reviews exceed the daily limit are highlighted in red

:::caution
If you see consistent red zones, consider adjusting new cards per day or spreading your workload with Easy Days.
:::

### Note Performance Table

Sortable table identifying your best and worst performing notes.

```
+---------------------------------------------------------------+
| Note                    | Cards | Retention | Lapses | Stab.  |
|-------------------------|-------|-----------|--------|--------|
| ▼ Worst Performing                                            |
| Organic Chemistry       |   45  |   78.2%   |   32   |  12d   |
| Pharmacology Basics     |   38  |   81.4%   |   24   |  18d   |
| Cell Biology            |   52  |   83.1%   |   28   |  22d   |
|                                                               |
| ▲ Best Performing                                             |
| English Vocabulary      |   65  |   96.8%   |    3   | 142d   |
| World Geography         |   28  |   95.2%   |    5   | 128d   |
| Basic Math              |   42  |   94.9%   |    4   | 156d   |
+---------------------------------------------------------------+
| [Show all notes...]                                           |
+---------------------------------------------------------------+
```

| Column | Description |
|--------|-------------|
| **Note** | Note title — click to open in editor |
| **Cards** | Total flashcards in this note |
| **Retention** | True retention for this note's cards |
| **Lapses** | Total lapse count |
| **Stability** | Median stability across note's cards |

Shows top 5 worst and top 5 best by default. Click **Show all notes** for a full sortable table.

---

## Chart Interactions

All charts support these interactions:

| Action | Behavior |
|--------|----------|
| **Hover** | Tooltip with exact values |
| **Click** | Context-dependent drill-down (described per chart) |
| **Drag** | Select a date range on time-series charts to zoom in |
| **Right-click** | Export as PNG or export data as CSV |

An **Export All** button in the filter bar exports all charts' data as a single CSV bundle.

---

## Tips

### Check Stats After Each Session

Review your statistics after study sessions to track progress and catch trends early.

### Use the FSRS Tab to Understand Your Algorithm

The Stability and Difficulty distributions show how FSRS models your memory. The Forgetting Curve reveals whether predictions match reality.

### Balance Effort with Cross-Project Comparison

If one project has significantly lower retention, it may need more attention — or its cards may need restructuring.

### Find Your Optimal Study Time

The Hourly Breakdown chart reveals when you perform best. Schedule study sessions during your peak retention hours.

### Watch the Workload Prediction

If predicted reviews regularly exceed your daily limit, reduce new cards per day before the backlog builds.
