---
title: "Knowledge Base"
sidebar:
  order: 4
  badge:
    text: "Removed"
    variant: caution
description: "The Knowledge Base (RAG semantic search) was removed in True Recall 2.0.0. This page explains what happened and where AI features live now."
---

:::caution[My Notes]
:::

:::caution[Removed in 2.0.0]
The **Knowledge Base** no longer exists. True Recall 2.0.0 (2026-07-26) removed the whole RAG subsystem: the Knowledge Base feature and its settings, the Knowledge Chat view, the `/rag/*` local API routes, the assistant's `search_knowledge` tool, and every `rag*` setting. It will be rebuilt from scratch later.
:::

## What Was Removed

Until 1.9.x, the Knowledge Base indexed your notes and flashcards into vector embeddings so the AI could search them by meaning and show **Vault evidence** while drafting cards. None of that runs any more:

- There is no Knowledge Base row in `Settings → True Recall → Features` and no indexing settings anywhere.
- The **Knowledge Chat** view is gone.
- External tools (the CLI, the [MCP Server](/reference/mcp-server/), the [Claude Code Skill](/reference/claude-code-skill/)) can no longer call semantic search through the local API.

Existing RAG tables in your database were left in place, nothing was dropped, and evidence already attached to saved AI threads still renders in the [AI Inbox](/views/ai-inbox/).

## What Replaced It

AI work now happens in the **[AI Workspace](/plugins/ai-assistant/)**: one docked **Ask AI** panel with an Assistant mode for questions and research (with optional web search), a Generator mode for new flashcards, and Card Polish for improving existing ones. Every request becomes a thread you can review, apply or reject from the AI Inbox. The workspace works from the note or card you have open rather than from a vault-wide index.

## What to Read Next

- [AI Workspace](/plugins/ai-assistant/): the unified AI workflow that replaced the Knowledge Base
- [AI Settings](/configuration/ai-settings/): configure your AI provider and keys
- [MCP Server](/reference/mcp-server/): external AI assistant integration without semantic search
