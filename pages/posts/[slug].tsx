import { useRouter } from "next/router";
import { fetchPosts } from "@/lib/fetchPost";
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
  // Get all posts from all sections
  const posts = await fetchPosts();

  // Get all possible paths from posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: "blocking", // Enable ISR
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // Get all posts and find the one that matches the slug
  const posts = await fetchPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      notFound: true, // This will show the 404 page
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // Revalidate every minute
  };
}

export default Post;
