import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/Portfolio/',
    assetsInclude: ['src/assets', 'src/assets/**/*'],
    publicDir: 'src/assets',
    /* build: {
    if (mode === 'production') {
      return {
        base: '/Portfolio/',
      }
    } else{
      return {
        base: '/',
      }
      
    } */
  })







