import markdown from 'eslint-plugin-markdown';

export default [
  {
    plugins: {
      markdown,
      // jsxA11y,
    },
  },
  {
    files: ['**/*.md'],
    processor: 'markdown/markdown',
  },
];
