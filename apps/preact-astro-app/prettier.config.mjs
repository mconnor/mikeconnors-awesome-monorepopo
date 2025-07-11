// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['@prettier/plugin-oxc', 'prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  singleQuote: true,
  experimentalTernaries: true,
};
