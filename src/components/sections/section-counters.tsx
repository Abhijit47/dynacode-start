import { counters } from '@/constants';
import { TypographyLarge, TypographyLead } from '../typography';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function SectionCounters() {
  return (
    <section id='counter'>
      <Card className='bg-transparent border-0 shadow-none relative'>
        <div className={'w-full h-full absolute top-0 left-0'}>
          <img
            src='/assets/images/orig-19_result.webp'
            alt='bg-cover'
            width={'100%'}
            height={'100%'}
            className={'w-full h-full object-cover rounded-xl'}
          />
        </div>
        <CardContent className={'grid grid-cols-4 gap-4 lg:gap-6 z-10'}>
          {counters.map((count) => (
            <Card
              className={
                'bg-transparent border-0 backdrop-blur-xl aspect-video h-full w-full justify-center'
              }>
              <CardHeader className={'text-center'}>
                <CardTitle>
                  <TypographyLarge className={'font-bold! text-4xl!'}>
                    {count.countValue}
                    {count.suffixValue}
                  </TypographyLarge>
                </CardTitle>
                <CardDescription>
                  <TypographyLead>{count.counterDescription}</TypographyLead>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
