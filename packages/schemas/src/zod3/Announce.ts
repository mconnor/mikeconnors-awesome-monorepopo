import * as z from 'zod';

export const AnnounceSchema = z.object({
  title: z.string().min(5, 'Title is required'),
});
