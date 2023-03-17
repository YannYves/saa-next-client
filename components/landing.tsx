import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Layout from "@/components/layout";
import Head from "next/head";
import IntroImg from "@/components/intro-img";
import FeaturedIntro from "@/components/featuredIntro";
import { BackgroundImage, PostType, TagType } from "interfaces";

type IndexProps = {
  posts: PostType[];
  tags: TagType[];
  backgroundImage: BackgroundImage | undefined;
};

function Landing(props: IndexProps) {
  const { posts, backgroundImage } = props;
  let allPosts = [];
  let heroPosts = [];

  //TODO find out why this is different on client vs server side meta

  posts.map((post: any) =>
    post.featured
      ? (heroPosts = [...heroPosts, post])
      : (allPosts = [...allPosts, post])
  );

  console.log(allPosts, "allPosts");
  console.log(heroPosts, "heroPosts");

  return (
    <>
      <Layout>
        <Head>
          <title>Le syndicat apicole artésien - aceuil </title>
        </Head>

        {/*TODO : ignoble ?  */}
        <Container>
          {backgroundImage !== null &&
            backgroundImage[0] &&
            backgroundImage[0].title &&
            backgroundImage[0].feature_image && (
              <IntroImg
                SectionIntroText={backgroundImage[0].title}
                feature_image={backgroundImage[0].feature_image}
                excerpt={backgroundImage[0].excerpt}
              />
            )}
          {heroPosts && heroPosts.length > 0 && <FeaturedIntro />}
          {heroPosts &&
            heroPosts.length > 0 &&
            heroPosts.map((heroPost) => (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.feature_image}
                createdAt={heroPost.created_at}
                author={heroPost.primary_author}
                slug={heroPost.slug}
              />
            ))}
          {posts.length > 0 && <MoreStories posts={posts} />}
        </Container>
      </Layout>
    </>
  );
}

export default Landing;
