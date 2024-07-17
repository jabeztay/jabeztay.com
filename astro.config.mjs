import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jabeztay.com',
	integrations: [
		starlight({
			title: 'Jabez Tay',
			social: {
				github: 'https://github.com/jabeztay/',
				linkedin: 'https://linkedin.com/in/jabeztay/',
			},
			sidebar: [
				{ label: 'About', link: '/about' },
				{ label: 'Resources', link: '/resources' },
				{
					label: 'OSCP Checklist',
					link: '/oscp-checklist',
					badge: { text: 'Unmaintained', variant: 'danger' },
				},
			],
		}),
	],
});
