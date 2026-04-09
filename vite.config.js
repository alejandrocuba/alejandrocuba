import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug-transformer';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    pugPlugin({
      // Basedir for pug includes/extends
      basedir: resolve(__dirname, 'sources/html')
    }),
  ],
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'sources/html/index.pug'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'sources'),
    },
  },
});
