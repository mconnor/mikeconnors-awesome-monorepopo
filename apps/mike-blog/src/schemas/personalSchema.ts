import { z } from 'astro:content';
import { zWebSite, zEmail } from './utils';

export const personalSchema = z.object({
  name: z.string(),
  city: z.string(),
  email: zEmail,
  bio: z.string().optional(),
  links: z.array(zWebSite).optional(),
});
