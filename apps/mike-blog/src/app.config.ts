import type iconPaths from '@repo/icon-paths/paths';
type IconType = keyof typeof iconPaths;

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
const navLinks: NavLinkI[] = [
  { label: 'Home', href: '/', icon: 'home' },
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
  { label: 'Announcements', href: '/announcements', icon: 'projects' },
  // { label: 'get-started', href: '/get-started', icon: 'projects' },

  // { label: 'Store', href: '/store', icon: 'store' },
] as const;

export { NAME, SITE_TITLE, SITE_DESCRIPTION, OUTBOUND_LINKS, navLinks };
