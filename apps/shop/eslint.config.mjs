import astroConfig from '@repo/eslint-config/astro.lint.config';
import tsLint from '@repo/eslint-config/ts.typeChecked.lint.config';

export default [
  ...tsLint,
  ...astroConfig,

  {
    rules: {
      'no-useless-escape': 'warn',
    },
  },
];
