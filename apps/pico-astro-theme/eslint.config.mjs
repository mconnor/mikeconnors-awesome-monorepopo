// import tsLint from '@repo/eslint-config/ts.typeChecked.lint.config';
import astroConfig from '@repo/eslint-config/astro.lint.config';
import reactConfig from '@repo/eslint-config/react.lint.config';
import tsLint from '@repo/eslint-config/ts-lint';

export default [...tsLint, ...astroConfig, ...reactConfig];
