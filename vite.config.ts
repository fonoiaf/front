import path from 'path';
import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ----------------------------------------------------------------------

const PORT = 3039;

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
        dev: { logLevel: ['error'] },
      },
      overlay: {
        position: 'tl',
        initialIsOpen: false,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1'),
      },
      {
        find: '#/translations',
        replacement: path.resolve(__dirname, 'src/translations'),
      },
      {
        find: '#/components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '#/layouts',
        replacement: path.resolve(__dirname, 'src/layouts'),
      },
      {
        find: '#/models',
        replacement: path.resolve(__dirname, 'src/models'),
      },
      {
        find: '#/hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
      {
        find: '#/pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '#/theme',
        replacement: path.resolve(__dirname, 'src/theme'),
      },
      {
        find: '#/utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
      {
        find: '#',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  server: { port: PORT, host: true },
  preview: { port: PORT, host: true },
});
