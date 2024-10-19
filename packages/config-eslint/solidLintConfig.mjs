// import js from '@eslint/js';
import solid from 'eslint-plugin-solid';
// import solidTyped from 'eslint-plugin-solid/configs/typescript';
import tseslint from 'typescript-eslint';

// export default [
//   solid,
//   {
//     files: ['**/*.{ts,tsx}'],
//     ...solidTyped,
//   },
// ];

export default tseslint.config(solid.configs['flat/typescript']);
