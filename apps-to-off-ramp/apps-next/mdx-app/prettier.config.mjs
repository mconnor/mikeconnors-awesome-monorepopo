/** @type {import("prettier").Config} */
export default {
  // Core formatting options

  // Plugins for Next.js and MDX
  plugins: ['prettier-plugin-tailwindcss'],

  // File-specific overrides
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
        jsxSingleQuote: true,
      },
    },
    {
      files: ['*.mdx'],
      options: {
        parser: 'mdx',
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'ignore',
      },
    },
    {
      files: ['*.json'],
      options: {
        parser: 'json',
     
      },
    },
    {
      files: ['*.md'],
      options: {
        parser: 'markdown',
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'ignore',
      },
    },
  ],

  // TailwindCSS plugin configuration
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  tailwindAttributes: ['class', 'className', 'tw'],
};
