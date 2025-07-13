import { z } from 'astro:content';

import { Metadata, ImageSchema, nonEmptyStrings } from './Utils';

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

export const BlogSchema = Metadata.extend({
  draft: z.boolean().optional().default(false),
  tags: nonEmptyStrings,
  cover: ImageSchema.optional(),
});

export const tagsSchema = nonEmptyStrings;
export const tagCountSchema = z.record(z.number());
