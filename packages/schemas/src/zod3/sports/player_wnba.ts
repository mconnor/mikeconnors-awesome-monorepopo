import * as z from 'zod';

export const gameSchema = {
  dates: z.array(z.date()),
  team1: z.string(),
  team2: z.string,
};
export const wnbaPlayerSchema = z.object({
  name: z.string(),
  team: z.string(),
  teamNo: z.number().int().positive().lte(99),
  gameLog: z.array(z.date()),
});
