import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
  server: {
    host: '0.0.0.0',
    allowedHosts: ['tzeusy.parrot-hen.ts.net'],
  },
})