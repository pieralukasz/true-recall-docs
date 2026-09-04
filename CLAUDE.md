# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.


## Project Overview

Documentation site for **True Recall**, an Obsidian plugin for spaced repetition using FSRS v6. Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build/) and deployed to Vercel as a static site.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

There are no tests or linting configured.

## Structured data / entity graph (added 2026-07-26)

This site previously emitted **no** JSON-LD at all, even though True Recall is the most
externally-validated entity in Lucas's ecosystem (official Obsidian Community Plugins
directory, public repo, r/ObsidianMD thread).

- `src/lib/entity.ts`: the canonical `Person` node, shared across **six** sites. It is
  intentionally duplicated (byte-identical) with `apps/*/src/lib/entity.ts` in the
  `pieralukasz/lucaspiera` repo. **Any change must be propagated to all copies in the same
  task**, otherwise the person entity splits again. Canonical `@id`:
  `https://lucaspiera.com/#person`; Entity Home: `https://lucaspiera.com/about/`.
- `src/lib/software-entity.ts`: `SoftwareApplication` + `SoftwareSourceCode` + `WebSite`
  + `WebPage` graph. Canonical software `@id`: `https://truerecall.app/#software`, reused
  verbatim as `entityId` in `apps/lucaspiera-com/src/content/projects/true-recall.mdx`
  so both sites describe **one** entity.
- Injected in **two** places, because the site has two layouts:
  `src/components/starlight/Head.astro` (all docs pages) and `src/layouts/BaseLayout.astro`
  (standalone pages, including `/pricing`, the only page with real offers).
- `offers` must stay in sync with `src/pages/pricing.astro`. Price and availability are the
  one category of structured data machines genuinely cannot infer from page text.
- `codeRepository` belongs **only** to `SoftwareSourceCode` in schema.org, never put it on
  `SoftwareApplication`. The two are linked via `targetProduct`.
- Do not add `aggregateRating`: there is no rating source to cite.
- Known issue: `astro.config.mjs` declares `site: 'https://truerecall.app'` but the domain
  307-redirects to `www.truerecall.app`. Fix the primary domain in Vercel (preferred) or
  change `site` **and** every `@id`, see `docs/2026-07-26-encja-marki.md` in the
  `lucaspiera` repo.

## Architecture

- **Framework**: Astro 5 with Starlight documentation theme + `starlight-theme-obsidian` plugin
- **Output**: Static site (`output: 'static'`) with Vercel adapter for deployment
- **Site URL**: https://truerecall.app

### Content

All documentation lives in `src/content/docs/` as `.md` or `.mdx` files. Each file maps to a route based on its path (e.g., `features/review-system.md` → `/features/review-system/`). The landing page is `src/content/docs/index.mdx` using Starlight's `splash` template.

### Sidebar

The sidebar uses `autogenerate` per directory in `astro.config.mjs` and only renders in dev mode (`import.meta.env.DEV`). Production sidebar is empty. Sections: Getting Started, Views, Features (directory `plugins/`), Creation, Review, Scheduling, Configuration, Data, Reference.

### Component Overrides

Three Starlight components are overridden in `src/components/starlight/`:
- **Header.astro**: custom header layout (removed nav links)
- **Head.astro**: injects Vercel Analytics and Speed Insights
- **Hero.astro**: custom landing page hero

### Styling

- Custom CSS: `src/styles/custom.css` (accent color `#7c3aed`, site title, hero, auth/dashboard styles)
- Starlight CSS variables are used throughout (e.g., `--sl-color-accent`, `--sl-color-gray-*`)

### Site Map

See [SITEMAP.md](./SITEMAP.md) for the full site structure with all pages and descriptions. **This file must be kept in sync whenever pages are added, removed, renamed, or moved.**

### Remark Plugins

- `plugins/remark-strip-dev-notes.mjs`: strips `:::caution[My Notes]` blocks from production builds. Dev notes are visible only during `npm run dev`.

## Documentation Writing Guidelines

Follow these conventions when creating or editing documentation pages. They ensure consistency across the site and make it possible for any session to produce docs that match the existing style.

### Page Structure

Every `.md` page follows this skeleton:

```markdown
---
title: Page Title
sidebar:
  label: "Page Title"
  order: 1
description: One-line summary for SEO and search results.
---

:::caution[My Notes]
Dev-only working notes (stripped in production by remark plugin).
:::

Opening paragraph: what is this thing, in one sentence.

## First Section
...

## What to Read Next

- [Related Page](/path/): why it's relevant
- [Another Page](/path/): what it covers
```

