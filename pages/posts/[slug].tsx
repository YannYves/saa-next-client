import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import Layout from "@/components/layout";
import Head from "next/head";
import BackButton from "@/components/back-button";
import { getPostsGhost, readPostsGhost } from "@/lib/post";
import { PostType } from "interfaces";
import { fetchPosts } from "@/lib/fetchPost";

type PostProps = {
  post: PostType;
  morePosts: PostType[];
};

const Post = (props: PostProps) => {
  const { post } = props;
  const { feature_image, title, primary_author, published_at } = post;
  const router = useRouter();

  if (router.isFallback) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={feature_image} />
      </Head>
      <Container>
        <BackButton />
        <article className="my-8">
          <PostHeader
            title={title}
            feature_image={feature_image}
            date={published_at}
            author={primary_author}
          />

          <PostBody html={post.html} />
        </article>
      </Container>
    </Layout>
  );
};

export default Post;

// This function runs only on @the server side
export async function getStaticPaths() {
  // all post
  const posts = await fetchPosts();

  // Get the paths we want to pre-render based on posts-
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This function runs only on @the server side
export async function getStaticProps(context) {
  const slug = context.params.slug;

  const posts = await fetchPosts();
  const onePost = posts.find((post) => post.slug === slug);

  if (!onePost) {
    return {
      notFound: true,
    };
  }

  const backendUrl = process.env.BACKEND_URL || "http://localhost:3001";
  const frontDomain =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.FRONT_DOMAIN || "https://yourdomain.com";

  return {
    props: {
      post: onePost,
      backendUrl,
      frontDomain,
    },
  };
}
