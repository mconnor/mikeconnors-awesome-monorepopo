import type { Linter } from 'eslint';

/**
 * Type definition for ESLint 9 flat configuration arrays
 * All exported configurations return arrays of Linter.Config objects
 */
export type ESLintFlatConfig = Linter.Config[];

/**
 * Ambient module declarations for all ESLint configuration exports
 * These provide TypeScript support for the JavaScript .mjs files
 */
declare module '@repo/eslint-config/TailwindLint' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/turbo-config' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/next-lint' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/next-config' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/ignores' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/vue-config' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/md-config' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/react-internal' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/ts-lint' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/lit-config' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/type-disable' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/regex' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/svelte5-app' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/solid' {
  const config: ESLintFlatConfig;
  export default config;
}

declare module '@repo/eslint-config/simple-imports-sort' {
  const config: ESLintFlatConfig;
  export default config;
}
