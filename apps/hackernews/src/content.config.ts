import { defineCollection } from 'astro:content';
import { story, user, comment } from './schemas.ts';

const usersCollection = defineCollection({
  schema: user,
});

const storyCollection = defineCollection({
  schema: story,
});

const commentCollection = defineCollection({
  schema: comment,
});

export { usersCollection, storyCollection, commentCollection };
