// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astrofy | Personal Portfolio Website Template';
export const SITE_DESCRIPTION =
  'Astrofy is a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS. Create in minutes a website with Blog, CV, Project Section, Store and RSS Feed.';
// export const GENERATE_SLUG_FROM_TITLE = true;
// export const TRANSITION_API = true;
export const Links = {
  github: 'https://www.github.com/mconnor',
  twitter: 'https://www.twitter.com/mikeconnor504',
  linkedin: 'https://www.linkedin.com/in/michaelgconnor/',
  tiwtter: 'https://www.twitter.com/mikeconnor504',
  discord: 'https://discord.com/users/mike4989',
} as const;

export interface NavLinkI {
  label: string;
  href: string;
  icon?: string;
  subPages?: boolean;
}
export const navLinks: NavLinkI[] = [
  { label: 'Home', href: '/', icon: 'home' },
  // { label: 'countries', href: '/countries', icon: 'country' },
  // { label: 'buttons', href: '/buttons', icon: 'home' },
  { label: 'Blog', href: '/posts', icon: 'blog', subPages: true },
  // { label: 'Sidebar', href: '/about', icon: 'projects' },
  // { label: 'form', href: '/form-test', icon: 'projects' },
  { label: 'contact', href: '/contact', icon: 'projects' },
  { label: 'cv', href: '/resume', icon: 'projects' },
  // { label: 'blank', href: '/blank', icon: 'projects' },
  // { label: 'announcements', href: '/announcements', icon: 'projects' },

  // { label: 'CV', href: '/cv', icon: 'cv' },
  // { label: 'Store', href: '/store', icon: 'store' },
] as const;

/*
These rad font-families from Dan Klammer's modern font stacks provide great typefaces that are entirely local. With these font stacks you won't have to worry about slowing down your page load or layout shift from external fonts!
--font-system-ui: system-ui, sans-serif;
--font-transitional: Charter, Bitstream Charter, Sitka Text, Cambria, serif;
--font-old-style: Iowan Old Style, Palatino Linotype, URW Palladio L, P052, serif;
--font-humanist: Seravek, Gill Sans Nova, Ubuntu, Calibri, DejaVu Sans, source-sans-pro, sans-serif;
--font-geometric-humanist: Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif;
--font-classical-humanist: Optima, Candara, Noto Sans, source-sans-pro, sans-serif;
--font-neo-grotesque: Inter, Roboto, Helvetica Neue, Arial Nova, Nimbus Sans, Arial, sans-serif;
--font-monospace-slab-serif: Nimbus Mono PS, Courier New, monospace;
--font-monospace-code: Dank Mono, Operator Mono, Inconsolata, Fira Mono, ui-monospace, SF Mono,Monaco, Droid Sans Mono, Source Code Pro, Cascadia Code,Menlo, Consolas, DejaVu Sans Mono, monospace;
--font-industrial: Bahnschrift, DIN Alternate, Franklin Gothic Medium, Nimbus Sans Narrow, sans-serif-condensed, sans-serif;
--font-rounded-sans: ui-rounded, Hiragino Maru Gothic ProN, Quicksand, Comfortaa, Manjari, Arial Rounded MT, Arial Rounded MT Bold, Calibri, source-sans-pro, sans-serif;
--font-slab-serif: Rockwell, Rockwell Nova, Roboto Slab, DejaVu Serif, Sitka Small, serif;
--font-antique: Superclarendon, Bookman Old Style, URW Bookman, URW Bookman L, Georgia Pro, Georgia, serif;
--font-didone: Didot, Bodoni MT, Noto Serif Display, URW Palladio L, P052, Sylfaen, serif;
--font-handwritten: Segoe Print, Bradley Hand, Chilanka, TSCu_Comic, casual, cursive;
*/

export const MAIN_FONT = '--font-geometric-humanist';

// see font setting in global.css
