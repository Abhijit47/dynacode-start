import { LightbulbIcon } from 'lucide-react';

import { aboutInfo } from '@/constants';
import AboutStats from '../shared/about-stats';
import CoverWithCounter from '../shared/cover-with-counter';
import { TypographyH2, TypographyH3 } from '../typography';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function SectionAboutUs() {
  return (
    <section id='about-us'>
      <Card
        className={
          'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 border-0 shadow-none bg-transparent'
        }>
        <CardContent className={'w-full h-full px-0'}>
          <Card
            className={
              'w-full h-full justify-center border-0 shadow-none bg-transparent'
            }>
            <CardHeader className={''}>
              <Badge>About Us</Badge>
              <CardTitle>
                <TypographyH2>
                  Transforming Businesses with Strategic Marketing
                </TypographyH2>
              </CardTitle>
              <CardDescription>
                <p>
                  Massa habitant accumsan at hendrerit blandit tellus litora
                  euismod justo. Pretium praesent pellentesque enim rhoncus
                  laoreet natoque etiam pharetra. Purus primis pharetra maecenas
                  a nunc feugiat accumsan.
                </p>
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                variant={'default'}
                size={'lg'}
                className={'rounded-full'}>
                Learn more
              </Button>
            </CardFooter>
          </Card>
        </CardContent>
        <CardContent className={'px-0'}>
          <CoverWithCounter
            position='left'
            cover='/assets/images/team-of-young-successful-designers-gathered-by-wor-2023-11-27-04-57-08-utc_result.webp'>
            <AboutStats />
          </CoverWithCounter>
        </CardContent>
      </Card>

      <Card className={'bg-transparent shadow-none border-0'}>
        <CardContent
          className={
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4'
          }>
          {aboutInfo.map((about) => (
            <Card key={about.id}>
              <CardHeader>
                <LightbulbIcon
                  className={
                    'size-16 outline-2 outline-dashed rounded-full outline-primary'
                  }
                />
                <CardTitle>
                  <TypographyH3>{about.title}</TypographyH3>
                </CardTitle>
                <CardDescription>{about.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
