import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/* export default defineConfig({
  plugins: [react()],
  
}) */
  export default defineConfig(({ mode }) => {
    if (mode === 'development') {
      return {
       base: '/',
       plugins: [react()]
      }
    } else {
      
      return {
        base: '/Portfolio/',
        plugins: [react()]
      }
    }
    
  })





