import astroConfig from '@repo/eslint-config/astroLintConfig';

export default [
  ...astroConfig,
  {
    ignores: ['.prettierrc.mjs'],
  },
];