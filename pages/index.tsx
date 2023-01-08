import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import Head from "next/head";
import { PostType, HeaderType, AuthorType } from "interfaces";
import { loadPosts } from "@/lib/load-posts";

type IndexProps = {
  posts: { data: PostType[] };
  server: string;
};

const Index = (props: IndexProps) => {
  const { posts, server } = props;
  let homePosts = [];
  let heroPosts = [];

  console.log(posts, "posts");

  posts.data.map((post: PostType) =>
    post.attributes.header
      ? (heroPosts = [...heroPosts, post])
      : (homePosts = [...homePosts, post])
  );

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with </title>
        </Head>
        <Container>
          <Intro />
          {heroPosts.map((heroPost) => (
            <HeroPost
              title={heroPost.attributes.title}
              coverImage={
                server +
                heroPost.attributes.cover.data.attributes.formats.medium.url
              }
              createdAt={heroPost.attributes.createdAt}
              author={heroPost.attributes.author}
              slug={heroPost.attributes.slug}
              server={server}
            />
          ))}
          {homePosts.length > 0 && (
            <MoreStories posts={homePosts} server={server} />
          )}
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
    process.env.STRAPI_SERVER + "/api/articles?populate=deep"!
  );

  console.log(posts.data[0], "many posts");

  const server = process.env.STRAPI_SERVER;

  // Props returned will be passed to the page component
  return { props: { posts, server } };
}
