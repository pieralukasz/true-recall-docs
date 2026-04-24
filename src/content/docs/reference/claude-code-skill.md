---
title: Claude Code Skill
sidebar:
  label: "Claude Code Skill"
  order: 2
description: Install the True Recall skill for Claude Code to control flashcards, run reviews, and generate cards from the terminal.
---

:::caution[My Notes]
:::

The **True Recall** skill gives Claude Code direct access to your flashcard collection through 65 CLI commands. Generate flashcards from notes, discuss cards during review, analyze study patterns, and manage your entire spaced repetition system — all from the terminal.

## What Is a Skill?

A Claude Code skill is a markdown file that teaches Claude how to use a specific tool. When you install the True Recall skill, Claude automatically knows how to call the CLI, which commands are available, and how to chain them into useful workflows.

## Prerequisites

Before installing the skill, make sure you have:

1. **True Recall** installed and running in Obsidian
2. **Local API enabled** — go to `Settings → True Recall → General → Local API` and toggle it on
3. **CLI built** — see the [setup instructions](#building-the-cli) below

## Installation

### Step 1: Create the skill directory

```bash
mkdir -p ~/.claude/skills/true-recall
```

### Step 2: Copy the skill file

Create `~/.claude/skills/true-recall/SKILL.md` with the content from the [Skill File](#skill-file) section below.

### Step 3: Verify

Open a new Claude Code session and type `/true-recall` — Claude should recognize the skill and have access to all commands.

## Building the CLI

The CLI binary talks to the running Obsidian plugin via the Local API.

```bash
cd /path/to/true-recall    # the True Recall repository
bun run cli:build
```

Then add it to your PATH:

```bash
ln -sf $(pwd)/cli/true-recall ~/.local/bin/true-recall
```

Verify the CLI works:

```bash
true-recall get_status
```

:::note
Obsidian must be running with True Recall loaded. The CLI talks to the live plugin via HTTP on `127.0.0.1`.
:::

## Skill File

Copy the entire content below into `~/.claude/skills/true-recall/SKILL.md`:

````markdown
---
name: true-recall
description: Use when working with True Recall flashcards, spaced repetition, study sessions, FSRS scheduling, or generating flashcards from notes. Provides CLI access to 65 commands for reading cards, creating flashcards, reviewing, analyzing study patterns, managing decks/projects, and AI generation.
user-invocable: true
---

# True Recall CLI

True Recall exposes a local HTTP API (port 27182) from the running Obsidian plugin. The `true-recall` CLI binary calls this API. All output is JSON.

Always start with `get_full_context` to understand what the user is doing right now.

## How to Act

### When the user is reviewing a flashcard

- Call `get_full_context` to see the current card and session state
- If `isAnswerRevealed` is false: discuss ONLY the question. Never reveal or hint at the answer.
- Use Socratic prompting — ask what they think, guide their reasoning
- When they're ready, call `reveal_answer`, then discuss
- Do NOT grade cards unless the user explicitly asks you to

### When the user wants flashcards generated

- Call `get_active_note` to read the note content and its `source_uid`
- Pass the relevant text to `generate_flashcards --text "..." --source_uid UID`
- If the note has no `source_uid`, call `add_flashcard_uid` first

### When the user asks about their progress

- `get_study_summary` for today's snapshot
- `get_session_analysis` for detailed card-by-card breakdown
- `get_study_patterns` for trends over time
- `get_problem_cards` for leeches and weak spots
- `get_fsrs_analytics` for retention vs target

### When the user asks about a specific card

- `get_card_context --card_id ID` gives everything: card, source note, history, siblings
- For related cards from same note: `get_card_relations --card_id ID`

### When the user wants to organize notes

- Projects: `set_note_parent`, `get_projects`, `dissolve_project`
- Presets: `set_note_preset`, `get_fsrs_presets`
- Note review: `toggle_note_review` to schedule whole-note review

## Key Commands

Start here: `get_full_context` — snapshot of active view, session, note, stats, due count

| Use case | Commands |
|----------|---------|
| Read cards | `list_cards`, `get_card`, `get_card_context`, `get_due_cards`, `get_problem_cards` |
| Write cards | `create_flashcard`, `create_flashcards_batch`, `update_card`, `suspend_card`, `delete_card` |
| Review session | `get_review_context`, `reveal_answer`, `grade_review_card`, `start_review_session` |
| AI generation | `generate_flashcards`, `generate_flashcards_with_preset`, `get_note_types` |
| Generation presets | `list_generation_presets`, `get_generation_preset`, `create_generation_preset`, `update_generation_preset`, `delete_generation_preset` |
| Stats | `get_study_summary`, `get_daily_stats`, `get_study_patterns`, `get_session_analysis` |
| Notes & projects | `set_note_parent`, `set_note_preset`, `toggle_note_review`, `get_projects`, `note_stats`, `note_cards` |
| FSRS | `get_fsrs_presets`, `get_fsrs_analytics`, `optimize_parameters` |
| Navigation | `open_view`, `open_note` |

For all 65 commands with flags and parameters: `true-recall --help`
For a specific command: `true-recall <command> --help`
````

## What to Read Next

- [MCP Server](/reference/mcp-server/) — connect AI assistants via Model Context Protocol
- [General Settings](/configuration/general/) — enable the Local API and configure the port
- [AI Settings](/configuration/ai-settings/) — configure AI generation used by `generate_flashcards`
- [Troubleshooting](/reference/troubleshooting/) — common issues and solutions
