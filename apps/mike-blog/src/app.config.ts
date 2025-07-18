import type iconPaths from '@repo/icon-paths/paths';

type IconType = keyof typeof iconPaths;
import MyAvatar from './assets/img-1_200x200.webp';

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

const navLinksArray = [
  { name: 'About', dirPath: '/about', icon: 'projects' },
  { name: 'Posts', dirPath: '/posts', icon: 'blog' },
  { name: 'Tags', dirPath: '/tags', icon: 'projects' },
  { name: 'CV', dirPath: '/resume', icon: 'projects' },
  { name: 'Announce', dirPath: './announcements', icon: 'projects' },
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

const COUNTRY_URL = new URL(
  '/v3.1/region/africa/',
  'https://restcountries.com/',
);
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

import type { SupportServiceType } from '#schemas/SupportServices.ts';

export const PRICE_PLANS: SupportServiceType[] = [
  {
    id: 'support-001',
    service: 'Basic',
    descrip: '24/7 technical support with priority response times',
    priceLevels: {
      monthly: '9.99',
      yearly: '99.99',
      currency: '$',
    },
    level: 'value',
    active: true,
    features: [
      { copy: '24/7 phone and email support', has: true },
      { copy: 'Priority response within 2 hours', has: true },
      { copy: 'Dedicated support specialist', has: false },
      { copy: 'Remote troubleshooting assistance', has: false },
    ],
    // isActive: true,
    // createdAt: new Date("2024-01-15"),
    // updatedAt: new Date("2024-01-20")
  },
  {
    id: 'support-002',
    service: 'Premium Support Package',
    descrip: '24/7 technical support with priority response times',
    priceLevels: {
      monthly: '13.99',
      yearly: '120.99',
      currency: '$',
    },
    level: 'value',
    active: true,
    features: [
      { copy: '24/7 phone and email support', has: true },
      { copy: 'Priority response within 2 hours', has: true },
      { copy: 'Dedicated support specialist', has: true },
      { copy: 'Remote troubleshooting assistance', has: true },
    ],
    // isActive: true,
    // createdAt: new Date("2024-01-15"),
    // updatedAt: new Date("2024-01-20")
  },
];

export {
  MyAvatar,
  NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  OUTBOUND_LINKS,
  navLinksArray,
  // imageSources,
  timeCapsules,
  COUNTRY_URL,
};
