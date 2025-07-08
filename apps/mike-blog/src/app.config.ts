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

const OUTBOUND_LINKS: OutboundLinksType[] = [
  GITHUB,
  TWITTER,
  LINKEDIN,
  DISCORD,
] as const;

export interface NavLinkI {
  label: string;
  href: string;
  icon?: string;
  subPages?: boolean;
}
// const navLinks: TmenuLink[] = [
const navLinks = [
  // { label: 'Home', href: '/', icon: 'home' },
  { label: 'About', href: '/about', icon: 'projects' },
  // { label: 'countries', href: '/countries', icon: 'country' },
  // { label: 'buttons', href: '/buttons', icon: 'home' },
  { label: 'Posts', href: '/posts', icon: 'blog', subPages: true },
  // { label: 'Swatches', href: '/swatch', icon: 'blog' },
  // { label: 'Sidebar', href: '/about', icon: 'projects' },
  // { label: 'form', href: '/form-test', icon: 'projects' },
  // { label: 'Contact', href: '/contact', icon: 'projects' },
  { label: 'Tags', href: '/tags', icon: 'projects' },
  { label: 'CV', href: '/resume', icon: 'projects' },
  // { label: 'blank', href: '/blank', icon: 'projects' },
  { label: 'Announce', href: '/announcements', icon: 'projects' },
  // { label: 'get-started', href: '/get-started', icon: 'projects' },

  // { label: 'Store', href: '/store', icon: 'store' },
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
  { label: 'KCMO', year: 0, first: true },
  { label: 'DC', year: 1990 },
  { label: 'NYC', year: 1995 },
  { label: 'Portland, OR', year: 2012 },
  { label: 'New Orleans', year: 2014 },
  { label: 'KCMO', year: 2022, last: true },
];
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
