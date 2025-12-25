import { ChartNoAxesColumnIcon, TrendingUpIcon } from 'lucide-react';
import { TypographyLarge } from '../typography';
import { CardDescription, CardTitle } from '../ui/card';

export default function AboutStats() {
  return (
    <div
      className={'flex flex-col items-center justify-center gap-4 text-center'}>
      <ChartNoAxesColumnIcon className={'size-16 stroke-primary'} />
      <CardTitle className={'text-background dark:text-foreground'}>
        Monthly Traffic
      </CardTitle>

      <TypographyLarge
        className={
          'text-background dark:text-foreground text-4xl! font-bold! w-full!'
        }>
        100 K
      </TypographyLarge>
      <CardDescription
        className={
          'text-background dark:text-foreground flex items-center justify-center gap-2 w-full'
        }>
        <TrendingUpIcon className={'size-4'} /> +<p>70%</p>
      </CardDescription>
    </div>
  );
}
