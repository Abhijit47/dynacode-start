import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';
import { Card, CardContent } from '../ui/card';

type CoverWithCounterProps = {
  position: 'left' | 'right';
  cover: string;
  children: ReactNode;
};

export default function CoverWithCounter(props: CoverWithCounterProps) {
  const { children, position, cover } = props;

  return (
    <div
      className={'aspect-square grid grid-cols-12 grid-rows-12 w-full h-full'}>
      <div
        className={cn(
          position === 'left' &&
            'col-start-2 col-span-full row-start-1 row-end-12',
          position === 'right' &&
            'col-start-1 col-end-12 row-start-1 row-end-12'
        )}>
        <img
          src={cover}
          alt='section-cover-with-counter'
          className={'w-full h-full object-cover rounded-2xl'}
          width={'100%'}
          height={'100%'}
        />
      </div>

      <div
        className={cn(
          position === 'left' &&
            'col-start-1 row-start-7 sm:row-start-8 row-span-full col-end-7 sm:col-end-6',

          position === 'right' &&
            'col-start-8 row-start-8 row-span-full col-span-full'
        )}>
        <Card className={'h-full p-0 relative bg-transparent border-0'}>
          <div className={'absolute top-0 left-0 w-full h-full'}>
            <img
              src={'/assets/images/06_result.webp'}
              alt='section-cover-with-counter'
              width={'100%'}
              height={'100%'}
              className={'w-full h-full object-cover rounded-2xl'}
            />
          </div>
          <CardContent
            className={
              'p-0 backdrop-blur-[1px] backdrop-brightness-50 h-full w-full flex items-center justify-center z-10 rounded-2xl'
            }>
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
