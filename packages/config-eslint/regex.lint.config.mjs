// @ts-check

import * as regexpPlugin from 'eslint-plugin-regexp';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  {
    ...regexpPlugin.configs['flat/recommended'],
    rules: {
      // Override/add rules settings here, such as:
      'regexp/no-useless-escape': 'warn',
    },
  },
];
