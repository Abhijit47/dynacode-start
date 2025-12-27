import { createServerFn } from '@tanstack/react-start';
import matter from 'gray-matter';

type FetchDocsParams = {
  repo: string; // e.g., 'tanstack/router'
  branch: string; // e.g., 'main'
  filePath: string; // e.g., 'docs/guide/getting-started.md'
};

export const fetchDocs = createServerFn({ method: 'GET' })
  .inputValidator((params: FetchDocsParams) => params)
  .handler(async ({ data: { repo, branch, filePath }, context }) => {
    // // Set cache headers for CDN caching
    // context.response.headers.set(
    //   'Cache-Control',
    //   'public, max-age=0, must-revalidate'
    // );
    // context.response.headers.set(
    //   'CDN-Cache-Control',
    //   'max-age=300, stale-while-revalidate=300'
    // );

    const url = `https://raw.githubusercontent.com/${repo}/${branch}/${filePath}`;

    const response = await fetch(url, {
      headers: {
        // Add GitHub token for private repos or higher rate limits
        // Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const rawContent = await response.text();
    const { data: frontmatter, content } = matter(rawContent);

    return {
      frontmatter,
      content,
      filePath,
    };
  });
