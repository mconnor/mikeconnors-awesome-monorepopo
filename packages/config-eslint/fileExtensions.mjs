// @repo/eslint/extensions.js
// The default extensions are ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.mts', '.cts', '.tsx'].
class ExtraFileExtensions {
  constructor() {
    this.extensions = new Set(['.vue', '.svelte', '.astro', '.md', '.mdx']); // Default extensions
  }

  /**
   * Get the current list of extensions as an array
   */
  getExtensions() {
    return [...this.extensions];
  }

  /**
   * Add a new extension to the list
   * @param {string} extension - The extension to add (e.g., ".vue")
   */
  addExtension(extension) {
    this.extensions.add(extension);
  }

  /**
   * Remove an extension from the list
   * @param {string} extension - The extension to remove
   */
  removeExtension(extension) {
    this.extensions.delete(extension);
  }
}

// Create a single shared instance
const extensionInstanceObj = new ExtraFileExtensions();
export default extensionInstanceObj;
