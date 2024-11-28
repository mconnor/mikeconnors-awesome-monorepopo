import { z } from 'astro:content';

const authorSchema = z.object({
  id: z.string(),
  name: z.string().default('Anonymous'),
  email: z.string().email().optional(),
  portfolio: z.string().url().optional(),
  bio: z.string().optional(),
});

export default authorSchema;
