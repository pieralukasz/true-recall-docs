---
title: Statistics View
description: The analytics dashboard for tracking your learning progress
---

The Statistics View provides comprehensive analytics about your flashcard collection and learning progress.

## Opening Statistics

- **Ribbon icon**: Click the orange chart icon
- **Command Palette**: `Cmd/Ctrl+P` → "True Recall: Open statistics panel"

## Dashboard Components

### Today's Summary Card

Quick overview of your current session:

```
┌─────────────────────────────────────┐
│         Today's Progress            │
├─────────────────────────────────────┤
│  Reviewed    │  New Cards  │  Time  │
│     25       │      5      │  12m   │
├─────────────────────────────────────┤
│  Accuracy: 88%                      │
└─────────────────────────────────────┘
```

### Card State Distribution

Pie chart showing collection breakdown:
- **New** (blue): Never reviewed
- **Learning** (yellow): In learning phase
- **Review** (green): Graduated cards
- **Suspended** (gray): Paused cards
- **Buried** (brown): Hidden today

### Retention Over Time

Line chart tracking success rate:
- X-axis: Time (days/weeks/months)
- Y-axis: Retention percentage
- Target line: Your desired retention
- Actual line: Your real performance

### Future Workload

Bar chart forecasting upcoming reviews:
- Shows next 30 days
- Height = cards due that day
- Helps plan study time

### Calendar Heatmap

Activity visualization:
- Shows past year
- Darker = more reviews
- Click day for details

### Additional Charts

Depending on data available:
- Reviews over time
- Card creation vs review
- Difficulty distribution
- Interval distribution

## Time Range Filters

Switch between periods:

| Filter | Shows |
|--------|-------|
| **1 Week** | Last 7 days |
| **1 Month** | Last 30 days |
| **3 Months** | Last 90 days |
| **All Time** | Complete history |

## Metrics Explained

### Reviewed Today
Total cards reviewed in current session.

### New Cards Learned
New cards that entered learning phase today.

### Time Spent
Total active review time today.

### Accuracy
Percentage of Good + Easy ratings.

```
Accuracy = (Good + Easy) / Total × 100
```

### Retention Rate
Success rate on cards due for review (not learning).

### True Retention
Actual vs FSRS-predicted retention:
- Close = well-calibrated
- Lower = underperforming
- Higher = over-reviewing

### Review Burden
Average daily reviews to maintain collection.

### Learning Load
New cards currently in learning phase.

## Chart Interactions

### Hover
- Shows tooltip with exact values
- Date and count details

### Click
- Some charts allow drill-down
- Calendar shows day details

### Zoom
- Scroll to zoom time charts
- Drag to pan

### Export
- Right-click → Save as image
- Copy to clipboard

## Natural Language Query

Ask questions about your data:

### How to Use
1. Click the query input
2. Type your question
3. Press Enter
4. View AI response

### Example Questions
- "What's my retention this week?"
- "How many cards did I review yesterday?"
- "What are my hardest cards?"
- "Show my busiest review days"
- "Compare this week to last week"

:::note
Requires AI API key configuration.
:::

## Interpreting Your Data

### Healthy Patterns
- Retention 85-95%
- Consistent daily reviews
- Growing mature cards
- Stable workload

### Warning Signs
- Retention below 80%
- Large review backlogs
- Many cards relearning
- Increasing difficulty

### Action Items

**Low retention:**
- Review rating honesty
- Consider parameter optimization
- Check for problem cards

**Growing backlog:**
- Reduce new cards/day
- Increase review time
- Use load balancing

**Many suspended:**
- Audit suspended cards
- Fix or delete problem cards
- Reset if needed

## Export Options

### Chart Images
- Right-click any chart
- Save as PNG
- Share or archive

### Data Export
- CSV format (if available)
- Review history
- Card statistics

## Settings Impact

### Day Boundary
Affects "today" calculations:
- Default: 4 AM
- Reviews before boundary count for previous day

### Desired Retention
- Target line on retention chart
- Compare actual vs target

## Tips

### Weekly Review
Check stats weekly:
- Monitor retention trends
- Adjust limits if needed
- Identify problems early

### Before Optimization
Before FSRS optimization:
- Need 400+ reviews
- Check current retention
- Review difficulty spread

### Goal Setting
Use stats to set goals:
- Cards per day target
- Retention target
- Collection size target

## Troubleshooting

### Charts Not Loading
- Wait for data to process
- Check for JavaScript errors
- Try refreshing panel

### Wrong Numbers
- Verify time zone
- Check day boundary setting
- Ensure data synced

### Missing Data
- Old data may not migrate
- Check database integrity
- Some metrics need history
