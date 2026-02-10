---
title: Statistics & Analytics
description: Track your learning progress with comprehensive statistics
links:
  - /views/statistics-view/
  - /features/review-system/
---

True Recall provides comprehensive statistics to help you understand your learning progress and optimize your study habits.

## Opening Statistics

- **Ribbon icon**: Click the orange chart icon in the left sidebar
- **Command Palette**: `Cmd/Ctrl+P` → "True Recall: Open statistics panel"

## Dashboard Overview

The statistics view presents multiple visualizations:

### Today's Summary Card

Quick overview of current session:
- **Cards Reviewed**: Total reviews today
- **New Cards**: New cards learned
- **Time Spent**: Total review time
- **Accuracy**: Percentage of Good/Easy ratings

### Card State Distribution

Pie chart showing your collection breakdown:
- New cards
- Learning cards
- Review cards
- Suspended cards
- Buried cards

### Retention Over Time

Line chart tracking your retention rate:
- Daily/weekly/monthly views
- Target retention line
- Actual vs predicted retention

### Future Workload Forecast

Bar chart predicting upcoming reviews:
- Next 30 days
- Due cards per day
- Helps plan study time

### Calendar Heatmap

GitHub-style activity visualization:
- Daily review activity
- Color intensity = review count
- Click day for details

## Time Range Filters

Switch between time periods:
- **1 Week**: Recent performance
- **1 Month**: Medium-term trends
- **3 Months**: Longer patterns
- **All Time**: Complete history

## Metrics Explained

### Retention Rate
Percentage of cards successfully recalled (rated Good or Easy).

```
Retention = (Good + Easy) / Total Reviews × 100
```

Target: Match your desired retention setting (default 90%).

### True Retention
Actual retention vs FSRS predicted retention.

- **Close to desired**: Algorithm is well-calibrated
- **Much lower**: May need parameter optimization
- **Much higher**: Possibly over-reviewing

### Review Burden
Average daily reviews required to maintain your collection.

### Learning Load
New cards in learning phase requiring frequent attention.

### Maturity Distribution

Cards by interval length:
- **Young** (< 21 days): Recently learned
- **Mature** (21-100 days): Solidifying
- **Ancient** (100+ days): Well-known

## Charts Deep Dive

### Reviews Over Time
Shows daily review counts:
- Total reviews
- New card reviews
- Review card reviews
- Learning/relearning reviews

### Card Creation vs Review
Compares:
- Cards added daily
- Cards reviewed daily
- Net growth of collection

### Difficulty Distribution
Histogram of card difficulties:
- Identify hard vs easy cards
- Check for unusual patterns

### Interval Distribution
How intervals are spread:
- Short intervals (< 7 days)
- Medium intervals (7-30 days)
- Long intervals (30+ days)

## Natural Language Queries

Ask questions about your data in plain English:

### Example Queries
- "What's my retention rate this month?"
- "How many cards did I review last week?"
- "What are my hardest cards?"
- "Show me cards I've forgotten most"

### How to Use
1. Click the query input box
2. Type your question
3. AI processes and responds
4. View results in the panel

:::note
Requires an OpenRouter API key configured in settings for natural language queries.
:::

## Exportable Data

### Chart Export
Right-click any chart to:
- Save as PNG image
- Copy to clipboard

### Data Export
(Feature availability may vary)
- CSV export of review history
- JSON export of card data

## Understanding Your Progress

### Good Signs
- Retention near target (90%)
- Stable or decreasing workload
- Growing mature card count
- Consistent daily reviews

### Warning Signs
- Retention dropping below 80%
- Growing backlog of due cards
- Many cards in relearning
- Difficulty skewing high

## Tips for Using Statistics

### Weekly Review
Check stats weekly to:
- Monitor retention trends
- Adjust new card limits if needed
- Identify problem areas

### Monthly Analysis
Monthly, look at:
- Long-term retention curves
- Collection growth rate
- Time investment

### Before Optimization
Before optimizing FSRS parameters:
- Check you have 400+ reviews
- Review current retention vs target
- Analyze difficulty distribution

## Troubleshooting

### Stats Not Loading
- Wait for database to load
- Check for JavaScript errors
- Try reloading the plugin

### Incorrect Numbers
- Ensure all reviews are synced
- Check date/time settings
- Verify daily boundary setting

### Charts Not Rendering
- Check browser compatibility
- Clear plugin cache
- Update to latest version
