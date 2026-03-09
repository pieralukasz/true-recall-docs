---
title: Statistics
description: Analytics dashboard with retention tracking, workload forecasting, calendar heatmap, and natural language queries.
---

The **Statistics View** provides detailed analytics about your learning progress, retention rates, and review patterns.

## Opening Statistics

- **Ribbon icon** — Click the bar chart icon
- **Command** — Cmd/Ctrl + P -> "Open statistics panel"

## Time Range Selector

| Range | Description |
|-------|-------------|
| **1W** | Last 7 days |
| **1M** | Last 30 days |
| **3M** | Last 90 days |
| **1Y** | Last year |
| **All** | All time |

## Today's Stats

Quick summary: Cards reviewed, Retention percentage, Total study time.

## Future Due Chart

Forecast of upcoming reviews (next 30 days). Hover to see exact count per day. Use to plan study sessions and identify busy periods.

## Reviews Over Time

Historical review activity showing cards reviewed per day with trends and patterns.

## Retention Rate

Your recall accuracy over time:

- **True Retention** — Calculated using FSRS formula
- **Target line** — Your desired retention setting
- **Trend** — Improving or declining

## Rating Distribution

Breakdown of your answers:

| Rating | Color | Description |
|--------|-------|-------------|
| Again | Red | Forgotten |
| Hard | Yellow | Difficult |
| Good | Blue | Correct |
| Easy | Green | Instant |

Helps identify if you're being too harsh or lenient.

## Card Counts by State

Current collection breakdown: New, Learning, Review, Suspended.

## Collection Health

Overall health score (0-100) based on percentage of mature cards, retention rate, review consistency, and lapse rate.

| Score | Health |
|-------|--------|
| 90-100 | Excellent |
| 75-89 | Good |
| 60-74 | Fair |
| <60 | Needs attention |

## Note Performance Table

Top and bottom performing notes with card count, retention rate, lapses, and last review date. Click a note to open it.

## Calendar Heatmap

Year view of review activity. Each day is a square, color intensity reflects review count. Includes streak tracking.

## Natural Language Query

The NL Query tab lets you ask questions about your data:

| Query | Result |
|-------|--------|
| "Show cards I got wrong yesterday" | Lists forgotten cards |
| "How many new cards this week?" | Count of new cards |
| "Which notes have the worst retention?" | Ranked list |
| "Cards created in the last 3 days" | Recent cards |

Requires AI configuration (API key or subscription).

## Interactive Charts

All charts support: Hover for details, Click to drill down, Drag to select range.

## Tips

- Check stats after each session to track progress
- If retention drops below target, consider reducing new cards per day
- Use NL Query for specific questions instead of hunting through charts
- Check Note Performance for consistently difficult notes
