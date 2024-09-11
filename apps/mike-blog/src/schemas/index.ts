import { z, reference } from 'astro:content';

const urlSchema = z.string().url();
const urlSchemaOptional = urlSchema.optional();
const strSC = z.string();
const strSCOptional = strSC.optional();
const emailSchema = z.string().email();
const emailSchemaOptional = emailSchema.optional();

const imageSrcSchema = z.object({ src: urlSchema, alt: strSC });

// const refSchema = z.string(reference(['authors']));

const datelike = z.union([z.number(), z.string(), z.date()]);
const datelikeToDate = datelike.pipe(z.coerce.date());

export const authorSchema = z.object({
  id: z.string(),
  name: strSC.default('Anonymous'),
  email: emailSchemaOptional,
  portfolio: urlSchemaOptional,
  bio: strSCOptional,
});

export const blogSchema = z.object({
  title: strSC,
  pubDate: datelikeToDate,
  description: strSC,
  author: reference('authors'),
  draft: z.boolean().default(false),
  tags: z.array(strSC),
  cover: imageSrcSchema,
});

// relatedPosts: z.array(reference('blog')).optional(),

export type AurthorSchemaType = z.infer<typeof authorSchema>;
export type BlogSchemaType = z.infer<typeof blogSchema>;

export const zTags = z.array(strSC).nonempty();

// Record<string, number>;

export const tagCountTypeSchema = z.record(z.number());
