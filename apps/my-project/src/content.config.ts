import { glob } from 'astro/loaders';
import { defineCollection, z, type SchemaContext } from 'astro:content';

// Built-in loaders

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/data/blog/` directory.
  loader: glob({ base: './src/data/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }: SchemaContext) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

export const collections = { blog };
