import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';
import { postSchema, findsSchema } from './schemas';




const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: postSchema,
});

const finds = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/finds' }),
  schema: findsSchema,
});

export const collections = { posts, finds };
