import * as z from 'zod/v3';

// 1. City
export const CitySchema = z.object({
  city_code: z.string().length(3),
  city_name: z.string(),
});
export type City = z.infer<typeof CitySchema>;

// 2. Team
export const TeamSchema = z.object({
  team_code: z.string().length(3),
  team_name: z.string(),
  city_code: z.string().length(3),
  join_year: z.number().int().min(1997).max(new Date().getFullYear()),
});
export type Team = z.infer<typeof TeamSchema>;

// 3. Season
export const SeasonSchema = z.object({
  season_id: z.number().int().positive(),
  year: z.number().int().min(1900).max(new Date().getFullYear()),
});
export type Season = z.infer<typeof SeasonSchema>;

// 4. Venue
export const VenueSchema = z.object({
  venue_id: z.number().int().positive(),
  venue_name: z.string(),
  city_code: z.string().length(3),
});
export type Venue = z.infer<typeof VenueSchema>;

// 5. Game
export const GameSchema = z.object({
  game_id: z.number().int().positive(),
  season_id: z.number().int().positive(),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid ISO date string',
  }),
  home_team: z.string().length(3),
  away_team: z.string().length(3),
  venue_id: z.number().int().positive(),
});
export type Game = z.infer<typeof GameSchema>;

// 6. Player
export const PlayerSchema = z.object({
  player_id: z.string().uuid(),
  full_name: z.string(),
  birth_date: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: 'Invalid ISO date string',
    }),
});
export type Player = z.infer<typeof PlayerSchema>;

// 7. Roster Assignment
export const RosterSchema = z.object({
  roster_id: z.number().int().positive(),
  season_id: z.number().int().positive(),
  team_code: z.string().length(3),
  player_id: z.string().uuid(),
});
export type Roster = z.infer<typeof RosterSchema>;
