import { z } from 'astro:content';
import { YOUTUBE_PLAYLIST_ID } from 'astro:env/server';
// import { channel } from 'diagnostics_channel';
// import { isJSDocNonNullableType } from 'typescript';

const ThumbNailSchema = z.object({
  url: z.string().url(),
  width: z.number(),
  height: z.number(),
});

const thumbNailsQuality = z.object({
  default: ThumbNailSchema,
  medium: ThumbNailSchema.optional(),
  high: ThumbNailSchema.optional(),
});
// .passthrough();

// type thumbNailsQualityType = z.infer<typeof thumbNailsQuality>;

const SnippetSchema = z.object({
  // publishedAt: z.string().datetime(),
  // channelId: z.string(),
  title: z.string(),
  description: z.string(),
  thumbnails: thumbNailsQuality,
  resourcedId: z.object({
    videoId: z.string(),
  }),
  publishedAt: z.coerce.date(),
});

export const videoSchema = z
  .object({
    snippet: SnippetSchema,
    contentDetails: z.object({
      videoPublishedAt: z.coerce.date(),
    }),
  })
  .transform((item) => ({
    title: item.snippet.title,
    description: item.snippet.description,
    embedUrl: `https://www.youtube-nocookie.com/embed/${item.snippet.resourcedId.videoId}&list=${YOUTUBE_PLAYLIST_ID}`,
    youtubeUrl: `https://www.youtube.com/watch?v=${item.snippet.resourcedId.videoId}&list=${YOUTUBE_PLAYLIST_ID}`,
    publishedAt: item.snippet.publishedAt,
    thumbNails: Object.entries(item.snippet.thumbnails)
      .filter((item) => Boolean(item))
      .map(([quality, thumbnail]) => ({
        quality,
        url: thumbnail.url,
        width: thumbnail.width,
        height: thumbnail.height,
      })),
  }));

export const youtubeApiResponse = z
  .object({
    nextPageToken: z.string().optional(),
    prePageToken: z.string().optional(),
    items: z.array(
      z
        .object({
          kind: z.string(),
          etag: z.string(),
          id: z.string(),
          snippet: z
            .object({
              title: z.string(),
              channelId: z.string(),
              resourceId: z.object({
                videoId: z.string(),
                kind: z.string(),
              }),
            })
            .passthrough(),
        })
        .passthrough(),
    ),
  })
  .passthrough();
