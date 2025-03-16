/** @type {import('stylelint').Config} */

import stylelintConfig from 'stylelint-config-html';

export default {
  extends: ['stylelint-config-html', 'stylelint-prettier'],
  ...stylelintConfig,
  rules: {
    'block-no-empty': true,
    'color-function-notation': ['modern'],
  },
};
