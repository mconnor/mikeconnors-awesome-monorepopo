// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Mike Connor';
export const SITE_DESCRIPTION =
  'Astrofy is a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS. Create in minutes a website with Blog, CV, Project Section, Store and RSS Feed.';
// export const GENERATE_SLUG_FROM_TITLE = true;
// export const TRANSITION_API = true;

export enum Links {
  LINKEDIN = 'https://www.linkedin.com/in/michaelgconnor/',
  GITHUB = 'https://www.github.com/mconnor',
  TWITTER = 'https://www.twitter.com/mikeconnor504',
}

export interface navLinkType {
  label: string;
  href: string;
  icon: string;
}
export const navLinks: navLinkType[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Now', href: '/now', icon: 'home' },
  { label: 'Blog', href: '/posts', icon: 'blog' },
  { label: 'About', href: '/about', icon: 'projects' },
  // { label: 'CV', href: '/cv', icon: 'cv' },
  // { label: 'Store', href: '/store', icon: 'store' },
];

export const MAIN_FONT = '--font-geometric-humanist';

// see font setting in global.css
