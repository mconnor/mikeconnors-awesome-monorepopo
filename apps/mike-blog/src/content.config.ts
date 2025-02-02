import { parse as parseToml } from '@std/toml/parse';
// build-in loaders
import { file, glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

import { countryLoader } from './loaders/index.ts';

import {
  announcementsSchema,
  authorsSchema,
  blogSchema,
} from './schemas/index';

type ParserReturnType =
  | Record<string, Record<string, unknown>>
  | Record<string, unknown>[];

const authors = defineCollection({
  loader: file('./src/content/authors.toml', {
    parser: (text) => parseToml(text).authors as ParserReturnType,
  }),

  schema: authorsSchema,
});

// relatedPosts: z.array(reference('blog')).optional(),

const blog = defineCollection({
  // type: 'content',
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: blogSchema,
});

const announcements = defineCollection({
  loader: glob({
    base: './src/content/announcements',
    pattern: '**/*.md',
  }),
  schema: announcementsSchema,
});

const countries = defineCollection({
  loader: countryLoader(),
  //  schema:
});

// const dogs = defineCollection({
//   loader: file("src/data/authors.toml", { parser: (text) => parseToml(text).dogs }),
//   schema: /* ... */
// })

export const collections = { blog, authors, announcements, countries };
