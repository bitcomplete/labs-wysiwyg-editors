import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getHtmlFiles } from '../../utils/vite-helper'

const editorPages = getHtmlFiles('./src/pages')

export default defineConfig({
    base: '',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: editorPages,
            output: {
                dir: 'dist',
            },
        },
    },
    plugins: [react()],
    server: {
        open: './src/pages/full/index.html',
    },
})
