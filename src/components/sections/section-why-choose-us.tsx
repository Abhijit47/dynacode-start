import { Loader2Icon } from 'lucide-react';

import { whyChooseUs } from '@/constants';
import CoverWithCounter from '../shared/cover-with-counter';
import WhyChooseUsStats from '../shared/why-choose-us-stats';
import { TypographyH2, TypographyH4 } from '../typography';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
} from '../ui/item';

export default function SectionWhyChooseUs() {
  return (
    <section id='why-choose-us'>
      <Card className={'bg-transparent border-0 shadow-none'}>
        <CardContent className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
          <Card className={'bg-transparent shadow-none border-0'}>
            <CardContent className={'p-0'}>
              <CoverWithCounter
                position='right'
                cover='/assets/images/business-people-meeting-conference-corporate-conce-2023-11-27-05-22-54-utc_result_11zon.webp'>
                <WhyChooseUsStats />
              </CoverWithCounter>
            </CardContent>
          </Card>
          <Card className={'bg-transparent border-0 shadow-none gap-3'}>
            <CardHeader>
              <Item>
                <ItemMedia variant={'default'}>
                  <Loader2Icon />
                </ItemMedia>
                <ItemContent>
                  <ItemDescription>Why Choose Us</ItemDescription>
                </ItemContent>
              </Item>
              <CardTitle>
                <TypographyH2 className={'text-center'}>
                  Empowering Your Business to Thrive
                </TypographyH2>
              </CardTitle>
              <CardDescription>
                Scelerisque placerat fames aliquam tortor augue interdum quisque
                proin. Justo ornare commodo cursus; sodales magnis nam.
              </CardDescription>
            </CardHeader>
            <CardContent className={'space-y-4 transition-colors'}>
              {whyChooseUs.map((item) => (
                <Item
                  key={item.id}
                  variant={'outline'}
                  className={'hover:border-primary'}>
                  <ItemMedia
                    variant={'icon'}
                    className={'size-16 rounded-full p-1 bg-accent'}>
                    {
                      <item.logo
                        className={'size-full stroke-1 stroke-primary'}
                      />
                    }
                  </ItemMedia>
                  <ItemContent>
                    <ItemHeader>
                      <TypographyH4>{item.title}</TypographyH4>
                    </ItemHeader>
                    <ItemDescription>{item.description}</ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
}
