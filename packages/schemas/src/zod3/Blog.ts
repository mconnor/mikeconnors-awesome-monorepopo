import * as z from 'zod';

import { Metadata, ImageSchema, nonEmptyStrings } from './Utils';

const schema = Metadata.extend({
  draft: z.boolean().optional().default(false),
  tags: nonEmptyStrings,
  cover: ImageSchema.optional(),
});

export default schema;
