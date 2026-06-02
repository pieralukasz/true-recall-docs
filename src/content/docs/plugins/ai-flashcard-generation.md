---
title: AI Flashcard Generation
sidebar:
  label: "AI Flashcard Generation"
  order: 3
description: Preset-driven AI card generation from notes, selections, and highlights. Configure presets per note type with opt-in source-note and related-card context.
---

:::caution[My Notes]
:::

The **AI Flashcard Generation** plugin is the engine behind every AI-generated card in True Recall. It runs when you click **Flashcards** in the [Selection Toolbar](/views/selection-toolbar/) or generate cards from highlights or the whole note in the [Flashcard Panel](/views/flashcard-panel/).

**Tier:** BYOK — works with any AI key (OpenRouter BYOK, LM Studio, Custom, or Pro). A Pro-hosted built-in preset is available to Pro users only.

Enable it in `Settings → True Recall → Plugins → AI Flashcard Generation`.

## How Generation Works

1. You trigger generation from the Selection Toolbar or Flashcard Panel
2. The plugin looks up the **preset** you pick (or the default preset) and binds it to its **note type**
3. It builds the AI instruction from the preset and selected note type, optionally enriched with the source note body and / or sibling cards (see [Context Options](#context-options))
4. It sends the prompt to the active AI provider — Pro for Pro presets, otherwise your configured BYOK route (OpenRouter, LM Studio, or Custom)
5. It streams cards back, validates them against the note type's schema, and writes them to your note in [block format](/creation/creating-flashcards/#block-format)

For a deep dive on the preset shape and how presets bind to note types, see [Generation Presets](/plugins/generation-presets/).

## Built-in Presets

The plugin ships with:

- **Basic flashcards** — Q/A pairs in the Basic note type
- **Basic Pro** — Pro-only preset with a heavily tuned prompt (7 core rules, 6 few-shot examples, automatic existing-cards awareness) that produces cleaner output than BYOK. Shows a **PRO** badge in the UI.

Built-in presets are **locked** — you can't edit or delete them from the UI. To customize, create a new preset (optionally starting by copy-pasting the built-in prompt).

## Custom Presets

To create your own preset:

1. Open `Settings → True Recall → Plugins → AI Flashcard Generation`
2. Scroll to **Your presets** and click **+ New preset**
3. Configure:
   - **Name** — how it appears in the toolbar / picker
   - **Note type** — which note type the preset produces (Basic, Cloze, custom, etc.)
   - **Prompt** — free-form instruction for the AI. The note type's field spec is appended automatically
   - **Include source note** (optional) — append the host note's full body to the prompt as context
   - **Include related cards** (optional) — append sibling cards from the same source note as context
   - **Requires Pro** — restrict to Pro users

4. Save. The preset is immediately available in every surface that uses presets.

## Existing-Card Awareness

When generating on a note that already has flashcards, the plugin injects those cards into the prompt as an `{{EXISTING_CARDS}}` marker. This tells the AI what you've already covered, so it avoids duplicating questions. This happens automatically for both built-in and custom prompts.

## Selection Toolbar Buttons

Each preset that is eligible for a toolbar button (based on its note type and tier) appears in the [Selection Toolbar](/views/selection-toolbar/) so you can trigger it with a single click on a selection.

## Context Options

Two opt-in flags per preset enrich the prompt with extra information before it reaches the AI:

- **Include source note** — the full body of the note that owns the trigger selection / highlight is appended to the prompt. Use it when the AI needs surrounding context (definitions earlier in the note, the topic of the chapter, etc.) to disambiguate
- **Include related cards** — the cards already collected from the same source note are appended, so the AI knows what's been covered and avoids duplicating questions

Both are off by default — they trade tokens for accuracy. Enable them only on presets that actually need the extra context.

## LM Studio Per-Plugin Model

When the active AI provider is **LM Studio**, AI Flashcard Generation can use a different model than the global LM Studio selection. Pick one in `Settings → True Recall → Plugins → AI Flashcard Generation → LM Studio model` — the plugin falls back to the global LM Studio model when no override is set. See [AI Settings](/configuration/ai-settings/) for the global LM Studio configuration.

## What to Read Next

- [Generation Presets](/plugins/generation-presets/) — full preset reference
- [Card Polish](/plugins/card-polish/) — improve existing cards (complementary plugin)
- [Selection Toolbar](/views/selection-toolbar/) — the most common trigger for AI generation
