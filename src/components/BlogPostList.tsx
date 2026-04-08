type BlogPost = {
  id: string;
  data: {
    title: string;
    description?: string;
    pubDate: Date;
  };
};

type BlogPostListProps = {
  posts: BlogPost[];
};

export default function BlogPostList({ posts }: BlogPostListProps) {
  if (posts.length === 0) {
    return <p className="text-[var(--color-muted)]">No posts yet. Check back soon!</p>;
  }

  return (
    <ul className="flex list-none flex-col gap-8 py-8">
      {posts.map((post) => (
        <li key={post.id}>
          <a href={`/blog/${post.id.replace(/\.mdx?$/, "")}`} className="block">
            <h2 className="text-xl font-semibold text-[var(--color-text)]">{post.data.title}</h2>
            <time
              className="text-sm text-[var(--color-muted)]"
              dateTime={post.data.pubDate.toISOString()}
            >
              {post.data.pubDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.data.description ? (
              <p className="mt-1 text-[0.95rem] text-[var(--color-muted)]">
                {post.data.description}
              </p>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
