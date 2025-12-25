import { TypographyLarge } from '../typography';
import { CardDescription, CardTitle } from '../ui/card';

export default function TestimonialStats() {
  return (
    <div
      className={'flex flex-col items-center justify-center gap-4 text-center'}>
      <TypographyLarge
        className={
          'text-background dark:text-foreground text-4xl! font-bold! w-full!'
        }>
        4.9
      </TypographyLarge>
      <CardTitle className={'text-background dark:text-foreground'}>
        Client Ratings
      </CardTitle>

      <CardDescription
        className={'text-background dark:text-foreground px-2 w-full'}>
        <p>
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </CardDescription>
    </div>
  );
}
