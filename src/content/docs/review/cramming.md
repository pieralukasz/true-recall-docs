---
title: Custom Study
sidebar:
  label: "Custom Study"
  order: 4
description: "Anki-style Custom Study sessions: raise today's limits, review forgotten cards, review ahead, preview new cards, or study by card state and tag in a temporary deck."
---

:::caution[My Notes]
:::

**Custom Study** builds an extra session on top of your normal daily queue. Since 2.0.0 it works like Anki's Custom Study: pick one of seven modes, and **True Recall** materializes a temporary filtered deck that you can study, rebuild, empty or delete from the [Dashboard](/views/dashboard/). Two of the modes are *preview* sessions that never touch scheduling, which is what the old "cramming mode" used to do.

## Starting a Custom Study Session

All entry points are on the Dashboard:

| Where | Scope |
|-------|-------|
| **Custom study** button in the today bar | Your whole collection |
| **+ Session** chip on the **Custom** tab | Your whole collection |
| **Custom study** action on a project row | That project and its sub-projects (the virtual **Unassigned** group uses its member notes) |
| **Custom study** action on a note row | That single note |

Custom Study sessions always ignore daily limits; the limits of the mode itself are the only cap.

<!-- TODO PHOTO -->

## The Seven Modes

| Mode | What you set | What it does |
|------|--------------|--------------|
| **Increase today's new card limit** | by N cards | Adds N new cards on top of today's new-card limit for the scope |
| **Increase today's review card limit** | by N cards | Adds N due review cards on top of today's review limit |
| **Review forgotten cards** | forgotten in the last N days (max 30) | Cards you rated Again in that window, in random order. Preview session |
| **Review actual learning** | nothing | Every card currently in Learning or Relearning, ordered by due time |
| **Review ahead** | by N days | Cards that become due within the next N days, so you can clear a queue before a trip |
| **Preview new cards** | added in the last N days | New cards you have not studied yet, oldest first. Preview session |
| **Study by card state or tag** | number of cards, card state, include/exclude tags | A filtered batch from the current scope (see below) |

### Study by Card State or Tag

| Field | Options |
|-------|---------|
| **Select** | How many cards to pull from the current scope (default 100) |
| **Card state** | **New cards only**, **Due cards only**, **All review cards in random order**, **All cards in random order (no rescheduling)** |
| **Include tags** | Comma-separated; a card matches if it has any of them |
| **Exclude tags** | Comma-separated |

The **All cards in random order (no rescheduling)** state is a preview session as well.

## Preview Sessions

Preview sessions (**Review forgotten cards**, **Preview new cards**, and the no-rescheduling state above) show a **Preview** badge in the review header and behave like Anki's preview: **Again** brings the card back after 1 minute, **Hard** after 10 minutes, and **Good** or **Easy** finish the card without changing its schedule. Nothing you rate in a preview session moves a due date or changes stability.

Use them to warm up before an exam or to re-read fresh material without committing to intervals.

## The Custom Tab

Every session you create appears as a row on the Dashboard's **Custom** tab, named after its mode ("Extra new cards", "Forgotten cards", "Review ahead", "Cards by state or tag", and so on) with a short description of the parameters and the card count. Each row has four actions:

| Action | Effect |
|--------|--------|
| **Study** | Start the session with the cards currently inside the deck |
| **Rebuild** | Re-run the query so the deck reflects today's collection |
| **Empty** | Clear the deck but keep its definition |
| **Delete** | Remove the deck |

The deck is a snapshot, like an Anki filtered deck: the query is kept for Rebuild, and the list of card ids is what you study.

## Continuing After a Session

When a Custom Study session ends, the summary screen offers **Next session** (start another one with the same definition), **Dashboard** and **Finish**. The **Next session** button is controlled by **Continuous custom reviews** in `Settings → True Recall → General → "Review interface"`.

During any session you can also top up your queue: see [R-Mode](/scheduling/workload-management/#r-mode) for the **Top Up** panel that adds review or new cards mid-session.

## When to Use Which Mode

| Situation | Mode |
|-----------|------|
| You have spare time today | Increase today's new card limit or review card limit |
| Exam tomorrow, you want to see what slipped | Review forgotten cards |
| Learning steps piled up | Review actual learning |
| Leaving for a week | Review ahead by 7 days |
| You just wrote thirty cards and want a first read | Preview new cards |
| One topic only, by tag | Study by card state or tag |

:::tip[Preview is not practice]
Preview sessions are for reading, not for long-term memory. Repeating the same cards daily in preview does nothing for scheduling. Let the normal queue do the spacing and use previews sparingly.
:::

## What to Read Next

- [Review Interface](/review/review-interface/): the normal review flow and the session summary
- [Answering Cards](/review/answering-cards/): how ratings work with FSRS
- [Leeches](/review/leeches/): dealing with cards you keep forgetting
- [Workload Management](/scheduling/workload-management/): daily targets, load balancing and R-Mode
- [Dashboard](/views/dashboard/): where custom study sessions live
