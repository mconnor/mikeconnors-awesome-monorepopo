import * as z from 'zod/v3'; // v4

const dateLike = z.union([z.number(), z.string(), z.date()]);
const dateLikeToDate = dateLike.pipe(z.coerce.date());

const schema = z.object({
  title: z.string(),
  date: dateLikeToDate.optional(),
  description: z.string(),
  // author: reference('authorsCollection').optional(),
  // relatedPosts: z.array(reference('blogCollection')).optional(),
  draft: z.boolean().optional().default(false),
  tags: z.array(z.string()).default([]),
  cover: z.object({ src: z.string().url(), alt: z.string() }).optional(),
});

export default schema;
