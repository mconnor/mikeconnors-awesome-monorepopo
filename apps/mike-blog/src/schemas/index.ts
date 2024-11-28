import { z } from 'astro:content';

// relatedPosts: z.array(reference('blog')).optional(),

export const zTags = z.array(z.string()).nonempty();

// Record<string, number>;

export const tagCountTypeSchema = z.record(z.number());
