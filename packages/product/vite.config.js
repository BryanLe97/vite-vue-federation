import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      filename: "remoteEntry.js",
      name: "product",
      shared: ["vue"],
      exposes: {
        "./App": "./src/App.vue",
      },
    }),
  ],
  build: {
    target: 'esnext',
    assetsInlineLimit: 40960,
    minify: true,
    cssCodeSplit: false,
    sourcemap:true,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      }
    }
  }
})
