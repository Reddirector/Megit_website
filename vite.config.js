import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Megit_website/',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0
  }
})
