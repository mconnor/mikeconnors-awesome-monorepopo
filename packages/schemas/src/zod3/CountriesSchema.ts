import { z } from 'astro:content';

const countrySchema = z.object({
  cca3: z.string(), // Assuming 'cca3' is a string
  name: z.object({
    common: z.string(), // Add more fields as needed
  }),
});

const countriesSchema = countrySchema.array().nonempty({
  message: "Can't be empty!",
});

export { countrySchema, countriesSchema };
