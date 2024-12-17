import type { Loader, LoaderContext } from 'astro/loaders';
import { YOUTUBE_API_KEY, YOUTUBE_PLAYLIST_ID } from 'astro:env/server';

import { videoSchema, youtubeApiResponse } from '#schemas/youtube-schema.js';

export default function (): Loader {
  const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
  url.searchParams.append('part', 'snippet');
  url.searchParams.append('part', 'contentDetails');
  url.searchParams.append('playlistId', YOUTUBE_PLAYLIST_ID);
  url.searchParams.append('key', YOUTUBE_API_KEY);
  url.searchParams.append('maxResults', '50');

  return {
    name: 'youtube-loader',
    schema: videoSchema,
    load: async ({
      store,
      parseData,
      logger,
    }: LoaderContext): Promise<void> => {
      let nextPageToken: string | undefined;
      let pagesCollected = 0;
      await fetchVideos();
      while (!nextPageToken) {
        await fetchVideos();
      }

      async function fetchVideos() {
        if (pagesCollected >= 100) {
          logger.warn('Reached maximum number of pages to fetch');
          return;
        }
        if (nextPageToken) {
          url.searchParams.set('pageToken', nextPageToken);
        }
        const rawResponse = await fetch(url.href).then((res) => res.json());

        // console.log(JSON.stringify(rawResponse));

        const result = youtubeApiResponse.safeParse(rawResponse);
        if (!result.success) {
          throw new Error(
            `Failed to parse YouTube API response: ${result.error}`,
          );
        } else if (result.data) {
          nextPageToken = result.data.nextPageToken;

          for (const item of result.data.items) {
            const id = item.snippet.resourceId.videoId;
            try {
              const data = await parseData({
                id,
                data: item,
              });
              // a store can choose when to update
              store.set({ id, data });
            } catch (error) {
              logger.error(`skipped video ${id}: ${error}`);
            }
          }
          pagesCollected++;
        }
      }
    },
  };
}
