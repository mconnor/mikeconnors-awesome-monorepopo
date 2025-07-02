import { z } from 'zod';
// import * as z from 'zod/v3'; // v4
import { dateLikeToDate } from './utils/index.ts';

const zTags = z.array(z.string()).nonempty();
const tagCountTypeSchema = z.record(z.number());

const blogSchema = z.object({
  title: z.string(),
  date: dateLikeToDate.optional(),
  description: z.string(),
  // author: reference('authorsCollection').optional(),
  // relatedPosts: z.array(reference('blogCollection')).optional(),
  draft: z.boolean().optional().default(false),
  tags: z.array(z.string()).default([]),
  cover: z.object({ src: z.string().url(), alt: z.string() }).optional(),
});
// z.ZodEffects<z.ZodString, ReferenceDataEntry<"authorsCollection", string>, string>
// { "id": "SGS", "data": { "cca3": "SGS", "name": { "common": "South Georgia" } }, "collection": "countries" }
export default blogSchema;
// export {
//   // yearMonthDateSchema,
//   announcementsSchema,
//   authorsSchema,
//   blogSchema,
//   tagCountTypeSchema,
//   zTags,
// };
