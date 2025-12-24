import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // <-- relative paths for assets
  plugins: [
    react(),
    tailwindcss(),
  ],
})
