import AutoScroll from 'embla-carousel-auto-scroll';
import AutoPlay from 'embla-carousel-autoplay';

import { partners } from '@/constants';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

const isDev = import.meta.env.DEV;

export default function SectionPartners() {
  return (
    <section id='trusted-partners'>
      <Card className={'bg-transparent border-0 shadow-none'}>
        <CardContent>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={
              isDev
                ? undefined
                : [
                    AutoPlay({
                      delay: 3000,
                      playOnInit: true,
                      stopOnInteraction: true,
                      stopOnFocusIn: true,
                      stopOnMouseEnter: true,
                    }),
                    AutoScroll(),
                  ]
            }>
            <CarouselContent>
              {partners.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className={'sm:basis-1/3 md:basis-1/4 lg:basis-1/5'}>
                  <img
                    src={partner.logo}
                    alt='partner-logo'
                    width={'100%'}
                    height={'100%'}
                    className={'w-full h-full object-contain'}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardContent>
      </Card>
    </section>
  );
}
