// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const LIBRARY_VERSION = '5.3.0';

// https://astro.build/config
export default defineConfig({
	site: 'https://ts-yt-music-unofficial.vercel.app/',
	integrations: [
		starlight({
			title: `ts-ytmusic-api Docs v${LIBRARY_VERSION}`,
			description:
				'Official documentation for ts-ytmusic-api-unofficial, a type-safe YouTube Music API wrapper.',
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/zS1L3NT/ts-npm-ytmusic-api/edit/main/',
			},
			pagefind: true,
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/zS1L3NT/ts-npm-ytmusic-api' }, { icon: 'npm', label: 'npm', href: 'https://www.npmjs.com/package/ytmusic-api' }],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'API Reference',
					autogenerate: { directory: 'api' },
				},
				{
					label: 'TypeScript',
					autogenerate: { directory: 'typescript' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Troubleshooting',
					autogenerate: { directory: 'troubleshooting' },
				},
				{
					label: 'Limitations',
					autogenerate: { directory: 'limitations' },
				},
			],
		}),
	],
});
