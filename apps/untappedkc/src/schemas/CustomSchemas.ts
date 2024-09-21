import { z } from 'astro:content';

export const px = z.custom<`${number}px`>((val) => {
  return typeof val === 'string' ? /^\d+px$/.test(val) : false;
});

export const zTags = z.array(z.string()).nonempty();

export const passwordForm = z
  .object({
    password: z.string(),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'], // path of error
  });
