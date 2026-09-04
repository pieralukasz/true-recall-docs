---
title: Generation Presets
sidebar:
  label: "Generation Presets"
  order: 4
description: "Reference for AI generation presets: settings, built-ins, defaults, output language, and context options."
---

:::caution[My Notes]
:::

A **generation preset** is a reusable template for AI card generation. Every time True Recall generates cards from a selection, highlight, or note, it runs through a preset. Presets bind an instruction to a specific note type and optionally pull in extra context before sending the prompt to the AI.

This page is the reference for how presets work. For day-to-day usage, see the [AI Workspace](/plugins/ai-assistant/): generation presets are the **Generator** family there, so picking a preset is one click when you draft cards.

## What a Preset Controls

Each preset controls:

| Setting | What it does |
|---------|--------------|
| **Name** | Label shown in settings and toolbar configuration |
| **Note type** | Which card fields the AI fills (reversed, cloze and image occlusion note types are excluded; they have dedicated flows) |
| **Output language** | Auto-detect from the source text, or force a specific language |
| **Prompt** | The instruction that tells the AI what kind of cards to create |
| **Default** | Which preset runs when you use the default Flashcards action |
| **Context** | Whether to include the source note or related flashcards |

A preset also carries an `allowEmptyAnswer` flag for presets that intentionally produce one-sided cards, so an empty answer field counts as valid output instead of a parsing error.

### Why One Prompt

Each preset has one main instruction. True Recall automatically adds the selected note type's fields behind the scenes, so the AI knows what kind of card to create.

### Why no TTS / image config

Generation presets focus on text card generation. Audio and image post-processing are no longer part of presets.

## Built-in Presets

Built-in presets ship with the plugin and are **locked** in the UI: you can't edit their name, prompt, or note type. You can still change their output language and mark one as the default. To customize the behavior, create your own preset.

The standard built-ins:

| Name | Note type | Tier |
|------|-----------|------|
| Basic Flashcards | Basic | BYOK |
| Basic Flashcards (Pro) | Basic | Pro |

The Pro preset uses True Recall's managed model and AI budget with a carefully tuned prompt and few-shot examples, and includes automatic existing-card injection. Since 2.0.0 the baseline card-quality rules (no ordinal or meta questions, no multi-answer cards, no long answers) also apply to the BYOK built-in and to your own presets; a preset instruction can explicitly override them.

## Validation Rules

True Recall checks presets before saving and before generation. A preset needs a name, a prompt, and a valid note type. Built-in presets stay locked so plugin updates can keep them current.

## Managing Presets

Manage presets in `Settings → True Recall → Features → "AI Workspace" → "Generate cards"`. The panel lists **Built-in presets** and **Your presets**; you can add (**+ New preset**), edit, reorder, delete, and set a default. Built-in rows are locked except for output language and default selection.

When LM Studio is your provider, the same panel has an **LM Studio model** field used only by card generation.

## Defaults

One preset per note type is marked as the default. Default presets are used when:

- You click **Flashcards** in the Quick Actions Toolbar without specifying a preset
- You run **Generate from note** or **Generate from highlights** without a chosen preset

When you add a preset, it does not automatically appear in the toolbar. Add it as a button in `Settings → True Recall → Features → "Quick Actions Toolbar"` (Editor toolbar or Global toolbar) if you want direct access from selected text.

Only one preset per note type can be the default. Promoting a new preset to default demotes the previous one automatically.

## Upgrading From Older Versions

If you upgrade from an older version, True Recall updates old generation settings automatically on first launch. No user action is needed.

## Context Options

Presets can opt in to two extra context options:

- **Include source note content**: the full body of the note that owns the trigger selection / highlight is added as context, so the AI can disambiguate references that depend on surrounding paragraphs
- **Include related flashcards from the same source**: sibling flashcards already collected from the same source note are added as context, so the AI knows what's been covered and avoids duplicates

Both are off by default: they trade tokens for accuracy. Enable them per preset in the preset editor when the prompt actually benefits from the extra context.

## What to Read Next

- [AI Workspace](/plugins/ai-assistant/): how presets are triggered in practice (Generator mode)
- [Quick Actions Toolbar](/views/selection-toolbar/): add preset buttons to selected-text workflows
- [AI Settings](/configuration/ai-settings/): provider and model configuration
