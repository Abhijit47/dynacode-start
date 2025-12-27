'use client';

import { IconLogin } from '@tabler/icons-react';
import { AnyFieldApi, useForm } from '@tanstack/react-form';
import { Link, useNavigate } from '@tanstack/react-router';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState, useTransition } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { signIn } from '@/lib/auth-client';
import { loginFormSchema } from '@/lib/zod-schemas';

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <em role='alert' className={'text-destructive text-xs font-medium'}>
          {/* {field.state.meta.errors.join(', ')} */}
          {field.state.meta.errors[0].message}
        </em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  );
}

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPending, startTransition] = useTransition();

  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validators: {
      onChange: loginFormSchema,
    },

    onSubmitInvalid: ({ value }) => {
      toast.error('Please fix the errors in the form before submitting.', {
        description: 'There are some invalid fields in the form.',
        descriptionClassName: 'text-xs',
      });
      console.info('Invalid form submission:', value);
    },
    onSubmit: ({ value }) => {
      // Handle form submission
      startTransition(async () => {
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        // console.log(value);
        const result = await signIn.email({
          email: value.email,
          password: value.password,
          rememberMe: value.rememberMe,
        });

        if (result.error) {
          toast.error('Error during login', {
            description: result.error.message,
            descriptionClassName: 'text-xs',
          });
        } else {
          toast.success('Login successful!', {
            description: 'Welcome back!',
            descriptionClassName: 'text-xs',
          });
          navigate({ to: '/' });
          form.reset();
        }
      });
    },
  });

  return (
    <form
      className='space-y-4'
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}>
      {/* Email */}
      <form.Field
        name='email'
        children={(field) => {
          return (
            <div className='space-y-1'>
              <Label className='leading-5 capitalize' htmlFor={field.name}>
                {field.name}*
              </Label>
              <Input
                type='email'
                placeholder='Enter your email address'
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          );
        }}
      />

      {/* Password */}
      <form.Field
        name='password'
        children={(field) => {
          return (
            <div className='w-full space-y-1'>
              <Label className='leading-5 capitalize' htmlFor={field.name}>
                {field.name}*
              </Label>
              <div className='relative'>
                <Input
                  type={isVisible ? 'text' : 'password'}
                  placeholder='••••••••••••••••'
                  className='pr-9'
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <Button
                  type='button'
                  variant='ghost'
                  size='icon-sm'
                  onClick={() => setIsVisible((prevState) => !prevState)}
                  className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'>
                  {isVisible ? <EyeOffIcon /> : <EyeIcon />}
                  <span className='sr-only'>
                    {isVisible ? 'Hide password' : 'Show password'}
                  </span>
                </Button>
              </div>
              <FieldInfo field={field} />
            </div>
          );
        }}
      />

      {/* Remember Me and Forgot Password */}
      <div className='flex items-center justify-between gap-y-2'>
        <form.Field
          name='rememberMe'
          children={(field) => (
            <div className='flex items-center gap-3'>
              <Checkbox
                id={field.name}
                // id='rememberMe'
                className='size-6'
                onCheckedChange={(e) => field.handleChange(e === true)}
                onBlur={field.handleBlur}
                checked={field.state.value}
              />
              {field.state.meta.isValid ? (
                // <Label
                //   htmlFor={field.name}
                //   // htmlFor={'rememberMe'}
                // >
                //   <span className='text-muted-foreground'>I agree to</span>{' '}
                //   <Link to='.' className={'hover:underline underline-offset-2'}>
                //     privacy policy & terms
                //   </Link>
                // </Label>
                <Label htmlFor={field.name} className='text-muted-foreground'>
                  {' '}
                  Remember Me
                </Label>
              ) : (
                <FieldInfo field={field} />
              )}
            </div>
          )}
        />

        <Link to='/forgot-password' className='hover:underline'>
          Forgot Password?
        </Link>
      </div>

      <Button
        aria-disabled={!form.state.canSubmit || isPending}
        disabled={!form.state.canSubmit || isPending}
        className='w-full'
        type='submit'>
        {isPending ? (
          <span className={'inline-flex items-center gap-2'}>
            Logging in...
            <Spinner />
          </span>
        ) : (
          <span className={'inline-flex items-center gap-2'}>
            Login
            <IconLogin className={'size-4'} />
          </span>
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
