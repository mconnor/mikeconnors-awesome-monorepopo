import js from '@eslint/js';
import solid from 'eslint-plugin-solid/configs/recommended';
import { defineConfig } from 'eslint/config';
export default defineConfig([
  js.configs.recommended, // replaces eslint:recommended
  solid,
]);
