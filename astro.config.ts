import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import remarkToc from 'remark-toc'
import remarkCollapse from 'remark-collapse'
import icon from 'astro-icon'
import { SITE } from './src/config'

// https://astro.build/config
export default defineConfig({
	site: SITE.website,
	integrations: [tailwind({
		applyBaseStyles: false,
	}), react(), sitemap(), icon()],
	markdown: {
		remarkPlugins: [remarkToc, [remarkCollapse, {
			test: 'Table of contents',
		}]],
		shikiConfig: {
			theme: 'monokai',
			wrap: true,
		},
	},
	vite: {
		optimizeDeps: {
			exclude: ['@resvg/resvg-js'],
		},
	},
	scopedStyleStrategy: 'where',
})
