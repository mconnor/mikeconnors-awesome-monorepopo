import { parse as parseToml } from '@std/toml/parse';
import { file, glob } from 'astro/loaders';
import { defineCollection, reference, z } from 'astro:content';
import blogSchema from './schemas/blog.ts';
import authorSchema from './schemas/authors.ts';

const authors = defineCollection({
  loader: file('src/data/authors.toml', {
    parser: (text) => parseToml(text).authors,
  }),
  schema: authorSchema,
});

// relatedPosts: z.array(reference('blog')).optional(),

const blog = defineCollection({
  // type: 'content',
  loader: glob({
    pattern: ['**/*.md', '**/*.mdx'],
    base: 'src/data/blog',
  }),
  schema: blogSchema,
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

export const collections = { blog, authors };
