import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,

    rollupOptions: {
      input: "./src/main.tsx",
      output: {
        entryFileNames: "assets/[name]_v1.js"
      },
    },

    sourcemap: true
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    }
  }
})
