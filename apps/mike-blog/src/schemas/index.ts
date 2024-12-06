import { reference } from 'astro:content';
import { z } from 'astro:schema';

const announcementsSchema = z
  .object({
    title: z.string(),
  })
  .strict();

// relatedPosts: z.array(reference('blog')).optional(),

const zTags = z.array(z.string()).nonempty();

// Record<string, number>;

const tagCountTypeSchema = z.record(z.number());

const dateLike = z.union([z.number(), z.string(), z.date()]);
const dateLikeToDate = dateLike.pipe(z.coerce.date());

const authorsSchema = z.object({
  id: z.string(),
  name: z.string().default('Anonymous'),
  email: z.string().email().optional(),
  portfolio: z.string().url().optional(),
  bio: z.string().optional(),
});

const blogSchema = z.object({
  title: z.string(),
  pubDate: dateLikeToDate,
  description: z.string(),
  author: reference('authors'),
  relatedPosts: z.array(reference('blog')).optional(),
  draft: z.boolean().optional().default(false),
  tags: z.array(z.string()),
  cover: z.object({ src: z.string().url(), alt: z.string() }),
});

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];

const jsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
);

// { "id": "SGS", "data": { "cca3": "SGS", "name": { "common": "South Georgia" } }, "collection": "countries" }

const countrySchema = z.object({
  cca3: z.string(), // Assuming 'cca3' is a string
  name: z.object({
    common: z.string(), // Add more fields as needed
  }),
  // collection: z.literal('countries'),
  // Add other fields you want to type from the API response
});

const countriesSchema = z.array(countrySchema);

export {
  announcementsSchema,
  authorsSchema,
  blogSchema,
  countriesSchema,
  countrySchema,
  jsonSchema,
  tagCountTypeSchema,
  zTags,
};
