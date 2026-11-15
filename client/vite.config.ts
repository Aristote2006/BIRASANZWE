import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

const SPA_ROUTES = [
  'about',
  'projects',
  'projects/birasanzwe-rwanda-tour-edition-1',
  'projects/birasanzwe-rwanda-tour',
  'impact',
  'get-involved',
  'get-involved/partner',
  'get-involved/volunteer',
  'support-us',
  'contact',
  'contact-us',
  'privacy-policy',
  'terms-of-use',
]

/**
 * Generates `200.html`, `404.html`, and `<route>/index.html` copies of `dist/index.html`
 * at build time so refreshing any route works out-of-the-box on every static host
 * (Render, Netlify, Vercel, Cloudflare Pages, GitHub Pages, or plain static servers).
 */
function spaFallbackPlugin(): Plugin {
  return {
    name: 'birasanzwe-spa-fallback',
    apply: 'build',
    closeBundle() {
      const distDir = fileURLToPath(new URL('./dist', import.meta.url))
      const indexHtml = resolve(distDir, 'index.html')
      if (!existsSync(indexHtml)) return

      copyFileSync(indexHtml, resolve(distDir, '200.html'))
      copyFileSync(indexHtml, resolve(distDir, '404.html'))

      for (const route of SPA_ROUTES) {
        const routeDir = resolve(distDir, route)
        mkdirSync(routeDir, { recursive: true })
        copyFileSync(indexHtml, resolve(routeDir, 'index.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallbackPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
    rolldownOptions: {
      output: {
        // Hashed file names allow long-term immutable caching (see public/_headers).
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/static/[name]-[hash][extname]',
        // Split stable vendor code into its own long-cacheable chunks.
        codeSplitting: {
          groups: [
            { name: 'react', test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
            { name: 'router', test: /node_modules[\\/]react-router/ },
            { name: 'motion', test: /node_modules[\\/](motion|motion-dom|motion-utils|framer-motion)[\\/]/ },
          ],
        },
      },
    },
  },
})
