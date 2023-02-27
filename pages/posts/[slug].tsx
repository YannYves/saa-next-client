import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import PostBody from "@/components/post-body";
import MoreStories from "@/components/more-stories";
import Header from "@/components/header";
import PostHeader from "@/components/post-header";
import SectionSeparator from "@/components/section-separator";
import Layout from "@/components/layout";
import PostTitle from "@/components/post-title";
import Head from "next/head";
import { PostType } from "interfaces";
import { loadPosts } from "@/lib/load-posts";
import BackButton from "@/components/back-button";

type PostProps = {
  post: { data: PostType };
  morePosts: PostType[];
  server: string;
};

const Post = (props: PostProps) => {
  const { post, server } = props;

  const router = useRouter();

  const coverImageUrl = post.data.attributes.cover.data.attributes.formats.large
    ? post.data.attributes.cover.data.attributes.formats.large.url
    : post.data.attributes.cover.data.attributes.formats.medium.url;
  const title = post.data.attributes.title;
  const date = post.data.attributes.createdAt;
  const author = post.data.attributes.author;

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
                <meta property='og:image' content={coverImageUrl} />
              </Head>
              <BackButton />
              <PostHeader
                title={title}
                coverImage={coverImageUrl}
                date={date}
                author={author}
                server={server}
              />
              <PostBody content={post.data.attributes.description} />
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
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const posts = await loadPosts(
    process.env.STRAPI_SERVER + "/api/articles?populate=deep"!
  );
  // Get the paths we want to pre-render based on posts

  const paths = posts.data.map((post: PostType) => ({
    params: { slug: post.attributes.slug, postId: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This function runs only on @the server side
export async function getStaticProps(context) {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const slug = context.params.slug;

  const posts = await loadPosts(
    process.env.STRAPI_SERVER + "/api/articles?populate=deep"!
  );

  const postId = posts.data.filter((post) => post.attributes.slug === slug)[0]
    .id;

  const post = await loadPosts(
    process.env.STRAPI_SERVER + `/api/articles/${postId}?populate=deep`!
  );

  const server = process.env.STRAPI_SERVER;

  // Props returned will be passed to the page component
  return { props: { post, server } };
}
