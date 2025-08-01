import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
// // import { navigate } from 'astro:transitions/client';

// https://docs.astro.build/en/reference/modules/astro-actions/#actionerror
// * Better Comments Extension Examples:
// ! Critical: Remember to handle all error cases
// ? TODO: Should we add rate limiting to these actions?
// * Important: These actions are server-side only

export const server = {
  getGreeting: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async (input) => {
      await Promise.resolve(); // Add await to fix lint error

      if (!input.name) {
        throw new ActionError({
          code: 'NOT_FOUND',
          message: 'no input',
        });
      }
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
  getAuthors: defineAction({
    input: z.object({ authorID: z.string() }),
    handler: async () => {
      await Promise.resolve(); // Add await to fix lint error
      return ['Sarah', 'Chris', 'Yan', 'Elian'];
    },
  }),

  // mailto: defineAction({
  //   input: z.object({ user: z.string(), domain: z.string() }),
  //   handler: async (input) => {
  //     await Promise.resolve(); // Add await to fix lint error

  //     const emailSchema = z.coerce.string().email().min(5);

  //     const { success, data: mailtoAddress } = emailSchema.safeParse(
  //       `${input.user}@${input.domain}`,
  //     );

  //     if (!success) {
  //       throw new ActionError({
  //         code: 'UNAUTHORIZED',
  //         message: 'improper mailto',
  //       });
  //     }

  //     return `mailto:${mailtoAddress}`;
  //   },
  // }),
};
