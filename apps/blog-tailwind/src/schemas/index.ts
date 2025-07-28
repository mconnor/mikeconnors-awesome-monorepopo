import { z } from 'astro/zod';
import { LinkSchema, LinkSetSchema, Platform } from '#schemas/platforms.ts';

export const AuthorSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, 'Invalid slug'),
  name: z.string().min(3, 'Name is required'),
  email: z.string().email(),
  bio: z.string().max(500, 'Bio must be ≤ 500 chars'),
  links: z.array(z.string().url()),
});

export const AuthorsPluralSchema = z.array(AuthorSchema);

export const AnnounceSchema = z.object({
  title: z.string().min(5, 'Title is required'),
});

const zSlug = z.string().regex(/^[a-z0-9-]+$/, 'Invalid slug');

const nonEmptyStrings = z.string().array().nonempty({
  message: "Can't be empty!",
});
const dateLike = z.union([z.number(), z.string(), z.date()]);
const dateLikeToDate = dateLike.pipe(z.coerce.date());

export const tagsSchema = nonEmptyStrings;
export const tagCountSchema = z.record(z.number());
