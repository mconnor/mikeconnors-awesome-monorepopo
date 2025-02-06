import { countriesSchema, countrySchema, jsonSchema } from '#schemas/index.ts';

import type { Loader, LoaderContext } from 'astro/loaders';

//  parseData<TData extends Record<string, unknown>>(props: ParseDataOptions<TData>): Promise<TData>;
//

const COUNTRY_URL = new URL(
  '/v3.1/region/africa/',
  'https://restcountries.com/',
);
// object loader
const countryLoader = (): Loader => {
  return {
    name: 'countries-loader',
    schema: async () => Promise.resolve(countrySchema),
    load: async (loaderContext: LoaderContext) => {
      loaderContext.logger.info('Loading countries ' + COUNTRY_URL.href);
      loaderContext.store.clear();
      const fetchCountries = async (_loaderCtx: LoaderContext) => {
        const { store, logger, parseData } = _loaderCtx;

        const unknownObj = await fetch(COUNTRY_URL.href)
          .then((res) => res.json() as unknown)
          .catch((error) => {
            logger.error('Fetch failed: ' + error);
          });

        const result = jsonSchema.safeParse(unknownObj);

        if (!result.success) {
          new Error(`Failed to parse JSON: ${result.error.message}`);
        }

        // console.log(rawResponse);

        const {
          data: countryData,
          success,
          error: parseError,
        } = countriesSchema.safeParse(result.data);
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
            } catch (_error: unknown) {
              logger.error(`skipped country '${id}:'`);
            }
          }
        }
      };
      return await fetchCountries(loaderContext);
    },
  };
};

export { countryLoader };
