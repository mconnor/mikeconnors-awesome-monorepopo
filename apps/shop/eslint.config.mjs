import astroConfig from '@repo/eslint-config/astroLint';
import tsLint from '@repo/eslint-config/ts.typeChecked.lint.config';
import eslintConfigPrettier from '@repo/eslint-config/prettier';

const config = [
  ...tsLint,
  ...astroConfig,

  {
    rules: {
      'no-useless-escape': 'warn',
    },
  },
  eslintConfigPrettier,
];

export default config;
