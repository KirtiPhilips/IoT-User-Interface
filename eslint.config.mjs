// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: ['node_modules/*', 'dist/*'],
  },
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          name: '@filament-icons/react',
          message:
            'Direct imports from @filament-icons/react are not allowed. Use @filament-icons/react/* instead.',
        },
        {
          name: '@filament/pictograms-react',
          message:
            'Direct imports from @filament/pictograms-react are not allowed. Use @filament/pictograms-react/* instead.',
        },
      ],
    },
  }
);
