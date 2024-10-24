import { defineCollection } from 'astro:content';
import { blogSchema } from '#schemas/index.ts';
const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: blogSchema,
});

export const collections = { blog };
