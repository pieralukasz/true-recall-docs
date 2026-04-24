---
title: Generation Presets
sidebar:
  label: "Generation Presets"
  order: 4
description: Reference for AI generation presets — shape, CRUD, built-ins, validation rules, and TTS / image post-processing.
---

:::caution[My Notes]
:::

A **generation preset** is a reusable template for AI card generation. Every time True Recall generates cards — from a selection, from highlights, from a whole note, or from a CLI / MCP call — it runs through a preset. Presets bind a free-form instruction to a specific note type and optionally configure TTS and image post-processing.

This page is the reference for how presets work. For day-to-day usage, see [AI Flashcard Generation](/plugins/ai-flashcard-generation/).

## Preset Shape

A preset is a flat object:

```ts
interface GenerationPreset {
  id: string;
  name: string;
  prompt: string;          // free-form instruction
  noteTypeId: string;      // which note type this produces
  tts: PresetTTSConfig | null;
  image: PresetImageConfig | null;
  requiresPro: boolean;    // gate to Pro key
  builtin: boolean;        // shipped with plugin; locked in UI
  isDefault: boolean;      // one preset per note type is the default
  createdAt: number;
  updatedAt: number;
}

interface PresetTTSConfig {
  field: string;           // note-type field to narrate
  voice: string;           // TTS voice id
  autoplay: boolean;       // auto-play on review
}

interface PresetImageConfig {
  targetField: string;     // where to store the generated image
  sourceField: string;     // which field to use as the prompt
  style?: string;          // optional style hint
}
```

### Why a single `prompt`

Earlier versions of True Recall had per-field prompts and a separate `customPrompt` override. Those have been merged into a single `prompt` field: the note type's field spec is appended automatically, so the AI always knows what fields it needs to fill. Keeping prompts flat makes them portable, easy to review, and simple to swap.

## Built-in Presets

Built-in presets ship with the plugin and are **locked** in the UI — you can't edit their `name`, `prompt`, `tts`, `image`, or `noteTypeId`. You can still mark a built-in as default, and you can delete non-built-in copies you made. To customize a built-in, use **Duplicate** in the preset editor.

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
- `tts.field` (if set) must match a field on the note type that can hold text
- `image.sourceField` and `image.targetField` (if set) must match fields on the note type
- `tts.voice` must be one of the supported voices
- A preset that references a field that has been removed from the note type fails validation until it's updated

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

No user action is needed — migration runs automatically on first launch.

## TTS and Image Post-Processing

Post-processing runs after AI produces card content but before the card is saved:

- **TTS** reads `preset.tts.field`, synthesizes audio with `preset.tts.voice`, and attaches the result to the card. Pro-only.
- **Image** reads `preset.image.sourceField` as the image prompt, generates an image, and writes the result to `preset.image.targetField`. External URLs are allowlisted to HTTPS hosts only. Pro-only.

Errors from post-processing surface as user-visible notices and log to the Obsidian developer console. The card is saved even if post-processing fails — only the side-effect is missing.

## What to Read Next

- [AI Flashcard Generation](/plugins/ai-flashcard-generation/) — how presets are triggered in practice
- [Card Polish](/plugins/card-polish/) — a different plugin with its own preset system (for rewriting, not generation)
- [Claude Code Skill](/reference/claude-code-skill/) — CLI commands for headless preset management
- [MCP Server](/reference/mcp-server/) — MCP tools for AI assistants
