import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: 'node_modules/.cacheDir',
  plugins: [
    vue(),
    federation({
      filename: "remoteEntry.js",
      name: "root_app",
      remotes: {
        product: {
          external: "Promise.resolve('http://localhost:4040/assets/remoteEntry.js')",
          externalType: "promise"
        }
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
        output: {
            minifyInternalExports: false
        }
    }
  }
})
