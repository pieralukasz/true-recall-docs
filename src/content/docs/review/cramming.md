---
title: Custom Study & Cramming
sidebar:
  label: "Custom Study & Cramming (P)"
  order: 4
description: "Build custom review sessions with filters, sort orders, and cramming mode — ideal for targeted practice, exam preparation, and extra reinforcement."
---

:::caution[My Notes]
:::

**Custom Study** lets you build review sessions with specific filters and sort orders — review only difficult cards, focus on a particular note, or sort by lowest stability. **Cramming** is a custom study option that disables scheduling, so ratings don't affect your FSRS progress.

## Starting a Custom Study Session

### From the Dashboard

1. Open the [Dashboard](/views/dashboard/)
2. Right-click a project or note
3. Select **Custom session**

### From Command Palette

`Cmd/Ctrl + P` → "Custom study session"

## Session Filters

TODO PHOTO

### Card State

| Option | Description |
|--------|-------------|
| **All states** | Include all cards regardless of state |
| **New only** | Only cards never reviewed |
| **Learning only** | Only cards in learning/relearning |
| **Due only** | Only cards in review state that are due |

### Difficulty Range

Filter by FSRS difficulty (1–10). Default: 1 to 10 (all difficulties). Narrow this to focus on hard cards (e.g., 7–10) or easy cards (1–3).

### Minimum Lapses

Only include cards that have been forgotten at least N times. Set to 3+ to focus on [leeches](/review/leeches/) — cards that need rewriting or extra attention.

## Session Options

### Sort Order

Control which cards you see first:

| Order | Description | Best for |
|-------|-------------|----------|
| **Due date** | Cards due soonest first | Standard review |
| **Random** | Fully shuffled | Variety, avoiding patterns |
| **Due date (randomized)** | By due date, shuffled within same day | Natural variety with priority |
| **Retrievability** | Lowest recall probability first | Rescuing weak cards |
| **Most lapses** | Most-failed cards first | Targeting [leeches](/review/leeches/) |
| **Relative overdueness** | Most overdue relative to stability | Catching up after a break |
| **Lowest stability** | Weakest memory first | Strengthening weak spots |
| **Order added** | Oldest cards first | Systematic review |

### Study Ahead

Review cards that aren't due yet by setting **Study ahead** to N days. Set to 0 (default) to only review due cards. Useful before a vacation or break.

### Card Limit

Maximum cards in the session. Set to 0 for no limit. Custom study sessions always bypass daily limits — the card limit here is per-session only.

### Cramming Mode

Enable **Cramming mode** to review without affecting scheduling. Ratings are recorded but don't change FSRS parameters, stability, or difficulty. The header shows a **Cram** badge so you always know you're in a cram session.

## Saving Session Presets

Give your session a name to save it as a preset. Saved presets appear in the custom study dialog for quick access — useful if you regularly run the same type of session (e.g., "Exam prep — hard cards only").

## When to Use Cramming

| Use Cramming when | Use Normal Review when |
|-------------------|------------------------|
| Preparing for an exam | Daily spaced repetition |
| Extra practice on weak areas | Building long-term memory |
| Testing yourself before a test | Following the FSRS schedule |
| Practicing without consequences | Normal learning |

## How Cramming Works

1. **Configure** your filters and card limits, enable Cramming mode
2. **Review** cards and rate them as usual
3. **Ratings are recorded** but don't change scheduling
4. **Finish** when done or the card limit is reached

The header shows a **Cram** badge so you always know you're in a cram session, not a normal review.

## Cramming vs Normal Review

| Aspect | Cramming | Normal Review |
|--------|----------|---------------|
| Affects schedule | No | Yes |
| Updates FSRS parameters | No | Yes |
| Counts toward daily stats | No | Yes |
| Good for | Short-term preparation | Long-term retention |
| Follow-up | None needed | Next scheduled review |

## Best Practices

### Before an Exam

1. **One week before** — Normal reviews + light cramming on exam material
2. **Day before** — Cram session focused on weak areas
3. **Day of** — Quick cram review (optional)

### For Difficult Material

If you're struggling with certain cards: keep doing normal reviews as scheduled, add cram sessions on those cards for extra reinforcement, and stop cramming once you're comfortable.

### Don't Overdo It

Cramming is a supplement, not a replacement for spaced repetition. Don't cram the same cards daily for weeks — let FSRS do its job for long-term retention.

## Cram Session Statistics

After a cram session, you see cards reviewed, how many you forgot, and your accuracy percentage. These are informational only — they don't affect the database or daily statistics.

## What to Read Next

- [Review Interface](/review/review-interface/) — the normal review flow
- [Answering Cards](/review/answering-cards/) — how ratings work with FSRS
- [Leeches](/review/leeches/) — dealing with cards you keep forgetting
- [Workload Management](/scheduling/workload-management/) — control your daily review load
- [Dashboard](/views/dashboard/) — where to start custom study sessions
