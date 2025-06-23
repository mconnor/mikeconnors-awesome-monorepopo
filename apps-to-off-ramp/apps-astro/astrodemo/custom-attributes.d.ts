declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    'data-count'?: number;
    'data-label'?: string;
    'data-select-theme'?: Element;
  }

  // Add a CSS custom property to the style object
  interface CSSProperties {
    '--theme-color'?: 'black' | 'white';
  }
}
