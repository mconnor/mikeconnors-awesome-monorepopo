import { glob } from 'astro/loaders';
import { defineCollection} from 'astro:content';
import {BlogSchema } from '#schema.ts'

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: BlogSchema,
});

export const collections = { blog };
