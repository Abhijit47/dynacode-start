import { processes } from '@/constants';
import { Loader2Icon } from 'lucide-react';
import {
  TypographyH2,
  TypographyH3,
  TypographyLarge,
  TypographyP,
} from '../typography';
import { Badge } from '../ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Item, ItemContent, ItemMedia } from '../ui/item';
import { Separator } from '../ui/separator';

export default function SectionOurProcess() {
  return (
    <section id='our-process'>
      <Card className={'bg-transparent shadow-none border-0'}>
        <CardHeader>
          <CardDescription className={'text-center'}>
            <Badge variant={'outline'}>
              <Loader2Icon />
              Our Process
            </Badge>
          </CardDescription>
          <CardTitle>
            <TypographyH2 className={'text-center'}>
              Step-by-Step to Achieving Your Goals
            </TypographyH2>
          </CardTitle>
        </CardHeader>
        <CardContent className={'space-y-8'}>
          <div className={'flex items-center justify-center'}>
            <Separator className={'max-w-72'} />
            <TypographyLarge className={'font-bold! text-4xl!'}>
              01
            </TypographyLarge>
            <Separator className={'max-w-72'} />
            <TypographyLarge className={'font-bold! text-4xl!'}>
              02
            </TypographyLarge>
            <Separator className={'max-w-72'} />
            <TypographyLarge className={'font-bold! text-4xl!'}>
              03
            </TypographyLarge>
            <Separator className={'max-w-72'} />
          </div>

          <div className={'grid grid-cols-1 md:grid-cols-3 gap-6'}>
            {processes.map((process) => (
              <Card
                key={process.id}
                className={
                  'bg-transparent hover:border-primary transition-colors'
                }>
                <CardHeader className={'text-center'}>
                  <Item>
                    <ItemContent className={'items-center'}>
                      <ItemMedia
                        variant={'icon'}
                        className={'size-20 rounded-full'}>
                        <process.logo className={'size-full stroke-1 p-1'} />
                      </ItemMedia>
                    </ItemContent>
                  </Item>
                  <CardTitle>
                    <TypographyH3>{process.title}</TypographyH3>
                  </CardTitle>
                  <CardDescription>
                    <TypographyP>{process.description}</TypographyP>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
