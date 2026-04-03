---
title: Claude Code Skill
sidebar:
  label: "Claude Code Skill"
  order: 2
description: Install the True Recall skill for Claude Code to control flashcards, run reviews, and generate cards from the terminal.
---

:::caution[My Notes]
:::

The **True Recall** skill gives Claude Code direct access to your flashcard collection through 46 CLI commands. Generate flashcards from notes, run review sessions, analyze study patterns, and manage your entire spaced repetition system — all from the terminal.

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

Open a new Claude Code session and type `/true-recall` — Claude should recognize the skill and have access to all 46 commands.

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
description: Use when working with True Recall flashcards, spaced repetition, study sessions, FSRS scheduling, or generating flashcards from notes. Provides CLI access to 46 commands for reading cards, creating flashcards, reviewing, analyzing study patterns, managing decks/projects, and AI generation.
user-invocable: true
---

# True Recall CLI Integration

True Recall exposes a local HTTP API (port 27182) from the running Obsidian plugin. The `true-recall` CLI binary calls this API directly.

## Setup

### Step 1: Enable the plugin's Local API

1. Open Obsidian
2. Go to **Settings > True Recall > General**
3. Scroll to **Local API** section
4. Toggle **Enable local API** on
5. Port defaults to `27182`
6. Verify: `true-recall get_status`

### Step 2: Build the CLI (if not already built)

```bash
cd /path/to/true-recall
bun run cli:build
ln -sf $(pwd)/cli/true-recall ~/.local/bin/true-recall
```

### Usage

```bash
true-recall <command> [--flag value ...]
true-recall --help                    # list all commands
true-recall <command> --help          # show command params
true-recall get_status --port 27183   # override port
```

### Important notes

- **Obsidian must be running** with True Recall loaded — the CLI talks to the live plugin via HTTP
- If the port is in use, the plugin auto-increments (27183, 27184...) — use `--port` to match
- The API binds to `127.0.0.1` only — never exposed to the network
- All output is JSON

## Quick Reference — All 46 Commands

### Context (what's happening now)

| Command | What it does |
|---------|-------------|
| `get_full_context` | **START HERE** — complete snapshot: active view, review session with current card, active note, today's stats, due count |
| `get_status` | Check if plugin is running and DB is ready |
| `get_active_note` | Get the currently open note: path, content, source_uid, and all linked flashcards |

### Cards — Read

| Command | What it does |
|---------|-------------|
| `list_cards` | Search/filter cards. Flags: `--query`, `--state`, `--source_uid`, `--limit`, `--suspended`, `--archived` |
| `get_card --card_id ID` | Single card with full details + last 20 review history entries |
| `get_card_context --card_id ID` | Deep context: card + full source note content + review history + sibling cards |
| `get_card_relations --card_id ID` | Related cards: siblings from same note, reverse pairs, cloze siblings |
| `get_due_cards` | All cards due for review today. WARNING: can return 100k+ chars |
| `get_problem_cards` | Leech cards: high lapses (>3), low stability (<2d), or relearning state. Flag: `--limit` |

### Cards — Write

| Command | What it does |
|---------|-------------|
| `create_flashcard --question Q --answer A` | Create one card. Optional: `--source_uid`, `--card_type basic\|cloze` |
| `create_flashcards_batch --cards '[...]'` | Bulk create. Optional: `--source_uid` |
| `update_card --card_id ID` | Edit card's `--question` and/or `--answer` |
| `suspend_card --card_id ID --suspended true` | Suspend/unsuspend a card |
| `delete_card --card_id ID` | Soft-delete a card |
| `bulk_delete_cards --card_ids '[...]'` | Delete multiple cards |
| `remove_cards_from_note` | Delete ALL cards linked to a note. Optional: `--source_uid`, `--path` |
| `bulk_suspend_cards --card_ids '[...]' --suspended true` | Suspend/unsuspend multiple cards |
| `bury_cards --card_ids '[...]'` | Temporarily hide cards. Optional: `--days`, `--until` |

### Review — In-Session

| Command | What it does |
|---------|-------------|
| `get_review_context` | Current card, answer revealed status, progress. Flag: `--include_note_content` |
| `reveal_answer` | Flip the current card — reveals answer in Obsidian UI |
| `grade_review_card --rating N` | Grade current card (1-4) and advance to next. 1=Again, 2=Hard, 3=Good, 4=Easy |
| `start_review_session` | Open ReviewView. Flag: `--mode all_due\|current_note\|weak_cards\|created_today\|overdue\|custom` |

### Review — Standalone

| Command | What it does |
|---------|-------------|
| `grade_card --card_id ID --rating N` | Grade any card by ID (outside of active session) |

### AI Generation

| Command | What it does |
|---------|-------------|
| `generate_flashcards --text "..."` | Send text to AI, generate and save flashcards. Optional: `--note_type_slug`, `--source_uid` |
| `get_note_types` | List available note types (Basic, Cloze, custom) with field definitions |

### Navigation

| Command | What it does |
|---------|-------------|
| `open_view --view dashboard` | Open a view: `dashboard`, `stats`, `card-browser`, `card-browser-orphaned`, `flashcard-panel`, `simulator` |
| `open_note --path "Projects/ML.md"` | Open a specific note in Obsidian |

### Dashboard & Projects

| Command | What it does |
|---------|-------------|
| `get_dashboard` | Full overview: totals, due/new/learning/overdue, today progress, streak, per-note breakdown |
| `get_projects` | Project/deck hierarchy tree with aggregate stats |
| `get_project --path "Projects/Spanish.md"` | Detailed stats for a single project |

