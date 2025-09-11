---
applyTo: '**'
---

# Project general coding standards

## Import Patterns

### Node.js Subpath Imports

This project uses Node.js subpath imports with the `#` prefix (available since Node.js 12+, with improved TypeScript support in TypeScript 5.4+).

**Configuration:** Add to `package.json` (not `tsconfig.json`):

```json
{
  "imports": {
    "#*": "./src/*"
  }
}
```

**Usage:**

```javascript
import Layout from '#layouts/Layout.astro';
import PostList from '#components/PostList/index.astro';
```

**Benefits:**

- Runtime support (not just compile-time like TypeScript paths)
- ECMAScript modules specification standard
- Universal tooling support across bundlers and runtimes
- No TypeScript-specific configuration needed
- Cleaner than relative imports (`../../layouts/Layout.astro`)

**Note:** This is different from TypeScript path mapping - it uses `package.json` imports field instead

## Project Context

- PNPM monorepo for frontend development with multiple Astro apps in 'apps/\*'
- All ESM. No commonjs. Assume that always using the lts version of PNPM, node, eslint, typescript, all javascript frameworks.

## Tech Stack

- **Monorepo**: Turborepo with pnpm workspaces
- **Frameworks**: Astro, React, Preact, Svelte, Vue, Preact
- **Languages**: TypeScript, JavaScript
- **Styling**: TailwindCSS with DaisyUI component library
- **UI Components**: React, Preact, Svelte, Vue, Astro, DaisyUI for semantic component classes
- **Build Tools**: Vite, Astro
- **Linting**: ESLint with custom configs
- **Package Manager**: pnpm
- **Layout Web Components**
- **Schemas**: using zod

### UI packages

- ui packages of components made with
  - Astro
  - react
  - preact
  - vue
  - svelte

### CSS Layout Webcomponents package - @repo/layout-webcomponents

Web-components wrapped by an astro file

### @repo/design-system - Tailwind and CSS design-system package

- imported into packages and apps that are using tailwindcss
- uses DaisUI to create ui and themes

## Naming Conventions

- Use PascalCase for component names, interfaces, and type aliases
- Use camelCase for variables, functions, and methods
- Prefix private class members with underscore (\_)
- Use ALL_CAPS for constants


