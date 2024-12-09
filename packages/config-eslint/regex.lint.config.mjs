// @ts-check

import * as regexpPlugin from 'eslint-plugin-regexp';

export default [
  {
    ...regexpPlugin.configs['flat/recommended'],
    rules: {
      // Override/add rules settings here, such as:
      'regexp/no-useless-escape': 'warn',
    },
  },
];
