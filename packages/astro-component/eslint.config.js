import astroLintConfig from '@repo/eslint-config/astroLintConfig.js';

export default [
  ...astroLintConfig,
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
