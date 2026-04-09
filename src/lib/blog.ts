import { type CollectionEntry, getCollection } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export type BlogTagArchive = {
  slug: string;
  label: string;
  posts: BlogPost[];
};

export type BlogPostYearGroup = {
  year: string;
  posts: BlogPost[];
};

export function getBlogPostSlug(post: BlogPost) {
  return post.id.replace(/\.mdx?$/, "");
}

export function getBlogPostUrl(post: BlogPost) {
  return `/blog/${getBlogPostSlug(post)}`;
}

export function getBlogTagUrl(tagSlug: string) {
  return `/blog/tags/${tagSlug}`;
}

export function normalizeBlogTag(tag: string) {
  return tag.trim().replace(/\s+/g, " ");
}

export function getBlogTagSlug(tag: string) {
  return normalizeBlogTag(tag)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getBlogPostTags(post: BlogPost) {
  const tagsBySlug = new Map<string, string>();

  for (const rawTag of post.data.tags) {
    const label = normalizeBlogTag(rawTag);
    const slug = getBlogTagSlug(label);

    if (slug && !tagsBySlug.has(slug)) {
      tagsBySlug.set(slug, label);
    }
  }

  return [...tagsBySlug].map(([slug, label]) => ({ slug, label }));
}

export async function getPublishedBlogPosts() {
  const posts = await getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });

  return posts.toSorted((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getBlogTagArchives(posts: BlogPost[]) {
  const archivesBySlug = new Map<string, BlogTagArchive>();

  for (const post of posts) {
    for (const tag of getBlogPostTags(post)) {
      const archive = archivesBySlug.get(tag.slug);

      if (archive) {
        archive.posts.push(post);
      } else {
        archivesBySlug.set(tag.slug, {
          slug: tag.slug,
          label: tag.label,
          posts: [post],
        });
      }
    }
  }

  return [...archivesBySlug.values()].toSorted((a, b) => a.label.localeCompare(b.label));
}

export function getBlogPostYearGroups(posts: BlogPost[]) {
  const groupsByYear = new Map<string, BlogPost[]>();

  for (const post of posts) {
    const year = post.data.pubDate.getUTCFullYear().toString();
    const groupedPosts = groupsByYear.get(year);

    if (groupedPosts) {
      groupedPosts.push(post);
    } else {
      groupsByYear.set(year, [post]);
    }
  }

  return [...groupsByYear.entries()]
    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
    .map(([year, groupedPosts]) => ({
      year,
      posts: groupedPosts,
    })) satisfies BlogPostYearGroup[];
}
