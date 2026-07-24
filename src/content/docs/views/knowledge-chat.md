---
title: Knowledge Chat
sidebar:
  order: 9
description: Chat with your vault notes and flashcards using True Recall's RAG-powered Knowledge Chat, with automatic context and cited sources.
---

:::caution[My Notes]
:::

**Knowledge Chat** is a conversational view over your indexed vault. Ask a question and it retrieves the most relevant notes and cards, answers with them, and cites its sources — so you can study a topic without leaving Obsidian.

This is the *chat surface*. For how indexing works and how to configure what gets indexed, see [Knowledge Base](/configuration/knowledge-base/).

## Opening Knowledge Chat

Open it with the **Chat with knowledge base** command from the Command Palette.

<!-- TODO PHOTO -->

## Layout

- **Chat input** — type your question. Use `@` to attach specific notes as context.
- **Context chips** — the notes currently in scope for the conversation; auto-suggested from what you're working on, and adjustable by hand.
- **Messages with sources** — each answer lists the notes and cards it drew from.
- **Index status** — shows whether your vault is indexed and up to date.
- **Config panel** — tune retrieval behavior for the conversation.

## Relationship to the AI Assistant

Knowledge Chat and the [AI Assistant](/plugins/ai-assistant/) share the same retrieval layer. When the assistant needs supporting material it calls the same knowledge retriever and shows the results as **Vault evidence**. Chat is for asking; the assistant is for drafting cards and notes from what it finds.

## What to Read Next

- [Knowledge Base](/configuration/knowledge-base/) — indexing, included folders, and settings
- [AI Assistant](/plugins/ai-assistant/) — draft cards from the same retrieved evidence
