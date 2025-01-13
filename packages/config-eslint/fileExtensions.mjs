// @repo/eslint/extensions.js

class ExtraFileExtensions {
  constructor() {
    this.extensions = new Set(['.svelte', '.astro', '.md', '.mdx']); // Default extensions
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
const instance = new ExtraFileExtensions();
export default instance;
