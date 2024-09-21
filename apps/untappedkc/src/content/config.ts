import { defineCollection } from 'astro:content';

import { authorSchema, blogSchema } from '#schemas/index.ts';

const blog = defineCollection({
  type: 'content',
  schema: blogSchema,
});

const authors = defineCollection({
  type: 'data',
  schema: authorSchema,
});

// 3. Export multiple collections to register them
export const collections = {
  blog,
  authors,
};
