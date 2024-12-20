import { z, reference } from 'astro:content';

const zUser = z.string().min(2).max(20);
const zTime = z.string().time({ message: 'Invalid time' });
const zHttp = z
  .string()
  .startsWith('https://', { message: 'Must provide secure URL' });

// "about": "jeremy at etherized dot com<p>Makes web. Mostly Rails. Not too much.",
// "created": 1363922656,
// "id": "JeremyNT",
// "karma": 5099,
// "submitted": [
//   42443456,

const userJsonSchema = z.object({
  id: z.string().uuid({ message: 'Invalid UUID' }),
  created: z.date(),
  karma: z.number(),
  about: z.string(),
  submitted: z.array(z.number()),
});

const baseComment = z.object({
  user: z.string().min(2).max(20),
  time_ago: z.string().time(),
  content: z.string().min(3).max(20),
});

const comment = z.object({
  user: zUser,
  time_ago: z.string(),
  content: z.string(),
  customElements: z.array(baseComment),
});

const comments = z.object({
  id: z.string().uuid({ message: 'Invalid UUID' }),
  level: z.number({ message: 'Invalid number' }),
  user: zUser,
  time: z.string().time({ message: 'Invalid time' }),
  time_ago: z.string(),
  content: z.string(),
  comments: z.array(z.string()).optional(),
});

const storyJsonSchema = z.object({
  id: z.string().uuid({ message: 'Invalid UUID' }),
  title: z.string(),
  points: z.number({ message: 'Invalid number' }),
  user: z.string().min(2).max(20),
  url: zHttp,
  domain: z.string().url(),
  type: z.union([z.literal('link'), z.literal('ask'), z.literal('job')]),
  time_ago: zTime,

  comments_count: z.number({ message: 'Invalid number' }),
  comments: z.array(baseComment),
});

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];

const jsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]),
);

export { comment, storyJsonSchema, userJsonSchema, jsonSchema };
