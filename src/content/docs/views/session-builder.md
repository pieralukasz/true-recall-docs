---
title: Session Builder
description: Create custom review sessions with advanced filtering options
links:
  - /views/review-view/
  - /features/projects/
---

The Session Builder lets you pick exactly which cards to study. Select source notes, filter by state, narrow things down by project or folder, flip on a few options, and go.

## Opening Session Builder

You have three ways in:

- **Command Palette** -- `Cmd/Ctrl+P` then search "True Recall: Start review session"
- **Ribbon icon** -- click the purple brain icon in the sidebar
- **Panel button** -- hit "Review" in the flashcard panel

## Interface

```
┌─────────────────────────────────────┐
│        Custom Review Session        │
├─────────────────────────────────────┤
│ Source Notes:                       │
│ [Search notes...]                   │
│ ☑ Chapter 1.md                     │
│ ☑ Chapter 2.md                     │
│ ☐ Chapter 3.md                     │
├─────────────────────────────────────┤
│ Card States:                        │
│ ☑ Due  ☑ Learning  ☐ New  ☐ Buried │
├─────────────────────────────────────┤
│ Projects:                           │
│ [Select projects...]                │
├─────────────────────────────────────┤
│ Options:                            │
│ ☐ Ignore daily limits              │
│ ☐ Bypass scheduling                │
│ ☐ Created today only               │
├─────────────────────────────────────┤
│ Cards matching: 45                  │
│         [Start Review]              │
└─────────────────────────────────────┘
```

Every time you change a filter, the **Cards matching** count updates in real time. When you're happy with the number, hit **Start Review**.

## Filters

### Source Notes

Type into the search box to find notes, then check the ones you want. You can also use **Select all** to grab every match or **Clear** to start over.

### Card State

Pick which kinds of cards to include:

| State | What it means |
|-------|---------------|
| **Due** | Cards scheduled for review today |
| **Learning** | Cards still in the learning phase |
| **New** | Cards that have never been reviewed |
| **Buried** | Cards you buried earlier today |

### Projects

Open the dropdown and select one or more projects. Only cards belonging to those projects will appear.

### Path

Enter a folder path to limit the session to notes inside that folder. Subfolders are included automatically.

### Ignore Daily Limits

Removes the cap on new cards per day and reviews per day. Good for catch-up sessions when you've fallen behind.

:::caution
Large unlimited sessions can be exhausting. Use this for occasional catch-ups, not as a daily habit.
:::

### Bypass Scheduling

Shows every card regardless of its next due date. Handy when you want to study ahead before an exam.

### Created Today Only

Limits the session to cards created today. Perfect for checking the quality of cards you just made and getting that first same-day reinforcement.

### Created This Week

Same idea, but widens the window to the last seven days. Useful for early reinforcement of recent material.

### Weak Cards Only

Surfaces cards with low retrievability -- the ones you're struggling with most. Pair this with the **Due** and **Learning** states for an efficient targeted session.

## Advanced Combinations

Here are a few filter recipes for common scenarios.

### Exam Prep
```
☑ Project: "Exam: Biology"
☑ Due, Learning, New
☑ Ignore daily limits
☐ Bypass scheduling
```

### Catch-up Session
```
☑ All notes
☑ Due only
☑ Ignore daily limits
☐ New cards
```

### New Content Review
```
☑ Created today only
☑ New cards
☐ Due, Learning
```

### Weak Card Focus
```
☑ Weak cards only
☑ Due, Learning
☐ New cards
```
