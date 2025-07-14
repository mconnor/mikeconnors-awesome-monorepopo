import { z, reference, defineCollection } from 'astro:content';
import TOML from '@iarna/toml';
// build-in loaders
// import { file, glob } from 'astro/loaders';
import { file, glob, type Loader, type LoaderContext } from 'astro/loaders';
import { AnnounceSchema } from '#schemas/Announce.ts';
import { BlogSchema, AuthorSchema } from '#schemas/Blog.ts';

// import { personalSchema } from '#schemas/personalSchema.ts';

// import { countryLoader } from './loaders/index.ts';

// import { blogSchema } from './schemas';

type ParserReturnType =
  | Record<string, Record<string, unknown>>
  | Record<string, unknown>[];

const authorsCollection = defineCollection({
  loader: file('src/content/authors.toml', {
    parser: (text) => TOML.parse(text).authors as ParserReturnType,
  }),
  schema: AuthorSchema,
});

const refSchema = z.object({
  author: reference('authorsCollection').optional(),
  relatedPosts: z.array(reference('blogCollection')).optional(),
});

const BlogAuthorSchema = BlogSchema.merge(refSchema);

const blogCollection = defineCollection({
  // type: 'content',
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: BlogAuthorSchema,
});

const announcementsCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: 'src/content/announcements',
  }),
  schema: AnnounceSchema,
});

export const collections = {
  blogCollection,
  authorsCollection,
  announcementsCollection,
};
