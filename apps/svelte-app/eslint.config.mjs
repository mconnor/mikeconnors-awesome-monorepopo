import tsLint from '@repo/eslint-config/ts-lint';

import svelteConfig from '@repo/eslint-config/svelte';
// import reactConfig from '@repo/eslint-config/react';
// import svelte from '@repo/eslint-config/svelte';

export default [...tsLint, ...svelteConfig];
