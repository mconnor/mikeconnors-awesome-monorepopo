import { parse as parseToml } from '@std/toml/parse';
import { file, glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

import announcementsSchema from './schemas/announcements';
import authorSchema from './schemas/authors';
import blogSchema from './schemas/blog';
import jsonSchema from './schemas/json';

type ParserReturnType =
  | Record<string, Record<string, unknown>>
  | Record<string, unknown>[];

const authors = defineCollection({
  loader: file('./src/content/authors.toml', {
    parser: (text) => parseToml(text).authors as ParserReturnType,
  }),
  schema: authorSchema,
});

// relatedPosts: z.array(reference('blog')).optional(),

const blog = defineCollection({
  // type: 'content',
  loader: glob({
    pattern: ['**/*.md', '**/*.mdx'],
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
  loader: async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    // Must return an array of entries with an id property, or an object with IDs as keys and entries as values
    return data.map((country) => ({
      id: country.cca3,
      ...country,
    }));
  },
  schema: jsonSchema,
});

// const dogs = defineCollection({
//   loader: file("src/data/authors.toml", { parser: (text) => parseToml(text).dogs }),
//   schema: /* ... */
// })

// const countries = defineCollection({
// 	loader: async () => {
// 	  const response = await fetch("https://restcountries.com/v3.1/all");
// 	  const data = await response.json();
// 	  // Must return an array of entries with an id property
// 	  // or an object with IDs as keys and entries as values
// 	  return data.map((country) => ({
// 		id: country.cca3,
// 		...country,
// 	  }));
// 	},
// 	schema: /* ... */
//   });

export const collections = { blog, authors, announcements, countries };
