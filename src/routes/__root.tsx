import { TanStackDevtools } from '@tanstack/react-devtools';
import { formDevtoolsPlugin } from '@tanstack/react-form-devtools';
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  // createRootRoute,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import Header from '../components/Header';

import Navbar from '@/components/shared/navbar';
// import NotFound from '@/components/shared/not-found';
import { buttonVariants } from '@/components/ui/button';
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
  // notFound: <NotFound/>,
  notFoundComponent: () => {
    return (
      <div className='grid min-h-screen grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col items-center justify-center px-4 py-8 text-center'>
          <h2 className='mb-6 text-5xl font-semibold'>Whoops!</h2>
          <h3 className='mb-1.5 text-3xl font-semibold'>
            Something went wrong
          </h3>
          <p className='text-muted-foreground mb-6 max-w-sm'>
            The page you&apos;re looking for isn&apos;t found, we suggest you
            back to home.
          </p>

          <Link
            to='/'
            className={buttonVariants({
              size: 'lg',
              className: 'rounded-lg text-base',
            })}>
            Back to home page
          </Link>
        </div>

        {/* Right Section: Illustration */}
        <div className='relative max-h-screen w-full p-2 max-lg:hidden'>
          <div className='h-full w-full rounded-2xl bg-black'></div>
          <img
            src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/error/image-1.png'
            alt='404 illustration'
            className='absolute top-1/2 left-1/2 h-[clamp(260px,25vw,406px)] -translate-x-1/2 -translate-y-1/2'
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
    );
  },
  // notFoundComponent: () => {
  //   return (
  //     <div className='grid min-h-screen grid-cols-1 lg:grid-cols-2'>
  //       <div className='flex flex-col items-center justify-center px-4 py-8 text-center'>
  //         <h2 className='mb-6 text-5xl font-semibold'>Whoops!</h2>
  //         <h3 className='mb-1.5 text-3xl font-semibold'>
  //           Something went wrong
  //         </h3>
  //         <p className='text-muted-foreground mb-6 max-w-sm'>
  //           The page you&apos;re looking for isn&apos;t found, we suggest you
  //           back to home.
  //         </p>
  //         <Button asChild size='lg' className='rounded-lg text-base'>
  //           <Link to='/'>Back to home page</Link>
  //         </Button>
  //       </div>

  //       {/* Right Section: Illustration */}
  //       <div className='relative max-h-screen w-full p-2 max-lg:hidden'>
  //         <div className='h-full w-full rounded-2xl bg-black'></div>
  //         <img
  //           src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/error/image-1.png'
  //           alt='404 illustration'
  //           className='absolute top-1/2 left-1/2 h-[clamp(260px,25vw,406px)] -translate-x-1/2 -translate-y-1/2'
  //           width={'100%'}
  //           height={'100%'}
  //         />
  //       </div>
  //     </div>
  //   );
  // },
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
