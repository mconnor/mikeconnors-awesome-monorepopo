// import tsLint from '@repo/eslint-config/ts-lint';
import tsLint from '@repo/eslint-config/ts-lint-type-check';
import astroConfig from '@repo/eslint-config/astro';
import litConfig from '@repo/eslint-config/lit-config';
import eslintConfigPrettier from '@repo/eslint-config/prettier';

export default [...tsLint, ...astroConfig, ...litConfig, eslintConfigPrettier];
