import { z } from 'astro/zod';
export const Platform = z.enum(['twitter', 'facebook', 'linkedin', 'github']);

export const LinkSchema = z.object({
  platform: Platform,
  url: z.string().url(),
});
