// content-collections.ts
import { articleSchema } from '@/lib/zod-schemas';
import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';

// import matter from 'gray-matter';
// function extractFrontMatter(content: string) {
//   const { data, content: body, excerpt } = matter(content, { excerpt: true });
//   return { data, body, excerpt: excerpt || '' };
// }

const posts = defineCollection({
  name: 'posts',
  directory: '/src/contents', // Directory containing your .md files
  include: ['*.md', '*.mdx'],
  schema: articleSchema,

  // transform: ({ content, ...post }) => {
  //   const frontMatter = extractFrontMatter(content);

  //   // Extract header image (first image in the document)
  //   const headerImageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/);
  //   const headerImage = headerImageMatch ? headerImageMatch[2] : undefined;

  //   return {
  //     ...post,
  //     slug: post._meta.path,
  //     excerpt: frontMatter.excerpt,
  //     description: frontMatter.data.description,
  //     headerImage,
  //     content: frontMatter.body,
  //   };
  // },

  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
  onSuccess: () => {
    console.log(`Successfully processed posts`);
  },
});

export default defineConfig({
  collections: [posts],
});
