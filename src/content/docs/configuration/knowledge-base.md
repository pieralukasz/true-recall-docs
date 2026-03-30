---
title: "Knowledge Base"
sidebar:
  order: 4
description: "Configure the Knowledge Base for semantic search over your notes and flashcards."
---

:::caution[My Notes]
:::

The **Knowledge Base** lets AI assistants search your notes by meaning, not just keywords. It indexes your notes and flashcards into a semantic search engine so tools like Claude Code can find relevant context instantly — without reading every file.

:::note[Pro Only]
Knowledge Base requires a Pro subscription. Configure your key in [AI Settings](/configuration/ai-settings/).
:::

## How It Works

When enabled, **True Recall** splits your notes (and optionally flashcards) into chunks, then computes vector embeddings for each chunk using a managed embedding model. Searches match by meaning — a query for "mitochondria" will find notes about cellular respiration even if they never use that exact word.

For flashcards, search results include FSRS mastery data (stability, difficulty, state) so AI assistants can understand what you know well versus what needs more review.

## Settings

Configure the Knowledge Base in `Settings → True Recall → Knowledge Base`.

| Setting | Description | Default |
|---------|-------------|---------|
| **Enable Knowledge Base** | Index your content for semantic search | Off |
| **Auto-index** | Re-index automatically when files change | On |
| **Index flashcards** | Also index flashcard content alongside notes | On |
| **Include folders** | Only index notes in these folders (comma-separated, empty = all) | Empty (all folders) |
| **Exclude folders** | Skip notes in these folders (comma-separated) | Empty |

## Indexing

### Automatic Indexing

When **Auto-index** is enabled, the Knowledge Base watches for file changes in your notes folder. When you create, edit, rename, or delete a note, the affected content is re-indexed automatically after a short debounce (5 seconds). Only changed content is re-embedded — unchanged files are skipped using content hashes.

### Manual Indexing

You can trigger a full reindex via the MCP `index_knowledge` tool. This re-scans all notes and flashcards, computes embeddings for any new or changed content, and skips anything already up to date. Useful after bulk imports or if auto-indexing was previously disabled.

### What Gets Indexed

- **Notes** — markdown files in your notes folder, split into chunks by heading structure
- **Flashcards** (optional) — question/answer content and source text, with FSRS scheduling metadata attached to search results

Folders listed in **Exclude folders** are always skipped. If **Include folders** is set, only notes in those folders are indexed. The `.true-recall` data folder is excluded by default.

## MCP Tools

AI assistants interact with the Knowledge Base through three [MCP tools](/reference/mcp-server/):

| Tool | Description |
|------|-------------|
| `search_knowledge` | Semantic search over notes and flashcards. Returns ranked results with content, source info, and FSRS mastery data. |
| `index_knowledge` | Trigger a full reindex of the Knowledge Base. |
| `get_knowledge_status` | Check index status: total chunks, embedded chunks, source counts, last indexed time. |

For full parameter details and example workflows, see [MCP Server — Knowledge Base](/reference/mcp-server/#knowledge-base).

## What to Read Next

- [AI Settings](/configuration/ai-settings/) — configure your subscription key and AI features
- [MCP Server](/reference/mcp-server/) — full tool reference for AI assistant integration
- [General Settings](/configuration/general/) — enable the Local API required for MCP
