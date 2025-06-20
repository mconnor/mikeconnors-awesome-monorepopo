# GitHub Copilot Instructions - Frontend Monorepo

## Project Context

This is a Turborepo monorepo for frontend development with multiple apps and shared packages.

## Tech Stack

- **Monorepo**: Turborepo with pnpm workspaces
- **Frameworks**: Astro, Svelte, Vue, Preact
- **Languages**: TypeScript, JavaScript
- **Styling**: TailwindCSS with DaisyUI component library
- **UI Components**: DaisyUI for semantic component classes
- **Build Tools**: Vite, Astro
- **Linting**: ESLint with custom configs
- **Package Manager**: pnpm

## Code Generation Guidelines

### General Principles

- Use TypeScript by default for all new files
- Follow functional programming patterns where possible
- Prefer composition over inheritance
- Use semantic HTML and accessibility best practices

### Framework-Specific Guidelines

#### Astro

- Use `.astro` files for pages and layouts
- Leverage Astro's component islands architecture
- Use TypeScript props interfaces
- Implement proper SEO meta tags
- Follow Astro's file-based routing conventions

#### Svelte

- Use Svelte 5 syntax and runes when applicable
- Implement reactive statements efficiently
- Use TypeScript with proper prop types
- Follow Svelte's naming conventions (PascalCase for components)

#### Vue

- Use Composition API with `<script setup>` syntax
- Implement proper TypeScript interfaces for props
- Use Vue 3 best practices
- Leverage Vue's reactivity system effectively

#### TailwindCSS & DaisyUI

- Use utility-first approach with TailwindCSS
- Leverage DaisyUI semantic component classes (btn, card, modal, etc.)
- Combine DaisyUI components with TailwindCSS utilities for customization
- Use DaisyUI themes for consistent color schemes
- Prefer DaisyUI component classes over custom component styling
- Leverage custom class attributes: `class`, `className`, `class:list`, `tw`, `twx`
- Follow responsive-first design principles
- Use CSS custom properties for theming when extending DaisyUI
- Examples:
  - Buttons: `btn btn-primary`, `btn btn-outline btn-secondary`
  - Cards: `card bg-base-100 shadow-xl`
  - Forms: `input input-bordered`, `select select-bordered`
  - Layout: `navbar`, `footer`, `hero`, `drawer`

### DaisyUI Component Guidelines

#### Component Usage Patterns

- Use semantic DaisyUI classes for common UI components
- Combine DaisyUI base classes with modifiers: `btn btn-primary btn-lg`
- Layer TailwindCSS utilities on top of DaisyUI components for fine-tuning
- Use DaisyUI's built-in responsive and state variants

#### Common DaisyUI Components

- **Buttons**: `btn`, `btn-primary`, `btn-secondary`, `btn-accent`, `btn-outline`, `btn-ghost`
- **Cards**: `card`, `card-body`, `card-title`, `card-actions`
- **Forms**: `form-control`, `label`, `input`, `textarea`, `select`, `checkbox`, `radio`
- **Navigation**: `navbar`, `menu`, `breadcrumbs`, `tabs`, `steps`
- **Layout**: `hero`, `footer`, `drawer`, `modal`, `collapse`, `divider`
- **Data Display**: `table`, `badge`, `avatar`, `progress`, `stats`, `timeline`
- **Feedback**: `alert`, `toast`, `loading`, `skeleton`

#### Theme Integration

- Use DaisyUI's semantic color system: `primary`, `secondary`, `accent`, `neutral`, `base-100`, etc.
- Leverage theme-aware classes that adapt to light/dark themes
- Configure themes in tailwind.config.js using DaisyUI's theme system
- Use CSS custom properties for theme-aware custom styling

#### Framework Integration Best Practices

- **Astro**: Use DaisyUI classes in component templates and layouts
- **Svelte**: Combine with Svelte's class directives for dynamic styling
- **Vue**: Use with Vue's class binding for reactive component states
- **Preact**: Apply DaisyUI classes with JSX className prop

### File Structure Conventions

- Components in `src/components/`
- Pages in `src/pages/` (Astro) or `src/routes/` (SvelteKit)
- Utilities in `src/utils/` or shared `packages/utils/`
- Types in `src/types/` or shared `packages/config-typescript/`
- Styles in `src/styles/` or shared `packages/styles/`

### Import/Export Patterns

- Use named exports by default
- Prefer absolute imports from packages when available
- Group imports: external libraries, internal packages, relative imports
- Use TypeScript path mapping when configured

### Performance Considerations

- Implement code splitting where appropriate
- Use dynamic imports for heavy components
- Optimize images and assets
- Minimize bundle sizes
- Consider server-side rendering benefits

### Error Handling

- Use proper TypeScript error types
- Implement graceful error boundaries
- Provide meaningful error messages
- Consider loading and error states in components

### Testing Patterns

- Write component tests for complex logic
- Use TypeScript for test files
- Mock external dependencies appropriately
- Test accessibility features

## Monorepo Specific

- Use workspace references for shared packages
- Leverage Turborepo's caching and parallelization
- Follow consistent naming conventions across apps
- Share common configurations through packages
