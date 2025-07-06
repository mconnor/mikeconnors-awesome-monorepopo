import * as z from 'zod/v3';

const tagsSchema = z.array(z.string()).nonempty();

const tagCountSchema = z.record(z.number());

export { tagsSchema, tagCountSchema };
