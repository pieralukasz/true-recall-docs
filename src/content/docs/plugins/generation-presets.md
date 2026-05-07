---
title: Generation Presets
sidebar:
  label: "Generation Presets"
  order: 4
description: Reference for AI generation presets — shape, CRUD, built-ins, validation rules, and context options.
---

:::caution[My Notes]
:::

A **generation preset** is a reusable template for AI card generation. Every time True Recall generates cards — from a selection, from highlights, from a whole note, or from a CLI / MCP call — it runs through a preset. Presets bind a free-form instruction to a specific note type and optionally pull in extra context (the source note, sibling cards) before sending the prompt to the AI.

This page is the reference for how presets work. For day-to-day usage, see [AI Flashcard Generation](/plugins/ai-flashcard-generation/).

## Preset Shape

A preset is a flat object:

```ts
interface GenerationPreset {
  id: string;
  name: string;
  prompt: string;                    // free-form instruction
  noteTypeId: string;                // which note type this produces
  requiresPro: boolean;              // gate to Pro key
  builtin: boolean;                  // shipped with plugin; locked in UI
  isDefault: boolean;                // one preset per note type is the default
  includeSourceNote?: boolean;       // include the host note's full body as context
  includeRelatedCards?: boolean;     // include sibling cards from the same note
  createdAt: number;
  updatedAt: number;
}
```

### Why a single `prompt`

Earlier versions of True Recall had per-field prompts and a separate `customPrompt` override. Those have been merged into a single `prompt` field: the note type's field spec is appended automatically, so the AI always knows what fields it needs to fill. Keeping prompts flat makes them portable, easy to review, and simple to swap.

### Why no TTS / image config

Generation presets used to carry optional TTS and image post-processing blocks. Both pipelines were removed in 1.8 — the AI plugin focuses on text generation only. Stored presets with legacy `tts` / `image` config are silently dropped during migration; if you relied on either, regenerate audio / images outside True Recall and store the result in the corresponding field by hand.

## Built-in Presets

Built-in presets ship with the plugin and are **locked** in the UI — you can't edit their `name`, `prompt`, or `noteTypeId`. You can still mark a built-in as default, and you can delete non-built-in copies you made. To customize a built-in, use **Duplicate** in the preset editor.

The standard built-ins:

| Id | Name | Note type | Tier |
|----|------|-----------|------|
| `builtin-basic-flashcards` | Basic flashcards | Basic | BYOK |
| `builtin-cloze` | Cloze | Cloze | BYOK |
| `builtin-basic-pro` | Basic Pro | Basic | Pro |

The **Basic Pro** preset uses a carefully tuned prompt — 7 core rules and 6 few-shot examples — and includes automatic existing-card injection.

## Validation Rules

`GenerationPresetService.validate` rejects invalid presets at save time:

- `name` must be non-empty and unique
- `noteTypeId` must reference an existing note type
- `prompt` must be non-empty
- `requiresPro` presets cannot be saved as the default for their note type unless a Pro key is present

Validation runs on create, update, and at runtime right before the preset is applied. Invalid presets can't be picked as the default.

## CRUD Surfaces

Every preset operation is available from three places:

### Settings UI

`Settings → True Recall → Plugins → AI Flashcard Generation` renders the full editor: list, create, update, duplicate, delete, set-default. Built-in rows are locked.

### CLI

Each command returns JSON. See [Claude Code Skill](/reference/claude-code-skill/) for the full CLI reference.

| Command | Description |
|---------|-------------|
| `list_generation_presets` | List every preset with id, name, noteTypeId, default flag, tier |
| `get_generation_preset --preset_id <id>` | Fetch one preset |
| `create_generation_preset --preset <json>` | Create a preset (validation is strict) |
| `update_generation_preset --preset_id <id> --patch <json>` | PATCH an existing preset |
| `delete_generation_preset --preset_id <id>` | Delete a non-built-in preset; deleting the default auto-promotes the next |
| `generate_flashcards_with_preset --text <text> --preset_id <id>` | Generate cards using a specific preset |

### MCP

The same operations are exposed as MCP tools for AI assistants. See [MCP Server](/reference/mcp-server/) → AI Generation.

## Defaults

One preset per note type is marked as the default. Default presets are used when:

- You click **Flashcards** in the Selection Toolbar without specifying a preset
- You run **Generate from note** or **Generate from highlights** without a chosen preset
- You call `generate_flashcards` (without the `_with_preset` suffix) via CLI / MCP

Only one preset per note type can be the default. Promoting a new preset to default demotes the previous one automatically.

## Settings Migration

When upgrading from pre-1.7 versions, True Recall runs a one-time migration:

- Legacy per-field `fields` config is lossy-merged into the single `prompt` field
- `customPrompt` is renamed to `prompt`
- `isPinned` is dropped
- `isPro` is renamed to `requiresPro`
- The legacy `flashcardGeneration` settings bucket is removed
- A `defaultGenerationPresetId` that points at a now-missing preset is self-healed at load time

When upgrading from 1.7 to 1.8, an additional one-time migration runs:

- Legacy `tts` and `image` config blocks are dropped from every stored preset (the post-processing pipelines were removed)
- The `providerType` field is derived from the existing `proKey` / `openRouterApiKey` if it isn't already set, and `aiTier` is kept in sync with the resolved provider

No user action is needed — migration runs automatically on first launch.

## Context Options

Presets can opt-in to two extra context blocks. Each one is appended to the prompt sent to the AI when enabled:

- **Include source note** (`includeSourceNote: true`) — the full body of the note that owns the trigger selection / highlight is added as context, so the AI can disambiguate references that depend on surrounding paragraphs
- **Include related cards** (`includeRelatedCards: true`) — sibling flashcards already collected from the same source note are added as context, so the AI knows what's been covered and avoids duplicates

Both are off by default — they trade tokens for accuracy. Enable them per-preset in the preset editor when the prompt actually benefits from the extra context.

## What to Read Next

- [AI Flashcard Generation](/plugins/ai-flashcard-generation/) — how presets are triggered in practice
- [Card Polish](/plugins/card-polish/) — a different plugin with its own preset system (for rewriting, not generation)
- [Claude Code Skill](/reference/claude-code-skill/) — CLI commands for headless preset management
- [MCP Server](/reference/mcp-server/) — MCP tools for AI assistants
