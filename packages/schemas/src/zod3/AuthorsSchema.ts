import * as z from 'zod/v3'; // v4
import { zWebSite, zEmail } from './utils/index.ts';

const schema = z.object({
  id: z.string(),
  name: z.string(),
  email: zEmail.optional(),
  bio: z.string().optional(),
  links: z.array(zWebSite).optional(),
});

export default schema;
