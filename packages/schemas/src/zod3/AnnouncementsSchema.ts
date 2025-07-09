import * as z from 'zod'; // v4

const announcementsSchema = z
  .object({
    title: z.string(),
  })
  .strict();

export  {announcementsSchema};
