import config from '@repo/eslint-config/astroLintConfig.mjs';
import markdownConfig from '@repo/eslint-config/lintMarkdown.config.mjs';
export default [
  ...config,
  ...markdownConfig,
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
