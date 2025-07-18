
import {  z ,type SchemaContext } from 'astro:content';

export const BlogSchema = ({ image }: SchemaContext) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
    })
;