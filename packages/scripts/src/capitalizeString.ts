/**
 * Capitalizes the first letter of the given string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
function capitalizeString(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default capitalizeString;
