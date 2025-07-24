import { z } from 'astro/zod';

const baseCategorySchema = z.object({
  name: z.string(),
});

type Category = z.infer<typeof baseCategorySchema> & {
  subcategories: Category[];
};

const categorySchema: z.ZodType<Category> = baseCategorySchema.extend({
  subcategories: z.lazy(() => categorySchema.array()),
});

// categorySchema.parse({
//   name: 'People',
//   subcategories: [
//     {
//       name: 'Politicians',
//       subcategories: [
//         {
//           name: 'Presidents',
//           subcategories: [],
//         },
//       ],
//     },
//   ],
// }); // passes
