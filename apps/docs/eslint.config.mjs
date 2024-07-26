import * as MyLints from '@repo/eslint-config';

export default [
  ...MyLints.tsLintConfigfrom,
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
