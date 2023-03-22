import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import Layout from "@/components/layout";
import PostTitle from "@/components/post-title";
import Head from "next/head";
import BackButton from "@/components/back-button";
import { getPostsGhost, readPostsGhost } from "@/lib/post";
import { usePreviousRoute } from "pages/_app";
import { PostType } from "interfaces";

type PostProps = {
  post: PostType;
  morePosts: PostType[];
};

const Post = (props: PostProps) => {
  const { post } = props;
  const {
    feature_image,
    title,
    created_at,
    primary_author,
    feature_image_caption,
  } = post;
  const router = useRouter();

  if (router.isFallback) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className='mb-24'>
              <Head>
                <title>{title}</title>
                <meta property='og:image' content={feature_image} />
              </Head>
              <BackButton />
              <PostHeader
                title={title}
                feature_image={feature_image}
                date={created_at}
                author={primary_author}
              />
              <PostBody html={post.html} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};
export default Post;

// This function runs only on @the server side
export async function getStaticPaths() {
  // all post
  const posts = await getPostsGhost();

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
  const posts = await getPostsGhost();
  //TODO what if two times the same slug ?
  const onePost = posts.filter((post: any) => post.slug === slug);
  const post = await readPostsGhost(onePost[0].id);
  const backendUrl = process.env.BACKEND_URL;
  const frontDomain =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.FRONT_DOMAIN;

  // Props returned will be passed to the page component
  return { props: { post, backendUrl, frontDomain } };
}
