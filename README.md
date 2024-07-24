# vite-turbo-eslint-flatconfig

## `Turborepo` Vite starter with eslint flat config

I began with [Turborepo Vite example](https://github.com/vercel/turbo/tree/main/examples/with-vite) and added

- an Astro project in apps/
- a custom eslint flag configuruation library

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `docs`: a vanilla [vite](https://vitejs.dev) ts app
- `web`: another vanilla [vite](https://vitejs.dev) ts app
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
