import astroConfig from '@repo/eslint-config/astro.lint.config';
// import reactConfig from '@repo/eslint-config/react.lint.config';
// import svelte from '@repo/eslint-config/svelteApp.lint.config';
import tsLint from '@repo/eslint-config/ts.lint.config';
// import vueConfig from '@repo/eslint-config/vue.lint.config';

export default [
  ...tsLint,
  ...astroConfig,
  // ...reactConfig,
  // ...svelte,
  // ...vueConfig,
];
