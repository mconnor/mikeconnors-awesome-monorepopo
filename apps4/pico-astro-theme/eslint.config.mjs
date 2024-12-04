// import tsLint from '@repo/eslint-config/ts-lint-type-check';
import astroConfig from '@repo/eslint-config/astro.lint.config';
import reactConfig from '@repo/eslint-config/react.lint.config';
import tsLint from '@repo/eslint-config/ts-lint';

export default [...tsLint, ...astroConfig, ...reactConfig];
