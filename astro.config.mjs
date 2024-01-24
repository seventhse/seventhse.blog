import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import {remarkReadingTime} from "./plugins/remark-reading-time.mjs"
import { remarkModifiedTime } from './plugins/remark-modified-time.mjs';
import vercel from '@astrojs/vercel/static';


// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	server: {
		host: '0.0.0.0'
	},
	site: 'https://www.seasonblog.top',
	markdown: {
		remarkPlugins: [remarkReadingTime,remarkModifiedTime]		
	},
	integrations: [mdx(), sitemap(),tailwind()],
	devToolbar: {
		enabled: false
	},
	output: 'static',
	adapter: vercel({
		webAnalytics: {
      enabled: true,
    },
	}),
});
