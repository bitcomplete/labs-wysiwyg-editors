import { defineConfig } from 'vite'

export default defineConfig({
    experimental: {
        enableNativePlugin: true,
    },
   base: "./",
    build: {
        ignore: ['src/prosemirror.js'],
    }
});