import { countriesSchema, countrySchema } from '#schemas/index.ts';

import type { Loader, LoaderContext } from 'astro/loaders';
const COUNTRY_URL = new URL(
  '/v3.1/region/africa/',
  'https://restcountries.com/',
);
// An inline loader is an async function that returns an array or object containing entries.
function countryLoader(): Loader {
  //https://restcountries.com/v3.1/subregion/Northern Europe

  return {
    name: 'countries-loader',
    schema: countrySchema,
    load: async (loaderContext: LoaderContext) => {
      loaderContext.logger.info('Loading countries ' + COUNTRY_URL.href);
      loaderContext.store.clear();

      const fetchCountries = async (_loaderCtx: LoaderContext) => {
        const { store, logger } = _loaderCtx;
        const parseData = _loaderCtx.parseData.bind(_loaderCtx);

        const countryJson = await fetch(COUNTRY_URL.href)
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
      await fetchCountries(loaderContext);
    },
  };
}

export { countryLoader };
