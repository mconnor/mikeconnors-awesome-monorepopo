import { z } from 'astro:content';
import { zWebSite, zEmail } from './utils';

export const authorsSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: zEmail.optional(),
  bio: z.string().optional(),
  links: z.array(zWebSite).optional(),
});