Key rules:
- **Never use the em dash (—)** anywhere in docs content, frontmatter or code comments. Use a colon, comma, period or parentheses instead. When editing an existing page, strip the em dashes you find.
- `description` is **required**: it appears in search results and meta tags.
- `:::caution[My Notes]` goes right after frontmatter. It's dev-only (stripped in prod).
- `<!-- TODO PHOTO -->` (an HTML comment) marks where a screenshot will be added later. This is the single source of truth for "needs a photo"; grep for it to find pending visuals.
- End pages with a "What to Read Next" section linking 3-5 related pages.

### Internal Linking & Backlinking

- **Link bidirectionally.** If page A mentions page B, page B should link back to A where relevant.
- **Use descriptive link text** matching the target page title: `[Flashcard Panel](/views/flashcard-panel/)`.
- **Don't duplicate links** to the same destination within one page (link once where it's most useful).
- **Explain briefly, link for depth.** If a concept can be covered in a sentence, write it inline. Link only when the reader needs a full page.
- **Cross-reference format:** "See [Page Title](/path/) for details" or "For more information, see [Page Title](/path/)."
- **Settings links:** When mentioning a setting path, link to the relevant config page at least once per page.
- **New pages:** When adding a new page, add backlinks from at least 2-3 related existing pages.

### Terminology

Use these terms consistently across all pages:

| Term | Convention |
|------|-----------|
| Product name | **True Recall** (bold on first mention per page) |
| Card states | Capitalized: New, Learning, Review, Relearning, Suspended |
| UI components | Proper nouns, bold on first mention: **Flashcard Panel**, **Selection Toolbar**, **Dashboard**, **Card Browser**, **Flashcard Editor** |
| Settings paths | Breadcrumb: `Settings → Section → "Option Name"` |
| Keyboard shortcuts | Both platforms: `Cmd/Ctrl + Key` |
| Algorithm | FSRS (expanded in Basic Concepts, no need to expand elsewhere) |
| Block format syntax | `#type/slug`, `---` separator, `<!-- source: -->` comment |

### Formatting

- **Bold**: UI element names, button labels, field names, product name on first mention
- `Backticks`: code, syntax, tags, file paths, keyboard keys
- *Italics*: emphasis on concepts (use sparingly)
- Code blocks: block format examples, command syntax
- Tables: temporary text mockups for UI layouts (will be replaced with screenshots)
- Short paragraphs: 3-4 sentences max before a section break

### Asides

```markdown
:::note[Title]     : important clarifications, caveats
:::tip[Title]      : productivity advice, workflow tips, personal recommendations
:::caution[Title]  : warnings, things that could go wrong
```

Use sparingly, max 2-3 per page. Too many asides create visual fatigue.

### Keeping Docs in Sync

- When a plugin feature changes, update **all** pages that reference it, not just the primary page.
- Update `SITEMAP.md` whenever pages are added, removed, or moved.
- After renaming or deleting a page, search for broken internal links (`grep` for the old path).
- Settings references (`Settings → ...`) must match the actual UI paths in the plugin source at `/Users/lukaszpiera/Projects/true-recall/true-recall` (tabs: General, FSRS, Data & Backup, Integrations, Features; feature names come from `packages/plugins/src/*/index.ts` `info.name`).
- Cross-reference the plugin code when documenting features to ensure accuracy.

## File Operations

Before editing or deleting documentation files, confirm with the user which files should be preserved. Never bulk-delete docs without explicit approval for each file/folder.

## Infrastructure

- **true-recall-proxy** runs on ZimaBlade (`ssh zimablade`). It is the proxy server used by the plugin.


## Deployment

This project uses Vercel for deployment. Changes must be committed AND pushed to trigger deploys. When users report stale content on production, first check git status and recent pushes before suggesting manual Vercel checks.

## Screenshots

Product screenshots are the main pending visual work. Track and add them like this:

- **Marker:** a page that needs a screenshot carries an HTML comment `<!-- TODO PHOTO -->` at the spot. Find all pending visuals with `grep -rn "TODO PHOTO" src/content/docs/`. (There is no sidebar-label suffix convention; an earlier `(P)` scheme was never actually used.)
- **Capture:** shoot in Obsidian's **dark theme** with a large, readable font, at 1920×1080 (see `VISUAL-CONTENT-TODO.md` for the per-view shot list and production notes).
- **Storage:** save under `src/assets/screenshots/<area>/<name>.png` (e.g. `src/assets/screenshots/review/session-complete.png`).
- **Embed:** plain Markdown from the page, with descriptive alt text and a relative path. From a page at `src/content/docs/<section>/<page>.md` the assets root is three levels up:

  ```markdown
  ![Review session complete screen with retention and time](../../../assets/screenshots/review/session-complete.png)
  ```

- **After adding one:** delete the matching `<!-- TODO PHOTO -->` marker and tick the item in `VISUAL-CONTENT-TODO.md`.
