import { file } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

import { NavItemSchema } from '#schemas/NavSchema.ts';

const siteNav = defineCollection({
  loader: file('src/data/site/nav.toml'),
  schema: z.array(NavItemSchema),
});

export const collections = {
  siteNav,
};
