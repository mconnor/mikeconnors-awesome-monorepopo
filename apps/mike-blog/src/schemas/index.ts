import { z } from 'astro:content';

// Timeline entry: unique year + city
const TimelineEntrySchema = z.object({
  year: z.number(),
  milestone: z.string(),
});

// type tlType = z.infer<typeof TimelineEntrySchema>;

const AuthorSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name too long'),
  email: z.string().email(),
  bio: z.string().max(500, 'Bio must be ≤ 500 chars').optional(),
  photo: z.string(),
  timeline: z.array(TimelineEntrySchema).optional(),
});

// const AuthorSchema = z.record(_authorSchema)

export type AuthorType = z.infer<typeof AuthorSchema>;

// links: LinkSetSchema,

const AnnounceSchema = z.object({
  title: z.string().min(5, 'Title is required'),
});

// const zTitle = z.string().min(1, 'Title is required');

// const zDescrip = z
//   .string()
//   .min(10, 'Description should be at least 10 characters')
//   .max(200, 'Description should not exceed 200 characters');

const nonEmptyStrings = z.string().array().nonempty({
  message: "Can't be empty!",
});
const zAlt = z
  .string()
  .min(1, 'Alt text is required for accessibility')
  .default('needs alt test');

const tagsSchema = nonEmptyStrings;
const tagCountSchema = z.record(z.number());
export { AuthorSchema, AnnounceSchema, tagCountSchema, tagsSchema, zAlt };
