---
title: Quick Actions Toolbar
sidebar:
  label: "Quick Actions Toolbar"
  order: 2
description: A floating toolbar that appears when you select text. Generate flashcards with AI, highlight, tag a passage with #card, ask AI, copy, or open the Flashcard Editor.
---

:::caution[My Notes]
:::

The **Quick Actions Toolbar** (called the Selection Toolbar before 2.0.0) is a floating toolbar that appears above any text selection in your notes. Select text, click a button, and create cards, highlights, copied snippets, or notes without leaving the editor.

:::note[Availability]
The toolbar itself is **Free**. AI buttons (generation presets and **Ask AI**) require **BYOK** or **Pro**, and Image Occlusion requires **Pro**.
:::

There are three toolbar variants, each with its own button configuration:
- **Editor toolbar**: appears when selecting text in the editor (all buttons available)
- **Global toolbar**: appears in sidebars, reading view, and other non-editor contexts (editor-only buttons like IO, Highlight and #card are excluded)
- **Image toolbar**: appears when you click an image embed, with quick-add and image-occlusion actions

## How It Works

1. Select text in any note (minimum 3 characters)
2. A floating toolbar appears above your selection
3. Click a generation button
4. AI analyzes the text and creates flashcards in [block format](/creation/creating-flashcards/#block-format)
5. Cards appear in your note, ready to collect

<!-- TODO PHOTO -->

## Workflow Example

Here's the full flow for a biology lecture note:

1. You're reading your note on cellular respiration
2. Select a paragraph: *"The mitochondria produces ATP through a process called oxidative phosphorylation..."*
3. The toolbar floats above the selection
4. Click **Flashcards**: AI reads the passage and generates cards, a Q&A about ATP production and a cloze about oxidative phosphorylation
5. The cards are inserted into your note as block format text
6. The **Flashcard Panel** shows a pulsing **Collect** button; click it to add the cards to the database
7. The cards are now scheduled for review

Total time: about 10 seconds.

## Toolbar Buttons

| Button | What It Does | Editor | Global |
|--------|-------------|:------:|:------:|
| **Flashcards** (preset) | Generate flashcard(s) with AI using a generation preset | Yes | Yes |
| **IO** | Create [image occlusion](/creation/image-occlusion/) card | Yes | -- |
| **Edit** | Open the selection in the [Flashcard Editor](/views/flashcard-editor/) | Yes | Yes |
| **Quick+** | Instantly add as a basic flashcard (no AI) | Yes | Yes |
| **Highlight** | Wrap selection with `==highlight==` syntax | Yes | -- |
| **#card** | Wrap selection with `==highlight==` and tag it `#card` | Yes | -- |
| **Copy** | Copy selection to clipboard | Yes | Yes |
| **Note+** | Create a new note from the selection | Yes | Yes |
| **Append** | Append the selection to the current note | Yes | Yes |
| **Ask AI** | Ask AI about the selection in the Ask AI panel | Yes | Yes |

Every button can be toggled per toolbar, so the defaults differ: **Append** is enabled by default only in the global toolbar, for example.

<!-- TODO PHOTO -->

### Flashcards (AI Generation)

A generation button runs one [generation preset](/plugins/generation-presets/) on your selected text and inserts the resulting `#type/<slug>` blocks into your note. Since 2.0.0 the built-in Basic and Pro generation buttons are collapsed into a single button; when a preset needs Pro and you are on BYOK, the button carries a small **PRO** badge. Other presets can expose their own buttons (e.g. a "Vocab" preset for language learning).

AI analyzes the content and picks the right format for each fact:
- Definitions and explanations → Basic cards
- Lists, sequences, and key terms → Cloze deletions
- Term-definition pairs → Reversed cards

### Quick+ (No AI)

For when your text is already in Q&A format. Select the text, click **Quick+**, and it's immediately created as a basic card, no AI processing needed.

### Image Occlusion

The **IO** button appears when your selection contains an image reference (`![[image.png]]` or `![alt](path)`). Click it to open the image occlusion editor.

### Highlight and #card

**Highlight** wraps the selected text with `==highlight==` Markdown syntax. Useful for marking passages you want to generate cards from later: you can generate cards from all highlights in a note via the [Flashcard Panel](/views/flashcard-panel/) menu → "Generate from highlights".

**#card** (added in 2.3.0) does the same and appends a `#card` tag, so highlights waiting to become cards stay findable with Obsidian's tag search.

### Copy

Copies the selected text to the clipboard. The button briefly changes to "Copied!" to confirm.

### Note+

Creates a new note from the selected text. A modal lets you set the note name, choose a vault folder, and optionally assign the note to a parent project.

### Append

Appends the selected text to the currently active note. Enabled by default in the global toolbar, where it is useful for collecting text from sidebars or reading view into your working note.

### Ask AI

Opens the docked **Ask AI** panel with the selection as the subject, so you can ask a question, request a rewrite, or draft cards through the [AI Workspace](/plugins/ai-assistant/). Requires an AI provider.

## Enabling the Toolbar

The Quick Actions Toolbar is a **[feature](/plugins/overview/)** (tier: Free). Enable or disable it in `Settings → True Recall → Features → "Quick Actions Toolbar"`.

AI buttons additionally require an AI configuration, either an API key or a [True Recall subscription](/subscription/), and the owning feature must be enabled: generation buttons belong to the [Flashcard Generator](/plugins/ai-flashcard-generation/) and **Ask AI** to the [AI Workspace](/plugins/ai-assistant/). Buttons from disabled features don't appear in the toolbar. When a provider is configured but incomplete, the AI buttons are greyed out with a hint ("Add API key in settings", or "Select a model in settings" for LM Studio and custom providers).

## Customizing Buttons

You can configure which buttons appear and in what order, separately for the editor, global, and image toolbars:

`Settings → True Recall → Features → "Quick Actions Toolbar" → "Editor toolbar" / "Global toolbar" / "Image toolbar"`

For each toolbar:
- **Toggle** buttons on or off with checkboxes
- **Drag** buttons to reorder them
- **Add preset buttons**: add any of your generation presets as its own toolbar button
- **Add custom commands**: add any Obsidian command as a toolbar button
- **Remove** custom entries with the trash icon (built-in buttons can only be toggled, not removed)

<!-- TODO PHOTO -->

## Other Creation Methods

Besides the Quick Actions Toolbar, you can create flashcards by:

- **[Flashcard Editor](/views/flashcard-editor/)**: fill in fields manually, cards go straight to the database
- **[Block format](/creation/creating-flashcards/#block-format)**: write `#type/basic` blocks directly in your notes, then collect
- **[Import Studio](/views/import-studio/)**: paste many cards at once

### From a Whole Note

Use the [Flashcard Panel](/views/flashcard-panel/) to generate cards from an entire note at once.

:::note[Least personalized method]
Whole-note generation is the least optimal way to create personalized flashcards: the AI decides what matters, not you. Use it when a note is short and you believe **everything** in it is worth remembering.

For the most accurate results, **generate from selections** instead. Highlighting specific passages lets you control exactly what becomes a card, and the output is noticeably more precise.
:::


## What AI Generates

AI creates cards in the standard block format:

```markdown
#type/basic
Front: What is the primary function of mitochondria?
Back: ATP production through cellular respiration, providing energy for cell processes.
<!-- source: The mitochondria produces ATP through cellular respiration -->
---

#type/cloze
Text: The {{c1::mitochondria}} is the {{c2::powerhouse}} of the cell.
Extra: Cellular biology
<!-- source: The mitochondria is the powerhouse of the cell -->
---
```

Each generated card includes:
- Proper `#type/<slug>` tag
- Field names matching the note type (Front/Back for basic, Text/Extra for cloze)
- A `<!-- source: -->` comment linking back to the exact text
- `---` separator

## Generation Settings

Generation is driven by [**generation presets**](/plugins/generation-presets/). Each preset bundles a prompt, a note type, an **Output language**, and optional source-note / related-card context. Presets are managed in the [AI Workspace](/plugins/ai-assistant/) settings under `Settings → True Recall → Features`. See [AI Settings](/configuration/ai-settings/) for the provider and model configuration.

## Tips

### Select Meaningful Chunks

A good selection is 1-3 paragraphs covering a coherent topic. Too short (a single word) gives AI nothing to work with. Too long (an entire chapter) produces unfocused cards.

### Edit After Generation

Generated cards are a starting point. Click any generated card in the Panel to edit before collecting: tweak questions, simplify answers, remove redundancy.

### Batch Generation

Select multiple paragraphs at once. AI generates multiple cards covering different facts from the selection.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Toolbar not appearing | Check `Settings → True Recall → Features → "Quick Actions Toolbar"` is enabled |
| AI buttons grayed out | Configure an API key, a local model, or a subscription in `Settings → True Recall → Features → "AI provider"` |
| AI buttons missing entirely | The owning feature ([Flashcard Generator](/plugins/ai-flashcard-generation/) or [AI Workspace](/plugins/ai-assistant/)) is disabled or your tier doesn't meet its requirement |
| A preset button shows "Preset deleted" | The preset behind the button was removed; delete the button or recreate the preset |
| Generation fails | Check API key validity and network connection |
| Poor card quality | Try a different model in BYOK, or use a Pro preset (see [Generation Presets](/plugins/generation-presets/)) |

## What to Read Next

- [Flashcard Panel](/views/flashcard-panel/): collect generated cards and generate from highlights
- [Flashcard Editor](/views/flashcard-editor/): where the **Edit** button sends your selection
- [Generation Presets](/plugins/generation-presets/): the presets behind the generation buttons
- [AI Workspace](/plugins/ai-assistant/): the Ask AI panel and threads
