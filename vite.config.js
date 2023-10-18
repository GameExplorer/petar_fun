import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // This is the path to the tailwind.config.js file
      '@': path.resolve(__dirname, './src'),
    },
  }
})
