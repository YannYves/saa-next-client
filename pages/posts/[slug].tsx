import { useRouter } from "next/router";
import { fetchSectionData } from "@/lib/fetchPost";
import PostHeader from "@/components/post-header";
import PostBody from "@/components/post-body";
import Layout from "@/components/layout";
import { PostType } from "interfaces";
import BackButton from "@/components/back-button";
import { SECTIONS } from "@/lib/sections";

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
        <PostBody content={post.content} />
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  let allPosts: PostType[] = [];

  // Get posts from all defined sections
  for (const section of SECTIONS) {
    const { posts } = await fetchSectionData(section.slug);
    allPosts = allPosts.concat(posts);
  }

  // Get all possible paths from posts
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  // Temporarily log the generated paths to Netlify build logs
  console.log(
    "Generated paths in getStaticPaths:",
    paths.map((p) => p.params.slug)
  );

  return {
    paths,
    fallback: false, // ✅ Required for full export
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  try {
    // Get posts from all sections
    let allPosts: PostType[] = [];
    for (const section of SECTIONS) {
      const { posts } = await fetchSectionData(section.slug);
      allPosts = allPosts.concat(posts);
    }

    // Find the post that matches the slug
    const post = allPosts.find((p) => p.slug === params.slug);

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Post;
