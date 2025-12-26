import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import { Fragment } from 'react';

import { services } from '@/constants';
import { TypographyH2, TypographyLead, TypographyP } from '../typography';
import { Badge } from '../ui/badge';
import { buttonVariants } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function SectionServices() {
  return (
    <section id='services'>
      <Card className={'bg-transparent shadow-none border-0'}>
        <CardHeader>
          <CardDescription className={'text-center'}>
            <Badge variant={'outline'}>
              <Loader2 />
              Services
            </Badge>
          </CardDescription>
          <CardTitle>
            <TypographyH2 className={'text-center'}>
              Comprehensive Solutions for Your Digital Growth
            </TypographyH2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
            {services.map((service, idx) => {
              return (
                <Fragment key={service.id}>
                  {idx === 1 ? (
                    <Card
                      className={
                        'group hover:bg-primary relative transition-colors'
                      }>
                      <div
                        className={
                          'w-full h-full group-hover:hidden absolute top-0 left-0'
                        }>
                        <img
                          src='/assets/images/06_result.webp'
                          alt='bg-cover'
                          width={'100%'}
                          height={'100%'}
                          className={'w-full h-full object-cover opacity-45'}
                        />
                      </div>
                      <CardHeader className={'z-10'}>
                        <CardDescription
                          className={
                            'text-center mx-auto rounded-full p-1 bg-accent '
                          }>
                          <div className={'flex items-center justify-center'}>
                            {
                              <service.logo className='size-16 stroke-primary stroke-1' />
                            }
                          </div>
                        </CardDescription>
                        <CardTitle className={'text-center'}>
                          <TypographyLead
                            className={'group-hover:text-secondary'}>
                            {service.title}
                          </TypographyLead>
                        </CardTitle>
                      </CardHeader>

                      <CardContent className={'z-10'}>
                        <CardDescription>
                          <TypographyP className={'group-hover:text-secondary'}>
                            {service.description}
                          </TypographyP>
                        </CardDescription>
                      </CardContent>

                      <CardFooter className={'z-10'}>
                        <Link
                          to={service.href}
                          className={buttonVariants({
                            variant: 'link',
                            className:
                              'px-0! w-full group-hover:text-secondary',
                          })}>
                          {service.label} <ArrowUpRight />
                        </Link>
                      </CardFooter>
                    </Card>
                  ) : (
                    <Card
                      className={'group hover:bg-primary transition-colors'}>
                      <CardHeader>
                        <CardDescription
                          className={
                            'text-center mx-auto rounded-full p-1 bg-accent '
                          }>
                          <div className={'flex items-center justify-center'}>
                            {
                              <service.logo className='size-16 stroke-primary stroke-1' />
                            }
                          </div>
                        </CardDescription>
                        <CardTitle className={'text-center'}>
                          <TypographyLead
                            className={'group-hover:text-secondary'}>
                            {service.title}
                          </TypographyLead>
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <CardDescription>
                          <TypographyP className={'group-hover:text-secondary'}>
                            {service.description}
                          </TypographyP>
                        </CardDescription>
                      </CardContent>

                      <CardFooter>
                        <Link
                          to={service.href}
                          className={buttonVariants({
                            variant: 'link',
                            className:
                              'px-0! w-full group-hover:text-secondary',
                          })}>
                          {service.label} <ArrowUpRight />
                        </Link>
                      </CardFooter>
                    </Card>
                  )}
                </Fragment>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
