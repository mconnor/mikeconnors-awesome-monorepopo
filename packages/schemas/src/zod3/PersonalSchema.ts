import * as z from 'zod';
import { zWebSite, zEmail } from './Utils.ts';

export const personalSchema = z.object({
  name: z.string(),
  city: z.string(),
  email: zEmail,
  bio: z.string().optional(),
  links: z.array(zWebSite).optional(),
});

// export { personalSchema,timeLineSchema ,geoTimeNodeSchema};

// export type geoTimeNodeSchema = z.infer<typeof geoTimeNodeSchema>;
// export type timeLineSchema = z.infer<typeof timeLineSchema>;
