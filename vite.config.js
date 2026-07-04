import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // three + r3f only ever load with the lazy hero scene
          three: ['three', '@react-three/fiber'],
        },
      },
    },
  },
})
