import { MDXContent } from '@content-collections/mdx/react';
import { createFileRoute, notFound } from '@tanstack/react-router';
import { allPosts } from 'content-collections';

const url = process.env.VITE_BASE_URL || 'http://localhost:3000';

export const Route = createFileRoute('/(app)/blogs/$slug')({
  loader: ({ params }) => {
    const post = allPosts.find((p) => p.slug === params.slug);
    if (!post) {
      throw notFound();
    }
    return post;
  },
  head: ({ loaderData, params }) => ({
    meta: [
      { title: `${loaderData?.title} | Dynacode` },
      { name: 'description', content: loaderData?.description },
      { name: 'keywords', content: loaderData?.keywords.join(', ') },

      // Open Graph
      { property: 'og:title', content: loaderData?.title },
      { property: 'og:description', content: loaderData?.summary },
      { property: 'og:image', content: loaderData?.cover },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `${url}/posts/${params.slug}` },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: loaderData?.title },
      { name: 'twitter:description', content: loaderData?.summary },
      { name: 'twitter:image', content: loaderData?.cover },
      { name: 'twitter:url', content: `${url}/posts/${params.slug}` },
    ],
    links: [
      {
        rel: 'canonical',
        href: `${url}/posts/${params.slug}`,
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: loaderData?.title,
          description: loaderData?.summary,
          image: loaderData?.cover,
          authors: loaderData?.authors.map((author) => ({
            '@type': 'Person',
            name: author,
          })),
          datePublished: loaderData?.publishedAt,
        }),
      },
    ],
  }),

  component: RouteComponent,
});

function RouteComponent() {
  const post = Route.useLoaderData();
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <span>{post.publishedAt}</span>
      <div>
        <MDXContent code={post.mdx} />
      </div>
    </div>
  );
}
