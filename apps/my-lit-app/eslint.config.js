import astroConfig from '@repo/eslint-config/astro';
import tsLit from '@repo/eslint-config/lit-config';
import eslintConfigPrettier from '@repo/eslint-config/prettier-config';

export default [...astroConfig, ...tsLit, eslintConfigPrettier];
