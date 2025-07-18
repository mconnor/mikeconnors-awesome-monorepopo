import { z } from 'astro/zod';

export const AnnounceSchema = z.object({
  title: z.string().min(5, 'Title is required'),
});

// const zSlug = z.string().regex(/^[a-z0-9-]+$/, 'Invalid slug');

const nonEmptyStrings = z.string().array().nonempty({
  message: "Can't be empty!",
});
const dateLike = z.union([z.number(), z.string(), z.date()]);
const dateLikeToDate = dateLike.pipe(z.coerce.date());

const ImageSchema = z.object({
  src: z.string().url(),
  alt: z.string().min(1, 'Alt text is required for accessibility'),
});


export const BlogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z
    .string()
    .min(10, 'Description should be at least 10 characters')
    .max(200, 'Description should not exceed 200 characters'),
  date: dateLikeToDate.optional(),
  draft: z.boolean().optional().default(false),
  tags: z.string().array().nonempty(),
  cover: ImageSchema
});

export const tagsSchema = nonEmptyStrings;
export const tagCountSchema = z.record(z.number());
