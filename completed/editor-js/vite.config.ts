import { defineConfig } from 'vite'
import { getHtmlFiles } from '../../utils/vite-helper'

const editorPages = getHtmlFiles('./src/pages')

export default defineConfig({
    root: './src',
    base: '',
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
        open: './pages/basic/index.html',
    },
})
