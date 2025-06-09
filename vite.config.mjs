// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0', // Makes it accessible externally
    port: 5173,       // Or any port you prefer
    open: true, // auto-open in browser
  },
});