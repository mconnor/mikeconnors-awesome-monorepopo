interface ImportMetaEnv {
  readonly SENTRY_DSN: string;
  readonly SENTRY_AUTH_TOKEN: string;
  readonly DOMAIN: string;
  readonly USER_NAME: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Astro types, not necessary if you already have a `tsconfig.json`
/// <reference path="../.astro/types.d.ts" />
