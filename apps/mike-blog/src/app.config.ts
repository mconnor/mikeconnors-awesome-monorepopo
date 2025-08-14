import MyAvatar from './assets/img-1_200x200.webp';

const NAME = 'Mike Connor';
const SITE_TITLE = 'Mike Connor | Developer';
const SITE_DESCRIPTION =
  'Developer, Designer, and Creator. I love to learn and share my knowledge with others. I am a full-stack developer with a passion for creating beautiful and functional web applications.';

// export type OutLinkTypes = typeof OUTBOUND_LINKS

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

  // imageSources,
  COUNTRY_URL,
};
