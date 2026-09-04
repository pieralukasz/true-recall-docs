---
title: MCP Server
sidebar:
  order: 3
description: Connect AI assistants to True Recall through the Local API and MCP server.
---

:::caution[My Notes]
:::

The **True Recall** MCP server lets AI assistants interact with your flashcards while Obsidian is running. It is an advanced integration for people who want an assistant to read study context, inspect cards, start reviews, generate cards, or manage FSRS presets from any MCP-compatible client.

## Availability

| Feature | Tier |
|---------|------|
| Local API connection (desktop only) | Free |
| Reading cards, notes, stats, and review context | Free |
| Creating, editing, and grading cards; managing FSRS presets | Free |
| AI flashcard generation through your configured provider | BYOK or Pro |

## How It Works

The integration has two parts:

1. **Local API**: an HTTP server inside the Obsidian plugin, bound to `127.0.0.1`
2. **MCP server**: a stdio process in the `mcp-server/` directory of the True Recall repository, run with [Bun](https://bun.sh), that translates MCP tool calls into Local API requests

Obsidian must be open on desktop, True Recall must be loaded, and the Local API must be enabled. Phones and tablets cannot run the Local API.

## Setup

1. Open `Settings → True Recall → Integrations → "Local API"` and turn on **Enable local API**
2. Keep the default **Port** (`27182`) unless you already use it for another local tool. Restart Obsidian after changing it
3. Install the server's dependencies once: `cd mcp-server && bun install`
4. Point your MCP client at the server. For Claude Code, add it to `.mcp.json`:

```json
{
  "mcpServers": {
    "true-recall": {
      "type": "stdio",
      "command": "bun",
      "args": ["run", "/path/to/true-recall/mcp-server/index.ts"],
      "env": {
        "TRUE_RECALL_PORT": "27182"
      }
    }
  }
}
```

`TRUE_RECALL_PORT` is optional and defaults to `27182`. The Local API listens on your computer only; it is not exposed to other devices on your network.

## What Assistants Can Do

The server exposes 69 tools that mirror the CLI. Assistants connected through MCP can:

- Read the active note and its linked flashcards, or take a full context snapshot (view, session, note, today's stats)
- Inspect the current review session without revealing hidden answers
- Reveal and grade review cards when you ask them to
- Create, update, move, suspend, bury, or delete flashcards (`update_card` accepts `edit_source: "ai"` so AI rewrites are counted separately)
- Start review sessions: all due, current note, weak cards, created today, overdue, learning, or custom
- Generate flashcards with a note type or a saved generation preset, and manage generation presets
- Read dashboard, project, and statistics data, and run read-only SQL against the database
- Read and update FSRS presets, set the load-balance target, and pull FSRS analytics
- Open True Recall views and notes, assign parents and presets, archive notes, and add flashcard UIDs
- Create and list backups and run integrity checks

Not exposed over MCP (CLI only): Card Polish preset management, CSV export, whole-note review toggle and per-note stats, and the FSRS optimizer, simulator, workload forecast, retrievability and scheduling preview. Use the [Claude Code Skill](/reference/claude-code-skill/) for those.

## Review Safety

During review, the assistant can see whether the answer is hidden or revealed. It should not reveal or hint at the answer before you ask to reveal it. This keeps the review honest while still letting the assistant help you reason through the question.

## Troubleshooting

| Problem | What to check |
|---------|---------------|
| Assistant cannot connect | Obsidian is open on desktop, True Recall is enabled, and **Enable local API** is on in `Settings → True Recall → Integrations → "Local API"` |
| Port conflict | If the port is taken, True Recall binds the next free one (27183, ...). Set `TRUE_RECALL_PORT` to match, or change **Port** in Integrations and restart Obsidian |
| Requests time out | The server waits 30 seconds per request; a busy plugin (large import, optimizer run) can exceed that. Retry when it finishes |
| AI generation fails | Check your AI provider in `Settings → True Recall → Features → "AI provider"` |

## What to Read Next

- [Claude Code Skill](/reference/claude-code-skill/): use True Recall with Claude Code through the CLI
- [AI Settings](/configuration/ai-settings/): configure Pro, OpenRouter, LM Studio, or a custom provider
- [Troubleshooting](/reference/troubleshooting/): common issues and fixes
