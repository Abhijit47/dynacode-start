import { Link } from '@tanstack/react-router';
import AutoScroll from 'embla-carousel-auto-scroll';
import AutoPlay from 'embla-carousel-autoplay';
import { Loader2, QuoteIcon } from 'lucide-react';

import { testimonials } from '@/constants';
import CoverWithCounter from '../shared/cover-with-counter';
import TestimonialStats from '../shared/testimonial-stats';
import { TypographyH2 } from '../typography';
import { buttonVariants } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from '../ui/item';

const isDev = import.meta.env.DEV;

export default function SectionTestimonials() {
  return (
    <section id='testimonials'>
      <Card className={'bg-transparent border-0 shadow-none'}>
        <CardContent className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
          <Card className={'bg-transparent border-0 shadow-none'}>
            <CardHeader>
              <Item>
                <ItemMedia variant={'default'}>
                  <Loader2 />
                </ItemMedia>
                <ItemContent>
                  <ItemDescription>Testimonials</ItemDescription>
                </ItemContent>
              </Item>
              <CardTitle>
                <TypographyH2 className={'text-center'}>
                  Success Stories From Those Who Know Us Best
                </TypographyH2>
              </CardTitle>
              <CardDescription>
                Vel inceptos euismod justo turpis platea eu. Est risus quam
                bibendum accumsan aliquam cubilia. Dolor ultrices imperdiet
                cursus pretium platea. Amagna ligula sem, porttitor imperdiet mi
                iaculis rutrum. Faucibus lorem rhoncus justo congue bibendum
                sagittis leo fermentum.
              </CardDescription>
              <div>
                <Link
                  to='.'
                  className={buttonVariants({
                    variant: 'default',
                    className: 'rounded-full!',
                  })}>
                  View More
                </Link>
              </div>
            </CardHeader>
            <CardContent className={'p-0'}>
              <CoverWithCounter
                position='right'
                cover='/assets/images/diverse-team-of-professionals-collaborating-on-a-p-2024-07-12-21-20-39-utc_result.webp'>
                <TestimonialStats />
              </CoverWithCounter>
            </CardContent>
          </Card>

          <Card className={'bg-transparent border-0 shadow-none py-0'}>
            <CardContent className={'px-0'}>
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
                }
                orientation='vertical'>
                <CarouselContent className='h-48 sm:h-52 md:h-190 lg:h-210 xl:h-240'>
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className='md:basis-1/5'>
                      <Card>
                        <CardContent className={'space-y-4'}>
                          <Item className={'p-2'}>
                            <ItemMedia variant={'image'}>
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={'100%'}
                                height={'100%'}
                                className={'w-full h-full object-cover'}
                              />
                            </ItemMedia>
                            <ItemContent>
                              <ItemHeader>
                                <ItemTitle>{testimonial.name}</ItemTitle>
                              </ItemHeader>
                              <ItemDescription>
                                {testimonial.designation}
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions>
                              <QuoteIcon className={'size-16 stroke-1'} />
                            </ItemActions>
                          </Item>
                          <CardDescription>
                            {testimonial.content}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
}
