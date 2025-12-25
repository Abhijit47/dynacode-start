import { Link } from '@tanstack/react-router';
import { TypographyLarge } from '../typography';
import { buttonVariants } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function SectionContactCTA() {
  return (
    <section id='contact-cta'>
      <Card
        className={
          'relative aspect-video sm:aspect-28/9 md:aspect-32/9 lg:aspect-36/9 w-full h-full'
        }>
        <div className={'w-full h-full absolute top-0 left-0'}>
          <img
            src='/assets/images/orig-16_result_11zon.webp'
            alt='bg-cover'
            width={'100%'}
            height={'100%'}
            className={'w-full h-full object-cover rounded-xl'}
          />
        </div>
        <CardContent className={'max-w-2xl mx-auto w-full h-full z-10'}>
          <Card
            className={
              'bg-transparent border-0 backdrop-blur-xl backdrop-brightness-75 w-full h-full justify-center'
            }>
            <CardHeader>
              <CardTitle>
                <TypographyLarge className={'text-4xl! font-bold!'}>
                  Unlock Your Potential, Reach Out and Transform Your Business!
                </TypographyLarge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Commodo facilisis egestas maximus volutpat iaculis maecenas
                augue tortor aptent. Efficitur interdum laoreet ullamcorper dis
                velit purus praesent conubia magna.
              </CardDescription>
            </CardContent>
            <CardFooter className={'justify-center'}>
              <Link
                to='/'
                className={buttonVariants({
                  variant: 'secondary',
                  size: 'lg',
                  className: 'rounded-full!',
                })}>
                Contact Us
              </Link>
            </CardFooter>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
}