### FSRS Scheduling

| Command | What it does |
|---------|-------------|
| `get_fsrs_presets` | List all presets with retention target, daily limits, learning steps |
| `create_fsrs_preset --name "Exam Prep"` | Create preset. Optional: `--request_retention`, `--new_cards_per_day`, `--reviews_per_day`, `--learning_steps '[1,10]'` |
| `get_fsrs_analytics` | True retention, workload forecast, distributions. Flag: `--days` |

### Notes & Deck Management

| Command | What it does |
|---------|-------------|
| `add_flashcard_uid` | Add `flashcard_uid` to active note's frontmatter |
| `set_note_preset --preset_name "Technical"` | Assign FSRS preset to a note. Pass `--preset_name null` to remove |
| `set_note_parent --parent_name "ML" --action add` | Add/remove parent project |
| `set_note_archive --archived true` | Archive/unarchive a note |
| `toggle_note_review` | Enable/disable note review for the active note. Optional: `--path` |
| `note_review_status` | Check if note review is enabled for the active note. Optional: `--path` |

### Statistics & Analysis

| Command | What it does |
|---------|-------------|
| `get_study_summary` | Today's stats + maturity breakdown + streaks |
| `get_daily_stats --start_date 2026-03-01 --end_date 2026-03-31` | Daily stats for a date range |
| `get_study_patterns` | Best days/hours heatmap from last 30 days |
| `get_session_analysis` | Deep dive into today's session: every reviewed card with ratings |
| `get_study_recommendations` | Gathers summary + patterns + problem cards for analysis. Flag: `--focus` |

### Backup & Integrity

| Command | What it does |
|---------|-------------|
| `create_backup` | Create compressed database backup |
| `list_backups` | List all backups with dates and sizes |
| `check_integrity` | Find orphaned cards, notes, review logs |

### Power User

| Command | What it does |
|---------|-------------|
| `query_sql --sql "SELECT ..."` | Execute read-only SQL SELECT |
| `get_schema` | Database schema with FSRS annotations |

### Knowledge Base (Pro)

| Command | What it does |
|---------|-------------|
| `search_knowledge --query "topic"` | Semantic search. Optional: `--topK`, `--sourceType`, `--sourceIds '[...]'` |
| `index_knowledge` | Trigger full reindex |
| `get_knowledge_status` | Index status: total chunks, embedded chunks, source counts |

---

## Common Workflows

### "I don't understand this flashcard" / "Help me with this card"

```bash
true-recall get_full_context          # see current card, view, session state
# If isAnswerRevealed=false: discuss only the QUESTION, never reveal answer
# Ask user what they think, use Socratic prompts
true-recall reveal_answer             # when user is ready to see it
# Discuss the answer, explain context
true-recall grade_review_card --rating 3  # grade and advance
```

### "How did I do today?" / Analyze my session

```bash
true-recall get_session_analysis      # every reviewed card with ratings
```

### "Generate flashcards from my active note"

```bash
true-recall get_active_note           # read note content + existing cards
true-recall generate_flashcards --text "..." --source_uid UID
```

### "Let's review together in the terminal"

```bash
true-recall get_full_context          # check if session is active + current card
# Discuss the question with the user (answer hidden!)
true-recall reveal_answer             # flip the card
true-recall grade_review_card --rating 3  # advance to next
# Repeat
```

### "Start a review session in Obsidian"

```bash
true-recall start_review_session --mode all_due       # standard daily review
true-recall start_review_session --mode current_note  # review active note's cards
true-recall start_review_session --mode weak_cards    # focus on low-stability cards
```

### "Why do I keep forgetting things?"

```bash
true-recall get_problem_cards         # find leech cards
true-recall get_study_patterns        # analyze when/how user studies
true-recall get_fsrs_analytics        # check true retention vs target
```

### "Organize my notes into a project"

```bash
true-recall set_note_parent --parent_name "Machine Learning" --action add
true-recall set_note_preset --preset_name "Technical"
true-recall get_projects              # verify hierarchy
```

---

## FSRS Cheat Sheet

| State | Value | Meaning |
|-------|-------|---------|
| New | 0 | Never reviewed, not "due" |
| Learning | 1 | In initial learning steps |
| Review | 2 | Graduated, scheduled for review |
| Relearning | 3 | Failed review, back in learning |

| Rating | Value | Meaning |
|--------|-------|---------|
| Again | 1 | Forgot — card re-enters learning |
| Hard | 2 | Difficult recall |
| Good | 3 | Normal recall |
| Easy | 4 | Perfect recall |

**Problem cards**: lapses > 3 OR stability < 2.0 days OR state = Relearning
**Mature cards**: state = Review AND scheduled_days >= 21
**Young cards**: state = Review AND scheduled_days < 21

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Cannot connect to True Recall plugin" | Open Obsidian and enable Local API in Settings > General |
| "Database not ready" | Wait for plugin to fully load, or restart Obsidian |
| "No AI key configured" | Add Pro key or OpenRouter API key in plugin settings |
| "Port in use" | Use `--port 27183` or change port in Settings > General > Local API port |
````

## What to Read Next

- [MCP Server](/reference/mcp-server/) — connect AI assistants via Model Context Protocol
- [General Settings](/configuration/general/) — enable the Local API and configure the port
- [AI Settings](/configuration/ai-settings/) — configure AI generation used by `generate_flashcards`
- [Troubleshooting](/reference/troubleshooting/) — common issues and solutions
