---
title: Review View
description: The flashcard review interface for spaced repetition study
links:
  - /features/review-system/
  - /views/session-builder/
  - /reference/keyboard-shortcuts/
---

The Review View is where you study your flashcards using spaced repetition. It presents cards one at a time and schedules them based on your performance.

## Opening Review

- **Ribbon icon**: Click the purple brain icon
- **Command Palette**: `Cmd/Ctrl+P` → "True Recall: Start review session"
- **Flashcard Panel**: Click "Review" button

## Interface Layout

### Question View
```
┌─────────────────────────────────────┐
│ New: 5 | Learning: 3 | Due: 12      │
├─────────────────────────────────────┤
│                                     │
│                                     │
│        What is spaced               │
│        repetition?                  │
│                                     │
│                                     │
├─────────────────────────────────────┤
│         [Show Answer]               │
│                                     │
│  Source: Learning Techniques.md     │
│  Projects: [Study Methods] [School] │
└─────────────────────────────────────┘
```

### Answer View
```
┌─────────────────────────────────────┐
│ New: 5 | Learning: 3 | Due: 12      │
├─────────────────────────────────────┤
│        What is spaced               │
│        repetition?                  │
│ ─────────────────────────────────── │
│        A learning technique that    │
│        spaces out review sessions   │
│        to optimize memory retention │
├─────────────────────────────────────┤
│ [Again]  [Hard]   [Good]   [Easy]   │
│  <1m      <6m      8d       20d     │
│                                     │
│  Source: Learning Techniques.md     │
└─────────────────────────────────────┘
```

## Header Section

### Progress Counters

```
New: 5 | Learning: 3 | Due: 12
```

- **New**: Remaining new cards for today
- **Learning**: Cards in learning/relearning phase
- **Due**: Review cards due today

### Header Actions
- **Undo**: Revert last rating
- **Menu**: Access additional actions
- **Close**: End session (X button)

## Card Display

### Question
- Full markdown rendering
- Images and formatting supported
- Centered display

### Answer
- Revealed after clicking or pressing Space
- Separated from question by line
- Same markdown support

### Source Link
- Shows origin note name
- Click to open the source note
- Helps provide context

### Project Badges
- Shows project memberships
- Click to filter by project
- Color-coded for visibility

## Rating Buttons

After revealing the answer, rate your recall:

| Button | Key | Meaning | Effect |
|--------|-----|---------|--------|
| **Again** | `1` | Forgot | Reset, short interval |
| **Hard** | `2` | Struggled | Longer interval, +difficulty |
| **Good** | `3` | Recalled | Normal interval |
| **Easy** | `4` | Instant | Longer interval, -difficulty |

### Interval Previews
Below each button shows the next interval:
- `<1m` = Less than 1 minute
- `8d` = 8 days
- `2mo` = 2 months

## Keyboard Shortcuts

### Essential
| Key | Action |
|-----|--------|
| `Space` | Show answer / Rate Good |
| `Enter` | Show answer |
| `1` | Rate Again |
| `2` | Rate Hard |
| `3` | Rate Good |
| `4` | Rate Easy |

### Card Actions
| Key | Action |
|-----|--------|
| `!` (Shift+1) | Suspend card |
| `-` | Bury card |
| `=` | Bury all from note |
| `E` | Edit card |
| `M` | Move card |
| `N` | New card |
| `B` | Branch/copy |

### Navigation
| Key | Action |
|-----|--------|
| `Cmd/Ctrl+Z` | Undo last |
| `Escape` | Close review |

## Card Actions

### Suspend
Removes card from review queue indefinitely.
- Use for cards with errors
- Use for cards to revise later
- Unsuspend via Browser

### Bury
Hides card until tomorrow.
- Skips without affecting schedule
- Resets automatically at day boundary
- Good for "I need to think about this"

### Bury Note
Buries ALL cards from same source note.
- Useful for related content
- All cards return tomorrow

### Edit
Opens card editor modal.
- Fix typos or unclear wording
- Add details to answer
- Save and continue reviewing

### Move
Transfers card to different note.
- Choose destination note
- Updates source linkage
- Card remains in review

### Branch
Duplicates the card.
- Creates copy in same note
- Useful for variations
- New card starts as New

## Session Flow

### Standard Session
1. Cards queued by: new → learning → review
2. Learning cards repeat at intervals
3. Session ends when queue empty
4. Summary shows stats

### Session Complete
When all cards are done:
```
┌─────────────────────────────────────┐
│        Session Complete!            │
│                                     │
│  Reviewed: 25 cards                 │
│  New: 5 | Learning: 8 | Review: 12  │
│  Time: 12 minutes                   │
│  Retention: 92%                     │
│                                     │
│      [Close]  [Continue]            │
└─────────────────────────────────────┘
```

## Review Modes

### Fullscreen Mode
- Takes over main content area
- Minimal distractions
- Best for focused sessions

### Panel Mode
- Side panel view
- Keep notes visible
- Good for reference

Configure in Settings → True Recall → General.

## Special States

### Waiting for Cards
When learning cards have short intervals:
```
Next card due in: 2:34
[Study Ahead] [End Session]
```

### No Cards Due
```
No cards due for review!
Next due: 12 cards tomorrow
[Review New Cards] [Custom Session]
```

## Tips

### Rating Honestly
- Don't inflate ratings
- Algorithm learns from your data
- Short-term ease = long-term pain

### Consistent Timing
- Review at same time daily
- Build habit, not willpower
- Morning reviews often best

### Managing Difficulty
- Use suspend for problem cards
- Edit unclear questions
- Don't fight the algorithm

## Troubleshooting

### Review Won't Start
- Check for due cards
- Verify daily limits
- Look for error messages

### Cards Showing Wrong
- Check session filters
- Verify card states
- Reload plugin if needed

### Stuck in Learning
- Normal for difficult cards
- Rate honestly
- Eventually will graduate or suspend
