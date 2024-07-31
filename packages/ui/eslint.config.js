import tsLintConfig from '@repo/eslint-config/tsLintConfig.js';

export default [
  ...tsLintConfig,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
