import { z } from 'astro/zod';

// Schema for a sub-navigation item
const SubNavItemSchema = z.object({
  parent_id: z.string(), // should equal its parent nav’s id
  id: z.string(), // unique within its parent
  label: z.string(),
  url: z.string(),
  icon: z.string().optional(),
});

// Schema for a main navigation item
export const NavItemSchema = z.object({
  id: z.string(), // e.g. "services"
  label: z.string(), // e.g. "Services"
  url: z.string(), // e.g. "/services"
  icon: z.string().optional(), // e.g. "settings"
  subnavigation: z.array(SubNavItemSchema).optional(),
});

// Top-level schema for the whole navigation.toml
const NavigationSchema = z.object({
  navigation: z.array(NavItemSchema).nonempty(), // at least one nav item
});

export type NavItemType = z.infer<typeof NavItemSchema>;
export type NavType = z.infer<typeof NavigationSchema>;

export type ChildNavType = z.infer<typeof SubNavItemSchema>;
