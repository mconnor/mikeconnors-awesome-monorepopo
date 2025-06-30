import { z } from 'astro:content';

const zReact = z.literal('react');
const zVue = z.literal('vue');
const zSvelte = z.literal('svelte');

const zProjSchema = z.object({
  framework: z.union([zReact, zVue, zSvelte]),
  projectName: z.string(),
  description: z.string(),
  githubUrl: z.string().url(),
  demoUrl: z.string().url().optional(),
});

export type ProjectType = z.infer<typeof zProjSchema>;

export { zProjSchema };
