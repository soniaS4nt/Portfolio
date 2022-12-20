import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/* export default defineConfig({
    base: '/Portfolio/',
    
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





