import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import Head from "next/head";
import { PostType, HeaderType, AuthorType } from "interfaces";
import { loadPosts } from "@/lib/load-posts";
import IntroImg from "@/components/intro-img";
import { filterPost } from "@/lib/filter-post";
import FeaturedIntro from "@/components/featuredIntro";

type IndexProps = {
  posts: { data: PostType[] };
  server: string;
};

const Index = (props: IndexProps) => {
  const { posts, server } = props;
  let allPosts = [];
  let heroPosts = [];

  posts.data.map((post: PostType) =>
    post.attributes.header
      ? (heroPosts = [...heroPosts, post])
      : (allPosts = [...allPosts, post])
  );

  const filteredHomePost = filterPost(allPosts, "la-vie-du-syndicat");
  const filteredHeroPost = filterPost(heroPosts, "la-vie-du-syndicat");

  return (
    <>
      <Layout>
        <Head>
          <title>Le syndicat apicole artésien - la vie du syndicat </title>
        </Head>
        <Container>
          <IntroImg SectionIntroText={"La vie du syndicat."} />

          {filteredHeroPost.length > 0 && <FeaturedIntro />}

          {filteredHeroPost.map((heroPost) => (
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
          {filteredHomePost.length > 0 && (
            <MoreStories posts={filteredHomePost} server={server} />
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

  const server = process.env.STRAPI_SERVER;

  // Props returned will be passed to the page component
  return { props: { posts, server } };
}
