---
title: Review System
description: How the spaced repetition review system works in True Recall
---

True Recall's review system uses spaced repetition to help you remember information efficiently. Cards are shown at optimal intervals based on how well you remember them.

## Card States

Every flashcard in True Recall has one of four states:

### New
- Cards that have never been reviewed
- Shown during new card learning sessions
- Subject to daily new card limits

### Learning
- Cards currently being learned
- Short intervals (minutes to hours)
- Go through learning steps before graduation

### Review
- Cards that have graduated from learning
- Intervals measured in days
- Your main long-term memory cards

### Relearning
- Previously known cards that were forgotten
- Re-enter learning phase
- Shorter graduation path than new cards

## Review Session Flow

1. **Start session** via ribbon icon or command palette
2. **See card count**: "New: 5 | Learning: 3 | Due: 12"
3. **View question** and think of the answer
4. **Reveal answer** with Space or click
5. **Rate your recall** (1-4)
6. **Repeat** until session complete

## Rating Scale

| Rating | Name | Meaning | Scheduling Effect |
|--------|------|---------|-------------------|
| **1** | Again | Forgot completely | Reset to learning |
| **2** | Hard | Struggled to recall | Shorter interval |
| **3** | Good | Recalled with effort | Normal interval |
| **4** | Easy | Recalled instantly | Longer interval |

:::tip Rating Honestly
The algorithm learns from your ratings. Don't inflate ratings—it hurts your long-term retention.
:::

## Queue Order

When you start a review session, cards are ordered in a specific way to maximize learning efficiency:

### Queue Priority

```
1. Due Learning Cards → 2. Review + New Cards → 3. Pending Learning Cards
```

| Priority | Card Type | Description |
|----------|-----------|-------------|
| **1st** | Due Learning | Learning/Relearning cards that are actually due (time has passed) |
| **2nd** | Due Reviews | Review cards due for today |
| **2nd** | New Cards | New cards (mixed with reviews based on settings) |
| **3rd** | Pending Learning | Learning cards scheduled for later (e.g., "due in 15 min") |

### Why This Order?

- **Learning cards first**: When actually due, they need immediate attention for optimal learning
- **Reviews and new cards**: Your main study content
- **Pending learning last**: If you've pressed "Again" on a card, it goes to the end and you'll see it only after reviewing other available cards

:::note Waiting Screen
When all due cards are reviewed and only pending Learning cards remain, you'll see a **waiting screen** with a countdown. This ensures learning steps are respected (e.g., a 30-minute step actually waits 30 minutes).
:::

### Learn-Ahead Behavior

- **Review cards**: Can be studied up to 20 minutes early (learn-ahead window)
- **Learning cards**: Must be actually due—no early review. This respects the spacing effect during initial learning.

## Session Types

### Standard Review
- Reviews all due cards
- Respects daily limits
- Mixes new, learning, and review cards

### Custom Session
Advanced filtering options:
- **By source note**: Review cards from specific notes
- **By state**: Only new, learning, or review cards
- **By project**: Review a specific project
- **Ignore limits**: Override daily new/review limits
- **Bypass scheduling**: Study cards regardless of due date

### Quick Sessions
- **From current note**: Review only active note's cards
- **Today's new cards**: Cards created today
- **Weak cards**: Low retrievability cards

## Progress Header

During review, the header shows:

```
New: 5 | Learning: 3 | Due: 12
```

- **New**: Unreviewed cards to learn today
- **Learning**: Cards in learning/relearning phase
- **Due**: Review cards due for today

## Card Actions During Review

Access these with keyboard shortcuts or long-press:

| Action | Shortcut | Description |
|--------|----------|-------------|
| Suspend | `!` (Shift+1) | Remove from queue indefinitely |
| Bury | `-` | Hide until tomorrow |
| Bury Note | `=` | Bury all cards from same source |
| Edit | `E` | Open card editor |
| Move | `M` | Move to different note |
| Branch | `B` | Duplicate the card |
| New Card | `N` | Create card manually |

## Undo

Made a rating mistake? Undo it:

- **Shortcut**: `Cmd/Ctrl+Z`
- **Button**: Click the undo button in header

Undo restores the previous card state and lets you rate again.

## Review Modes

### Fullscreen Mode
- Takes over the main content area
- Distraction-free review
- Good for focused study sessions

### Panel Mode
- Opens as a side panel
- Keep your notes visible
- Good for reference while reviewing

Configure in Settings → True Recall → General → Review Mode.

## Daily Limits

Control your daily workload:

- **New cards/day**: How many new cards to introduce
- **Reviews/day**: Maximum review cards per day

Set in Settings → True Recall → General.

:::note About Limits
Learning cards don't count against limits—they're always shown because they need frequent review to graduate.
:::

## Scheduling Details

### Learning Steps
Default: 1 minute, 10 minutes

New cards go through these steps:
1. First review → 1 min wait
2. Second review → 10 min wait
3. Third review → Graduate to review state

### Graduating Interval
Default: 1 day

After completing learning steps, the card's first review interval.

### Review Intervals
Calculated by FSRS based on:
- Your rating
- Card difficulty
- Current stability
- Desired retention

## Tips for Effective Review

1. **Review at the same time daily** for habit formation
2. **Don't cram**—respect the limits
3. **Rate honestly** for accurate scheduling
4. **Use bury** for cards you need to skip temporarily
5. **Use suspend** for cards with errors to fix later
6. **Check stats** weekly to monitor retention
