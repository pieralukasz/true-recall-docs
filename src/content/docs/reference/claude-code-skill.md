---
title: Claude Code Skill
sidebar:
  label: "Claude Code Skill"
  order: 2
description: Use True Recall with Claude Code for review help, card creation, stats, FSRS presets, and organization.
---

:::caution[My Notes]
:::

The **True Recall** Claude Code skill teaches Claude how to use your running True Recall plugin through the Local API and the `true-recall` command-line helper. It is useful when you want an assistant to help with review sessions, generate or polish cards from notes, inspect progress, tune FSRS presets, or organize projects.

## Availability

| Capability | Tier |
|------------|------|
| Reading cards, notes, due counts, stats, and FSRS data | Free |
| Starting reviews and grading cards when you ask | Free |
| Creating, editing, moving, suspending, and deleting cards | Free |
| Managing FSRS presets, load balancing, backups, and CSV export | Free |
| Generating flashcards with your configured AI provider | BYOK or Pro |
| Running and managing Card Polish and generation presets | BYOK or Pro |

The Local API runs on desktop only, so the skill cannot talk to True Recall on a phone or tablet.

## Requirements

Before using the skill:

1. Install and enable **True Recall** in Obsidian on desktop
2. Open `Settings → True Recall → Integrations → "Local API"` and turn on **Enable local API** (default port `27182`)
3. Build the `true-recall` CLI from the repository: `bun run cli:build` produces the `cli/true-recall` binary. Put it on your `PATH`
4. Add a skill file at `~/.claude/skills/true-recall/SKILL.md` that tells Claude to call `true-recall`
5. Verify with `true-recall get_status`

The **Get skill** button in `Settings → True Recall → Integrations → "Claude Code"` opens this page. The skill only works while Obsidian is open and True Recall is loaded.

## What Claude Can Help With

Claude can:

- Explain the current review card without revealing the answer too early
- Reveal the answer when you ask
- Grade a card when you tell it which rating to use
- Generate flashcards from the active note or selected text, with a note type or a saved generation preset
- Edit cards. `update_card --edit_source ai` marks the rewrite as an AI edit, so it lands in the note's **AI Edits** counter instead of your manual edits
- Find weak cards and leeches, summarize your recent study activity, and forecast workload
- Read and change FSRS presets, set the load-balance target, optimize parameters, and simulate schedules
- Manage generation and Card Polish presets
- Open True Recall views in Obsidian
- Assign notes to projects or presets, archive them, and toggle whole-note review
- Export CSV/TSV, create backups, run the integrity check, and query the database read-only

## Command Groups

The CLI exposes 83 commands. `true-recall --help` lists them by group; `true-recall <command> --help` shows a command's parameters.

| Group | Examples |
|-------|----------|
| Context | `get_status`, `get_full_context`, `get_active_note` |
| Cards | `list_cards`, `get_card`, `get_card_context`, `get_card_relations`, `get_due_cards`, `get_problem_cards`, `create_flashcard`, `create_flashcards_batch` |
| Card Actions | `update_card`, `move_card`, `suspend_card`, `bury_cards`, `delete_card`, `bulk_delete_cards`, `bulk_suspend_cards`, `remove_cards_from_note` |
| Review | `get_review_context`, `reveal_answer`, `grade_review_card`, `grade_card` |
| Sessions | `start_review_session` (all due, current note, weak cards, created today, overdue, learning, custom) |
| AI Generation | `generate_flashcards`, `generate_flashcards_with_preset`, `get_note_types`, `list_generation_presets`, `create_generation_preset`, `list_card_polish_presets`, `create_card_polish_preset`, `update_card_polish_preset` |
| Dashboard | `get_dashboard`, `get_projects`, `get_project` |
| FSRS | `get_fsrs_presets`, `create_fsrs_preset`, `update_fsrs_preset`, `set_load_balance`, `get_fsrs_analytics` |
| FSRS Advanced | `optimize_parameters`, `simulate_reviews`, `get_workload_forecast`, `get_retrievability`, `get_scheduling_preview` |
| Notes | `add_flashcard_uid`, `set_note_preset`, `set_note_parent`, `set_note_archive`, `toggle_note_review`, `note_stats`, `note_cards`, `dissolve_project`, `move_project_children` |
| Statistics | `get_study_summary`, `get_daily_stats`, `get_study_patterns`, `get_session_analysis`, `get_study_recommendations` |
| Export, Backup, Query, Navigation | `export_csv`, `create_backup`, `list_backups`, `check_integrity`, `query_sql`, `get_schema`, `open_view`, `open_note` |

All output is JSON. If the default port is taken, True Recall binds the next free one; pass `--port <number>` to match.

## Review Safety

When you are reviewing, Claude should first check whether the answer is hidden. If the answer is hidden, it should discuss only the question side and guide your reasoning. It should reveal the answer only when you ask, and grade only with the rating you choose.

## Setup Help

The exact installation steps depend on where you keep your local True Recall repository and Claude Code profile. If you are setting this up for the first time, ask Claude Code to build the CLI from your local True Recall checkout and to write the skill file for you; `true-recall --help` gives it everything it needs to know about the commands.

## What to Read Next

- [MCP Server](/reference/mcp-server/): connect MCP-compatible assistants to the same Local API
- [AI Settings](/configuration/ai-settings/): configure the provider used for generation and grading
- [Card Polish](/plugins/card-polish/): the presets behind the `*_card_polish_preset` commands
- [Troubleshooting](/reference/troubleshooting/): common Local API issues
