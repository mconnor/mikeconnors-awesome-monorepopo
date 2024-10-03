import tseslint from 'typescript-eslint';
import * as regexpPlugin from 'eslint-plugin-regexp';

export default tseslint.config(regexpPlugin.configs['flat/recommended']);
