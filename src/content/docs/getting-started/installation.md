---
title: Installation
description: How to install True Recall in your Obsidian vault
---

True Recall can be installed via BRAT, manually, or from source. Community plugin installation will be available after Obsidian review approval.

## Installation via BRAT (Recommended)

[BRAT](https://github.com/TfTHacker/obsidian42-brat) (Beta Reviewers Auto-update Tool) is the easiest way to install and keep True Recall updated.

1. **Install BRAT** from Obsidian Community Plugins
   - Settings → Community plugins → Browse
   - Search for "BRAT"
   - Install and enable it

2. **Add True Recall via BRAT**
   - Settings → BRAT → Add Beta Plugin
   - Enter: `pieralukasz/true-recall`
   - Click "Add Plugin"

3. **Enable True Recall**
   - Settings → Community plugins
   - Find "True Recall" and toggle it on

:::tip[Auto-Updates]
BRAT automatically checks for updates. When a new version is released, BRAT will notify you and can update the plugin automatically.
:::

## Manual Installation (Alternative)

If you prefer not to use BRAT:

1. **Download the latest release** from [GitHub Releases](https://github.com/pieralukasz/true-recall/releases)

2. **Locate your vault's plugins folder**:
   - Open Obsidian
   - Go to Settings → Community plugins
   - Click the folder icon next to "Installed plugins" to open the plugins folder
   - Or navigate to `<your-vault>/.obsidian/plugins/`

3. **Create the plugin folder**:
   ```bash
   mkdir true-recall
   ```

4. **Copy the files** into the `true-recall` folder:
   - `main.js`
   - `styles.css`
   - `manifest.json`

5. **Enable the plugin**:
   - Go to Settings → Community plugins
   - Find "True Recall" in the list
   - Toggle it on

## Installation from Source

For developers or those who want the latest features:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pieralukasz/true-recall.git
   cd true-recall
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the plugin**:
   ```bash
   npm run build
   ```

4. **Copy to your vault**:
   ```bash
   cp main.js styles.css manifest.json <your-vault>/.obsidian/plugins/true-recall/
   ```

5. **Enable the plugin** in Obsidian settings

## Verify Installation

After installation, you should see:

1. **Ribbon icons**: A brain icon (purple) and a chart icon (orange) in the left sidebar
2. **Commands**: Open Command Palette (`Cmd/Ctrl+P`) and search for "True Recall"
3. **Settings tab**: Settings → True Recall with configuration options

## System Requirements

- **Obsidian**: Version 0.15.0 or later
- **Operating System**: Windows, macOS, or Linux
- **Mobile**: iOS and Android via Obsidian Mobile

## Troubleshooting

### Plugin doesn't appear
- Ensure all three files (`main.js`, `styles.css`, `manifest.json`) are in the folder
- Check that the folder is named exactly `true-recall`
- Try restarting Obsidian

### Build errors
- Make sure you have Node.js 18+ installed
- Delete `node_modules` and run `npm install` again

### Performance issues
- Large vaults (10,000+ notes) may take longer on first load
- The plugin indexes flashcard links on startup

## Next Steps

Now that True Recall is installed, continue to [Quick Start](/getting-started/quick-start/) to create your first flashcards.
