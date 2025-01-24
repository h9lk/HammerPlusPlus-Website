import { defineConfig } from 'vite'
const path = 'src';

export default defineConfig({
  root: path,
  emptyOutDir: true,
  minify: true,
  build: {
    rollupOptions: {
      input: {
        main: `${path}/index.html`,
        credits: `${path}/credits.html`,
        download: `${path}/download.html`,
        features: `${path}/features.html`,
        updates: `${path}/updates.html`
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    },
    outDir: '../build',
  },
})
