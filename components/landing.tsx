import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Layout from "@/components/layout";
import Head from "next/head";
import IntroImg from "@/components/intro-img";
import FeaturedIntro from "@/components/featuredIntro";

type IndexProps = {
  ghostPosts: any;
  tags: any;
  backendUrl: any;
  frontDomain: any;
};

function Landing(props: IndexProps) {
  const { ghostPosts, backendUrl, frontDomain } = props;
  let allPosts = [];
  let heroPosts = [];

  //TODO find out why this is different on client vs server side meta

  ghostPosts.map((post: any) =>
    post.featured
      ? (heroPosts = [...heroPosts, post])
      : (allPosts = [...allPosts, post])
  );

  return (
    <>
      <Layout>
        <Head>
          <title>Le syndicat apicole artésien - aceuil </title>
        </Head>
        <Container>
          <IntroImg SectionIntroText={"Le syndicat apicole artésien."} />
          <FeaturedIntro />
          {heroPosts.map((heroPost) => (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.feature_image}
              createdAt={heroPost.created_at}
              author={heroPost.primary_author}
              slug={heroPost.slug}
              backendUrl={backendUrl}
              frontDomain={frontDomain}
            />
          ))}
          {ghostPosts.length > 0 && (
            <MoreStories
              posts={ghostPosts}
              backendUrl={backendUrl}
              frontDomain={frontDomain}
            />
          )}
        </Container>
      </Layout>
    </>
  );
}

export default Landing;
