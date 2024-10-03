// @ts-check

import markdown from 'eslint-plugin-markdown';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    plugins: {
      markdown,
    },
  },
  {
    files: ['**/*.md'],
    processor: 'markdown/markdown',
  },
  {
    files: ['**/*.md/*.js'],
    ...tseslint.configs.disableTypeChecked,
    // ...
    rules: {
      'no-console': 'off',
      'import/no-unresolved': 'off',
    },
  },

  {
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },

  {
    ignores: [
      '**/temp.js',
      'dist/',
      '**/*.d.ts',
      '*.config.js',
      '*.config.mjs',
      '.prettierrc.mjs',
      '.vercel/',
    ],
  },
);
