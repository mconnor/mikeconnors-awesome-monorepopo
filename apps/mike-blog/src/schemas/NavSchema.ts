import { z } from 'astro/zod';

// Base navigation item schema without children first
const BaseNavigationItemSchema = z.object({
  label: z.string().min(1, 'Label is required'),
  url: z.string().min(1, 'URL is required'),
  target: z.enum(['_self', '_blank', '_parent', '_top']).optional(),
  rel: z.string().optional(), // for external links (noopener, noreferrer, etc.)
  description: z.string().optional(), // for accessibility/tooltips
});

// Define the recursive type
type NavigationItem = z.infer<typeof BaseNavigationItemSchema> & {
  children?: NavigationItem[];
};

// Create the recursive schema
export const NavigationItemSchema: z.ZodType<NavigationItem> = BaseNavigationItemSchema.extend({
  children: z.lazy(() => NavigationItemSchema.array()).optional().default([]),
});

// Schema for the entire TOML structure
export const NavigationSchema = z.array(NavigationItemSchema);

export type NavType = z.infer<typeof NavigationItemSchema>;
export type NavItemType = NavType; // Alias for compatibility