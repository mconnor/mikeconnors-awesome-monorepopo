import { countriesSchema, countrySchema } from '#schemas/index.ts';

import type { Loader, LoaderContext } from 'astro/loaders';

// An inline loader is an async function that returns an array or object containing entries.
const countryLoader = (): Loader => {
  //https://restcountries.com/v3.1/subregion/Northern Europe
  const url = new URL('/v3.1/region/africa/', 'https://restcountries.com/');

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

      const fetchCountries = async () => {
        const countryJson = await fetch(url.href)
          .then((res) => res.json() as unknown)
          .catch((error) => {
            logger.error('Fetch failed: ' + error);
          });

        // console.log(rawResponse);

        const {
          data: countryData,
          success,
          error: parseError,
        } = countriesSchema.safeParse(countryJson);
        // Must return an array of entries with an id property
        // or an object with IDs as keys and entries as values

        if (!success) {
          throw new Error(
            `Failed to parse countries API response: ${parseError.message}`,
          );
        } else if (countryData) {
          for (const country of countryData) {
            const id = country.cca3;
            try {
              const data = await parseData({
                id,
                data: country,
              });
              store.set({ id, data });
            } catch (_error) {
              logger.error(`skipped country '${id}:'`);
            }
          }
        }
      };
      await fetchCountries();
    },
  };
};

export { countryLoader };
