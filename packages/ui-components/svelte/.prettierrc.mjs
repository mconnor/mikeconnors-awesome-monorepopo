// .prettierrc.mjs
/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-svelte'],
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
        bracketSameLine: false,
      },
    },
  ],
  singleQuote: true,
  experimentalTernaries: true,
};

export default config;
