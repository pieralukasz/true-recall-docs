---
title: AI Inbox
sidebar:
  order: 8
description: Batch-review, approve, and defer AI Assistant drafts from one place. The AI Inbox collects every proposal you haven't acted on yet.
---

:::caution[My Notes]
:::

The **AI Inbox** is where deferred [AI Assistant](/plugins/ai-assistant/) work waits for you. When you close an assistant thread before applying its drafts, it lands here as "Later" — so you can keep working and come back to review a batch of proposals when it suits you.

## Opening the Inbox

Open it with the **Open AI assistant inbox** command from the Command Palette. The [Flashcard Panel](/views/flashcard-panel/) also deep-links here when the active note has pending AI drafts.

<!-- TODO PHOTO -->

## Layout

The inbox lists **threads** that still have proposals to act on, plus any orphan tasks that need attention. Each row shows a status pill so you can tell at a glance what's pending, applied, or failed.

## Approving Drafts

You have two levels of approval:

- **Per-thread** — open a thread and **Approve all** its proposals, or apply/reject each draft individually.
- **Inbox-wide** — an **Approve all** action applies every pending proposal across the inbox in one step.

Applying a proposal writes the card or note exactly as it appears in the draft — including any edits you made before approving.

## Deferring and Archiving

- Threads you're not ready to act on stay in the inbox marked **Later**.
- Once a thread is fully settled — every proposal applied or rejected — it **archives automatically** and drops out of the inbox.

## What to Read Next

- [AI Assistant](/plugins/ai-assistant/) — how threads and proposals are created
- [Flashcard Panel](/views/flashcard-panel/) — the per-note AI drafts strip that links here
- [Dashboard](/views/dashboard/) — your day-to-day review hub
