import path from 'path'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  base: './',
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001',
        changeOrigin: true,
      },
    },
  },
  plugins: [vue(), vueJsx()],
})
