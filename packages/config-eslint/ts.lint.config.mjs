// @ts-check
import 'eslint-plugin-only-warn';
import js from '@eslint/js';

// import eslintPluginImport from 'eslint-plugin-import';
// import barrelFiles from 'eslint-plugin-barrel-files';
import eslintPluginAstro from 'eslint-plugin-astro';
// import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';

// import onlyWarn from 'eslint-plugin-only-warn';
import tseslint from 'typescript-eslint';

import astroParser from 'astro-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import globals from 'globals';
import ignoresConfig from './ignores.config.mjs';

import extensionInstanceObj from './fileExtensions.mjs';
const extraFileExtensions = extensionInstanceObj.getExtensions();

export default tseslint.config(
  // @ts-ignore
  ignoresConfig,
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,

  {
    name: '[*] TS Rules',

    languageOptions: {
      ecmaVersion: 'latest',
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        projectService: {
          allowDefaultProject: ['*.js'],
        },
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'capitalized-comments': 'off',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'warn',

      // 'import/named': 'warn',
      // 'import/namespace': 'warn',
      // 'import/default': 'off',
      // 'import/no-named-as-default-member': 'warn',
      // 'import/no-unresolved': 'warn',
      // 'import/no-named-as-default': 'warn',
      // 'import/no-cycle': 'warn',
      // 'import/no-unused-modules': 'warn',
      // 'import/no-deprecated': 'warn',
    },
  },

  {
    name: '[*] tseslint: disabled files',
    files: ['**/*.astro'],
    extends: [
      eslintPluginAstro.configs.recommended,
      tseslint.configs.disableTypeChecked,
    ],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        allowDefaultProject: ['*.astro'],
        ecmaFeatures: {
          jsx: false,
        },
        // tsconfigRootDir: import.meta.dirname,
        // project: [
        //   '../apps/*/tsconfig.json',
        //   '../packages/*/tsconfig.json',
        //   '../packages/ui-components/*tsconfig.json',
        // ],
        extraFileExtensions,
      },
    },
  },
  {
    name: '[*] .d.ts files',
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-definitions': 'warn',
    },
  },
  {
    files: ['**/actions/*.ts'],
    rules: {
      '@typescript-eslint/no-misused-promises': 'warn',
    },
  },

  {
    name: '[*] js files',
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  // ,
  // {
  //   files: ['**/*.ts'],
  //   extends: [
  //     tseslint.configs.recommendedTypeChecked,
  //     tseslint.configs.stylisticTypeChecked,
  //   ],
  //   rules: {
  //     '@typescript-eslint/triple-slash-reference': 'warn',
  //     '@typescript-eslint/array-type': 'error',
  //     '@typescript-eslint/consistent-type-imports': 'error',
  //     '@typescript-eslint/no-unused-expressions': [
  //       'error',
  //       {
  //         allowShortCircuit: true, // Allow short-circuit expressions like `a && a()`
  //         allowTernary: true, // Allow ternary operations like `a ? b() : c()`
  //         allowTaggedTemplates: true, // Allow tagged template literals like `taggedTemplate` (optional)
  //       },
  //     ],
  //     '@typescript-eslint/no-empty-function': 'warn',
  //   },
  // }

  eslintConfigPrettier,
);

// export default [
//   turboConfig['flat/recommended'],
//   ...tsConfig,
//   // Other configuration
//   {
//     rules: {
//       'turbo/no-undeclared-env-vars': [
//         'error',
//         {
//           allowList: ['^ENV_[A-Z]+$'],
//         },
//       ],
//     },
//   },
// ];
