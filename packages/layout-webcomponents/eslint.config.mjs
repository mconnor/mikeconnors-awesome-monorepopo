import astroConfig from '@repo/eslint-config/astro.lint.config';
// import tsLint from '@repo/eslint-config/ts.typeChecked.lint.config';
import tsLint from '@repo/eslint-config/ts.lint.config';
import typeCheckingDisable from '@repo/eslint-config/type-disable';

const config = [...tsLint, ...astroConfig, ...typeCheckingDisable];

export default config;
