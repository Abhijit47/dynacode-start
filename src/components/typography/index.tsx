import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

type TypographyH1Props = ComponentProps<'h1'> & object;
export function TypographyH1({ children }: TypographyH1Props) {
  return (
    <h1 className='scroll-m-20 text-center text-3xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight'>
      {children}
    </h1>
  );
}

type TypographyH2Props = ComponentProps<'h2'> & object;
export function TypographyH2(props: TypographyH2Props) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        props.className ? props.className : ''
      )}>
      {props.children}
    </h2>
  );
}

type TypographyH3Props = ComponentProps<'h3'> & object;
export function TypographyH3(props: TypographyH3Props) {
  return (
    <h3
      className={cn(
        props.className ? props.className : '',
        'scroll-m-20 text-2xl font-semibold tracking-tight'
      )}>
      {props.children}
    </h3>
  );
}

type TypographyH4Props = ComponentProps<'h4'> & object;
export function TypographyH4(props: TypographyH4Props) {
  return (
    <h4
      className={cn(
        props.className ? props.className : '',
        'scroll-m-20 text-xl font-semibold tracking-tight'
      )}>
      {props.children}
    </h4>
  );
}

type TypographyInlineCodeProps = ComponentProps<'code'> & object;
export function TypographyInlineCode({ children }: TypographyInlineCodeProps) {
  return (
    <code className='bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
      {children}
    </code>
  );
}

type TypographyLargeProps = ComponentProps<'div'> & object;
export function TypographyLarge(props: TypographyLargeProps) {
  return (
    <div
      className={cn(
        props.className ? props.className : '',
        'text-lg font-semibold'
      )}>
      {props.children}
    </div>
  );
}

type TypographyLeadProps = ComponentProps<'p'> & object;
export function TypographyLead(props: TypographyLeadProps) {
  return (
    <p
      className={cn(
        props.className ? props.className : '',
        'text-muted-foreground text-xl'
      )}>
      {props.children}
    </p>
  );
}

type TypographyListProps = ComponentProps<'ul'> & object;
export function TypographyList({ children }: TypographyListProps) {
  return <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>{children}</ul>;
}

type TypographyMutedProps = ComponentProps<'p'> & object;
export function TypographyMuted({ children }: TypographyMutedProps) {
  return <p className='text-muted-foreground text-sm'>{children}</p>;
}

type TypographyParagraphProps = ComponentProps<'p'> & object;
export function TypographyP(props: TypographyParagraphProps) {
  return (
    <p
      className={cn(
        props.className ? props.className : '',
        'leading-4 sm:leading-5 md:leading-6 lg:leading-7 not-first:mt-6 text-muted-foreground'
      )}>
      {props.children}
    </p>
  );
}

type TypographyPreProps = ComponentProps<'pre'> & object;
export function TypographyPre(props: TypographyPreProps) {
  return (
    <pre
      className={cn(
        props.className ? props.className : '',
        'mb-4 mt-6 w-full overflow-auto rounded-lg bg-muted p-4 font-mono text-sm'
      )}>
      {props.children}
    </pre>
  );
}

type TypographySmallProps = ComponentProps<'table'> & object;
export function TypographySmall({ children }: TypographySmallProps) {
  return <small className='text-sm leading-none font-medium'>{children}</small>;
}

type TypographyBlockquoteProps = ComponentProps<'blockquote'> & object;
export function TypographyBlockquote({ children }: TypographyBlockquoteProps) {
  return (
    <blockquote className='mt-6 border-l-2 pl-6 italic'>{children}</blockquote>
  );
}

type TypographyStrongProps = ComponentProps<'strong'> & object;
export function TypographyStrong({ children }: TypographyStrongProps) {
  return (
    <strong className='font-semibold text-muted-foreground'>{children}</strong>
  );
}
