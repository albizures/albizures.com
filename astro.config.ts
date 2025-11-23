import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import remarkCollapse from 'remark-collapse'
import remarkToc from 'remark-toc'
import { SITE } from './src/config'

// https://astro.build/config
export default defineConfig({
	site: SITE.website,
	integrations: [
		sitemap(),
		icon(),
	],
	markdown: {
		remarkPlugins: [
			remarkToc,
			[remarkCollapse, {
				test: 'Table of contents',
			}],
		],
		shikiConfig: {
			theme: 'monokai',
			wrap: true,
		},
	},
	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			exclude: ['@resvg/resvg-js'],
		},
	},
	scopedStyleStrategy: 'where',
})
