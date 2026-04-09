import type { APIRoute } from "astro";
import { getBlogPostTags, getBlogPostUrl, getPublishedBlogPosts } from "../lib/blog";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site ?? new URL("https://kaisheng.dev");
  const posts = await getPublishedBlogPosts();
  const latestPost = posts.reduce<(typeof posts)[number] | undefined>((latest, post) => {
    if (!latest) {
      return post;
    }

    const latestDate = latest.data.updatedDate ?? latest.data.pubDate;
    const postDate = post.data.updatedDate ?? post.data.pubDate;

    return postDate.valueOf() > latestDate.valueOf() ? post : latest;
  }, undefined);

  const items = posts
    .map((post) => {
      const postUrl = new URL(getBlogPostUrl(post), siteUrl).href;
      const description = post.data.description ?? post.data.title;
      const categories = getBlogPostTags(post)
        .map((tag) => `  <category>${escapeXml(tag.label)}</category>`)
        .join("\n");
      const categoryBlock = categories ? `${categories}\n` : "";

      return `<item>
  <title>${escapeXml(post.data.title)}</title>
  <link>${escapeXml(postUrl)}</link>
  <guid>${escapeXml(postUrl)}</guid>
  <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
${categoryBlock}  <description>${escapeXml(description)}</description>
</item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Kai Sheng</title>
  <link>${escapeXml(siteUrl.href)}</link>
  <description>Blog posts by Kai Sheng</description>
  <language>en</language>
  <atom:link href="${escapeXml(new URL("/rss.xml", siteUrl).href)}" rel="self" type="application/rss+xml" />
  ${latestPost ? `<lastBuildDate>${(latestPost.data.updatedDate ?? latestPost.data.pubDate).toUTCString()}</lastBuildDate>` : ""}
${items}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};
