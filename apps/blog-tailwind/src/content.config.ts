import { z, reference, defineCollection } from 'astro:content';

import { file, glob } from 'astro/loaders';

import {
  AllAuthors,
  AnnounceSchema,
  BlogSchema,
  AuthorSchema,
} from '#schemas/index.ts';

// const authorsCollection = defineCollection({
//   loader: file('src/content/authors.toml'),
//   schema: AllAuthors,
// });

// const refSchema = z.object({
//   author: reference('authorsCollection').optional(),
//   relatedPosts: z.array(reference('blogCollection')).optional(),
// });



const blogCollection = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: BlogSchema,
});

const announcementsCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: 'src/content/announcements',
  }),
  schema: AnnounceSchema,
});

export const collections = {
  blogCollection,

  announcementsCollection,
};
