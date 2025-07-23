import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    allowedHosts : ['all', '.ngrok-free.app', '8d3cef6c4ef4.ngrok-free.app'],
  }
})
