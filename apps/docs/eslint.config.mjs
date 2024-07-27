import tsLintConfig from '@repo/eslint-config/tsLintConfig.js';

export default [
  ...tsLintConfig,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: ['dist', 'turbo'],
  },
];
