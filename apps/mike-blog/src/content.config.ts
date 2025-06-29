import TOML from '@iarna/toml';
// build-in loaders
import { file, glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
// import { personalSchema } from '#schemas/personalSchema.ts';

// import { countryLoader } from './loaders/index.ts';

import { announcementsSchema, authorsSchema, blogSchema } from './schemas';

type ParserReturnType =
  | Record<string, Record<string, unknown>>
  | Record<string, unknown>[];

const authorsCollection = defineCollection({
  loader: file('src/content/authors.toml', {
    parser: (text) => TOML.parse(text).authors as ParserReturnType,
  }),
  schema: authorsSchema,
});

const blogCollection = defineCollection({
  // type: 'content',
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: blogSchema,
});

const announcementsCollection = defineCollection({
  loader: glob({
    base: 'src/content/announcements',
    pattern: '**/*.md',
  }),
  schema: announcementsSchema,
});

// const socailLinks = defineCollection({
//   loader: file('src,content/personal.toml', {
//     parser: (text) => TOML.parse(text).authors as ParserReturnType,
//   }),
//   schema: personalSchema,
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
  announcementsCollection,
};
