/**
 * Gets the theme from localStorage and applies it to the document
 */
function setupTheme(): void {
  document.addEventListener('astro:page-load', () => {
    const storedTheme = localStorage.getItem('theme');
    const doc = document.documentElement;
    if (storedTheme) {
      doc.setAttribute('data-theme', storedTheme);
      // $currTheme.set(storedTheme);
    } else {
      doc.setAttribute('data-theme', 'light');
    }
  });
}

// Auto-execute if this is loaded directly
// if (typeof document !== 'undefined') {
//   setupTheme();
// }

export default setupTheme;
