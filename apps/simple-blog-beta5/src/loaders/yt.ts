import type { Loader, LoaderContext } from 'astro/loaders';
import { YOUTUBE_API_KEY, YOUTUBE_PLAYLIST_ID } from 'astro:env/server';

import { youtubeApiResponse } from '#schemas/youtube-schema.js';

export default function (): Loader {
  const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
  url.searchParams.append('part', 'snippet');
  url.searchParams.append('contentDetails', 'snippet');
  url.searchParams.append('playlistId', YOUTUBE_PLAYLIST_ID);
  url.searchParams.append('key', YOUTUBE_API_KEY);
  url.searchParams.append('maxResults', '10');

  return {
    name: 'youtube-loader',
    // schema: videoSchema,
    load: async ({ store, parseData }: LoaderContext) => {
      let nextPageToken: string | undefined;
      let pagesCollected = 0;
      await fetchVideos();
      while (!nextPageToken) {
        await fetchVideos();
      }

      async function fetchVideos() {
        if (pagesCollected >= 100) {
          console.warn('Reached maximum number of pages to fetch');
          return;
        }
        if (nextPageToken) {
          url.searchParams.set('pageToken', nextPageToken);
        }
        const rawResponse = await fetch(url.href).then((res) => res.json());

        // console.log(JSON.stringify(rawResponse));

        const result = youtubeApiResponse.safeParse(rawResponse);

        // youtubeApiResponse.parse(rawResponse, {
        //   errorMap,
        // });

        // console.log(JSON.stringify(data));
        // console.log('result');
        // console.log(result.data);

        if (!result.success) {
          // console.error('Fail');
          // console.error(
          //   `Failed to parse YouTube API response: ${result.error.message}`,
          // );
          throw new Error(
            `Failed to parse YouTube API response: ${result.error}`,
          );
        } else if (result.data) {
          // console.log('SUCCESS');
          nextPageToken = result.data.nextPageToken;

          for (const item of result.data.items) {
            const id = item.snippet.resourceId.videoId;
            try {
              const pData = await parseData({
                id,
                data: item,
              });
              // a store can choose when to update
              store.set({ id, data: pData });
            } catch (error) {
              console.error(`Failed to parse video ${id}: ${error}`);
            }
          }
          pagesCollected++;
        }
      }
    },
  };
}
