'use client';

import { useState, useTransition } from 'react';

import { EyeIcon, EyeOffIcon, FileEditIcon } from 'lucide-react';

import { AnyFieldApi, useForm } from '@tanstack/react-form';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { signUp } from '@/lib/auth-client';
import { registerFormSchema } from '@/lib/zod-schemas';
import { Link, useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';

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

function RegisterForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isPending, startTransition] = useTransition();

  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
    },
    validators: {
      onChange: registerFormSchema,
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
        const result = await signUp.email({
          name: value.name,
          email: value.email,
          password: value.password,
          image: 'https://avatar.vercel.sh/rauchg.svg?text=USER',
        });

        if (result.error) {
          toast.error('Error during sign up:', {
            description: result.error.message,
            descriptionClassName: 'text-xs',
          });
        } else {
          toast.success('Sign up successful!', {
            description: 'Welcome aboard! Redirecting to dashboard...',
            descriptionClassName: 'text-xs',
          });
          navigate({ to: '/admin' });
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
      {/* Username */}
      {/* <div className='space-y-1'>
        <Label className='leading-5' htmlFor='username'>
          Username*
        </Label>
        <Input type='text' id='username' placeholder='Enter your username' />
      </div> */}

      {/* Name */}
      <form.Field
        name='name'
        children={(field) => {
          return (
            <div className='space-y-1'>
              <Label className='leading-5 capitalize' htmlFor={field.name}>
                {field.name}*
              </Label>
              <Input
                type='text'
                placeholder='Enter your name'
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
                  type={isPasswordVisible ? 'text' : 'password'}
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
                  onClick={() =>
                    setIsPasswordVisible((prevState) => !prevState)
                  }
                  className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'>
                  {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
                  <span className='sr-only'>
                    {isPasswordVisible ? 'Hide password' : 'Show password'}
                  </span>
                </Button>
              </div>
              <FieldInfo field={field} />
            </div>
          );
        }}
      />

      {/* Confirm Password */}
      <form.Field
        name='confirmPassword'
        children={(field) => {
          return (
            <div className='w-full space-y-1'>
              <Label className='leading-5 capitalize' htmlFor={field.name}>
                {field.name}*
              </Label>
              <div className='relative'>
                <Input
                  type={isConfirmPasswordVisible ? 'text' : 'password'}
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
                  onClick={() =>
                    setIsConfirmPasswordVisible((prevState) => !prevState)
                  }
                  className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'>
                  {isConfirmPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
                  <span className='sr-only'>
                    {isConfirmPasswordVisible
                      ? 'Hide password'
                      : 'Show password'}
                  </span>
                </Button>
              </div>
              <FieldInfo field={field} />
            </div>
          );
        }}
      />

      {/* Privacy policy */}
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
              <Label
                htmlFor={field.name}
                // htmlFor={'rememberMe'}
              >
                <span className='text-muted-foreground'>I agree to</span>{' '}
                <Link to='.' className={'hover:underline underline-offset-2'}>
                  privacy policy & terms
                </Link>
              </Label>
            ) : (
              <FieldInfo field={field} />
            )}
          </div>
        )}
      />

      <Button
        aria-disabled={!form.state.canSubmit || isPending}
        disabled={!form.state.canSubmit || isPending}
        className='w-full'
        type='submit'>
        {isPending ? (
          <span className={'inline-flex items-center gap-2'}>
            Creating account...
            <Spinner />
          </span>
        ) : (
          <span className={'inline-flex items-center gap-2'}>
            Create Account
            <FileEditIcon className={'size-4'} />
          </span>
        )}
      </Button>
    </form>
  );
}

export default RegisterForm;
