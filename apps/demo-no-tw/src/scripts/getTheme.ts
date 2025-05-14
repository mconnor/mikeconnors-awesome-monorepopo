// on page, get the last theme from the cookie and set it
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
