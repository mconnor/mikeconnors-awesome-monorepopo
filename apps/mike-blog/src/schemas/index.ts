import { z, reference } from 'astro:content';
import { dateLikeToDate } from './utils';
import { authorsSchema } from './authors';
import { announcementsSchema } from './annoucements';

const zTags = z.array(z.string()).nonempty();
const tagCountTypeSchema = z.record(z.number());
import simpleBlogSchema from '@repo/schemas/BlogSchema';

// const blogSchema = z.object({
//   title: z.string(),
//   date: dateLikeToDate.optional(),
//   description: z.string(),
//   author: reference('authorsCollection').optional(),
//   relatedPosts: z.array(reference('blogCollection')).optional(),
//   draft: z.boolean().optional().default(false),
//   tags: z.array(z.string()).default([]),
//   cover: z.object({ src: z.string().url(), alt: z.string() }).optional(),
// });

const refSchema = z.object({
  author: reference('authorsCollection').optional(),
  relatedPosts: z.array(reference('blogCollection')).optional(),
});

const blogSchema = simpleBlogSchema.merge(refSchema);

// { "id": "SGS", "data": { "cca3": "SGS", "name": { "common": "South Georgia" } }, "collection": "countries" }

export {
  // yearMonthDateSchema,
  // announcementsSchema,
  // authorsSchema,
  blogSchema,
  tagCountTypeSchema,
  zTags,
};
