import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getHtmlFiles } from '../../utils/vite-helper';

const editorPages = getHtmlFiles('./src/pages');

console.debug("Pages to be built: ", editorPages);

// https://vite.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  experimental: {
    enableNativePlugin: true,
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: editorPages,
      output: {
        dir: 'dist',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        manualChunks: {
          react: ['react', 'react-dom'],
          'tinymce': ['@tinymce/tinymce-react'],
        }
      }
    },
  },
  server: {
    open: './src/pages/wiki/index.html',
  },
})
