import { z } from 'zod';

const schema = z
  .object({
    title: z.string(),
  })
  .strict();

export default schema;
