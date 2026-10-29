import { BlogPost } from '../types';

export const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up type safety in your modern React applications.',
    content: 'TypeScript brings static typing to JavaScript, helping catch bugs early during development. Combined with React, it makes component props and state fully predictable.',
    date: '2026-10-01',
    likes: 4,
  },
  {
    id: 2,
    title: 'Understanding React Router v6',
    excerpt: 'Master client-side routing, layout routes, and dynamic parameters.',
    content: 'React Router allows seamless navigation between views without full page reloads. Using layout routes keeps your header and footer persistent.',
    date: '2026-10-05',
    likes: 7,
  },
  {
    id: 3,
    title: 'Local State Management in React',
    excerpt: 'Explore useState, useReducer, and handling local interactivity.',
    content: 'Local state is perfect for component-specific interactions like like buttons, toggling comments, or managing form inputs.',
    date: '2026-10-10',
    likes: 12,
  },
  {
    id: 4,
    title: 'Writing Tests with Vitest & RTL',
    excerpt: 'Ensure your components work correctly with automated testing.',
    content: 'React Testing Library helps test components from the user perspective, while Vitest provides a fast test runner compatible with Vite.',
    date: '2026-10-15',
    likes: 9,
  },
  {
    id: 5,
    title: 'Deploying React Apps to GitHub Pages',
    excerpt: 'Publish your static single-page applications easily.',
    content: 'Configuring the base path in Vite and directing the build output to the docs folder allows seamless publishing on GitHub Pages.',
    date: '2026-10-20',
    likes: 15,
  },
];