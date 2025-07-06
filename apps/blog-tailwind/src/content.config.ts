import TOML from '@iarna/toml';
import { z, reference, defineCollection } from 'astro:content';
// build-in loaders
import { file, glob } from 'astro/loaders';

// import { countryLoader } from './loaders/index.ts';

import { Blog, Author } from '@repo/schemas/Schemas';

type ParserReturnType =
  | Record<string, Record<string, unknown>>
  | Record<string, unknown>[];

const refSchema = z.object({
  author: reference('authorsCollection').optional(),
  relatedPosts: z.array(reference('blogCollection')).optional(),
});

const BlogAuthorSchema = Blog.merge(refSchema);

const blogCollection = defineCollection({
  // type: 'content',
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: BlogAuthorSchema,
});

const authorsCollection = defineCollection({
  loader: file('src/content/authors.toml', {
    parser: (text) => TOML.parse(text).authors as ParserReturnType,
  }),
  schema: Author,
});

// const announcements = defineCollection({
//   loader: glob({
// 	base: './src/content/announcements',
// 	pattern: '**/*.md',
//   }),
//   schema: announcementsSchema,
// });

// const countries = defineCollection({
//   loader: countryLoader(),
//   //  schema:
// });

// const dogs = defineCollection({
//   loader: file("src/data/authors.toml", { parser: (text) => parseToml(text).dogs }),
//   schema: /* ... */
// })

export const collections = {
  blogCollection,
  authorsCollection,
};
