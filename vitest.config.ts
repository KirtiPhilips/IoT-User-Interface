import { filament } from '@filament/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), filament({ enableCSSLayer: true })],
  ssr: {
    noExternal: ['@filament', '@filament-icons'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    alias: {
      'use-resize-observer': 'use-resize-observer/polyfilled',
    },
  },
});
