import * as z from 'zod';
import { ImageSchema } from './Utils';

const schema = z.object({
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

export default schema;
