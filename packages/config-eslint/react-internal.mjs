import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';

import { config as baseConfig } from './nextBase.mjs';

// import extraFileExtensionsSinglton from './fileExtensions.mjs';

// const extraFileExtensions = extraFileExtensionsSinglton.getExtensions();
const extraFileExtensions = ['.svelte', '.astro', '.md', '.mdx', 'vue'];
/**
 * A custom ESLint configuration for libraries that use React.
 * Use this and only this script to lint react packages
 *
 * @type {import("eslint").Linter.Config} */
const reactConfig = defineConfig([
  ...baseConfig,

  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        extraFileExtensions,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 'off',
    },
  },
]);

export default reactConfig;
