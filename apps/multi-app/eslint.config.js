import astroConfig from '@repo/eslint-config/astro';
import reactConfig from '@repo/eslint-config/react';

import eslintConfigPrettier from '@repo/eslint-config/prettier-config';

export default [
  ...astroConfig,

  {
    ...reactConfig,
    rules: {
      'react/no-unknown-property': ['error', { ignore: ['class'] }],
    },
  },
  eslintConfigPrettier,
  {
    ignores: ['.prettierrc.mjs'],
  },
];
