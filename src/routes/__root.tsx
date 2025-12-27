import { TanStackDevtools } from '@tanstack/react-devtools';
import { formDevtoolsPlugin } from '@tanstack/react-form-devtools';
import {
  HeadContent,
  Outlet,
  Scripts,
  // createRootRoute,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import Header from '../components/Header';

import Navbar from '@/components/shared/navbar';
// import NotFound from '@/components/shared/not-found';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/providers/theme-provider';
import { useTheme } from 'next-themes';
import appCss from '../styles.css?url';

interface MyRouterContext {
  foo: boolean;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootComponent,
  notFoundComponent: () => {
    return <p>Not found!</p>;
  },
});

function RootComponent() {
  const { systemTheme } = useTheme();

  return (
    <RootDocument>
      <Outlet />
      <Toaster
        theme={systemTheme ?? 'system'}
        position='top-center'
        // richColors={true}
        closeButton={true}
      />
    </RootDocument>
  );
}

const isDev = import.meta.env.DEV;

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className={'relative'}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {isDev ? <Header /> : null}
          {children}
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              formDevtoolsPlugin(),
            ]}
          />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}
