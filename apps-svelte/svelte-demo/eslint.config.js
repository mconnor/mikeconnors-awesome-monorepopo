// import prettier from 'eslint-config-prettier';
// import js from '@eslint/js';
// import { includeIgnoreFile } from '@eslint/compat';
import svelte from 'eslint-plugin-svelte';
// import globals from 'globals';
// import { fileURLToPath } from 'node:url';
// import ts from 'typescript-eslint';

import svelteConfig from './svelte.config.js';

// const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));
import tseslint from 'typescript-eslint';
import tsLint from '@repo/eslint-config/ts-lint';

const config = tseslint.config(
	// includeIgnoreFile(gitignorePath),
	// js.configs.recommended,
	// ...ts.configs.recommended,
	...svelte.configs.recommended,
	// prettier,
	...svelte.configs.prettier,
	// {
	// 	languageOptions: {
	// 		globals: { ...globals.browser, ...globals.node }
	// 	},
	// 	rules: { 'no-undef': 'off' }
	// },
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: tseslint.parser,
				svelteConfig,
			},
		},
	},
);

export default [...tsLint, ...config];
