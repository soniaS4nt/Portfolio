import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@context': path.resolve(__dirname, './src/context'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@models': path.resolve(__dirname, './src/models'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@validations': path.resolve(__dirname, './src/validations'),
		},
	},
	plugins: [react()],
})
