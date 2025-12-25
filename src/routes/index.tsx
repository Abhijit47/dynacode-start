import SectionAboutUs from '@/components/sections/section-about-us';
import SectionCounters from '@/components/sections/section-counters';
import SectionHero from '@/components/sections/section-hero';
import SectionOurProcess from '@/components/sections/section-our-process';
import SectionServices from '@/components/sections/section-services';
import SectionPartners from '@/components/sections/section.partners';
import {
  TypographyH2,
  TypographyH4,
  TypographyLarge,
  TypographyLead,
  TypographyP,
} from '@/components/typography';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item';
import { blogs, portfolios, testimonials, whyChooseUs } from '@/constants';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  ArrowUpRight,
  Clock3,
  Loader2,
  MessageCircleMore,
  Quote,
} from 'lucide-react';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Home | Dynacode' },
      {
        name: 'description',
        content:
          'Welcome to Dynacode, a platform for building dynamic web apps.',
      },
      {
        name: 'keywords',
        content: 'app, platform, my app, features',
      },
    ],
  }),
  component: App,
});

function App() {
  return (
    <main
      className={
        'container max-w-[85em] mx-auto w-full px-4 2xl:px-0 py-12 md:py-16 lg:py-20 space-y-8 md:space-y-12 lg:space-y-16'
      }>
      <SectionHero />

      <SectionPartners />

      <SectionAboutUs />

      <SectionServices />

      <SectionCounters />

      <SectionOurProcess />

      <section id='why-choose-us'>
        <Card className={'bg-transparent border-0 shadow-none'}>
          <CardContent className={'grid grid-cols-2 gap-4'}>
            <Card className={'bg-transparent shadow-none border-0'}>
              <div className={'aspect-square w-full h-full'}>
                <img
                  src='/assets/images/business-people-meeting-conference-corporate-conce-2023-11-27-05-22-54-utc_result_11zon.webp'
                  alt='bg-cover'
                  width={100}
                  height={100}
                  className={'w-full h-full object-cover rounded-xl'}
                />
              </div>
            </Card>
            <Card className={'bg-transparent border-0 shadow-none'}>
              <CardHeader>
                <Item>
                  <ItemMedia variant={'default'}>
                    <Loader2 />
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
                  Scelerisque placerat fames aliquam tortor augue interdum
                  quisque proin. Justo ornare commodo cursus; sodales magnis
                  nam.
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

      <section id='contact-cta'>
        <Card className={'relative aspect-36/9 w-full h-full'}>
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
                    Unlock Your Potential, Reach Out and Transform Your
                    Business!
                  </TypographyLarge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Commodo facilisis egestas maximus volutpat iaculis maecenas
                  augue tortor aptent. Efficitur interdum laoreet ullamcorper
                  dis velit purus praesent conubia magna.
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
              className={
                'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
              }>
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
                  <CardHeader>
                    <CardHeader>&nbsp;</CardHeader>
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

      <section id='testimonials'>
        <Card className={'bg-transparent border-0 shadow-none'}>
          <CardContent className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
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
                  cursus pretium platea. Amagna ligula sem, porttitor imperdiet
                  mi iaculis rutrum. Faucibus lorem rhoncus justo congue
                  bibendum sagittis leo fermentum.
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
              <CardContent>
                <div className={'aspect-square w-full h-full'}>
                  <img
                    src='/assets/images/diverse-team-of-professionals-collaborating-on-a-p-2024-07-12-21-20-39-utc_result.webp'
                    alt='bg-cover'
                    width={100}
                    height={100}
                    className={'w-full h-full object-cover rounded-xl'}
                  />
                </div>
              </CardContent>
            </Card>
            <Card className={'bg-transparent border-0 shadow-none py-0'}>
              <CardContent className={'px-0'}>
                <Carousel orientation='vertical'>
                  <CarouselContent className='-mt-1 h-150'>
                    {testimonials.map((testimonial) => (
                      <CarouselItem
                        key={testimonial.id}
                        className={'lg:basis-1/3'}>
                        <Card>
                          <CardContent>
                            <Item>
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
                                <Quote className={'size-16'} />
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

      <section id='insights'>
        <Card className={'bg-transparent shadow-none border-0'}>
          <CardHeader>
            <CardDescription className={'text-center'}>
              <Badge variant={'outline'}>
                <Loader2 />
                Insights
              </Badge>
            </CardDescription>
            <CardTitle>
              <TypographyH2 className={'text-center'}>
                Access Our Comprehensive Blog Archive
              </TypographyH2>
            </CardTitle>
          </CardHeader>
          <CardContent className={'mt-auto'}>
            <div className={'grid grid-cols-3 gap-4'}>
              {blogs.map((blog) => (
                <Card
                  key={blog.id}
                  className={
                    'bg-transparent border-0 relative h-110 md:h-120 lg:h-130'
                  }>
                  <div className={'w-full h-full absolute top-0 left-0'}>
                    <img
                      src={blog.image}
                      alt='blog-cover'
                      width={'100%'}
                      height={'100%'}
                      className={
                        'w-full h-full object-cover opacity-35 rounded-xl'
                      }
                    />
                  </div>
                  <CardContent className={'z-10 mt-20'}>
                    <CardHeader>
                      <CardTitle>
                        <TypographyH4 className={'line-clamp-1'}>
                          {blog.title}
                        </TypographyH4>
                      </CardTitle>
                    </CardHeader>
                    <Item>
                      <ItemMedia variant={'icon'}>
                        <Clock3 className={'size-4'} />
                      </ItemMedia>
                      <ItemContent>
                        <ItemDescription>{blog.date}</ItemDescription>
                      </ItemContent>
                    </Item>
                    <CardDescription>
                      <TypographyP>{blog.content}</TypographyP>
                    </CardDescription>
                  </CardContent>

                  <CardFooter className={'justify-between'}>
                    <Link
                      to={blog.link}
                      className={buttonVariants({
                        variant: 'link',
                      })}>
                      Read more <ArrowUpRight />
                    </Link>

                    <CardAction
                      className={
                        'self-center content-center flex items-center gap-2'
                      }>
                      <MessageCircleMore /> {blog.comment}
                    </CardAction>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section id='newsletter-cta'>
        <Card className={'relative aspect-36/9 w-full h-full'}>
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
    </main>
  );
}

/*
// return (
  //   <div className='min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900'>
  //     <section className='relative py-20 px-6 text-center overflow-hidden'>
  //       <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10'></div>
  //       <div className='relative max-w-5xl mx-auto'>
  //         <div className='flex items-center justify-center gap-6 mb-6'>
  //           <img
  //             src='/tanstack-circle-logo.png'
  //             alt='TanStack Logo'
  //             className='w-24 h-24 md:w-32 md:h-32'
  //           />
  //           <h1 className='text-6xl md:text-7xl font-black text-white [letter-spacing:-0.08em]'>
  //             <span className='text-gray-300'>TANSTACK</span>{' '}
  //             <span className='bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
  //               START
  //             </span>
  //           </h1>
  //         </div>
  //         <p className='text-2xl md:text-3xl text-gray-300 mb-4 font-light'>
  //           The framework for next generation AI applications
  //         </p>
  //         <p className='text-lg text-gray-400 max-w-3xl mx-auto mb-8'>
  //           Full-stack framework powered by TanStack Router for React and Solid.
  //           Build modern applications with server functions, streaming, and type
  //           safety.
  //         </p>
  //         <div className='flex flex-col items-center gap-4'>
  //           <a
  //             href='https://tanstack.com/start'
  //             target='_blank'
  //             rel='noopener noreferrer'
  //             className='px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50'>
  //             Documentation
  //           </a>
  //           <p className='text-gray-400 text-sm mt-2'>
  //             Begin your TanStack Start journey by editing{' '}
  //             <code className='px-2 py-1 bg-slate-700 rounded text-cyan-400'>
  //               /src/routes/index.tsx
  //             </code>
  //           </p>
  //         </div>
  //       </div>
  //     </section>

  //     <section className='py-16 px-6 max-w-7xl mx-auto'>
  //       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
  //         {features.map((feature, index) => (
  //           <div
  //             key={index}
  //             className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10'>
  //             <div className='mb-4'>{feature.icon}</div>
  //             <h3 className='text-xl font-semibold text-white mb-3'>
  //               {feature.title}
  //             </h3>
  //             <p className='text-gray-400 leading-relaxed'>
  //               {feature.description}
  //             </p>
  //           </div>
  //         ))}
  //       </div>
  //     </section>
  //   </div>
  // );
*/
