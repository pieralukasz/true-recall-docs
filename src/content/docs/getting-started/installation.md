---
title: Installation
description: How to install True Recall in your Obsidian vault
links:
  - /getting-started/quick-start/
---

## Install via BRAT (Recommended)

[BRAT](https://github.com/TfTHacker/obsidian42-brat) (Beta Reviewers Auto-update Tool) handles installation and auto-updates for you.

Open Obsidian **Settings → Community plugins → Browse**, search for "BRAT", and install it. Then:

```
Settings → BRAT → Add Beta Plugin → Enter: pieralukasz/true-recall → Add Plugin
```

Finally, enable the plugin:

```
Settings → Community plugins → Find "True Recall" → Toggle on
```

That's it. BRAT will notify you when updates are available and can install them automatically.

:::tip
Community plugin directory installation will be available after Obsidian review approval. For now, BRAT is the smoothest path.
:::

## Manual Installation

Download the latest release from [GitHub Releases](https://github.com/pieralukasz/true-recall/releases), then drop the files into your vault's plugin folder:

```
<your-vault>/.obsidian/plugins/true-recall/
├── main.js
├── styles.css
└── manifest.json
```

You can find this folder through **Settings → Community plugins → folder icon** next to "Installed plugins". Create the `true-recall` directory if it doesn't exist.

Enable the plugin in **Settings → Community plugins → True Recall → Toggle on**.

## Install from Source

For developers who want the latest unreleased changes:

```bash
git clone https://github.com/pieralukasz/true-recall.git
cd true-recall
npm install
npm run build
```

Copy the output into your vault:

```bash
cp main.js styles.css manifest.json <your-vault>/.obsidian/plugins/true-recall/
```

Enable the plugin in Obsidian settings.

## Verify It Works

Once installed, you should see three things:

- **Ribbon icons** — a brain icon (purple) and a chart icon (orange) in the left sidebar
- **Commands** — open the Command Palette (`Cmd/Ctrl+P`) and search "True Recall"
- **Settings tab** — Settings → True Recall with configuration options

If all three are there, you're good to go.

## System Requirements

- **Obsidian** 0.15.0 or later
- **OS** — Windows, macOS, or Linux
- **Mobile** — iOS and Android via Obsidian Mobile

## Troubleshooting

### Plugin doesn't appear

Make sure all three files (`main.js`, `styles.css`, `manifest.json`) are inside a folder named exactly `true-recall` in your vault's `.obsidian/plugins/` directory. Restart Obsidian if needed.

### Build errors

You need Node.js 18+. If something breaks, delete `node_modules` and run `npm install` again.

:::caution
Large vaults (10,000+ notes) may take longer on first load — the plugin indexes flashcard links on startup. This only happens once.
:::

## Next Steps

Head to [Quick Start](/getting-started/quick-start/) to create your first flashcards.
