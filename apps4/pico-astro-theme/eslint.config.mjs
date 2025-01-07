// import tsLint from '@repo/eslint-config/ts-lint';
import astroConfig from '@repo/eslint-config/astroLint';
import reactConfig from '@repo/eslint-config/react.lint.config';
import tsLint from '@repo/eslint-config/ts-lint';

export default [...tsLint, ...astroConfig, ...reactConfig];
