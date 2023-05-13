import Post from "../../../types/post";
import Link from "next/link";

type Props = {
  posts: Post[];
};

function LatestBlogPosts({ posts }: Props) {
  if (!posts) {
    return <div />;
  }

  const latetPosts = posts.map((post, index) => {
    return (
      <div
        className="flex flex-col font-sans py-20 px-8 md:basis-1/2 lg:basis-1/3"
        key={index}
      >
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-display text-gray text-xl cursor-pointer mb-8 tracking-tighter mt-16 hover:text-dove-gray">
            {post.title}
          </h3>
        </Link>
        <p className="text-dove-gray sm:pb-5 md:h-52 lg:h-50">{post.excerpt}</p>
        <div className="border-b border-light-gray"></div>
        <Link
          href={`/blog/${post.slug}`}
          className="text-faded-red hover:text-dove-gray font-display text-lg pt-7"
        >
          Read more
        </Link>
      </div>
    );
  });

  return (
    <section className="latest-blog-post flex flex-col bg-hint-of-red">
      <div className="sm:container mx-auto">
        <h2 className="font-display text-gray text-5xl mb-2 mt-12 pl-8">
          Latest Blog Posts
        </h2>
        <div className="sm:container mx-auto flex flex-row flex-wrap  ">
          {latetPosts}
        </div>
      </div>
    </section>
  );
}

export default LatestBlogPosts;
