import * as z from 'zod/v3';

const athleteSchema = z.tuple([
  z.string(), // name
  z.number(), // jersey number
  z.object({
    pointsScored: z.number(),
  }), // statistics
]);

export default athleteSchema;
export type Athlete = z.infer<typeof athleteSchema>;
