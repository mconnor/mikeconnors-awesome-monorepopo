const siteNav = defineCollection({
  loader: file('src/data/site/nav.toml'),
  schema: z.array(NavItemSchema),
});

export const collections = {
  siteNav,
};
