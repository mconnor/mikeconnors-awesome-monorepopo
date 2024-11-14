import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  getGreeting: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async (input) => {
      await Promise.resolve(); // Add await to fix lint error
      return `Hello, ${input.name}!`;
    },
  }),

  likePost: defineAction({
    input: z.object({ postId: z.string() }),
    handler: async (input, ctx) => {
      await Promise.resolve(); // Add await to fix lint error
      if (!ctx.cookies.has('user-session')) {
        throw new ActionError({
          code: 'UNAUTHORIZED',
          message: 'User must be logged in.',
        });
      }
      return `postId ${input.postId} was liked`;
      // Otherwise, like the post
    },
  }),
};

// export const user = {
//   getUser: defineAction(/* ... */),
//   createUser: defineAction(/* ... */),
// }
