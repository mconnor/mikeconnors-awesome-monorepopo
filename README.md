# `Turborepo` Vite starter with eslint flat config

import.meta.dirname is only present for ESM files in Node.js >=20.11.0 / >= 21.2.0.

New to Tubrorepos and Monorepos in general. I started with the [Turborepo Vite example](https://github.com/vercel/turbo/tree/main/examples/with-vite).

I wanted to:

- [x] make a custom linting package using a flat eslint.config.js that i can pull into any app or package
- [x] get a JIT internal ui package going - easy
- [x] Create a compiled ui package - difficult

I found the Turbo Repo documentation lacking on the last one. A little help from ChatGPT on crafting the exports on the @repo/ui package.

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `docs`: a vanilla [vite](https://vitejs.dev) ts app
- `web`: another vanilla [vite](https://vitejs.dev) ts app
- `astrodemo`: an Astro App I will start pluggin external ui into.
- `@repo/ui`: a stub component & utility library shared by both `web` and `docs` applications
- `@repo/eslint-config`: shared `eslint` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [turbovite](https://github.com/vercel/turbo/tree/main/examples/with-vite)

### ESLint TypeScript Configs

- [recommended](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts)

- [stylistic-type-checked](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/stylistic-type-checked.ts)

#### Use ${configDir} in tsconfig

This is allowed on all the

- isFilePath options
- paths
- files
- include
- exclude
