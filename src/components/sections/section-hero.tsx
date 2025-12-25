import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import {
  FacebookIcon,
  GitlabIcon,
  InstagramIcon,
  PlayCircleIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react';
import { TypographyH1, TypographyLarge, TypographyP } from '../typography';
import { Badge } from '../ui/badge';
import { Button, buttonVariants } from '../ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from '../ui/item';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import HeroBGCover from './hero-bg-cover';

export default function SectionHero() {
  return (
    <section id='hero'>
      <Card
        className={'gap-4 bg-transparent border-0 shadow-none rounded-none'}>
        <CardHeader>
          <CardTitle>
            <TypographyH1>
              <span>Transform Your</span>{' '}
              <span className={'text-primary'}>Online Business</span>{' '}
              <span>with DynaCode</span>
            </TypographyH1>
          </CardTitle>
        </CardHeader>
        <CardContent className={'grid grid-cols-3 gap-4'}>
          <div className={'order-2 md:order-1 col-span-full md:col-span-1 '}>
            <div className={'flex items-center gap-2'}>
              {Array.from({ length: 4 }).map(() => (
                <div
                  key={crypto.randomUUID()}
                  className={
                    'rounded-full outline-2 p-0.5 outline-primary outline-double'
                  }>
                  <img
                    src='/tanstack-circle-logo.png'
                    alt='client-avatar'
                    width={100}
                    height={100}
                    className={'w-full h-full object-cover'}
                  />
                </div>
              ))}
            </div>

            <Item className={'p-2'}>
              <ItemContent>
                <ItemHeader>
                  <ItemTitle>
                    <TypographyLarge className={'text-xl font-semibold'}>
                      1500+
                    </TypographyLarge>
                  </ItemTitle>
                  <ItemDescription>Trusted Clients</ItemDescription>
                </ItemHeader>
              </ItemContent>
            </Item>
          </div>
          <div
            className={
              'order-1 md:order-2 col-span-full md:col-span-2 flex items-center'
            }>
            <TypographyP>
              Viverra vitae congue eu consequat ac. Tortor condimentum lacinia
              quis vel eros donec. Faucibus interdum posuere lorem ipsum. Lacus
              sed turpis tincidunt id aliquet risus. In aliquam sem fringilla ut
              morbi tincidunt augue interdum velit.
            </TypographyP>
          </div>
        </CardContent>
      </Card>

      <TooltipProvider>
        <Card
          className={
            'relative aspect-square sm:aspect-22/9 md:aspect-26/9 lg:aspect-30/9 w-full h-full'
          }>
          <HeroBGCover />

          <CardContent
            className={
              'flex flex-col items-center justify-between w-full h-full z-10'
            }>
            <div className={'flex items-center gap-4 flex-wrap'}>
              {[
                'On-Page SEO',
                'Digital Marketing',
                'Off-Page SEO',
                'Social Media Marketing',
                'Analytic and Reporting',
                'Influencer Marketing',
              ].map((tag) => (
                <Badge
                  key={crypto.randomUUID()}
                  variant={'secondary'}
                  className={'md:text-base lg:text-lg font-medium'}>
                  {tag}
                </Badge>
              ))}
            </div>

            <div className={'flex items-center justify-between w-full'}>
              <div>
                <Link
                  to='/about'
                  className={cn(
                    buttonVariants({
                      variant: 'default',
                      size: 'lg',
                      className: 'rounded-full',
                    })
                  )}>
                  View Portfolios
                </Link>
              </div>

              <div className={'animate-pulse rounded-full'}>
                <Tooltip>
                  <TooltipContent>Play Video</TooltipContent>
                  <TooltipTrigger asChild>
                    <Button size={'icon-lg'} className={'rounded-full'}>
                      <PlayCircleIcon
                        className={
                          'size-12 md:size-16 lg:size-20 stroke-1 stroke-accent'
                        }
                        // className={'size-full'}
                      />
                    </Button>
                  </TooltipTrigger>
                </Tooltip>
              </div>
            </div>
          </CardContent>

          <CardFooter className={'justify-between flex-wrap gap-4 z-10'}>
            <CardAction className={'flex items-center gap-4'}>
              {/* <TooltipProvider> */}
              <Tooltip>
                <TooltipContent>Connet with Facebook</TooltipContent>
                <TooltipTrigger asChild>
                  <Button
                    variant={'secondary'}
                    size={'icon-lg'}
                    className={'rounded-full'}>
                    <FacebookIcon
                      className={'size-6 stroke-1 stroke-primary'}
                    />
                  </Button>
                </TooltipTrigger>
              </Tooltip>
              {/* </TooltipProvider> */}

              <Tooltip>
                <TooltipContent>Connet with X</TooltipContent>
                <TooltipTrigger asChild>
                  <Button
                    variant={'secondary'}
                    size={'icon-lg'}
                    className={'rounded-full'}>
                    <TwitterIcon className={'size-6 stroke-1 stroke-primary'} />
                  </Button>
                </TooltipTrigger>
              </Tooltip>
              <Button
                variant={'secondary'}
                size={'icon-lg'}
                className={'rounded-full'}>
                <InstagramIcon className={'size-6 stroke-1 stroke-primary'} />
              </Button>
              <Button
                variant={'secondary'}
                size={'icon-lg'}
                className={'rounded-full'}>
                <GitlabIcon className={'size-6 stroke-1 stroke-primary'} />
              </Button>
              <Button
                variant={'secondary'}
                size={'icon-lg'}
                className={'rounded-full'}>
                <YoutubeIcon className={'size-6 stroke-1 stroke-primary'} />
              </Button>
            </CardAction>
            <CardAction className={'self-end space-x-4'}>
              {['Proven Result', 'Experienced Team', 'Affordable Pricing'].map(
                (item) => (
                  <Badge variant={'secondary'} key={crypto.randomUUID()}>
                    {item}
                  </Badge>
                )
              )}
            </CardAction>
          </CardFooter>
        </Card>
      </TooltipProvider>
    </section>
  );
}
