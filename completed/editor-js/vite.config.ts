import path from 'path'
import { defineConfig } from 'vite'
import { getHtmlFiles } from '../../utils/vite-helper'

const editorPages = getHtmlFiles('./src/pages')

export default defineConfig({
    root: './src',
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
    server: {
        open: './pages/full/index.html',
    },
})
