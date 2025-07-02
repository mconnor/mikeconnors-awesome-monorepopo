interface NavLinkI {
  label: string;
  href: string;
  icon?: string;
  subPages?: boolean;
}

const navLinks: NavLinkI[] = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'About', href: '/about', icon: 'projects' },

  { label: 'Product', href: '/product', icon: 'blog' },

  { label: 'UI', href: '/ui', icon: 'projects' },
  { label: 'Form', href: '/form', icon: 'projects' },
] as const;

export { type NavLinkI, navLinks };

export const tableData = [
  {
    framework: 'react',
    projectName: 'E-commerce Dashboard',
    description:
      'Admin dashboard for managing online store with React and TypeScript',
    githubUrl: 'https://github.com/example/react-dashboard',
    demoUrl: 'https://demo.example.com/react',
    // emoji: '⚛️'
  },
  {
    framework: 'svelte',
    projectName: 'Weather App',
    description: 'Real-time weather application built with SvelteKit',
    githubUrl: 'https://github.com/example/svelte-weather',
    demoUrl: 'https://demo.example.com/svelte',
    //  emoji: '🔥'
  },
  {
    framework: 'vue',
    projectName: 'Task Manager',
    description:
      'Collaborative task management tool using Vue 3 Composition API',
    githubUrl: 'https://github.com/example/vue-tasks',
    demoUrl: 'https://demo.example.com/vue',
    // emoji:'💚'
  },
  {
    framework: 'react',
    projectName: 'Blog Platform',
    description: 'Modern blogging platform with React and MDX support',
    demoUrl: 'https://demo.example.com/vue',
    githubUrl: 'https://github.com/example/react-blog',
    // emoji: '⚛️'
  },
  {
    framework: 'svelte',
    projectName: 'Portfolio Site',
    description: 'Personal portfolio website showcasing Svelte animations',
    demoUrl: 'https://demo.example.com/portfolio',
    githubUrl: 'https://github.com/sveltejs/svelte',
    // emoji: '🔥'
  },
] as const;

export const projectData = [
  {
    framework: 'svelte',
    title: 'Svelte Application',
    description:
      'A modern, reactive framework that compiles to vanilla JavaScript for optimal performance.',
  },
  {
    framework: 'vue',
    title: 'Vue.js Project',
    description:
      'Progressive framework for building user interfaces with excellent developer experience.',
  },
  {
    framework: 'react',
    title: 'React Application',
    description:
      'A JavaScript library for building user interfaces with component-based architecture.',
  },
  {
    framework: 'svelte',
    title: 'SvelteKit App',
    description:
      'Full-stack framework built on top of Svelte with server-side rendering capabilities.',
  },
  {
    framework: 'vue',
    title: 'Nuxt.js Website',
    description:
      'The intuitive Vue framework for creating type-safe, performant web applications.',
  },
] as const;
