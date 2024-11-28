import { reference, z } from 'astro:content';

const dateLike = z.union([z.number(), z.string(), z.date()]);
const dateLikeToDate = dateLike.pipe(z.coerce.date());

// relatedPosts: z.array(reference('blog')).optional(),
const blogSchema = z.object({
  title: z.string(),
  pubDate: dateLikeToDate,
  description: z.string(),
  // Reference a single author from the `authors` collection by `id`
  author: reference('authors'),
  // Reference an array of related posts from the `blog` collection by `slug`
  // relatedPosts: z.array(reference('blog')),
  draft: z.boolean().optional().default(false),
  tags: z.array(z.string()),
  cover: z.object({ src: z.string().url(), alt: z.string() }),
});

export default blogSchema;
