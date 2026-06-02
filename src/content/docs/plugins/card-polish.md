---
title: Card Polish
sidebar:
  label: "Card Polish"
  order: 2
description: AI-powered card improvement during review and inside the Add Flashcard modal. Fix formatting, simplify wording, or run custom instructions with per-preset hotkeys.
---

:::caution[My Notes]
:::

**Card Polish** is a plugin that rewrites flashcards on demand using AI. You can run it mid-review (from the review interface) or while drafting cards in the Add Flashcard modal. Each preset captures a specific instruction — "simplify", "tighten wording", "fix formatting", "split into atomic cards", or anything custom — and can auto-apply the result or show a preview first.

**Tier:** BYOK — works with any AI key (OpenRouter BYOK, LM Studio, Custom, or Pro). Card Polish routes through whichever AI provider is currently selected in `Settings → True Recall → Plugins`.

Enable it in `Settings → True Recall → Plugins → Card Polish`.

## How to Polish a Card

### During Review

1. Start a review session (see [Review Interface](/review/review-interface/))
2. Click the **wand** button in the review toolbar
3. Pick a preset from the popover menu (or use the preset's configured hotkey)
4. If the preset uses **auto-apply**, the card is rewritten in place and a **"AI changes applied"** notice appears with an undo shortcut. If the preset uses **preview**, a modal opens showing before / after and lets you accept or retry.

### In the Add Flashcard Modal

1. Open the Add Flashcard modal (e.g. from the Flashcard Panel's **+** button)
2. Fill in whatever you have so far
3. Click the **wand** button in the modal header
4. Pick a preset. Card Polish fills in missing fields or rewrites existing ones per the preset's instruction.

## Presets

Card Polish ships with no built-in presets — you craft your own. Each preset captures:

| Field | What it controls |
|-------|------------------|
| **Name** | Display name in the popover menu |
| **Prompt** | The instruction sent to AI (e.g. "Simplify the question and keep the answer short") |
| **Auto-apply** | When on, rewrite in place; when off, show a preview modal first |
| **Hotkey** | Optional keyboard shortcut — scoped to the Review view only |
| **Context** | Opt-in flags to include the source note and related cards in the prompt |

Manage presets in the Card Polish plugin settings panel (`Settings → True Recall → Plugins → Card Polish`).

## Preview Modal

Preview mode opens a modal with the **original card** on the left and the **proposed card** on the right, side by side. Each field is rendered in an embedded CodeMirror editor — you can tweak the AI's output inline before accepting. You can:

- **Apply** — replace the card with the (possibly edited) proposal
- **Retry** — re-run the same preset, optionally with an extra free-form instruction (useful if AI output needs another pass)
- **Cancel** — close without changes
- **Dismiss** with Esc or by clicking outside

When the preset operates in **SPLIT mode** (the AI returns multiple new cards instead of editing the source), the original card is shown alongside an opt-in **Delete after applying** toggle. Tick it and the source card is removed when you accept, so the split decomposition replaces the original in one step. Leave it off to keep the source alongside the new cards.

### Card AI Modes

The Card Polish prompt teaches the LLM three explicit modes — pick whichever your preset's instruction implies:

| Mode | When it triggers | What you get |
|------|-----------------|--------------|
| `EDIT` | Default — "simplify", "rephrase", "fix formatting", "tighten" | One revised version of the source card |
| `SPAWN` | "add follow-ups", "generate sibling cards", "expand" | Source card stays, plus N new cards on related angles |
| `SPLIT` | "split", "decompose", "break apart into atomics" | N new atomic cards; source can be deleted on accept |

## Context Flags

If a preset opts in to context, the AI receives extra information with every call:

- **Source note** — the body of the card's source note, useful when the preset needs to rephrase in context
- **Related cards** — other cards from the same note, so the preset avoids contradicting or duplicating sibling cards
- **Note type metadata** — every Card AI request automatically ships the active note type's name and field schema, so the LLM picks correct field names for custom note types without you having to spell them out in the prompt

Enable the source-note and related-cards flags per-preset in the preset editor. More context uses more tokens, so only enable what the preset actually needs.

## Hotkeys (Review Only)

Each preset can declare a hotkey that's active ONLY while the Review view is focused. Hotkeys are registered with Obsidian's hotkey system, so you'll also find them in `Settings → Hotkeys` if you need to remap or disable individually.

## Error Handling

If AI fails to produce usable output, Card Polish shows a notice and leaves the original card unchanged. If you cancel while the request is running, the request is stopped cleanly.

## AI Routing

Card Polish uses whichever provider is currently selected: Pro, OpenRouter, LM Studio, or Custom. When the active provider is **LM Studio**, you can pick a Card Polish-specific model in `Settings → True Recall → Plugins → Card Polish → LM Studio model` — the plugin falls back to the global LM Studio model when no override is set.

## What to Read Next

- [Plugin Overview](/plugins/overview/) — the broader plugin system
- [AI Flashcard Generation](/plugins/ai-flashcard-generation/) — generate new cards (distinct from polishing existing ones)
- [Review Interface](/review/review-interface/) — where the wand button lives mid-review
- [AI Settings](/configuration/ai-settings/) — configure AI provider
