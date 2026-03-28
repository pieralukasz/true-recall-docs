---
title: MCP Server
sidebar:
  order: 3
description: Connect AI assistants like Claude Code to True Recall via Model Context Protocol (MCP). Full tool reference and setup guide.
---

:::caution[My Notes]
:::

**True Recall** includes an MCP (Model Context Protocol) server that lets AI assistants interact with your flashcard collection directly. Create cards, run reviews, check stats, and manage your study system — all from Claude Code or any MCP-compatible client.

## How It Works

The MCP integration has two parts:

1. **Local API** — an HTTP server that runs inside the Obsidian plugin, exposing your flashcard data on `127.0.0.1`
2. **MCP Server** — a stdio-based process (runs via Bun) that translates MCP tool calls into Local API requests

```
Claude Code  ←→  MCP Server (stdio)  ←→  Local API (HTTP)  ←→  True Recall Plugin
```

The MCP server ships in the `mcp-server/` directory of the plugin repository.

## Setup

### 1. Enable the Local API

In Obsidian, go to `Settings → True Recall → General → Local API`:

| Setting | Description |
|---------|-------------|
| **Enable local API** | Start the HTTP server when the plugin loads |
| **Port** | Default `27182`. Change if the port conflicts with another service. Restart Obsidian after changing. |

When enabled, the API listens on `http://127.0.0.1:27182`.

### 2. Configure Your MCP Client

Add the True Recall MCP server to your client's configuration. For Claude Code, add to your project's `.mcp.json`:

```json
{
  "mcpServers": {
    "true-recall": {
      "type": "stdio",
      "command": "bun",
      "args": ["run", "./mcp-server/index.ts"],
      "env": {
        "TRUE_RECALL_PORT": "27182"
      }
    }
  }
}
```

