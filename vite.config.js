import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  emptyOutDir: true,
  minify: true,
  build: {
    rollupOptions: {
      input: {
        main: 'src/index.html',
        credits: 'src/credits.html',
        download: 'src/download.html',
        features: 'src/features.html',
        updates: 'src/updates.html'
      },
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    outDir: '../build',
  },
})
