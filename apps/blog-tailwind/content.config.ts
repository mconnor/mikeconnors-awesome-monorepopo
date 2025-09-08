const siteNav = defineCollection({
  loader: file('src/data/site/nav.toml'),
  schema: NavItemSchema,
});

export const collections = {
  siteNav,
};
