---
title: Claude Code Skill
sidebar:
  label: "Claude Code Skill"
  order: 2
description: Use True Recall with Claude Code for review help, card creation, stats, and organization.
---

:::caution[My Notes]
:::

The **True Recall** Claude Code skill teaches Claude how to use your running True Recall plugin through the Local API. It is useful when you want an assistant to help with review sessions, generate cards from notes, inspect progress, or organize projects.

## Availability

| Capability | Tier |
|------------|------|
| Reading cards, notes, due counts, and stats | Free |
| Starting reviews and grading cards when you ask | Free |
| Generating flashcards with your configured AI provider | BYOK or Pro |
| Searching the Knowledge Base | Pro |

## Requirements

Before using the skill:

1. Install and enable **True Recall** in Obsidian
2. Open `Settings → True Recall → Integrations`
3. Enable **Local API**
4. Install the True Recall command-line helper from the repository
5. Add the skill file to your Claude Code skills folder

The skill only works while Obsidian is open and True Recall is loaded.

## What Claude Can Help With

Claude can:

- Explain the current review card without revealing the answer too early
- Reveal the answer when you ask
- Grade a card when you tell it which rating to use
- Generate flashcards from the active note or selected text
- Find weak cards and leeches
- Summarize your recent study activity
- Open True Recall views in Obsidian
- Assign notes to projects or presets
- Toggle whole-note review

## Review Safety

When you are reviewing, Claude should first check whether the answer is hidden. If the answer is hidden, it should discuss only the question side and guide your reasoning. It should reveal the answer only when you ask.

## Setup Help

The exact installation steps depend on where you keep your local True Recall repository and Claude Code profile. If you are setting this up for the first time, use the setup instructions in the repository or ask Claude Code to install the skill from your local True Recall checkout.

## What to Read Next

- [MCP Server](/reference/mcp-server/) — connect MCP-compatible assistants
- [AI Settings](/configuration/ai-settings/) — configure generation and AI grading
- [Knowledge Base](/configuration/knowledge-base/) — semantic search for Pro users
- [Troubleshooting](/reference/troubleshooting/) — common Local API issues
