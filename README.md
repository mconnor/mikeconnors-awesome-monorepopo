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

# If you use oh-my-zsh, there is a `mise` plugin. Update your .zshrc file with:

# plugins=(... mise)

# This must be after `source $ZSH/oh-my-zsh.sh` line in your .zshrc file.

/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/mikeconnor/.local/share/mise/installs/bun/1.2.2/bin:/Users/mikeconnor/.local/share/mise/installs/node/22.13.1/bin:/Users/mikeconnor/.local/share/mise/installs/pnpm/10.2.0:/opt/homebrew/bin:/usr/local/bin /usr/bin /bin /usr/sbin /sbin /Users/mikeconnor/.docker/bin /usr/local/opt/openssl/bin /usr/local/opt/curl /opt/homebrew/opt/whois/bin /Users/mikeconnor/bin /Users/mikeconnor/.codeium/windsurf/bin /opt/homebrew/bin /opt/homebrew/sbin /System/Cryptexes/App/usr/bin /var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin /var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin /var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin /Library/Apple/usr/bin /usr/local/MacGPG2/bin /Library/TeX/texbin /Users/mikeconnor/.local/share/mise/installs/bun/1.2.2/bin /Users/mikeconnor/.local/share/mise/installs/node/22.13.1/bin /Users/mikeconnor/.local/share/mise/installs/pnpm/10.2.0 /usr/local/bin /usr/bin /bin /usr/sbin /sbin /Users/mikeconnor/.docker/bin /usr/local/opt/openssl/bin /usr/local/opt/curl /opt/homebrew/opt/whois/bin /Users/mikeconnor/bin /Users/mikeconnor/.codeium/windsurf/bin /Users/mikeconnor/.local/share/mise/installs/bun/1.2.2/bin /Users/mikeconnor/.local/share/mise/installs/node/22.13.1/bin /Users/mikeconnor/.local/share/mise/installs/pnpm/10.2.0 /opt/homebrew/bin /usr/local/bin /usr/bin /bin /usr/sbin /sbin /Users/mikeconnor/.docker/bin /usr/local/opt/openssl/bin /usr/local/opt/curl /opt/homebrew/opt/whois/bin /Users/mikeconnor/bin /Users/mikeconnor/.codeium/windsurf/bin /Users/mikeconnor/.local/share/mise/installs/bun/1.2.2/bin /Users/mikeconnor/.local/share/mise/installs/node/22.13.1/bin /Users/mikeconnor/.local/share/mise/installs/pnpm/10.2.0 /opt/homebrew/bin /usr/local/bin /usr/bin /bin /usr/sbin /sbin /Users/mikeconnor/.docker/bin /usr/local/opt/openssl/bin /usr/local/opt/curl /opt/homebrew/opt/whois/bin /Users/mikeconnor/bin /Users/mikeconnor/.codeium/windsurf/bin /opt/homebrew/bin /opt/homebrew/sbin /System/Cryptexes/App/usr/bin /var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin /var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin /var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin /Library/Apple/usr/bin /usr/local/MacGPG2/bin /Library/TeX/texbin /Applications/iTerm.app/Contents/Resources/utilities /Users/mikeconnor/Library/Application Support/Code - Insiders/User/globalStorage/github.copilot-chat/debugCommand
