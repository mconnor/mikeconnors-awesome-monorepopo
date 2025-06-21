// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-svelte',
    'prettier-plugin-vue',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
        bracketSameLine: false,
      },
    },
    {
      files: '*.vue',
      options: {
        parser: 'vue',
        vueExcludeBlocks: ['style', 'template'],
      },
    },
    // Package-specific TailwindCSS configs
    {
      files: ['packages/ui-components/astro-ui/**/*'],
      options: {
        tailwindStylesheet: './packages/ui-components/astro-ui/src/styles.css',
      },
    },
    {
      files: ['apps/mike-blog/**/*'],
      options: {
        tailwindStylesheet: './apps/mike-blog/src/styles/global.css',
      },
    },
  ],
  singleQuote: true,
  experimentalTernaries: true,
};
