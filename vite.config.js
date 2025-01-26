import { defineConfig } from 'vite'
const path = 'src';

export default defineConfig({
  root: path,
  emptyOutDir: true,
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
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'script.css') {
            return 'css/style.css';
          }
          return `img/${assetInfo.name}`;
        },
      }
    },
    outDir: '../build',
  },
})
