/** @type {import('stylelint').Config} */

import stylelintConfig from 'stylelint-config-html';
import prettier from 'stylelint-prettier';

export default {
  extends: ['stylelint-config-html', 'stylelint-prettier'],
  stylelintConfig,
  prettier,
  rules: {
    'block-no-empty': true,
    'color-function-notation': ['modern'],
  },
};
