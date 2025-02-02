import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import ignoresConfig from './ignores.config.mjs';
const extraFileExtensions = ['.svelte', '.astro', '.md', '.mdx', 'vue'];

// export default [
//   // add more generic rule sets here, such as:
//   // js.configs.recommended,
//   ...eslintPluginAstro.configs.recommended,
//   {
//     rules: {
//       // override/add rules settings here, such as:
//       // "astro/no-set-html-directive": "error"
//     },
//   },
// ];

export default tseslint.config(ignoresConfig, {
  files: ['**/*.astro'],
  extends: [
    tseslint.configs.disableTypeChecked,
    ...eslintPluginAstro.configs.recommended,
  ],

  languageOptions: {
    parser: eslintPluginAstro.parser,
    parserOptions: {
      project: false,
      tsconfigRootDir: import.meta.dirname,
      extraFileExtensions,
      ecmaFeatures: {
        jsx: false,
      },
    },
  },
});
