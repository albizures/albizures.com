import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';
import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';
import { unified } from '@astrojs/markdown-remark';
import { SITE } from './src/config';

// https://astro.build/config
export default defineConfig({
	site: SITE.website,
	integrations: [sitemap(), icon()],
	markdown: {
		processor: unified({
			remarkPlugins: [
				remarkToc,
				[
					remarkCollapse,
					{
						test: 'Table of contents',
					},
				],
			],
		}),
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
	fonts: [{
		provider: fontProviders.fontsource(),
		name: "Inter",
		cssVariable: "--font-inter",
	}]
});
