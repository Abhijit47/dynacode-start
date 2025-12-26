import { TypographyLarge } from '../typography';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '../ui/field';
import { Input } from '../ui/input';

export default function SectionNewsletterCTA() {
  return (
    <section id='newsletter-cta'>
      <Card
        className={
          'relative aspect-video sm:aspect-auto md:aspect-auto lg:aspect-36/9 w-full h-full'
        }>
        <div className={'w-full h-full absolute top-0 left-0'}>
          <img
            src='/assets/images/orig-19_result.webp'
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
                  Subscribe Our Newsletter
                </TypographyLarge>
              </CardTitle>
              <CardDescription>
                A diam maecenas sed enim ut sem viverra. Vulputate ut pharetra
                sit amet aliquam id diam maecenas ultricies. Ultricies mi quis
                hendrerit dolor. Convallis a cras semper auctor neque vitae
                tempus quam.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}>
                <FieldSet>
                  <FieldLegend className={'sr-only'}>
                    Subscribe Our Newsletter
                  </FieldLegend>
                  <FieldDescription className={'sr-only'}>
                    Subscribe Our Newsletter
                  </FieldDescription>
                  <FieldGroup>
                    <Field orientation={'responsive'}>
                      <FieldLabel htmlFor='email' className={'sr-only'}>
                        Name
                      </FieldLabel>
                      <Input
                        id='email'
                        type='email'
                        placeholder='ex. someone@example.com'
                        className={'rounded-full flex-1'}
                      />
                      <Button className={'rounded-full'}>Subscribe</Button>
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </form>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </section>
  );
}
