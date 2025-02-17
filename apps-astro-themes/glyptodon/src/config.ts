const PATHS = {
  home: '/',
  about: '/about',
  resume: '/resume',
  posts: '/posts',
  finds: '/finds',
  error404: '/404',
}

const CONFIG = {
  site_title: 'Jane Doe | Graphic Designer',
  site_url: 'https://www.yoursite.dev',
  author: 'Jane Doe',
  email: 'your@email.com',
  description: 'Welcome to my blog!',
} as const;

export { CONFIG, PATHS}
