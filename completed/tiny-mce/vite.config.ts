import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getHtmlFiles } from '../../utils/vite-helper';

const editorPages = getHtmlFiles('./src/pages');

console.debug("Pages to be built: ", editorPages);

// https://vite.dev/config/
export default defineConfig({
  root: './src',
  base: "",
  plugins: [react()],
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
        manualChunks: {
          react: ['react', 'react-dom'],
          'tinymce': ['@tinymce/tinymce-react'],
        }
      }
    },
  },
  server: {
    open: './pages/wiki/index.html',
  },
})
