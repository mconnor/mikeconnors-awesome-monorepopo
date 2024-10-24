import { z } from 'astro/zod';
import { type SchemaContext } from 'astro:content';

export const AuthorSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    description: z.string().optional(),
    imageSrc: image().optional(),
    imageAlt: z.string().optional(),
  });

export type AuthorSchemaRaw = Omit<
  z.infer<ReturnType<typeof AuthorSchema>>,
  'imageSrc'
> & {
  imageSrc: ImageMetadata;
};
