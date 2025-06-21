interface NavLinkI {
  label: string;
  href: string;
  icon?: string;
  subPages?: boolean;
}

const navLinks: NavLinkI[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'About', href: '/about', icon: 'projects' },

  { label: 'Product', href: '/product', icon: 'blog' },

  { label: 'UI', href: '/ui', icon: 'projects' },
  { label: 'Form', href: '/form', icon: 'projects' },
] as const;

export { type NavLinkI, navLinks };
