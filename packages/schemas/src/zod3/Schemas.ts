import * as z from 'zod'; // Required for Astro compatibility

/**
 * Common Types and Utilities
 */

// Be careful with the .array() method. It returns a new ZodArray instance. This means the order in which you call methods matters. For instance:

// z.string().optional().array(); // (string | undefined)[]
// z.string().array().optional(); // string[] | undefined

const stringOrEmptyArray = z.string().optional().array();
const optionalStringArray = z.string().array().optional();

const nonEmptyStrings = z.string().array().nonempty({
  message: "Can't be empty!",
});
const dateLike = z.union([z.number(), z.string(), z.date()]);
const dateLikeToDate = dateLike.pipe(z.coerce.date());

/**
 * Shared Schemas
 */
export const ImageSchema = z.object({
  src: z.string().url(),
  alt: z.string().min(1, 'Alt text is required for accessibility'),
});

const Metadata = z.object({
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

export const BlogSchema = Metadata.extend({
  draft: z.boolean().optional().default(false),
  tags: nonEmptyStrings,
  cover: ImageSchema.optional(),
});

/**
 * Project Schemas
 */
const ProjectSchema = Metadata.extend({
  repository: z.string().url().optional(),
  technologies: nonEmptyStrings,
  status: z.enum(['active', 'archived', 'planned']).default('active'),
});

/**
 * Author Schemas
 */
export const AuthorSchema = z.object({
  id: z.string(),
  name: z.string().min(3, 'Name is required'),
  avatar: ImageSchema.optional(),
  bio: z.string().max(500, 'Bio should not exceed 500 characters'),
  social: z
    .object({
      github: z.string().url().optional(),
      twitter: z.string().url().optional(),
      linkedin: z.string().url().optional(),
    })
    .optional(),
});

export const AnnounceSchema = z.object({
  title: z.string().min(5, 'Title is required'),
});

/**
 * TypeScript Types
 * Prefix with 'T' to clearly distinguish from schema definitions
 */
// export type TBlog = z.infer<typeof BlogSchema>;
// export type TProject = z.infer<typeof ProjectSchema>;
// export type TAuthor = z.infer<typeof AuthorSchema>;
// export type TImage = z.infer<typeof ImageSchema>;
// export type TMetadata = z.infer<typeof Metadata>;
