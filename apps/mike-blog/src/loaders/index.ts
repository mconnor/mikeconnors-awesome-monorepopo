import type { Loader, LoaderContext } from 'astro/loaders';

import { countriesSchema, countrySchema } from '#schemas/index.ts';

const countryLoader = (): Loader => {
  //https://restcountries.com/v3.1/subregion/Northern Europe
  const url = new URL('v3.1/region/africa', 'https://restcountries.com');

  return {
    name: 'countries-loader',
    schema: countrySchema,
    load: async ({
      store,
      parseData,
      logger,
    }: LoaderContext): Promise<void> => {
      logger.info('Loading countries ' + url.href);
      store.clear();

      await fetchCountries();

      async function fetchCountries() {
        const rawResponse = await fetch(url.href)
          .then((res) => res.json())
          .catch((error) => {
            logger.error('Fetch failed:', error);
          });

        const result = countriesSchema.safeParse(rawResponse);
        if (!result.success) {
          throw new Error(
            `Failed to parse countries API response: ${result.error}`,
          );
        } else if (result.data) {
          for (const country of result.data) {
            const id = country.cca3;
            try {
              const data = await parseData({
                id,
                data: country,
              });
              store.set({ id, data });
            } catch (error) {
              logger.error(`skipped country ${id}: ${error}`);
            }
          }
        }
      }
    },
  };
};

export default countryLoader;