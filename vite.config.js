import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base './' keeps asset paths relative so the build works on GitHub Pages
// or any static host under a subpath.
export default defineConfig({
  plugins: [react()],
  base: './',
})
