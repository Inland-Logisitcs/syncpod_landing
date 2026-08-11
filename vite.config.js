import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

// Routes that must resolve with a real HTTP 200 instead of relying on the
// 404.html SPA redirect. GitHub Pages serves `dist/<route>/index.html`
// directly for these, so the URL never returns a 404 status.
//
// This matters for `/terms`: it is submitted to App Store Connect as the Terms
// of Use and Privacy Policy URL, and a 404 status can fail Apple's link
// validation even though a browser renders the page fine after the redirect.
const prerenderedRoutes = ['terms', 'about', 'contact']

/**
 * Copies the built index.html into each route directory so GitHub Pages can
 * serve it directly. React Router then renders the matching page as usual.
 */
function staticRouteEntries() {
  return {
    name: 'static-route-entries',
    apply: 'build',
    closeBundle() {
      const outDir = resolve(__dirname, 'dist')
      const source = resolve(outDir, 'index.html')

      for (const route of prerenderedRoutes) {
        const dir = resolve(outDir, route)
        mkdirSync(dir, { recursive: true })
        copyFileSync(source, resolve(dir, 'index.html'))
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), staticRouteEntries()],
  base: '/',
})
