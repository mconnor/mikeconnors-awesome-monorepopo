import { getContainerRenderer as reactContainerRenderer } from "@astrojs/react";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { loadRenderers } from "astro:container";
import { expect, test } from 'vitest';
import ReactCounter from '@repo/react/Counter';
// If ReactCounter is not a default export, use:
// import * as ReactCounter from '@repo/react/Counter';
// import vueRenderer from "@astrojs/vue/server.js";
// import mdxRenderer from "@astrojs/mdx/server.js";

// import { loadRenderers } from 'astro:container';
// import { getContainerRenderer } from '@astrojs/react';

const renderers = await loadRenderers([reactContainerRenderer()]);
const container = await AstroContainer.create({renderers});




// const result = await container.renderToString(ReactCounter);

// const result = await container.renderToResponse(ReactCounter,{
//   props: { children: "<h1>Hello from React!</h1>",clas:"grid-col-3 grid" }
// });


// container.addServerRenderer({ renderer: reactRenderer });
// container.addClientRenderer({ name: "@astrojs/react", entrypoint: "@astrojs/react/client.js" });
	const result = await container.renderToString(ReactCounter.default ? ReactCounter.default : ReactCounter, {
   props: { children: "<h1>Hello from React!</h1>", clas: "grid-col-3 grid" }
 });


	expect(result).toContain('Hello from React!');
	// expect(result).toContain('Count: <!-- -->5');
});
