import * as z from 'zod/v3'; // Required for Astro compatibility

/**
 * Common Types and Utilities
 */
const dateLike = z.union([z.number(), z.string(), z.date()]);
const dateLikeToDate = dateLike.pipe(z.coerce.date());

/**
 * Shared Schemas
 */
export const Image = z.object({
  src: z.string().url(),
  alt: z.string().min(1, 'Alt text is required for accessibility'),
});

export const Metadata = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z
    .string()
    .min(10, 'Description should be at least 10 characters')
    .max(200, 'Description should not exceed 200 characters'),
  date: dateLikeToDate.optional(),
});

/**
 * Blog Schemas
 */
export const Blog = Metadata.extend({
  draft: z.boolean().optional().default(false),
  tags: z.array(z.string().min(1)).default([]),
  cover: Image.optional(),
});

/**
 * Project Schemas
 */
export const Project = Metadata.extend({
  repository: z.string().url().optional(),
  technologies: z.array(z.string()).default([]),
  status: z.enum(['active', 'archived', 'planned']).default('active'),
});

/**
 * Author Schemas
 */
export const Author = z.object({
  id: z.string(),
  name: z.string().min(3, 'Name is required'),
  avatar: Image.optional(),
  bio: z.string().max(500, 'Bio should not exceed 500 characters'),
  social: z
    .object({
      github: z.string().url().optional(),
      twitter: z.string().url().optional(),
      linkedin: z.string().url().optional(),
    })
    .optional(),
});

/**
 * TypeScript Types
 * Prefix with 'T' to clearly distinguish from schema definitions
 */
export type TBlog = z.infer<typeof Blog>;
export type TProject = z.infer<typeof Project>;
export type TAuthor = z.infer<typeof Author>;
export type TImage = z.infer<typeof Image>;
export type TMetadata = z.infer<typeof Metadata>;
