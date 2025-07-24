import { file, glob } from 'astro/loaders';
import {
  z,
  defineCollection,
  reference,
  type SchemaContext,
} from 'astro:content';

import { dateLikeToDate } from '#schemas/Utils.ts';
// import { LinkSetSchema } from '#schemas/Links.ts';
import { AuthorSchema, AnnounceSchema, tagsSchema } from '#schemas/index.ts';

const zTitle = z.string().min(1, 'Title is required');

const zDescrip = z
  .string()
  .min(10, 'Description should be at least 10 characters')
  .max(200, 'Description should not exceed 200 characters');

// const BlogAuthorSchema = ({ image }: SchemaContext) =>
//   z.object({
//     title: zTitle,
//     description: zDescrip,
//     date: dateLikeToDate,
//     draft: z.boolean().optional().default(false),
//     tags: tagsSchema,
//     author: reference("authors"),
//     cover: image().optional(),
//     alt: z.string().optional(),
//   });

const authors = defineCollection({
  loader: file('src/content/authors/authors.toml'),
  schema: AuthorSchema,
});

const blog = defineCollection({
  // type: 'content',
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: ({ image }: SchemaContext) =>
    z.object({
      title: zTitle,
      description: zDescrip,
      date: dateLikeToDate,
      draft: z.boolean().optional().default(false),
      tags: tagsSchema,
      author: z.array(reference('authors')),
      cover: image().optional(),
      alt: z.string().optional(),
    }),
});
const announcements = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: 'src/content/announcements',
  }),
  schema: AnnounceSchema,
});

export const collections = {
  blog,
  authors,

  announcements,
};
