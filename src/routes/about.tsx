import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us | Dynacode' },
      {
        name: 'description',
        content: 'Welcome to My App, a platform for...',
      },
      {
        name: 'keywords',
        content: 'app, platform, my app, features',
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/about"!</div>;
}
