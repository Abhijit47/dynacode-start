import { MDXContent } from '@content-collections/mdx/react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { allPosts } from 'content-collections';

export const Route = createFileRoute('/(app)/blogs/')({
  head: () => ({
    meta: [
      { title: 'Blogs | Dynacode' },
      {
        name: 'description',
        content:
          'Read the latest articles and updates on Dynacode, a platform for developers.',
      },
      {
        name: 'keywords',
        content: 'blogs, articles, dynacode, developers',
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  // Posts are sorted by published date
  const sortedPosts = allPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // console.log('Sorted Posts:', sortedPosts);

  return (
    <main>
      <div>
        <h1>Blog</h1>
        <ul>
          {sortedPosts.map((post) => (
            <li key={post.title}>
              <Link
                to={`/blogs/$slug`}
                params={{
                  slug: post.slug,
                }}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <span>{post.publishedAt}</span>
                <div>
                  <MDXContent code={post.mdx} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
