---
title: Installation
sidebar:
  label: "Installation"
  order: 2
description: How to install True Recall
---

:::caution[My Notes]
:::

## Requirements

- Obsidian v1.8.0 or later
- An Obsidian vault

## Install from Community Plugins

True Recall is available directly in the [Obsidian Community Plugins](https://community.obsidian.md/plugins/true-recall) directory — no manual install or third-party tools needed.

1. Open **Settings → Community plugins**
2. Turn off **Restricted mode** if it's still on
3. Click **Browse** and search for **True Recall**
4. Click **Install**, then **Enable**

That's it. Obsidian keeps the plugin updated automatically.

:::tip[Install link]
You can also open the plugin page directly: [community.obsidian.md/plugins/true-recall](https://community.obsidian.md/plugins/true-recall).
:::

## Install Beta Versions via BRAT

Want early access to features before they hit the stable release? Install beta builds with [BRAT](https://github.com/TfTHacker/obsidian42-brat) (Beta Reviewers Auto-update Tool), which handles beta installation and automatic updates.

1. Install **BRAT** from **Settings → Community plugins → Browse**
2. Enable it, then open **Settings → BRAT → Add Beta Plugin**
3. Enter `pieralukasz/true-recall` and click **Add Plugin**
4. Enable True Recall in **Settings → Community plugins**

:::caution
Beta builds may be unstable. For most users, the Community Plugins install above is the right choice.
:::

## First-Time Setup

After enabling True Recall:

1. **AI Configuration** (Optional) — Free features work without AI. AI features use either a True Recall Pro key, your own OpenRouter key, LM Studio, or a custom OpenAI-compatible provider.

   **Option A — True Recall account (recommended for new users)**
   1. Visit [truerecall.app/login](https://truerecall.app/login) and sign in with your email
   2. A free trial key is generated automatically on the [dashboard](https://truerecall.app/dashboard)
   3. Copy your key from the dashboard
   4. In Obsidian, open `Settings → True Recall → Plugins`, select **True Recall Pro** as the AI provider, and paste your key
   5. After testing, upgrade to Pro ($4/mo) from the dashboard or bring your own OpenRouter key

   **Option B — OpenRouter API key**
   1. Get an API key from [openrouter.ai](https://openrouter.ai)
   2. In Obsidian, open `Settings → True Recall → Plugins`, select **OpenRouter (BYOK)**, and paste your key
2. **FSRS Settings** — Review the default FSRS parameters in Settings → True Recall → FSRS (defaults work well for most users)
3. **Day Start Hour** — Set when your "day" begins (default: 4 AM, matching Anki behavior)

## Verify It Works

Once installed, you should see:

- **Ribbon icons** — a brain icon (purple) and a chart icon (orange) in the left sidebar
- **Commands** — open the Command Palette and search "True Recall"
- **Settings tab** — Settings → True Recall with configuration options

## Troubleshooting

### Plugin doesn't appear

Make sure all three files (`main.js`, `styles.css`, `manifest.json`) are inside a folder named exactly `true-recall` in your vault's `.obsidian/plugins/` directory. Restart Obsidian if needed.

:::caution
Large collections (10,000+ notes) may take longer on first load — True Recall indexes flashcard links on startup. This only happens once.
:::

## Next Steps

Head to [Quick Start](/getting-started/quick-start/) to create your first flashcards.
