import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  experimental: {
        enableNativePlugin: true,
  },
  plugins: [react()],
  base: './',
})
