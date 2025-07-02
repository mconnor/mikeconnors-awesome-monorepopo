// import * as z from 'zod/v4'; // v4
// biome-ignore assist/source/organizeImports: <explanation>
import { z } from 'zod';
// The z.string().date() method validates strings in the format YYYY-MM-DD.

// const yearMonthDateSchema = z.string().date();

const dateLike = z.union([z.number(), z.string(), z.date()]);
const dateLikeToDate = dateLike.pipe(z.coerce.date());

// from Zod website
const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];

const jsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
);

const zWebSite = z.object({
  platform: z.string(),
  url: z.string().url(),
});

const zEmail = z.coerce.string().email().min(5);
export { zWebSite, dateLike, dateLikeToDate, jsonSchema, zEmail };
