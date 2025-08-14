import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/api-solutions-clear-like-web-app/',
  plugins: [react()],
})