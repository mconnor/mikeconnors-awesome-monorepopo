// import tsLint from '@repo/eslint-config/ts-lint';
import tsLint from '@repo/eslint-config/ts-lint-type-check';
import astroConfig from '@repo/eslint-config/astro';
import markdownConfig from '@repo/eslint-config/markdown';
// import jsonConfig from '@repo/eslint-config/json';
import regexConfig from '@repo/eslint-config/regex';

export default [
  ...tsLint,
  ...astroConfig,
  ...markdownConfig,
  ...regexConfig,
  {
    rules: {
      'no-useless-escape': 'warn',
    },
  },
];
