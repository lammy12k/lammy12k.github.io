// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import astroExpressiveCode from 'astro-expressive-code';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
	site: 'https://lammy12k.github.io',
	
	integrations: [
		astroExpressiveCode({
			themes: ['github-dark'],
		}),
		sitemap()
	],
	
	vite: {
		plugins: [
			tailwindcss(),
			ViteImageOptimizer({
				png: { quality: 80 },
				jpeg: { quality: 75 },
				webp: { quality: 80 },
				avif: { quality: 70 },
				svg: {
					plugins: [
						{ name: 'removeViewBox', active: false },
						{ name: 'sortAttrs', active: true }
					]
				}
			})
		],
	}
});
