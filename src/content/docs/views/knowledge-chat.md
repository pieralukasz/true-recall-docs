---
title: Knowledge Chat
sidebar:
  order: 9
  badge:
    text: Removed
    variant: caution
description: Knowledge Chat, the RAG-powered chat over your vault, was removed in True Recall 2.0.0 and will be rebuilt later. Use the Ask AI panel instead.
---

:::caution[My Notes]
:::

**Knowledge Chat** was a conversational view over an indexed copy of your vault: you asked a question, it retrieved the most relevant notes and cards and answered with cited sources.

:::caution[Removed in 2.0.0]
The Knowledge Chat view, the Knowledge Base indexing feature, the `/rag/*` local API routes, the assistant's `search_knowledge` tool and every `rag*` setting were removed in **True Recall 2.0.0** (July 2026). The retrieval subsystem will be rebuilt from scratch later. Nothing was deleted from your database: existing index tables are left in place, and evidence already attached to saved assistant threads still renders.
:::

## What to use instead

- The docked **Ask AI** panel (command "Open ask AI panel") is the conversational surface now. Its subject follows what you are studying (the card under review, otherwise the open note), and you can attach a text selection with the **Ask AI** button of the [Quick Actions Toolbar](/views/selection-toolbar/).
- Every question becomes a thread of the [AI Workspace](/plugins/ai-assistant/), so drafts it produces (new cards, rewrites) can be applied later from the [AI Inbox](/views/ai-inbox/).

## What to Read Next

- [AI Workspace](/plugins/ai-assistant/): the Ask AI panel, threads and proposals
- [AI Inbox](/views/ai-inbox/): review deferred AI drafts
- [Quick Actions Toolbar](/views/selection-toolbar/): ask AI about a selection
