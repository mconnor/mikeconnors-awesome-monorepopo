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

  // {
  //   rules: {
  //     "@typescript-eslint/no-unused-vars": ["warn"],
  //     // "lit/no-invalid-html": "warn",
  //   },
  // },

  {
    ignores: ['dist', 'turbo'],
  },
];
