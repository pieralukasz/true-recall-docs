---
title: General Settings
description: Configure basic True Recall behavior and display options
---

General settings control the basic behavior of True Recall, including review interface options, daily limits, and UI preferences.

## Accessing Settings

1. Open Obsidian Settings (`Cmd/Ctrl+,`)
2. Scroll to "True Recall" in the left sidebar
3. Select "General" tab

## Review Interface

### Review Mode

Choose how the review interface displays:

| Mode | Description |
|------|-------------|
| **Fullscreen** | Takes over main content area |
| **Panel** | Opens as side panel |

**Recommendation**: Fullscreen for focused sessions, Panel for reference during review.

### Show Review Header

Toggle the progress header visibility:
- **On**: Shows "New: 5 | Learning: 3 | Due: 12"
- **Off**: Cleaner interface, no counts

### Show Header Stats

Toggle detailed stats in header:
- **On**: Shows accuracy, time spent
- **Off**: Minimal header

### Show Next Review Time

Display predicted intervals on rating buttons:
- **On**: Shows "8d", "21d" below buttons
- **Off**: Just button labels

**Recommendation**: Keep on to understand scheduling.

## Daily Limits

### New Cards Per Day

Maximum new cards to introduce daily.

| Setting | Effect |
|---------|--------|
| **5-10** | Conservative, sustainable |
| **20** | Default, moderate pace |
| **50+** | Aggressive, higher workload |

**Recommendation**: Start with 10-20, adjust based on time available.

### Reviews Per Day

Maximum review cards per day.

| Setting | Effect |
|---------|--------|
| **50** | Light daily commitment |
| **100** | Default, moderate |
| **200** | Heavy reviewer |
| **9999** | Unlimited |

**Recommendation**: Set based on available study time (~1 review = 10 seconds).

## Day Boundary

### Day Start Hour

Hour when a new "day" begins (24-hour format).

| Setting | Effect |
|---------|--------|
| **0** | Midnight |
| **4** | 4 AM (default, like Anki) |
| **6** | 6 AM |

**Why 4 AM?** Late-night reviews count for the current day, not tomorrow.

**Recommendation**: Keep default unless you have unusual schedule.

## Floating Button

### Enable Floating Button

Toggle the AI generation button on text selection:
- **On**: Button appears when selecting text
- **Off**: No floating button

### Minimum Selection Length

Characters required to show floating button:
- **Default**: 50 characters
- **Lower**: More sensitive trigger
- **Higher**: Only longer selections

### Direct Generation

Skip preview modal when generating:
- **On**: Generate and save immediately
- **Off**: Show preview for review (recommended)

## Content Collection

### Remove Content After Collection

What happens to card content in notes after collection:

| Setting | Effect |
|---------|--------|
| **Off** | Remove only #flashcard tag |
| **On** | Remove entire Q&A block |

**Recommendation**: Off to preserve content in notes.

## Custom Session

### Continuous Custom Reviews

After completing a custom session:
- **On**: Show "Next Session" button
- **Off**: Return to normal state

## Interface Preferences

### Card Preview Length

How much of question/answer to show in lists:
- **Short**: First 50 characters
- **Medium**: First 100 characters
- **Long**: First 200 characters

### Theme Integration

True Recall adapts to your Obsidian theme:
- Respects dark/light mode
- Uses theme accent colors
- Maintains readability

## Recommended Settings

### For Beginners
```
New cards/day: 10
Reviews/day: 100
Day boundary: 4 AM
Floating button: On
Direct generation: Off
```

### For Power Users
```
New cards/day: 30
Reviews/day: 200
Show intervals: On
Continuous sessions: On
```

### For Mobile
```
Review mode: Fullscreen
Show header: On
New cards/day: 10 (less fatigue)
```

## Tips

### Finding Your Limits
1. Start conservative (10 new/day)
2. Review for one week
3. Check if backlog grows
4. Adjust up/down as needed

### Managing Workload
- New cards create future reviews
- 10 new/day = ~100 reviews/day eventually
- Calculate sustainable pace

### Switching Devices
Settings are per-device:
- Mobile might have lower limits
- Desktop for main studying
- Sync handles the data
