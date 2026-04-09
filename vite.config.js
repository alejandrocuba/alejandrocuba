import pug from '@vituum/vite-plugin-pug';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vituum from 'vituum';

export default defineConfig({
  plugins: [
    vituum(),
    pug(),
  ],
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: 'dist',
    assetsDir: '',
    emptyOutDir: true,
    rollupOptions: {
      input: ['index.pug']
    }
  },
  resolve: {
    alias: {
      '/sources': resolve(__dirname, 'sources'),
      '/assets': resolve(__dirname, 'public/assets'),
    },
  },
});
