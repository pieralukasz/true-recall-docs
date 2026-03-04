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
			description: 'Spaced repetition for Obsidian with FSRS v6',
			plugins: [starlightThemeObsidian({
				graph: true,
				graphConfig: {
					depth: -1,
					renderUnresolved: false,
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
			sidebar: [],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
