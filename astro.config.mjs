// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	site: 'https://truerecall.app',
	output: 'static',
	adapter: vercel(),
	integrations: [
		starlight({
			title: 'True Recall',
			description: 'AI-powered flashcard generation and spaced repetition for Obsidian',
			plugins: [starlightThemeObsidian()],
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
					label: 'Features',
					items: [
						{ slug: 'features/ai-generation' },
						{ slug: 'features/review-system' },
						{ slug: 'features/fsrs-algorithm' },
						{ slug: 'features/card-browser' },
						{ slug: 'features/statistics' },
						{ slug: 'features/projects' },
						{ slug: 'features/cloud-sync' },
					],
				},
				{
					label: 'Views & Panels',
					items: [
						{ slug: 'views/flashcard-panel' },
						{ slug: 'views/review-view' },
						{ slug: 'views/statistics-view' },
						{ slug: 'views/session-builder' },
						{ slug: 'views/card-browser' },
						{ slug: 'views/projects-view' },
						{ slug: 'views/fsrs-simulator' },
					],
				},
				{
					label: 'Configuration',
					items: [
						{ slug: 'configuration/general' },
						{ slug: 'configuration/ai-settings' },
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
