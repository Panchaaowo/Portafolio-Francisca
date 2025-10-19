// vite.config.ts
import { defineConfig } from 'vite'                    // 👈 de 'vite' (NO de 'vitest/config')
import react from '@vitejs/plugin-react'
import { reactRouter } from '@react-router/dev/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    reactRouter(),                                      // 👈 necesario para `react-router dev`
  ],
  // FIX Windows: desactiva la lista estricta de paths
  server: {
    fs: {
      strict: false,                                    // 👈 evita "outside of Vite serving allow list"
    },
  },
})
