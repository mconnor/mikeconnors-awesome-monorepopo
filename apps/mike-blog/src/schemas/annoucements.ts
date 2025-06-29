import { z } from 'astro:content';

export const announcementsSchema = z
  .object({
    title: z.string(),
  })
  .strict();
