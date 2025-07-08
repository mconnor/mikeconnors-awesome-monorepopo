import * as z from 'zod';

const countrySchema = z.object({
  cca3: z.string(), // Assuming 'cca3' is a string
  name: z.object({
    common: z.string(), // Add more fields as needed
  }),
});

const countriesSchema = z.array(countrySchema);

export { countrySchema, countriesSchema };
