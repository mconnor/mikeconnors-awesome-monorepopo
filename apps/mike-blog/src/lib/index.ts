const generateRandomString = (len = 8) => {
  // Math.floor(Math.random() * 13) + 3 // Generate a random length between 3 and 15
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const getPaths = (url: string) => {
  return url === '/' ?
      'Home'.toUpperCase()
    : url.match(/[^/]+/g)?.[0].toUpperCase();
};

export { getPaths, capitalize, generateSlug, generateRandomString };
