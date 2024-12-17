import { z, reference } from 'astro:content';

const user = z.object({
  id: z.string(),
  created: z.date(),
  karma: z.number(),
  about: z.string(),
});

const baseComment = z.object({
  user: z.string().min(2).max(20),
  time_ago: z.string().time(),
  content: z.string().min(3).max(20),
});

const comment = z.object({
  user: z.string().min(2).max(20),
  time_ago: z.string().time(),
  content: z.string(),
  customElements: z.array(baseComment),
});

const story = z.object({
  id: z.string(),
  points: z.string(),
  url: z.string(),
  title: z.string(),
  domain: z.string(),
  type: z.string(),
  time_ago: z.string().time(),
  user: z.string(),
  comments_count: z.number(),
  comments: z.array(baseComment),
});

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];

const jsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
);

export { comment, story, user, jsonSchema };
