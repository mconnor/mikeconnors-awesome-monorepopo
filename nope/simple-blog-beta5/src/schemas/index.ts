import { z } from 'astro:content';

const urlSchema = z.string().url();
const urlSchemaOptional = urlSchema.optional();
const strSC = z.string();
const strSCOptional = strSC.optional();
const emailSchema = z.string().email();
const emailSchemaOptional = emailSchema.optional();

// const imageSrcSchema = z.object({ src: urlSchema, alt: strSC });
// const refSchema = z.string(reference(['authors']));

const datelike = z.union([z.number(), z.string(), z.date()]);
const datelikeToDate = datelike.pipe(z.coerce.date());

// const ResourceIdSchema = z.object({
//   // kind: z.string(),
//   videoId: z.string(),
// });

export const authorSchema = z.object({
  id: z.string(),
  name: strSC.default('Anonymous'),
  email: emailSchemaOptional,
  portfolio: urlSchemaOptional,
  bio: strSCOptional,
});

export const blogSchema = z.object({
  title: strSC,
  description: strSC,
  pubDate: datelikeToDate,
  updatedDate: datelikeToDate.optional(),

  heroImage: z.string().optional(),
  //   author: reference('authors'),
  //   draft: z.boolean().default(false),
  //   tags: z.array(strSC),
  //   cover: imageSrcSchema,
});

export const announcementsSchema = z
  .object({
    title: z.string(),
  })
  .strict();

// Example type inference

// Define the resource ID schema for video-specific information

// defaultAudioLanguage: z.string().optional(),
// });

// relatedPosts: z.array(reference('blog')).optional(),

export type AurthorSchemaType = z.infer<typeof authorSchema>;
export type BlogSchemaType = z.infer<typeof blogSchema>;

export const zTags = z.array(strSC).nonempty();

// Record<string, number>;

export const tagCountTypeSchema = z.record(z.number());
