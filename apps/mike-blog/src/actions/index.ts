import { ActionError,defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  getGreeting: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async (input) => {
      return `Hello, ${input.name}!`;
    },
  }),

  likePost: defineAction({
    input: z.object({ postId: z.string() }),
    handler: async (input, ctx) => {
      if (!ctx.cookies.has('user-session')) {
        throw new ActionError({
          code: 'UNAUTHORIZED',
          message: 'User must be logged in.',
        });
      }
      // Otherwise, like the post
    },
  }),
};
