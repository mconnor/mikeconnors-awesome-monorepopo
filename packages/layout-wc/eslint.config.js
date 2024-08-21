import eslintConfigPrettier from '@repo/eslint-config/prettier-config';
import astroConfig from '@repo/eslint-config/astro';
import typeCheckingDisable from '@repo/eslint-config/type-disable';

export default [...astroConfig, ...typeCheckingDisable, eslintConfigPrettier];
