// @ts-check

import config from '@repo/eslint-config/astro';
import regexConfig from '@repo/eslint-config/regex-config';
// import prettierConfig from 'eslint-config-prettier';

export default [
  ...config,
  ...regexConfig,

  // prettierConfig,
  {
    ignores: ['.prettierrc.mjs', 'config-eslint/', 'packages/'],
  },
];
