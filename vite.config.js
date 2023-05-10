import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';

export default defineConfig({
	root: './src',
	build: {
		manifest: true,
	},
	base: '/vite-project/',
	plugins: [
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
	],
});
