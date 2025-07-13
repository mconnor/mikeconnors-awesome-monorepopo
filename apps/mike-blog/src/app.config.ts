import type iconPaths from '@repo/icon-paths/paths';

type IconType = keyof typeof iconPaths;
import MyAvatar from '#assets/img-1_200x200.webp';

const NAME = 'Mike Connor';
const SITE_TITLE = 'Mike Connor | Developer';
const SITE_DESCRIPTION =
  'Developer, Designer, and Creator. I love to learn and share my knowledge with others. I am a full-stack developer with a passion for creating beautiful and functional web applications.';

// const SOCIAL_LINKS = {
//   twitter: 'https://x.com/mikeconnor504',
//   facebook: 'https://www.facebook.com/mike.connor.50702',
//   linkedin: 'https://www.linkedin.com/in/michaelgconnor/',
// };

interface OutboundLinksType {
  company: string;
  url: string;
  logo: IconType;
}

// const MyInfo = {};

const GITHUB: OutboundLinksType = {
  company: 'github',
  url: 'https://www.github.com/mconnor',
  logo: 'github-logo',
};
const TWITTER: OutboundLinksType = {
  company: 'twitter',
  url: 'https://www.twitter.com/mikeconnor504',
  logo: 'twitter-logo',
};
const LINKEDIN: OutboundLinksType = {
  company: 'linkedin',
  url: 'https://www.linkedin.com/in/michaelgconnor/',
  logo: 'linkedin-logo',
};
const DISCORD: OutboundLinksType = {
  company: 'discord',
  url: 'https://discord.com/users/mike4989',
  logo: 'discord-logo',
};

const OUTBOUND_LINKS = new Set([GITHUB, TWITTER, LINKEDIN, DISCORD]);

export interface NavLinkI {
  name: string;
  dirPath: string;
  icon: string;
  // subPages?: boolean;
}
// const navLinks: TmenuLink[] = [

export const navLinksArray = [
  { name: 'About', dirPath: '/about', icon: 'projects' },
  { name: 'Posts', dirPath: '/posts', icon: 'blog' },
  { name: 'Tags', dirPath: '/tags', icon: 'projects' },
  { name: 'CV', dirPath: '/resume', icon: 'projects' },
  { name: 'Announce', dirPath: './announcements', icon: 'projects' },
];

const imageSources = [
  {
    img: './assets/kelleys.jpeg',
    altText: 'Kelleys',
  },
  {
    img: './assets/andy_mud_color.webp',
    altText: 'webp',
  },
  // {
  //   img: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
  //   altText: 'Beautiful landscape with mountains and lake',
  // },
  // {
  //   img: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
  //   altText: 'Colorful autumn forest scene',
  // },
  // {
  //   img: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
  //   altText: 'Tropical beach with palm trees',
  // },
  // {
  //   img: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
  //   altText: 'City skyline at sunset',
  // },
  // {
  //   img: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
  //   altText: 'Serene mountain lake reflection',
  // },
  // {
  //   img: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
  //   altText: 'Desert landscape with cacti',
  // },
  // {
  //   img: 'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp',
  //   altText: 'Ocean waves crashing on rocks',
  // },
];

const timeCapsules = [
  { city: 'KCMO', year: 0 },
  { city: 'Chicago', year: 1988 },
  { city: 'DC', year: 1990 },
  { city: 'NYC', year: 1995 },
  { city: 'Portland, OR', year: 2012 },
  { city: 'New Orleans', year: 2014 },
  { city: 'KCMO', year: 2022 },
];

// const map = new Map();
// // Iterate and record first & last per city
// for (const entry of timeCapsules) {
//   const key = entry.city;
//   if (!map.has(key)) {
//     // first time we see this city
//     map.set(key, { first: entry, last: entry });
//   } else {
//     // update only the “last” pointer
//     map.get(key).last = entry;
//   }
// }

// // Now for each city you can do:
// const { first, last } = map.get('KCMO');
// console.log(first, last);
// // → { city: 'KCMO', year: 0 }  and  { city: 'KCMO', year: 2022 }

export {
  MyAvatar,
  NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  OUTBOUND_LINKS,
  navLinks,
  imageSources,
  timeCapsules,
};
