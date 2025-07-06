import * as z from 'zod/v3'; // v4

const schema = z
  .object({
    title: z.string(),
  })
  .strict();

export default schema;
