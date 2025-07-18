import { z } from 'astro/zod';

const zReact = z.literal('react');
const zVue = z.literal('vue');
const zSvelte = z.literal('svelte');

const zOneOrTwoDigits = z.number();

const zTableRowSchema = z.object({
  framework: z.union([zReact, zVue, zSvelte]),
  projectName: z.string(),
  description: z.string(),
  githubUrl: z.string().url(),
  demoUrl: z.string().url().optional(),
});

const zFrameworkSchema = z.object({
  framework: z.union([zReact, zVue, zSvelte]),
  title: z.string(),
  description: z.string(),
});

const zIntPos = z
  .number()
  .int()
  .positive()
  .lt(99, { message: 'this👏is👏too👏be a two digit number' });

// export type IntType = z.infer<typeof zIntPos>;

export type TableRowType = z.infer<typeof zTableRowSchema>;
export type FrameworkType = z.infer<typeof zFrameworkSchema>;

export { zTableRowSchema, zFrameworkSchema, zIntPos };
