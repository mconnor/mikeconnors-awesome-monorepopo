import { reference, z } from 'astro:content';

const dateLike = z.union([z.number(), z.string(), z.date()]);
const dateLikeToDate = dateLike.pipe(z.coerce.date());

const blogSchema = z.object({
  title: z.string(),
  pubDate: dateLikeToDate,
  description: z.string(),
  author: reference('authors'),
  relatedPosts: z.array(reference('blog')).optional(),
  draft: z.boolean().optional().default(false),
  tags: z.array(z.string()),
  cover: z.object({ src: z.string().url(), alt: z.string() }),
});

export default blogSchema;
