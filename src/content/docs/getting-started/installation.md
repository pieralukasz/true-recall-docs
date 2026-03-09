---
title: Installation
sidebar:
  order: 2
description: How to install True Recall in your Obsidian vault
---

## Requirements

- Obsidian v1.5.0 or later
- An Obsidian vault

## Install from Community Plugins

:::note
True Recall is not yet available in the Obsidian Community Plugins directory. Use [BRAT](#install-via-brat) instead.
:::

## Install via BRAT

[BRAT](https://github.com/TfTHacker/obsidian42-brat) (Beta Reviewers Auto-update Tool) handles installation and auto-updates for beta releases.

```
Settings → BRAT → Add Beta Plugin → Enter: pieralukasz/true-recall → Add Plugin
```

Then enable the plugin in **Settings → Community plugins → True Recall → Toggle on**.

## First-Time Setup

After enabling True Recall:

1. **AI Configuration** (Optional) — Go to Settings → True Recall → AI to configure your OpenRouter API key or True Recall subscription for AI features
2. **FSRS Settings** — Review the default FSRS parameters in Settings → True Recall → FSRS (defaults work well for most users)
3. **Day Start Hour** — Set when your "day" begins (default: 4 AM, matching Anki behavior)

## Verify It Works

Once installed, you should see:

- **Ribbon icons** — a brain icon (purple) and a chart icon (orange) in the left sidebar
- **Commands** — open the Command Palette (`Cmd/Ctrl+P`) and search "True Recall"
- **Settings tab** — Settings → True Recall with configuration options

## Troubleshooting

### Plugin doesn't appear

Make sure all three files (`main.js`, `styles.css`, `manifest.json`) are inside a folder named exactly `true-recall` in your vault's `.obsidian/plugins/` directory. Restart Obsidian if needed.

:::caution
Large vaults (10,000+ notes) may take longer on first load — the plugin indexes flashcard links on startup. This only happens once.
:::

## Next Steps

Head to [Quick Start](/getting-started/quick-start/) to create your first flashcards.
