# Screenshot Capture — E2E Procedure (AI-driven)

How docs screenshots are produced, reproducibly, by driving a real Obsidian instance with the Obsidian CLI. Treat this like an end-to-end test: same inputs → same shots.

## Prerequisites

- **Obsidian installer 1.12.7+** (the CLI ships only with this installer). Verify: `/usr/bin/plutil -extract CFBundleShortVersionString raw /Applications/Obsidian.app/Contents/Info.plist`.
- **CLI enabled**: Obsidian → Settings → General → Advanced → *Command line interface*. The binary lives at `/Applications/Obsidian.app/Contents/MacOS/obsidian-cli` and can be called by full path (no PATH symlink / sudo needed).
- **Demo vault** at `/Users/lukaszpiera/Projects/true-recall/demo-vault` — a clean, disposable vault with **no personal data**. Registered in Obsidian via *Open folder as vault* (URI `obsidian://open?path=` only opens already-registered vaults).
- **Fresh plugin build**: `bun run build` in the monorepo, then copy `main.js` + `styles.css` into `demo-vault/.obsidian/plugins/true-recall/`, then `obsidian-cli … plugin:reload id=true-recall`. The repo-root `main.js` can be stale — always rebuild.
- **Pro/BYOK key** to unlock AI-tier views (AI Assistant, AI Inbox, Image Occlusion, Type-in, Knowledge Base). Set `settings.proKey` + `providerType="pro"` + `aiTier="pro"`, save, then reload the window. Tier gating keys off `!!settings.proKey`. **Never commit the key, embed it in docs, or capture a settings screen showing it.**

## Conventions

- **CLI shortcut:** `CLI="/Applications/Obsidian.app/Contents/MacOS/obsidian-cli"`, always pass `vault="demo-vault"` first.
- **Window:** maximize the real Obsidian window manually. Do **not** use CDP `Emulation.setDeviceMetricsOverride` — it distorts scaling and produces cramped shots. If it was set, clear it: `dev:cdp method=Emulation.clearDeviceMetricsOverride` then `dev:debug off`.
- **Theme:** dark (`appearance.json` → `"theme":"obsidian"`, `"baseFontSize":18`).
- **Right sidebar:** collapse it for full-area views (Dashboard, Statistics, Card Browser, FSRS Simulator, AI Inbox) so the Cards panel doesn't clutter them. Keep it expanded only for the Flashcard Panel shot.
- **Clean state before each shot:** `window.getSelection().removeAllRanges()`.
- **Robustness:** the CLI's `eval`/`dev:screenshot` can occasionally hang. Guard every call with a timeout: `perl -e 'alarm 20; exec @ARGV' "$CLI" vault=demo-vault …`.
- **Output:** `true-recall-docs/src/assets/screenshots/<area>/<name>.png`. Embed with `![alt](../../../assets/screenshots/<area>/<name>.png)` and delete the matching `<!-- TODO PHOTO -->`.

## View types (leaf `getViewType()`)

| View | Command id | Leaf view type |
|------|-----------|----------------|
| Dashboard | `true-recall:open-dashboard` | `true-recall-dashboard-view` |
| Card Browser | `true-recall:open-card-browser` | `true-recall-card-browser` |
| FSRS Simulator | `true-recall:open-fsrs-simulator` | `true-recall-simulator` |
| Statistics | `true-recall:open-stats` | `true-recall-stats` |
| Flashcard Panel | `true-recall:open-flashcard-panel` | `true-recall-flashcard-panel` (right sidebar) |
| AI Inbox | `true-recall:open-assistant-inbox` | `true-recall-assistant-inbox` |
| Note Type Manager | `true-recall:manage-note-types` | (modal, not a leaf) |
| Review | `true-recall:review-current-note` | review view |

AI-tier commands only appear when `proKey` is set: `open-assistant-inbox`, `create-image-occlusion-card`.

## Helper: reveal a leaf, then shot

```bash
CLI="/Applications/Obsidian.app/Contents/MacOS/obsidian-cli"
SS=/Users/lukaszpiera/Projects/true-recall/true-recall-docs/src/assets/screenshots
g(){ perl -e 'alarm 20; exec @ARGV' "$CLI" vault=demo-vault "$@"; }   # 20s-guarded CLI call

hide_right(){ g eval code="app.workspace.rightSplit.collapse(); 'ok'" >/dev/null 2>&1; }
show_right(){ g eval code="app.workspace.rightSplit.expand(); 'ok'"   >/dev/null 2>&1; }

shot(){  # $1 = view type, $2 = output path
  g eval code="const l=app.workspace.getLeavesOfType('$1')[0]; if(l){app.workspace.revealLeaf(l);app.workspace.setActiveLeaf(l,{focus:true});} window.getSelection().removeAllRanges(); l?'ok':'none'" >/dev/null 2>&1
  g dev:screenshot path="$2" >/dev/null 2>&1
}
```

## Capture run

```bash
hide_right
shot true-recall-dashboard-view $SS/dashboard/dashboard.png
shot true-recall-stats          $SS/stats/statistics.png
shot true-recall-card-browser   $SS/browser/card-browser.png
shot true-recall-simulator      $SS/simulator/fsrs-simulator.png
shot true-recall-assistant-inbox $SS/assistant/ai-inbox.png

# Flashcard panel — keep the right sidebar, focus a note
show_right
g open path="Biology/Cell Biology.md" >/dev/null 2>&1
g eval code="const l=app.workspace.getLeavesOfType('markdown')[0]; if(l)app.workspace.setActiveLeaf(l,{focus:true}); window.getSelection().removeAllRanges(); 'ok'" >/dev/null 2>&1
g dev:screenshot path=$SS/panel/note-with-panel.png >/dev/null 2>&1

# Note Type Manager modal
g command id=true-recall:manage-note-types >/dev/null 2>&1
g dev:screenshot path=$SS/note-types/note-type-manager.png >/dev/null 2>&1
g eval code="document.querySelector('.modal-bg')?.click(); 'closed'" >/dev/null 2>&1
```

## AI flows (require Pro key)

These are interactive; capture is best-effort via CLI:
- **AI Inbox** — populated after threads exist. Generate a thread first (Ask AI on a selection), then shoot `true-recall-assistant-inbox`.
- **Ask AI / Draft Studio / ThreadWorkspace** — opened by the selection toolbar or the `true-recall:ask-ai` window event; drafting involves a live API round-trip. If CLI triggering is unreliable, capture these with a few manual GUI clicks.

## Data population

For non-empty Dashboard/Browser/Stats, either (a) let the AI Assistant generate cards from the clean notes (the real workflow), or (b) collect block-format cards with `removeFlashcardContentAfterCollect=true` so the note stays clean prose while the cards land in the DB.

## Teardown

- Clear any CDP override and detach the debugger.
- The Pro key stays only in the local demo vault's plugin data (never committed). Rotate it after a capture session if desired.
