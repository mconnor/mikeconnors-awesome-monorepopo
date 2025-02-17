import { z } from 'astro:schema';
import { CONFIG } from '#config.ts';

const {author} = CONFIG as { author: string }
const dateLike = z.union([z.number(), z.string(), z.date()]);
const dateLikeToDate = dateLike.pipe(z.coerce.date());


enum FoundType {
  video = 'video',
  article = 'article',
  book = 'book',
  website = 'website',
}



const postSchema = z.object({
    title: z.string(),
    slug: z.string(),
    author: z.string().default(author),
    externalUrl: z.string().optional(),
    description: z.string(),
    category: z.string(),
    publicationDate: dateLikeToDate,
    public: z.boolean().default(true),
    editDate: dateLikeToDate
  })

const findsSchema = z.object({
    title: z.string(),
    link: z.string(),
    description: z.string(),
    type: z.nativeEnum(FoundType),
    publicationDate: z.coerce.date(),
    public: z.boolean().default(true),
  })

export { postSchema, findsSchema }