import { z, reference, defineCollection } from 'astro:content';
import { AuthorSchema, AuthorsPluralSchema } from '#schemas/Authors.ts';
import { file, glob } from 'astro/loaders';

import { AnnounceSchema, BlogSchema } from '#schemas/index.ts';

const refSchema = z.object({
  author: reference('authorsCollection'),
  relatedPosts: z.array(reference('blogCollection')).optional(),
});

const authorsCollection = defineCollection({
  loader: file('src/data/authors.toml'),
  schema: AuthorsPluralSchema,
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/data/blog' }),
  schema: BlogSchema.merge(refSchema),
});

const announcementsCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: 'src/data/announcements',
  }),
  schema: AnnounceSchema,
});

export const collections = {
  blogCollection,
  authorsCollection,
  announcementsCollection,
};
