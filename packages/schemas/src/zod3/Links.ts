import * as z from 'zod';

const baseLinkSx = z.object({
  name: z.string(),
  dirPath: z.string(),
  icon: z.string(),
});
// subPages: z.boolean().optional()

// type _linkType = z.infer<typeof baseLinkSx> & {
//   sublinks: _linkType[];
// };

// const linkSx: z.ZodType<_linkType> = baseLinkSx.extend({
//   sublinks: z.lazy(() => linkSx.array()),
// });

//const nonEmptyStrings = z.string().array().nonempty();
export const allBaseLinksSx = baseLinkSx.array().nonempty({
  message: 'Need links!',
});

// export { allBaseLinksSx };
export type LinkTypes = z.infer<typeof allBaseLinksSx>;
// LinkSx.parse({
//   name: "People",
//   path: "jobs",
//   sublinks: [
//     {
//       name: "Politicians",
//       sublinks: [
//         {
//           name: "Presidents",
//           sublinks: [],
//         },
//       ],
//     },
//   ],
// });