:::note
[Bun](https://bun.sh) must be installed on your system. The MCP server requires it as its runtime.
:::

### 3. Install Dependencies

```bash
cd mcp-server && bun install
```

## Tools Reference

The MCP server exposes 34 tools organized into functional groups.

### Context

| Tool | Description |
|------|-------------|
| `get_status` | Check if the plugin is running and the database is ready |
| `get_active_note` | Get the currently open note with its content and linked flashcards |

### Cards

| Tool | Parameters | Description |
|------|-----------|-------------|
| `list_cards` | `query?`, `state?`, `source_uid?`, `limit?` | Search and filter flashcards by text, state, or source note |
| `get_card` | `card_id` | Get a single card with full details and review history |
| `create_flashcard` | `question`, `answer`, `source_uid?`, `source_text?`, `card_type?` | Create a new flashcard (basic or cloze) |
| `create_flashcards_batch` | `cards[]`, `source_uid?` | Create multiple flashcards at once |
| `update_card` | `card_id`, `question?`, `answer?` | Edit a card's question or answer |
| `delete_card` | `card_id` | Permanently delete a flashcard (soft-delete) |
| `bulk_delete_cards` | `card_ids[]` | Delete multiple cards at once |
| `remove_cards_from_note` | `source_uid?`, `path?` | Delete all cards linked to a specific note |

### Review

| Tool | Parameters | Description |
|------|-----------|-------------|
| `get_due_cards` | — | Get flashcards due for review today |
| `grade_card` | `card_id`, `rating` | Submit a rating: 1=Again, 2=Hard, 3=Good, 4=Easy |

### Sessions

| Tool | Parameters | Description |
|------|-----------|-------------|
| `start_review_session` | `mode?`, `source_uid?`, `card_limit?`, `state_filter?`, `overdue_only?`, `recently_failed?`, `cramming?` | Open a review session in Obsidian. Modes: `all_due`, `current_note`, `weak_cards`, `created_today`, `overdue`, `custom` |

### Card Management

| Tool | Parameters | Description |
|------|-----------|-------------|
| `suspend_card` | `card_id`, `suspended` | Suspend or unsuspend a card (excluded from reviews) |
| `bulk_suspend_cards` | `card_ids[]`, `suspended` | Suspend/unsuspend multiple cards |
| `bury_cards` | `card_ids[]`, `days?`, `until?` | Temporarily hide cards until a date (default: 1 day) |

### AI Generation

| Tool | Parameters | Description |
|------|-----------|-------------|
| `generate_flashcards` | `text`, `note_type_slug?`, `source_uid?` | Generate flashcards from text using AI (Pro key or OpenRouter BYOK) |
| `get_note_types` | — | List available note types (Basic, Cloze, etc.) |

### Notes

| Tool | Parameters | Description |
|------|-----------|-------------|
| `add_flashcard_uid` | — | Add a `flashcard_uid` to the active note's frontmatter |
| `set_note_preset` | `preset_name`, `path?` | Assign an FSRS preset to a note (null to remove) |
| `set_note_parent` | `parent_name`, `action`, `path?` | Add/remove a parent project for a note |
| `set_note_archive` | `archived`, `path?` | Archive or unarchive a note and its cards |

### Navigation

| Tool | Parameters | Description |
|------|-----------|-------------|
| `open_view` | `view`, `source_uid?` | Open a True Recall view: `dashboard`, `stats`, `card-browser`, `card-browser-orphaned`, `flashcard-panel`, `simulator` |
| `open_note` | `path` | Open a note by vault-relative path |

### FSRS & Presets

| Tool | Parameters | Description |
|------|-----------|-------------|
| `get_fsrs_presets` | — | List all scheduling presets |
| `create_fsrs_preset` | `name`, `request_retention?`, `new_cards_per_day?`, `reviews_per_day?`, `learning_steps?`, `relearning_steps?` | Create a new preset with custom scheduling parameters |
| `get_fsrs_analytics` | `days?` | Get FSRS analytics: true retention, workload forecast, distributions |

### Statistics

| Tool | Parameters | Description |
|------|-----------|-------------|
| `get_study_summary` | — | Total cards, due count, today's stats, maturity breakdown, streaks |
| `get_daily_stats` | `start_date`, `end_date` | Daily statistics for a date range |
| `get_study_patterns` | — | Study patterns: best days/hours, heatmap (last 30 days) |
| `get_problem_cards` | `limit?` | Identify leech cards (high lapses, low stability) |
| `get_study_recommendations` | `focus?` | AI-powered study recommendations based on your data |

### Dashboard

| Tool | Parameters | Description |
|------|-----------|-------------|
| `get_dashboard` | — | Full dashboard: counts, progress, per-note breakdown, streaks |
| `get_projects` | — | Project/deck hierarchy tree |

### Database

| Tool | Parameters | Description |
|------|-----------|-------------|
| `query_sql` | `sql` | Execute a read-only SELECT query against the database |
| `get_schema` | — | Get database schema with tables, columns, types, and FSRS annotations |

### Backup

| Tool | Parameters | Description |
|------|-----------|-------------|
| `create_backup` | — | Create a compressed database backup |
| `list_backups` | — | List available backups with dates and sizes |
| `check_integrity` | — | Run database integrity check for orphaned records |

## Example Workflows

### Create flashcards from code documentation

```
You: Create flashcards from the current note about React hooks
Claude: [calls get_active_note → generate_flashcards]
```

### Review in the terminal

```
You: Let's review my due cards
Claude: [calls get_due_cards, shows question, waits for answer, calls grade_card]
```

### Study analytics

```
You: How am I doing this week?
Claude: [calls get_study_summary → get_daily_stats → get_study_patterns]
```

### Identify problem areas

```
You: Which cards am I struggling with?
Claude: [calls get_problem_cards → get_study_recommendations]
```

## Configuration

### Custom Port

Set the `TRUE_RECALL_PORT` environment variable in your MCP config if you changed the default port in the plugin settings:

```json
{
  "env": {
    "TRUE_RECALL_PORT": "28000"
  }
}
```

Both the plugin setting and the MCP server env must match.

### Security

The Local API binds to `127.0.0.1` only — it is not accessible from other machines on the network. No authentication is required for localhost connections.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Cannot connect to True Recall plugin" | Ensure Obsidian is running and `Settings → General → Local API` is enabled |
| "Port in use" | Change the port in plugin settings and restart Obsidian. Update `TRUE_RECALL_PORT` in MCP config to match |
| Tools return errors | Check the Obsidian developer console (`Cmd/Ctrl + Shift + I`) for API error logs |
| MCP server won't start | Run `cd mcp-server && bun install` to install dependencies |

## What to Read Next

- [General Settings](/configuration/general/) — enable the Local API and configure the port
- [FSRS Settings](/configuration/fsrs-settings/) — understand presets referenced by MCP tools
- [AI Settings](/configuration/ai-settings/) — configure AI generation used by `generate_flashcards`
- [Troubleshooting](/reference/troubleshooting/) — common issues and solutions
