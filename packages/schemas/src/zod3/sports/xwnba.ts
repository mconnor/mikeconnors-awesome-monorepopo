import * as z from 'zod';

const WnbaCitySchema = z.object({
  cityCode: z.string().regex(/^[A-Z]{3}$/),
  cityName: z.string(),
});
type CityCodeType = z.infer<typeof WnbaCitySchema>;

export const wnbaCities: CityCodeType[] = [
  { cityCode: 'ATL', cityName: 'Atlanta' },
  { cityCode: 'CHI', cityName: 'Chicago' },
  { cityCode: 'CTS', cityName: 'Connecticut' },
  { cityCode: 'DAL', cityName: 'Dallas' },
  { cityCode: 'IND', cityName: 'Indianapolis' },
  { cityCode: 'LAS', cityName: 'Las Vegas' },
  { cityCode: 'LOS', cityName: 'Los Angeles' },
  { cityCode: 'MIN', cityName: 'Minneapolis' },
  { cityCode: 'NYC', cityName: 'New York' },
  { cityCode: 'PHX', cityName: 'Phoenix' },
  { cityCode: 'SEA', cityName: 'Seattle' },
  { cityCode: 'WAS', cityName: 'Washington' },
];

export const WnbaTeam = z.object({
  teamCode: z.string().length(3),
  teamName: z.string(),
  joinYear: z.number().int().min(1997).max(new Date().getFullYear()),
});
type WnbaTeamType = z.infer<typeof WnbaTeam>;

const wnbaTeams: WnbaTeamType[] = [
  { teamCode: 'ATL', teamName: 'Atlanta Dream', joinYear: 2008 },
  { teamCode: 'CHI', teamName: 'Chicago Sky', joinYear: 2006 },
  { teamCode: 'CON', teamName: 'Connecticut Sun', joinYear: 1999 },
  { teamCode: 'DAL', teamName: 'Dallas Wings', joinYear: 1998 },
  { teamCode: 'IND', teamName: 'Indiana Fever', joinYear: 2000 },
  { teamCode: 'LVA', teamName: 'Las Vegas Aces', joinYear: 1997 },
  { teamCode: 'LOS', teamName: 'Los Angeles Sparks', joinYear: 1997 },
  { teamCode: 'MIN', teamName: 'Minnesota Lynx', joinYear: 1999 },
  { teamCode: 'NYL', teamName: 'New York Liberty', joinYear: 1997 },
  { teamCode: 'PHX', teamName: 'Phoenix Mercury', joinYear: 1997 },
  { teamCode: 'SEA', teamName: 'Seattle Storm', joinYear: 2000 },
  { teamCode: 'WAS', teamName: 'Washington Mystics', joinYear: 1998 },
];
export { type CityCodeType, WnbaCitySchema };
