import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  build: {
    outDir: 'docs',
  },
  base: '/Portfolio/',
})

// I have tried to change the base to /Portfolio/ and /Portfolio/index.html but it doesn’t work.





