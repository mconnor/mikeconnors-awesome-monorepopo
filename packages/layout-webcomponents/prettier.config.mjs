// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {

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
