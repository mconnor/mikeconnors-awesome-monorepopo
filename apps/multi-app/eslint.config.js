import astroConfig from '@repo/eslint-config/astroLintConfig';
import eslintConfigPrettier from '@repo/eslint-config/eslintConfigPrettier';

export default [
  ...astroConfig,
  eslintConfigPrettier,
  {
    ignores: ['.prettierrc.mjs'],
  },
];
