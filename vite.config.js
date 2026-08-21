import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 確保在 GitHub Pages 子路徑下資源皆能相對正確載入
  server: {
    port: 3000,
    open: true
  }
})
