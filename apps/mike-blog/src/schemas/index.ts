import { z } from 'astro/zod';
const dateLike = z.union([z.number(), z.string(), z.date()]);
const dateLikeToDate = dateLike.pipe(z.coerce.date());
const nonEmptyStrings = z.string().array().nonempty({
  message: "Can't be empty!",
});
const zAlt = z
  .string()
  .min(1, 'Alt text is required for accessibility')
  .default('needs alt test');



const ImageSchema = z.object({
  src: z.string(),
  alt: zAlt,
});

const WebImageSchema = z.object({
  src: z.string().url(),
  alt: zAlt,
});



export const Platform = z.enum(['twitter','facebook','linkedin','github']);

export const LinkSchema = z.object({
  platform: Platform,
  url: z.string().url()
});

export const AuthorSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, 'Invalid slug'),
  name: z.string().min(3, 'Name is required'),
  email: z.string().email(),
  bio: z.string().max(500, 'Bio must be ≤ 500 chars'),
  links: z.array(LinkSchema).default([])
});

export const AuthorsSchema = z.array(AuthorSchema);

export const BlogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z
    .string()
    .min(10, 'Description should be at least 10 characters')
    .max(200, 'Description should not exceed 200 characters'),
  date: dateLikeToDate.optional(),
    draft: z.boolean().optional().default(false),
  tags: nonEmptyStrings,
  cover: z.union([ImageSchema, WebImageSchema]).optional(),
});


export const tagsSchema = nonEmptyStrings;
export const tagCountSchema = z.record(z.number());
export const AnnounceSchema = z.object({
  title: z.string().min(5, 'Title is required'),
});