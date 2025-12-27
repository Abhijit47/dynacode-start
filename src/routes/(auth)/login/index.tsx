import { IconBrandGoogle } from '@tabler/icons-react';
import { createFileRoute, Link } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import AuthBackgroundShape from '../-components/auth-background-shape';
import Logo from '../-components/logo';
import LoginForm from './-components/login-form';

export const Route = createFileRoute('/(auth)/login/')({
  component: RouteComponent,
  beforeLoad: () => {
    return {
      bar: true,
    };
  },
  loader: ({ context }) => {
    context.foo; // true
    context.bar; // true
  },
});

function RouteComponent() {
  return <Login />;
}

function Login() {
  return (
    <div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
      <div className='absolute'>
        <AuthBackgroundShape />
      </div>

      <Card className='z-1 w-full border-none shadow-md sm:max-w-lg'>
        <CardHeader className='gap-6'>
          <Logo className='gap-3' />

          <div>
            <CardTitle className='mb-1.5 text-2xl'>
              Sign in to Shadcn Studio
            </CardTitle>
            <CardDescription className='text-base'>
              Ship Faster and Focus on Growth.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <p className='text-muted-foreground mb-6'>
            Login with{' '}
            <Link to='.' className='text-card-foreground hover:underline'>
              Magic Link
            </Link>
          </p>

          {/* Quick Login Buttons */}
          <div className='mb-6 flex flex-wrap gap-4 sm:gap-6'>
            <Button variant='outline' className='grow'>
              Login as User
            </Button>
            <Button variant='outline' className='grow'>
              Login as Admin
            </Button>
          </div>

          {/* Login Form */}
          <div className='space-y-4'>
            <LoginForm />

            <p className='text-muted-foreground text-center'>
              New on our platform?{' '}
              <Link
                to='/signup'
                className='text-card-foreground hover:underline'>
                Create an account
              </Link>
            </p>

            <div className='flex items-center gap-4'>
              <Separator className='flex-1' />
              <p>or</p>
              <Separator className='flex-1' />
            </div>

            <Button variant='outline' className='w-full'>
              <IconBrandGoogle />
              Sign in with google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
