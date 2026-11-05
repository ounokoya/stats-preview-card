import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// base : le site est servi par GitHub Pages sous /stats-preview-card/
export default defineConfig({ base: '/stats-preview-card/', plugins: [tailwindcss()] })
