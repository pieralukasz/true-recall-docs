---
title: AI Assistant
sidebar:
  label: "AI Assistant"
  order: 2
description: Draft, review, and apply AI-generated flashcards and notes in one place. The AI Assistant unifies card generation and card polishing behind a single draft-and-approve workflow.
---

:::caution[My Notes]
:::

The **AI Assistant** is the unified way to create and improve flashcards with AI in True Recall. It replaces the two older, separate flows — AI Flashcard Generation and Card Polish — with a single **draft-and-approve** workflow: you ask, the assistant proposes drafts, and nothing touches your notes until you approve.

**Tier:** BYOK — works with any AI key (OpenRouter BYOK, LM Studio, Custom, or Pro). Enable it in `Settings → True Recall → Plugins → AI Assistant`.

<!-- TODO PHOTO -->

## Threads

Every request runs inside a **thread** — a persistent conversation whose result is a working set of draft proposals. A thread is always in one of three states:

- **Active** — you're working in it right now.
- **Inbox** — you deferred it ("Later"); it waits for you in the [AI Inbox](/views/ai-inbox/).
- **Archived** — it's settled (everything applied or rejected) and filed away.

Because threads run through a background task queue, a long request never blocks the rest of the app — you can keep reviewing while the assistant works.

## Entry Points

You can reach the assistant from wherever you already are:

- **Ask AI popover** — select text inside a review card, then choose **Ask AI** from the selection bubble. The popover anchors to your selection.
- **AI Draft Studio** (Ask AI modal) — a full, anchor-less window for asking about a whole card or note. Available from the review context menu ("Ask AI about this card") and from the [Selection Toolbar](/views/selection-toolbar/) **Ask AI** button.
- **Editor panel** — an inline AI panel inside the [Flashcard Editor](/views/flashcard-editor/) / Quick Note Editor.
- **Panel AI strip** — when a note has pending drafts, the [Flashcard Panel](/views/flashcard-panel/) shows a one-line "N AI drafts for this note" strip that deep-links into the [AI Inbox](/views/ai-inbox/).

<!-- TODO PHOTO -->

## The Composer and Workflow Chips

Every entry point shares the same composer: one prompt box plus a row of **workflow chips**. Chips are your saved presets, projected into three kinds:

- **Agent** — open-ended assistant presets that can call tools and reason across steps.
- **Generate cards** — your [Generation Presets](/plugins/generation-presets/), now surfaced as chips.
- **Modify card** — your card-polish presets for improving existing cards.

Pick a chip to run a preset, or just type a free-form instruction. This unification means one composer covers what used to require two separate plugins.

## Proposals

The assistant never writes directly. Instead it emits **proposals** you review as editable draft cards. Depending on what you asked, a proposal can:

- **Create cards** on the current note
- **Update a card** or an in-progress draft
- **Append to a note** or **create a new note**
- **Insert a diagram** (Mermaid / SVG)
- **Attach images** (candidate images found for the card)

For each proposal you can edit the fields inline, then **Apply**, **Reject**, or **Apply all**. If a draft changed since the assistant last saw it, the assistant flags the conflict before applying.

You can also **Retry with feedback** to steer a new attempt, or **Undo AI** to roll back the last applied change.

## Vault Evidence and Sources

When a request benefits from your own knowledge, the assistant uses the **knowledge retriever** (the `search_knowledge` tool) to pull relevant, token-budgeted evidence from your indexed vault. Retrieved snippets appear in a **Vault evidence** panel; any web citations appear as **Sources**. This is the same retrieval layer that powers [Knowledge Chat](/views/knowledge-chat/) — see [Knowledge Base](/configuration/knowledge-base/) for indexing and settings.

## Deferring to the Inbox

Close an unfinished thread and the assistant hands it off to the **[AI Inbox](/views/ai-inbox/)** as "Later" — a single place to batch-review everything the assistant has proposed but you haven't applied yet. Threads that are fully settled archive automatically. Open the inbox any time with the **Open AI assistant inbox** command.

## What to Read Next

- [AI Inbox](/views/ai-inbox/) — batch-review and approve deferred drafts
- [Generation Presets](/plugins/generation-presets/) — build the presets that become composer chips
- [Creating Flashcards](/creation/creating-flashcards/) — all the ways cards get made
- [AI Settings](/configuration/ai-settings/) — configure your AI provider and assistant options
