import { type BlogPostYearGroup, getBlogPostUrl } from "@/lib/blog";

type BlogPostListProps = {
  groups: BlogPostYearGroup[];
};

export default function BlogPostList({ groups }: BlogPostListProps) {
  if (groups.length === 0) {
    return <p className="text-muted-foreground">No posts yet. Check back soon!</p>;
  }

  return (
    <div className="flex flex-col gap-10 py-8">
      {groups.map((group) => (
        <section key={group.year} aria-labelledby={`blog-year-${group.year}`} className="space-y-4">
          <h3
            id={`blog-year-${group.year}`}
            className="text-sm font-semibold tracking-[0.12em] text-muted-foreground uppercase"
          >
            {group.year}
          </h3>
          <ul className="flex list-none flex-col gap-4">
            {group.posts.map((post) => (
              <li key={post.id}>
                <a
                  href={getBlogPostUrl(post)}
                  className="group grid items-baseline gap-1 text-base md:grid-cols-[8rem_1fr] md:gap-6"
                >
                  <time
                    className="font-mono text-base text-muted-foreground"
                    dateTime={post.data.pubDate.toISOString()}
                  >
                    {formatIsoDate(post.data.pubDate)}
                  </time>
                  <span className="text-lg font-medium text-foreground">
                    <span className="link-underline group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100">
                      {post.data.title}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function formatIsoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}
