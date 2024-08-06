import astroLintConfig from '@repo/eslint-config/astroLintConfig.js';

export default [
  ...astroLintConfig,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      'no-constant-binary-expression': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
    },
  },

  {
    ignores: [
      '*.config.*',
      '.dist',
      'turbo',
      '**/_*.*',
      '**/temp.js',
      '.*',
      '**/*.d.ts',
    ],
  },
];
