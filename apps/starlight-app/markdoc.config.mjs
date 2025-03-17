import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import starlightMarkdoc from '@astrojs/starlight-markdoc';

// https://docs.astro.build/en/guides/integrations-guide/markdoc/
export default defineMarkdocConfig({
  extends: [
    starlightMarkdoc(),
    {
      id: 'my-site',
      path: 'src/content',
      schema: {
        path: 'markdoc.config.mjs',
        type: 'esm',
        property: 'default',
        watch: true,
      },
    },
  ],
});
import markdoc from '@astrojs/markdoc';