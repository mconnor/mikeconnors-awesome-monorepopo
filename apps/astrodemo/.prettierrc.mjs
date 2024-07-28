/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        astroAllowShorthand: false,
      },
    },
  ],
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
};
