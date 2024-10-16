// import tsLint from '@repo/eslint-config/ts-lint';
import tsLint from '@repo/eslint-config/ts-lint-type-check';
import astroConfig from '@repo/eslint-config/astro';
import reactConfig from '@repo/eslint-config/react';
import eslintConfigPrettier from '@repo/eslint-config/prettier';
import jsonConfig from '@repo/eslint-config/json';
// import regexConfig from '@repo/eslint-config/regex';

export default [
  ...tsLint,
  ...astroConfig,
  ...reactConfig,
  ...jsonConfig,
  eslintConfigPrettier,
];
