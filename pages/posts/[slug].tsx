import { useRouter } from "next/router";
import { mockPosts } from "@/lib/mock-posts";
import PostHeader from "@/components/post-header";
import PostBody from "@/components/post-body";
import Layout from "@/components/layout";
import { PostType } from "interfaces";
import BackButton from "@/components/back-button";

type PostProps = {
  post: PostType;
};

const Post = ({ post }: PostProps) => {
  const router = useRouter();

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <BackButton />
      <article className="mb-32">
        <PostHeader
          title={post.title}
          feature_image={post.feature_image}
          date={post.published_at}
          author={post.primary_author}
        />
        <PostBody html={post.html} />
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  // Get all possible paths from mock posts
  const paths = mockPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // Return 404 for non-existent paths
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // Find the post that matches the slug
  const post = mockPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      notFound: true, // This will show the 404 page
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default Post;
