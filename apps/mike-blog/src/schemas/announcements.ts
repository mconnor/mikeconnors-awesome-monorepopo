import { z } from 'astro:content';

export default z
  .object({
    title: z.string(),
  })
  .strict();
