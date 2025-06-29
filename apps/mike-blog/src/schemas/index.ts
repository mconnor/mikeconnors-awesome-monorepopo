import { z, reference } from 'astro:content';
import { dateLikeToDate } from './utils';
import { authorsSchema } from './authors';
import { announcementsSchema } from './annoucements';

const zTags = z.array(z.string()).nonempty();
const tagCountTypeSchema = z.record(z.number());

const blogSchema = z.object({
  title: z.string(),
  date: dateLikeToDate.optional(),
  description: z.string(),
  author: reference('authors').optional(),
  relatedPosts: z.array(reference('blogCollection')).optional(),
  draft: z.boolean().optional().default(false),
  tags: z.array(z.string()).default([]),
  cover: z.object({ src: z.string().url(), alt: z.string() }).optional(),
});

// { "id": "SGS", "data": { "cca3": "SGS", "name": { "common": "South Georgia" } }, "collection": "countries" }

export {
  // yearMonthDateSchema,
  announcementsSchema,
  authorsSchema,
  blogSchema,
  tagCountTypeSchema,
  zTags,
};
