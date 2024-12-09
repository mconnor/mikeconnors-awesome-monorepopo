// @ts-check
import prettier from 'eslint-plugin-prettier';

import pluginVue from 'eslint-plugin-vue';

export default [...pluginVue.configs['flat/recommended'], prettier];
