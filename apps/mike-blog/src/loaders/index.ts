
import { defineCollection } from 'astro:content';

const countries = defineCollection({
    loader: async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      // Must return an array of entries with an id property, or an object with IDs as keys and entries as values
      return data.map((country) => ({
        id: country.cca3,
        ...country,
      }));
    },
    schema: /* ... */
  });