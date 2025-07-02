import { filament } from '@filament/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(
  defineConfig({
    plugins: [
      checker({ typescript: true }),
      react(),
      tsconfigPaths(),
      filament({ enableCSSLayer: true }),
    ],
  })
);
