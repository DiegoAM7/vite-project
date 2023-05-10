import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';

export default defineConfig({
	root: './src',
	build: {
		outDir: './dist',
		manifest: true,
	},
	base: '/vite-project/',
});
