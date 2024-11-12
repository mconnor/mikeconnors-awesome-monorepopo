import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

import YoutubeLoader from '#loaders/yt.js';
import { announcementsSchema, blogSchema } from '#schemas/index.js';

const blog = defineCollection({
  loader: glob({
    base: './src/markdown/blog',
    pattern: '**/*.md',
  }),
  // Type-check frontmatter using a schema
  schema: blogSchema,
});

const announcements = defineCollection({
  loader: glob({
    base: './src/markdown/announcements',
    pattern: '**/*.md',
  }),
  schema: announcementsSchema,
});

const youtube = defineCollection({
  loader: YoutubeLoader(),
});

export const collections = { blog, announcements, youtube };
