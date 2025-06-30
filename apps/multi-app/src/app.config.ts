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

import type { ProjectType } from '#schemas/index.ts';

export const projectData = [
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
];
