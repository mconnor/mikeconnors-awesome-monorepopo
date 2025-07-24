import type iconPaths from '@repo/icon-paths/paths';

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

// interface OutboundLinksType {
//   platform: string;
//   url: string;
//   logo: IconType;
// }

// const MyInfo = {};
import {
  type PlatformLinkType,
  type PlatformType,
} from '#schemas/platforms.ts';

const TWITTER = 'twitter';
const FB = 'facebook';
const LI = 'linkedin';
const DISCORD = 'discord';
// const GITHUB= 'github'

function getPlatformSVGPath(plat: Omit<PlatformType, 'github'>) {
  switch (plat) {
    case TWITTER:
      return 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z';
    case LI:
      return 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z';
    case FB:
      return 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z';
    default:
      return '';
  }
}

// const GITHUB_OBJ:PlatformLinkType= {
//   platform: GITHUB,
//   url: 'https://www.github.com/mconnor',
//   logo:  `${GITHUB}-logo`,
//   path: getPlatformSVGPath(GITHUB)
// };
const TWITTER_OBJ: PlatformLinkType = {
  platform: TWITTER,
  url: `https://www.${TWITTER}.com/mikeconnor504`,
  logo: `${TWITTER}-logo`,
  path: getPlatformSVGPath(TWITTER),
};
const LINKEDIN_OBJ: PlatformLinkType = {
  platform: LI,
  url: `https://www.${LI}.com/in/michaelgconnor/`,
  logo: `${LI}-logo`,
  path: getPlatformSVGPath(LI),
};
const DISCORD_OBJ: PlatformLinkType = {
  platform: DISCORD,
  url: `https://${DISCORD}.com/users/mike4989`,
  logo: `${DISCORD}-logo`,
  path: getPlatformSVGPath(DISCORD),
};

const OUTBOUND_LINKS = [TWITTER_OBJ, LINKEDIN_OBJ, DISCORD_OBJ];

// export type OutLinkTypes = typeof OUTBOUND_LINKS

export interface NavLinkI {
  name: string;
  dirPath: string;
  icon: string;
  // subPages?: boolean;
}
// const navLinks: TmenuLink[] = [

const navLinksArray = [
  { name: 'About', dirPath: '/about', icon: 'projects' },
  { name: 'authors', dirPath: '/authors', icon: 'projects' },
  { name: 'Posts', dirPath: '/posts', icon: 'blog' },
  { name: 'Tags', dirPath: '/tags', icon: 'projects' },
  { name: 'CV', dirPath: '/resume', icon: 'projects' },
  { name: 'Announce', dirPath: './announcements', icon: 'projects' },
];

export type NavLinkType = typeof navLinksArray;

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

// import type { SupportServiceType } from '#schemas/SupportServices.ts';

// export const PRICE_PLANS: SupportServiceType[] = [
//   {
//     id: 'support-001',
//     service: 'Basic',
//     descrip: '24/7 technical support with priority response times',
//     priceLevels: {
//       monthly: '9.99',
//       yearly: '99.99',
//       currency: '$',
//     },
//     level: 'value',
//     active: true,
//     features: [
//       { copy: '24/7 phone and email support', has: true },
//       { copy: 'Priority response within 2 hours', has: true },
//       { copy: 'Dedicated support specialist', has: false },
//       { copy: 'Remote troubleshooting assistance', has: false },
//     ],
//     // isActive: true,
//     // createdAt: new Date("2024-01-15"),
//     // updatedAt: new Date("2024-01-20")
//   },
//   {
//     id: 'support-002',
//     service: 'Premium Support Package',
//     descrip: '24/7 technical support with priority response times',
//     priceLevels: {
//       monthly: '13.99',
//       yearly: '120.99',
//       currency: '$',
//     },
//     level: 'value',
//     active: true,
//     features: [
//       { copy: '24/7 phone and email support', has: true },
//       { copy: 'Priority response within 2 hours', has: true },
//       { copy: 'Dedicated support specialist', has: true },
//       { copy: 'Remote troubleshooting assistance', has: true },
//     ],
//     // isActive: true,
//     // createdAt: new Date("2024-01-15"),
//     // updatedAt: new Date("2024-01-20")
//   },
// ];

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
