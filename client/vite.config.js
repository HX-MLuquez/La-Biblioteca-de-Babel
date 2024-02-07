import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Evitar que Vite busque automáticamente favicon.ico
    watch: {
      exclude: ['**/favicon.ico']
    }
  }
})
