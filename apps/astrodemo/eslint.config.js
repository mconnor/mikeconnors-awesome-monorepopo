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
    ignores: [
      '**/_*.*',
      '**/temp.js',
      '*.config.*',
      'dist/',
      'my-custom-cache-directory',
      '**/env.d.ts',
      '.*',
      'src/pages/demo/',
    ],
  },
];
