//import tsLint from '@repo/eslint-config/ts-lint';
import tsLint from '@repo/eslint-config/ts-lint-type-check';

import astro from '@repo/eslint-config/astro';

export default [...tsLint, ...astro];
