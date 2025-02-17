import { defineCollection, z } from 'astro:content';
import { CONFIG } from 'config';

enum FoundType {
  video = 'video',
  article = 'article',
  book = 'book',
  website = 'website',
}

const postSchema = z.object({
    title: z.string(),
    slug: z.string(),
    author: z.string().default(CONFIG.author),
    externalUrl: z.string().optional(),
    description: z.string(),
    category: z.string(),
    publicationDate: z.coerce.date(),
    public: z.boolean().default(true),
    editDate: z.coerce.date().optional(),
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