---
title: MCP Server
sidebar:
  order: 3
description: Connect AI assistants to True Recall through the Local API and MCP server.
---

:::caution[My Notes]
:::

The **True Recall** MCP server lets AI assistants interact with your flashcards while Obsidian is running. It is an advanced integration for people who want an assistant to read study context, inspect cards, start reviews, generate cards, or search the Knowledge Base.

## Availability

| Feature | Tier |
|---------|------|
| Local API connection | Free |
| Reading cards, notes, stats, and review context | Free |
| AI flashcard generation through your configured provider | BYOK or Pro |
| Knowledge Base semantic search | Pro |

## How It Works

The integration has two parts:

1. **Local API** — an HTTP server inside the Obsidian plugin
2. **MCP server** — a bridge that lets MCP-compatible assistants talk to that Local API

Obsidian must be open, True Recall must be loaded, and the Local API must be enabled.

## Setup

1. Open `Settings → True Recall → Integrations`
2. Enable **Local API**
3. Keep the default port unless you already use it for another local tool
4. Configure your MCP client to use the True Recall MCP server from the repository

The Local API listens on your computer only. It is not exposed to other devices on your network.

## What Assistants Can Do

Assistants connected through MCP can:

- Read the active note and linked flashcards
- Inspect the current review session without revealing hidden answers
- Reveal and grade review cards when you ask them to
- Create, update, suspend, bury, or delete flashcards
- Start review sessions
- Open True Recall views in Obsidian
- Read dashboard, project, and statistics data
- Create backups and run integrity checks
- Search the Knowledge Base when Pro is active

## Review Safety

During review, the assistant can see whether the answer is hidden or revealed. It should not reveal or hint at the answer before you ask to reveal it. This keeps the review honest while still letting the assistant help you reason through the question.

## Troubleshooting

| Problem | What to check |
|---------|---------------|
| Assistant cannot connect | Obsidian is open, True Recall is enabled, and Local API is enabled in `Settings → True Recall → Integrations` |
| Port conflict | Change the Local API port in Integrations, then update your MCP client to match |
| AI generation fails | Check your AI provider in `Settings → True Recall → Plugins` |
| Knowledge search fails | Knowledge Base requires Pro and must be enabled in the Plugins tab |

## What to Read Next

- [Claude Code Skill](/reference/claude-code-skill/) — use True Recall with Claude Code
- [AI Settings](/configuration/ai-settings/) — configure Pro, OpenRouter, LM Studio, or a custom provider
- [Knowledge Base](/configuration/knowledge-base/) — semantic search over your notes and flashcards
- [Troubleshooting](/reference/troubleshooting/) — common issues and fixes
