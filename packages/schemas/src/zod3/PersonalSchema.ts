import * as z from 'zod';
import { zWebSite, zEmail } from './Utils.ts';

const personalSchema = z.object({
  name: z.string(),
  city: z.string(),
  email: zEmail,
  bio: z.string().optional(),
  links: z.array(zWebSite).optional(),
});

export { personalSchema };
