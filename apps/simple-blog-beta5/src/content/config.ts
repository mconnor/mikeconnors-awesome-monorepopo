import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

import YoutubeLoader from '#loaders/yt.js';
import { announcementsSchema, blogSchema } from '#schemas/index.js';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: blogSchema,
});

const announcements = defineCollection({
  loader: glob({
    base: './src/announcements',
    pattern: '**/*.md',
  }),
  schema: announcementsSchema,
});

const youtube = defineCollection({
  loader: YoutubeLoader(),
});

export const collections = { blog, announcements, youtube };