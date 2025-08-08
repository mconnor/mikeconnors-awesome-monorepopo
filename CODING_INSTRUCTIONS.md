# Coding Instructions

## Project Overview

This is a Turborepo monorepo containing multiple applications and packages with a focus on modern web development using Astro, Vite, and other cutting-edge tools.

## Development Guidelines

### Technology Stack

- **Build System**: Turborepo for monorepo management
- **Package Manager**: pnpm (v10.13.1+)
- **Node Version**: 22.x
- **Frontend Frameworks**: Astro, Svelte
- **Build Tools**: Vite, ESLint
- **Code Formatting**: Prettier with multiple plugins

### Code Standards

- Use ES modules (`"type": "module"`)
- Follow Prettier formatting rules
- Maintain TypeScript type checking
- Use catalog: dependencies where applicable

### Development Workflow

1. **Starting Development**: Use `pnpm dev` for the blog app or `pnpm dev:demo` for the demo app
2. **Building**: Run `pnpm build` for all packages or `pnpm build:apps` for apps only
3. **Linting**: Execute `pnpm lint` to check code quality
4. **Type Checking**: Run `pnpm check-types` before commits
5. **Full Pipeline**: Use `pnpm all` to run lint, test, and build

### Package Management

- Use pnpm workspaces for package organization
- Prefix app packages with `@app/`
- Leverage Turborepo's filtering for targeted builds
- Follow the established naming conventions

### Best Practices

- Always run type checking before pushing code
- Use Turborepo's task pipeline for consistent builds
- Maintain clean commit history
- Test changes across all affected packages
- Follow the established folder structure and naming conventions