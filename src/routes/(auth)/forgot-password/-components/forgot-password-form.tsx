'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from '@tanstack/react-router';

const ForgotPasswordForm = () => {
  return (
    <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
      {/* Email */}
      <div className='space-y-1'>
        <Label className='leading-5' htmlFor='userEmail'>
          Email address*
        </Label>
        <Input
          type='email'
          id='userEmail'
          placeholder='Enter your email address'
        />
      </div>

      <Link
        to='/reset-password'
        search={{
          token: crypto.randomUUID(),
        }}>
        Reset password
      </Link>
      <Button className='w-full' type='submit'>
        Send Reset Link
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
