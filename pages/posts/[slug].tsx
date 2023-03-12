import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import SectionSeparator from "@/components/section-separator";
import Layout from "@/components/layout";
import PostTitle from "@/components/post-title";
import Head from "next/head";
import BackButton from "@/components/back-button";
import { getPostsGhost, readPostsGhost } from "@/lib/post";

type PostProps = {
  post: any;
  morePosts: any;
};

const Post = (props: PostProps) => {
  const { post } = props;
  const { feature_image, title, created_at, primary_author } = post;
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
            <article>
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
              <PostBody content={post.excerpt} />
            </article>
            <SectionSeparator />
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
  const ghostPosts = await getPostsGhost();

  // Get the paths we want to pre-render based on posts-
  const paths = ghostPosts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This function runs only on @the server side
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const ghostPosts = await getPostsGhost();
  //TODO what if two times the same slug ?
  const onePost = ghostPosts.filter((post: any) => post.slug === slug);

  const post = await readPostsGhost(onePost[0].id);
  const server = process.env.STRAPI_SERVER;

  // Props returned will be passed to the page component
  return { props: { post, server } };
}
