/**
 * Complete list of available DaisyUI themes
 * @see https://daisyui.com/docs/themes/
 */
export const daisyuiThemes = [
  // Light themes
  'light',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'retro',
  'cyberpunk',
  'valentine',
  'garden',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'cmyk',
  'autumn',
  'acid',
  'lemonade',
  'winter',

  // Dark themes
  'dark',
  'synthwave',
  'halloween',
  'forest',
  'black',
  'luxury',
  'dracula',
  'business',
  'night',
  'coffee',
  'dim',
  'sunset',
  'nord',
] as const;

export type DaisyUITheme = (typeof daisyuiThemes)[number];

// Helper to check if a string is a valid DaisyUI theme
export function isValidDaisyUITheme(theme: string): theme is DaisyUITheme {
  return daisyuiThemes.includes(theme as any);
}

// Export default grouped by light/dark for easier usage
export const daisyuiThemeGroups = {
  light: [
    'light',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'retro',
    'cyberpunk',
    'valentine',
    'garden',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'cmyk',
    'autumn',
    'acid',
    'lemonade',
    'winter',
  ],
  dark: [
    'dark',
    'synthwave',
    'halloween',
    'forest',
    'black',
    'luxury',
    'dracula',
    'business',
    'night',
    'coffee',
    'dim',
    'sunset',
    'nord',
  ],
};
