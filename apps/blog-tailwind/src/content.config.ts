import { defineCollection } from 'astro:content';
import { parse as parseToml } from '@std/toml/parse';
// build-in loaders
import { file, glob } from 'astro/loaders';

// import { countryLoader } from './loaders/index.ts';

import { authorsSchema, blogSchema } from './schemas';

type ParserReturnType =
  | Record<string, Record<string, unknown>>
  | Record<string, unknown>[];

const authors = defineCollection({
  loader: file('src/content/authors.toml', {
    parser: (text) => {
      const parsed = parseToml(text);
      if (!parsed?.authors) {
        throw new Error('Invalid TOML: missing authors section');
      }
      return parsed.authors as ParserReturnType;
    },
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

export const collections = { blog, authors };
