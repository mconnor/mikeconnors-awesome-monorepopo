import eslintConfigPrettier from '@repo/eslint-config/eslintConfigPrettier';
import astroConfig from '@repo/eslint-config/astroLintConfig';
export default [
  ...astroConfig,
  {
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  eslintConfigPrettier,
];
