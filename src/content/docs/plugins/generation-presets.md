---
title: Generation Presets
sidebar:
  label: "Generation Presets"
  order: 4
description: Reference for AI generation presets — settings, built-ins, defaults, and context options.
---

:::caution[My Notes]
:::

A **generation preset** is a reusable template for AI card generation. Every time True Recall generates cards from a selection, highlight, or note, it runs through a preset. Presets bind an instruction to a specific note type and optionally pull in extra context before sending the prompt to the AI.

This page is the reference for how presets work. For day-to-day usage, see [AI Flashcard Generation](/plugins/ai-flashcard-generation/).

## What a Preset Controls

Each preset controls:

| Setting | What it does |
|---------|--------------|
| **Name** | Label shown in settings and toolbar configuration |
| **Note type** | Which card fields the AI fills |
| **Output language** | Auto-detect from the source text, or force a specific language |
| **Prompt** | The instruction that tells the AI what kind of cards to create |
| **Default** | Which preset runs when you use the default Flashcards action |
| **Context** | Whether to include the source note or related flashcards |

### Why One Prompt

Each preset has one main instruction. True Recall automatically adds the selected note type's fields behind the scenes, so the AI knows what kind of card to create.

### Why no TTS / image config

Generation presets focus on text card generation. Audio and image post-processing are no longer part of presets.

## Built-in Presets

Built-in presets ship with the plugin and are **locked** in the UI — you can't edit their name, prompt, or note type. You can still change their output language and mark one as the default. To customize the behavior, create your own preset.

The standard built-ins:

| Name | Note type | Tier |
|------|-----------|------|
| Basic flashcards | Basic | BYOK |
| Basic Flashcards (Pro) | Basic | Pro |

The **Basic Pro** preset uses a carefully tuned prompt — 7 core rules and 6 few-shot examples — and includes automatic existing-card injection.

## Validation Rules

True Recall checks presets before saving and before generation. A preset needs a name, a prompt, and a valid note type. Built-in presets stay locked so plugin updates can keep them current.

## Managing Presets

Manage presets in `Settings → True Recall → Plugins → AI Flashcard Generation`. The settings panel lets you list, create, edit, delete, and set a default preset. Built-in rows are locked except for output language and default selection.

## Defaults

One preset per note type is marked as the default. Default presets are used when:

- You click **Flashcards** in the Selection Toolbar without specifying a preset
- You run **Generate from note** or **Generate from highlights** without a chosen preset

When you add a preset, it does not automatically appear in the Selection Toolbar. Add it as a toolbar button in `Settings → True Recall → Plugins → Selection Toolbar` if you want direct access from selected text.

Only one preset per note type can be the default. Promoting a new preset to default demotes the previous one automatically.

## Upgrading From Older Versions

If you upgrade from an older version, True Recall updates old generation settings automatically on first launch. No user action is needed.

## Context Options

Presets can opt in to two extra context options:

- **Include source note** — the full body of the note that owns the trigger selection / highlight is added as context, so the AI can disambiguate references that depend on surrounding paragraphs
- **Include related cards** — sibling flashcards already collected from the same source note are added as context, so the AI knows what's been covered and avoids duplicates

Both are off by default — they trade tokens for accuracy. Enable them per-preset in the preset editor when the prompt actually benefits from the extra context.

## What to Read Next

- [AI Flashcard Generation](/plugins/ai-flashcard-generation/) — how presets are triggered in practice
- [Card Polish](/plugins/card-polish/) — a different plugin with its own preset system (for rewriting, not generation)
- [Selection Toolbar](/views/selection-toolbar/) — add preset buttons to selected-text workflows
