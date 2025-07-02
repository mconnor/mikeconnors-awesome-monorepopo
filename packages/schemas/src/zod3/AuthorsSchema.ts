import { z } from 'zod';
import { zWebSite, zEmail } from './utils/index.ts';

const authorsSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: zEmail.optional(),
  bio: z.string().optional(),
  links: z.array(zWebSite).optional(),
});

export default authorsSchema;
