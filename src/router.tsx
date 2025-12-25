import { createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

const isDev = import.meta.env.DEV;

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},

    scrollRestoration: false,
    scrollRestorationBehavior: 'smooth',
    defaultPreloadStaleTime: 0,
    defaultHashScrollIntoView: true,
  });

  return router;
};
