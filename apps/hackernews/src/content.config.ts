import { defineCollection } from 'astro:content';
import { storyJsonSchema, userJsonSchema, comment } from './schemas';

const usersCollection = defineCollection({
  schema: userJsonSchema,
});

const storyCollection = defineCollection({
  schema: storyJsonSchema,
});

const commentCollection = defineCollection({
  schema: comment,
});

export { usersCollection, storyCollection, commentCollection };
