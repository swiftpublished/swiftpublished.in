import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { siteConfig } from './src/data/site.config'

// https://astro.build/config
export default defineConfig({
	site: siteConfig.site,
	image: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'res.cloudinary.com' },
			{ protocol: 'https', hostname: '**.amazonaws.com' },
			{ protocol: 'https', hostname: 'swiftpublished.com' },
			{ protocol: 'https', hostname: 'miro.medium.com' }
		]
	},
	markdown: {
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	integrations: [
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				experimentalThemes: {
					light: 'vitesse-light',
					dark: 'material-theme-palenight',
				  },
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		tailwind()
	]
})
