import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

// import { parse as parseToml } from 'toml';
import { blogSchema } from '#schemas/index.ts';

// import { authorSchema, blogSchema } from '#schemas/index.ts';

// const refSchema = z.string(reference(['authors']));

const blog = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '**/*.mdx'],
    base: './src/content/blog',
  }),
  schema: blogSchema,
});

// const authors = defineCollection({
//   loader: file('src/data/authors/authors.toml', {
//     parser: (text) => parseToml(text).authors,
//   }),
//   schema: z.object({
//     id: z.string(),
//     name: strSC.default('Anonymous'),
//     email: emailSchemaOptional,
//     portfolio: urlSchemaOptional,
//     bio: strSCOptional,
//   }),
// });

// 3. Export multiple collections to register them
export const collections = {
  blog,
  // authors,
};

// const authorSchema = z.object({
//   id: z.string(),
//   name: strSC.default('Anonymous'),
//   email: emailSchemaOptional,
//   portfolio: urlSchemaOptional,
//   bio: strSCOptional,
// });

// const blogSchema = z.object({
//   title: strSC,
//   pubDate: datelikeToDate,
//   description: strSC,
//   author: reference('authors'),
//   draft: z.boolean().default(false),
//   tags: z.array(strSC),
//   cover: imageSrcSchema,
// });
