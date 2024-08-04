import tsLintConfig from '@repo/eslint-config/tsLintConfig.js';

export default [
  ...tsLintConfig,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
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
