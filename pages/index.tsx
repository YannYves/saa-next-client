import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import Head from "next/head";
import { PostType, HeaderType } from "interfaces";
import { loadPosts } from "@/lib/load-posts";

type IndexProps = {
  headers: { data: HeaderType[] };
  posts: { data: PostType[] };
};

const Index = (props: IndexProps) => {
  const { posts, headers } = props;
  console.log(headers.data[0].attributes, "headers");
  const homeHeaders = headers.data;
  const homePosts = posts.data;
  const heroPost = homePosts[0];
  console.log(homePosts[0]);

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with </title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.attributes.title}
              coverImage={heroPost.attributes.cover.data}
              date={heroPost.attributes.createdAt}
              author={"test"}
              slug={heroPost.attributes.slug}
              excerpt={heroPost.metadata.excerpt}
            />
          )}
          {homePosts.length > 0 && <MoreStories posts={homePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

// This function runs only on @the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const posts = await loadPosts(
    process.env.STRAPI_SERVER + "/api/articles?populate=*"!
  );
  const headers = await loadPosts(
    process.env.STRAPI_SERVER + "/api/headers?populate=*"!
  );
  const server = process.env.STRAPI_SERVER;

  // Props returned will be passed to the page component
  return { props: { posts, server, headers } };
}
