import { z, reference } from 'astro:content';
// Ensure the correct import, adjust if needed:
import simpleBlogSchema from '@repo/schemas/BlogSchema';

// const zTags = z.array(z.string()).nonempty();
const tagCountTypeSchema = z.record(z.number());

const refSchema = z.object({
  author: reference('authorsCollection').optional(),
  relatedPosts: z.array(reference('blogCollection')).optional(),
});

const blogSchema = simpleBlogSchema.merge(refSchema);

export { blogSchema, tagCountTypeSchema };
