# Webawesome in Astro Test

Testing [Web Awesome] (currently still in awesome) in various [Astro] apps in a monorepo

## Note - Using node.js subpath imports throughtout project

[Typescript@^5.4](https://turbo.build/repo/docs/guides/tools/typescript#use-nodejs-subpath-imports-instead-of-typescript-compiler-paths)

> It's possible to create absolute imports in your packages using the TypeScript compiler's paths option, but these paths can cause failed compilation when using Just-in-Time Packages. As of TypeScript 5.4, you can use Node.js subpath imports instead for a more robust solution.

## Layout web components

I've integrated the [Everyday Layouts] paradigms into Astro. I'll be

> Each layout in Every Layout is intrinsically responsive. That is, it will wrap and reconfigure internally to make sure the content is visible (and well-spaced) to fit any context/screen.
> -- [Heydon Pickering & Andy Bell](https://every-layout.dev/rudiments/composition/)

[Astro](https://www.example.com)

### This Monorepo's Basics

## 🚀 Project Structure

This app is part of a monorepo

```text
/
├── public/
│   └── favicon.svg
├── apps/
│   ├── @app/blog/
└       ├── package.json
└       ├── tsling.config.json
└       ├── eslint.config.mjs
│       ├── src/
│           ├── pages/
│           ├── layouts/
│           ├── components/
├── packages/
│   ├── config-eslint/
│   ├── config-format/
│   ├── config-typescript/
│   ├── config-eslint/
│   ├── layout-webcomponents/
│   ├── styles/
│   ├── ui-components/
│       └── astro-wc
│       └── preact
│       └── react
│       └── ui-lit
│       └── vue
│       └── preact
└── package.json
```

## Linting, type-checking tools

- estlint@^9
  - eslint _flat_ config. Combining various eslint configurations as need per packagage and app
- typescript-eslint@^8
- astro-check
- tsc
- prettier

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                  |
| :---------------------- | :---------------------- |
| `turbo install`         | Installs dependencies   |
| `turbo run dev`         | Starts local dev server |
| `turbo run lint`        | Starts local dev server |
| `turbo run astro-check` | Starts local dev server |
| `turbo run format`      | Starts local dev server |

[Astro]: https://astro.build/
[Web Awesome]: https://backers.webawesome.com/
[Everyday Layouts]: https://every-layout.dev/

<!-- [↩️ Home][home]
[home]: / -->
