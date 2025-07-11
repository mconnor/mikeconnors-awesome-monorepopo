import * as z from 'zod'; // v4

const baseLinkSx = z.object({
  name: z.string(),
  dirPath: z.string(),
  icon: z.string(),
  // subPages: z.boolean().optional()
});

type _linkType = z.infer<typeof baseLinkSx> & {
  sublinks: _linkType[];
};

const linkSx: z.ZodType<_linkType> = baseLinkSx.extend({
  sublinks: z.lazy(() => linkSx.array()),
});

const allBaseLinksSx = z.array(baseLinkSx).nonempty();


export {allBaseLinksSx, baseLinkSx, linkSx };

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
