import { Loader2 } from 'lucide-react';

import { portfolios } from '@/constants';
import { TypographyH2, TypographyH4, TypographyLead } from '../typography';
import { Badge } from '../ui/badge';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function SectionPortfolio() {
  return (
    <section id='portfolio'>
      <Card className={'bg-transparent border-0 shadow-none'}>
        <CardHeader>
          <CardDescription className={'text-center'}>
            <Badge variant={'outline'}>
              <Loader2 />
              Portfolio
            </Badge>
          </CardDescription>
          <CardTitle>
            <TypographyH2 className={'text-center'}>
              Transforming Brands with Proven Strategies
            </TypographyH2>
          </CardTitle>
        </CardHeader>
        <CardContent className={''}>
          <div
            className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
            {portfolios.map((port) => (
              <Card
                key={port.id}
                className={
                  'relative pb-4 px-4 h-110 md:h-130 lg:h-150 group hover:border-primary transition-all ease-in-out'
                }>
                <div className={'w-full h-full absolute top-0 left-0'}>
                  <img
                    src={port.image}
                    alt={port.title}
                    width={'100%'}
                    height={'100%'}
                    className={
                      'w-full h-full object-cover opacity-35 group-hover:opacity-100 rounded-xl'
                    }
                  />
                </div>
                <CardHeader className={'px-0'}>
                  <CardHeader className={'h-full w-full'}>&nbsp;</CardHeader>
                  <CardAction
                    className={
                      'backdrop-blur-3xl backdrop-brightness-75 p-2 rounded-full'
                    }>
                    <img
                      src='/assets/images/partner-4-65f90f1a4e273.webp'
                      alt='company-logo'
                      width={'100%'}
                      height={'100%'}
                      className={'w-auto h-8 object-cover'}
                    />
                  </CardAction>
                </CardHeader>
                <CardContent
                  className={
                    'mt-auto backdrop-blur-xs backdrop-brightness-75 group-hover:backdrop-brightness-50 group-hover:backdrop-blur-sm py-4 px-0 rounded-xl'
                  }>
                  <CardHeader>
                    <TypographyLead>{port.category}</TypographyLead>
                    <CardTitle>
                      <TypographyH4>{port.title}</TypographyH4>
                    </CardTitle>
                    <CardDescription>{port.content}</CardDescription>
                  </CardHeader>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
