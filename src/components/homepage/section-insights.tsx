import { Link } from '@tanstack/react-router';
import {
  ArrowUpRightIcon,
  Clock3Icon,
  Loader2,
  MessageCircleMoreIcon,
} from 'lucide-react';

import { blogs } from '@/constants';
import { TypographyH2, TypographyH4, TypographyP } from '../typography';
import { Badge } from '../ui/badge';
import { buttonVariants } from '../ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Item, ItemContent, ItemDescription, ItemMedia } from '../ui/item';

export default function SectionInsights() {
  return (
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
          <div
            className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                className={
                  'bg-transparent px-4 pb-0 border-0 relative h-110 md:h-120 lg:h-130'
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
                <CardContent className={'z-10 mt-auto rounded-b-xl px-0 py-0'}>
                  <CardHeader className={'px-0'}>
                    <CardTitle>
                      <TypographyH4 className={'line-clamp-1'}>
                        {blog.title}
                      </TypographyH4>
                    </CardTitle>
                  </CardHeader>
                  <Item className={'px-0 py-2'}>
                    <ItemMedia variant={'default'}>
                      <Clock3Icon className={'size-4'} />
                    </ItemMedia>
                    <ItemContent>
                      <ItemDescription>{blog.date}</ItemDescription>
                    </ItemContent>
                  </Item>
                  <CardDescription>
                    <TypographyP>{blog.content}</TypographyP>
                  </CardDescription>

                  <div className={'flex items-center justify-between py-4'}>
                    <Link
                      to={blog.link}
                      className={buttonVariants({
                        variant: 'link',
                        className: 'px-0!',
                      })}>
                      Read more <ArrowUpRightIcon />
                    </Link>

                    <CardAction
                      className={
                        'self-center content-center flex items-center gap-2'
                      }>
                      <MessageCircleMoreIcon /> {blog.comment}
                    </CardAction>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
