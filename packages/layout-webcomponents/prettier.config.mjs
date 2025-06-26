// prettier.config.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: [
    'prettier-plugin-astro',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tailwindStylesheet: './src/styles/global.css',
  singleQuote: true,
  experimentalTernaries: true,
};
