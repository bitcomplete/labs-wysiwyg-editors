import { defineConfig } from 'vite'

export default defineConfig({
   base: "./",
    build: {
        ignore: ['src/prosemirror.js'],
    }
});