import { z } from 'astro/zod';

const zTwitter = z.literal('twitter');
const zFacebook = z.literal('facebook');
const zLinkedin = z.literal('linkedin');
const zGithub = z.literal('github');
const zDiscord = z.literal('discord');

export const PlatformsSchema = z.union([
  zTwitter,
  zFacebook,
  zLinkedin,
  zGithub,
  zDiscord,
]);
export type PlatformType = z.infer<typeof PlatformsSchema>;

export const PlatformLinkSchema = z.object({
  platform: PlatformsSchema,
  url: z.string().url(),
  logo: z.string(),
  path: z.string(),
});
export type PlatformLinkType = z.infer<typeof PlatformLinkSchema>;

//  const LinkSetSchema = z
//   .array(LinkSchema)
//   .default([])
//   .refine(
//     (links) => {
//       const platforms = links.map((link) => link.platform);
//       return platforms.length === new Set(platforms).size;
//     },
//     { message: 'Each platform can only appear once in links' },
//   );

// type LinkTypes = z.infer<typeof LinkSetSchema>;
