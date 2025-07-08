import * as z from 'zod';

const tagsSchema = z.array(z.string()).nonempty();

const tagCountSchema = z.record(z.number());

export { tagsSchema, tagCountSchema };
