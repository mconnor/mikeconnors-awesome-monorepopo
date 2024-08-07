// @ts-check

import tseslint from 'typescript-eslint';
import tsLintConfig from './tsLintConfig.mjs';

const reactSimple = tseslint.config(tsLintConfig);

export default reactSimple;
