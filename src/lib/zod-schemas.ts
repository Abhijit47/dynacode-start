import z from 'zod';

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters'),
    email: z.email('Invalid email address'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(32, 'Password must be at most 32 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm Password must be at least 6 characters')
      .max(32, 'Confirm Password must be at most 32 characters'),
    rememberMe: z.boolean().refine((val) => val === true, {
      message: 'You must agree to the terms',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const loginFormSchema = z.object({
  email: z.email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(32, 'Password must be at most 32 characters'),
  rememberMe: z.boolean(),
});

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(8, 'Please confirm your password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const resetPasswordTokenSchema = z.object({
  token: z.string().min(1, 'Token is required'),
});

export type RegisterFormValues = z.infer<typeof registerFormSchema>;
export type LoginFormValues = z.infer<typeof loginFormSchema>;
export type ResetPassword = z.infer<typeof resetPasswordSchema>;
export type ResetPasswordToken = z.infer<typeof resetPasswordTokenSchema>;
