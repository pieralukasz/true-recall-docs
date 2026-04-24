---
title: AI Flashcard Generation
sidebar:
  label: "AI Flashcard Generation"
  order: 3
description: Preset-driven AI card generation from notes, selections, and highlights. Configure presets per note type with optional TTS and image post-processing.
---

:::caution[My Notes]
:::

The **AI Flashcard Generation** plugin is the engine behind every AI-generated card in True Recall. It runs when you click **Flashcards** in the [Selection Toolbar](/views/selection-toolbar/), **Generate from highlights** in the [Flashcard Panel](/views/flashcard-panel/), or **generate_flashcards_with_preset** from the CLI / MCP.

**Tier:** BYOK — works with any AI key (OpenRouter BYOK or Pro). A Pro-hosted built-in preset is available to Pro users only.

Enable it in `Settings → True Recall → Plugins → AI Flashcard Generation`.

## How Generation Works

1. You trigger generation from a UI action (selection toolbar, panel, command) or a headless endpoint (CLI, MCP, HTTP)
2. The plugin looks up the **preset** you pick (or the default preset) and binds it to its **note type**
3. It builds a prompt from the preset's `prompt` field + the note type's field spec
4. It sends the prompt to the AI provider (Pro / LiteLLM for Pro presets, OpenRouter for BYOK)
5. It streams cards back, validates them against the note type's schema, and writes them to your note in [block format](/creation/creating-flashcards/#block-format)
6. If the preset configures **TTS** or **image** post-processing, those run on the generated cards

For a deep dive on the preset shape and how presets bind to note types, see [Generation Presets](/plugins/generation-presets/).

## Built-in Presets

The plugin ships with:

- **Basic flashcards** — Q/A pairs in the Basic note type
- **Cloze** — fill-in-the-blank cards in the Cloze note type
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
   - **TTS** (optional) — which field to narrate, voice, autoplay (Pro only)
   - **Image** (optional) — which field to send as prompt and which field to receive the generated image (Pro only)
   - **Requires Pro** — restrict to Pro users

4. Save. The preset is immediately available in every surface that uses presets.

## Existing-Card Awareness

When generating on a note that already has flashcards, the plugin injects those cards into the prompt as an `{{EXISTING_CARDS}}` marker. This tells the AI what you've already covered, so it avoids duplicating questions. This happens automatically for both built-in and custom prompts.

## Selection Toolbar Buttons

Each preset that is eligible for a toolbar button (based on its note type and tier) appears in the [Selection Toolbar](/views/selection-toolbar/) so you can trigger it with a single click on a selection.

## Headless Generation

Both the CLI and MCP can run presets directly:

- CLI: `true-recall generate_flashcards_with_preset --text "..." --preset_id <id>`
- MCP: `generate_flashcards_with_preset({ text, preset_id })`

See [Claude Code Skill](/reference/claude-code-skill/) and [MCP Server](/reference/mcp-server/).

## TTS and Image Post-Processing

If your preset configures TTS or image generation, those post-processors run after the card is parsed and before it's saved:

- **TTS** — generates an audio clip for the configured field and attaches it to the card. Uses the voice selected in the preset. **Pro only** — there is no OpenRouter fallback
- **Image** — sends the source field to an image model and writes the resulting image URL or attachment into the target field. External URLs are allowlisted to HTTPS hosts only. **Pro only**

If a post-processor fails, you get a user-visible notice explaining what went wrong. The card itself is still saved — only the side-effect (audio / image) is missing.

## What to Read Next

- [Generation Presets](/plugins/generation-presets/) — full preset reference
- [Card Polish](/plugins/card-polish/) — improve existing cards (complementary plugin)
- [Selection Toolbar](/views/selection-toolbar/) — the most common trigger for AI generation
- [Claude Code Skill](/reference/claude-code-skill/) — headless generation via CLI
