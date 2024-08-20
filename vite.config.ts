import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import inject from "@rollup/plugin-inject";
// import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  // provite jquery
  plugins: [
    react(),
  ],
  define: {
    config: JSON.stringify({
      publicPath: "/",
      apiUri: ""
    })
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  // server: {
  //   port: 3002,
  //   open: '/',
  // },
  build: {
    outDir: 'dist',
    assetsDir: 'js',
    rollupOptions: {
      input: new URL('./src/index.js', import.meta.url).pathname,
    }
  },
})