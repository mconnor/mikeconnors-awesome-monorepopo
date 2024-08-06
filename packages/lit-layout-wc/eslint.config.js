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
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
