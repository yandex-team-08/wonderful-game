import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
  ssr: {
    format: 'cjs',
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT || 3001,
    __API_SERVER_HOST__: `'${process.env.SERVER_HOST}'` || '',
  },
  build: {
    ssr: true,
    lib: {
      entry: path.resolve(__dirname, 'ssr.tsx'),
      name: 'Client',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'dist-ssr',
      },
    },
  },
});
