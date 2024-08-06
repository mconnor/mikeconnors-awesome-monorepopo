import config from '@repo/eslint-config/tsLintConfig.mjs';

export default [
  ...config,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
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
