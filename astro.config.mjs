// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian';
import vercel from '@astrojs/vercel';
import fs from 'node:fs';

// Fixes ?raw SVG imports from starlight-site-graph in Vite 6 dev mode.
// Vite 6 serves these as image/svg+xml instead of transforming to JS modules.
function siteGraphSvgRawPlugin() {
	return {
		name: 'fix-site-graph-svg-raw',
		enforce: /** @type {const} */ ('pre'),
		apply: /** @type {const} */ ('serve'),
		/** @param {string} id */
		load(id) {
			if (id.includes('starlight-site-graph') && id.includes('.svg') && id.includes('raw')) {
				const filePath = id.replace(/\?.*$/, '');
				try {
					const content = fs.readFileSync(filePath, 'utf-8');
					return `export default ${JSON.stringify(content)}`;
				} catch {
					return null;
				}
			}
			return null;
		},
	};
}

// https://astro.build/config
export default defineConfig({
	site: 'https://truerecall.app',
	output: 'static',
	adapter: vercel(),
	vite: {
		plugins: [siteGraphSvgRawPlugin()],
	},
	integrations: [
		starlight({
			title: 'True Recall',
			description: 'Spaced repetition for Obsidian with FSRS v6',
			plugins: [starlightThemeObsidian({
				graphConfig: {
					depth: -1,
				},
			})],
			components: {
				Header: './src/components/starlight/Header.astro',
				Head: './src/components/starlight/Head.astro',
			},
			logo: {
				src: './src/assets/simple-logo.svg',
				replacesTitle: false,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/pieralukasz/true-recall' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ slug: 'getting-started/introduction' },
						{ slug: 'getting-started/installation' },
						{ slug: 'getting-started/quick-start' },
					],
				},
				{
					label: 'Migration',
					items: [
						{ slug: 'migration/from-anki' },
						// { slug: 'migration/from-obsidian-to-anki' },
						// { slug: 'migration/from-remnote' },
						// { slug: 'migration/from-logseq' },
					],
				},
				{
					label: 'Features',
					items: [
						{ slug: 'features/basic-flashcards' },
						{ slug: 'features/cloze-deletions' },
						{ slug: 'features/reversed-cards' },
						{ slug: 'features/batch-adding' },
						{ slug: 'features/review-system' },
						{ slug: 'features/fsrs-algorithm' },

						{ slug: 'features/statistics' },
						{ slug: 'features/projects' },
						{ slug: 'features/anki-export' },
						{ slug: 'features/cloud-sync' },
					],
				},
				{
					label: 'Views & Panels',
					items: [
						{ slug: 'views/flashcard-panel' },
						{ slug: 'views/card-browser' },
						{ slug: 'views/review-view' },
						{ slug: 'views/statistics-view' },
						{ slug: 'views/session-builder' },

						{ slug: 'views/projects-view' },
						{ slug: 'views/fsrs-simulator' },
					],
				},
				{
					label: 'Configuration',
					items: [
						{ slug: 'configuration/general' },
						{ slug: 'configuration/scheduling' },
						{ slug: 'configuration/fsrs-parameters' },
						{ slug: 'configuration/data-backup' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ slug: 'reference/commands' },
						{ slug: 'reference/keyboard-shortcuts' },
						{ slug: 'reference/context-menu' },
					],
				},
				{
					label: 'Advanced',
					items: [
						{ slug: 'advanced/fsrs-optimization' },
						{ slug: 'advanced/easy-days' },
						{ slug: 'advanced/load-balancing' },
						{ slug: 'advanced/orphaned-cards' },
					],
				},
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
