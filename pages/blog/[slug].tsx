import { useRouter } from "next/router";
import ErrorPage from "next/error";
import BlogLayout from "../../components/layout/BlogLayout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import PostContent from "../../components/complex/PostContent";
import PostTitle from "../../components/complex/PostTitle";
import { format } from "date-fns";

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const parsedPostedAt = new Date(post.date);

  return (
    <BlogLayout
      title="Tsara Sudrajat - Software Engineer"
      description="Blog posts"
    >
      <PostTitle title={post.title} date={format(parsedPostedAt, "PPP")} />
      <PostContent content={post.content} />
    </BlogLayout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "content",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "ogImage",
  ]);

  console.log(post.content);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
