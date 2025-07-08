import * as z from 'zod';

const athleteSchema = z.tuple([
  z.string(), // name
  z.number(), // jersey number
  z.object({
    pointsScored: z.number(),
  }), // statistics
]);

export default athleteSchema;
export type Athlete = z.infer<typeof athleteSchema>;
