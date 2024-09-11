export const generateRandomString = (len = 8) => {
  // Math.floor(Math.random() * 13) + 3 // Generate a random length between 3 and 15
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
