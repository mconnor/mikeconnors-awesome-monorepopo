// Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
import { postSchema } from '#schemas/index.ts';
// Define a `type` and `schema` for each collection

const postsCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};
