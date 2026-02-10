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

## Architecture

- **Framework**: Astro 5 with Starlight documentation theme + `starlight-theme-obsidian` plugin
- **Output**: Static site (`output: 'static'`) with Vercel adapter for deployment
- **Site URL**: https://truerecall.app

### Content

All documentation lives in `src/content/docs/` as `.md` or `.mdx` files. Each file maps to a route based on its path (e.g., `features/review-system.md` → `/features/review-system/`). The landing page is `src/content/docs/index.mdx` using Starlight's `splash` template.

### Sidebar

The sidebar is **manually configured** in `astro.config.mjs` — adding a new doc page requires adding its slug to the `sidebar` array in the Starlight config. Sections: Getting Started, Migration, Features, Views & Panels, Configuration, Reference, Advanced.

### Component Overrides

Two Starlight components are overridden in `src/components/starlight/`:
- **Header.astro** — custom header layout (removed nav links)
- **Head.astro** — injects Vercel Analytics and Speed Insights

### Styling

- Custom CSS: `src/styles/custom.css` (accent color `#7c3aed`, site title, hero, auth/dashboard styles)
- Starlight CSS variables are used throughout (e.g., `--sl-color-accent`, `--sl-color-gray-*`)
