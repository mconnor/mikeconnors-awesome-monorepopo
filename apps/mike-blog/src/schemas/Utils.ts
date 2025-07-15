import { z } from 'astro:content';

const ImageSchema = z.object({
  src: z.string().url(),
  alt: z.string().min(1, 'Alt text is required for accessibility'),
});

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];

const dateLike = z.union([z.number(), z.string(), z.date()]);
const dateLikeToDate = dateLike.pipe(z.coerce.date());

const jsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
);

const Metadata = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z
    .string()
    .min(10, 'Description should be at least 10 characters')
    .max(200, 'Description should not exceed 200 characters'),
  date: dateLikeToDate.optional(),
});

const nonEmptyStrings = z.string().array().nonempty({
  message: "Can't be empty!",
});

const zWebSite = z.object({
  platform: z.string(),
  url: z.string().url(),
});

const cityCodeSch = z.string().length(3);

// Regex for exactly three capital letters
const threeCapsRegex = /^[A-Z]{3}$/;
const zThreeCapitalLetters = z
  .string()
  .regex(threeCapsRegex, 'Must be exactly three capital letters');

const zEmail = z.coerce.string().email().min(5);
export {
  Metadata,
  zWebSite,
  dateLike,
  dateLikeToDate,
  jsonSchema,
  zEmail,
  zThreeCapitalLetters,
  nonEmptyStrings,
  ImageSchema,
};
