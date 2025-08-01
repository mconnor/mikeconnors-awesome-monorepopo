import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { BlogSchema } from '#schema.ts';

const blogCollection = defineCollection({
  // Load Markdown and MDX files in the `src/data/blog/` directory.
  loader: glob({ base: './src/data/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: BlogSchema,
});

export const collections = { blogCollection };
