import astroConfig from '@repo/eslint-config/astroLint';
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
