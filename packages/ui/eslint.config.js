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
  // {
  //   rules: {
  //     "@typescript-eslint/no-unused-vars": ["warn"],
  //     // "lit/no-invalid-html": "warn",
  //   },
  // },

  {
    ignores: ['dist'],
  },
];
