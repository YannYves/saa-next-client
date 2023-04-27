import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Layout from "@/components/layout";
import Head from "next/head";
import IntroImg from "@/components/intro-img";
import FeaturedIntro from "@/components/featuredIntro";
import { BackgroundImage, PostType, TagType } from "interfaces";
import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";

type IndexProps = {
  posts: PostType[];
  tags: TagType[];
  backgroundImage: BackgroundImage | undefined;
};

function Landing(props: IndexProps) {
  const { posts, backgroundImage } = props;
  const [postDisplayCount, setPostDisplayCount] = useState(10);
  const [displayShowMorePostButton, setDisplayShowMorePostButton] =
    useState(false);
  let allPosts = [];
  let heroPosts = [];

  // init
  posts.map((post: any) =>
    post.featured
      ? (heroPosts = [...heroPosts, post])
      : (allPosts = [...allPosts, post])
  );

  useEffect(() => {
    allPosts.length > 10
      ? setDisplayShowMorePostButton(true)
      : setDisplayShowMorePostButton(false);
  }, [posts]);

  useEffect(() => {
    if (
      allPosts.length === 0 ||
      postDisplayCount === allPosts.length ||
      postDisplayCount > allPosts.length
    ) {
      setDisplayShowMorePostButton(false);
    }
  }, [postDisplayCount]);

  const handleLoadMore = () => {
    setPostDisplayCount(postDisplayCount + 10);
  };

  const displayedPosts = allPosts.slice(0, postDisplayCount);

  return (
    <>
      <Layout>
        <Head>
          <title>Le syndicat apicole artésien</title>
        </Head>
        {backgroundImage &&
          backgroundImage.title &&
          backgroundImage.feature_image && (
            <IntroImg
              SectionIntroText={backgroundImage.title}
              feature_image={backgroundImage.feature_image}
              html={backgroundImage.html}
            />
          )}
        <Container>
          {heroPosts && heroPosts.length > 0 && <FeaturedIntro />}
          {heroPosts &&
            heroPosts.length > 0 &&
            heroPosts.map((heroPost, idx) => (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.feature_image}
                date={heroPost.created_at}
                author={heroPost.primary_author}
                slug={heroPost.slug}
                key={idx}
              />
            ))}
          {displayedPosts.length > 0 && <MoreStories posts={displayedPosts} />}
          {displayShowMorePostButton && (
            <Stack spacing={2} direction='column' className='mx-20 my-10'>
              <Button
                variant='outlined'
                onClick={handleLoadMore}
                sx={{ color: "black", border: "1px solid black" }}
              >
                voir plus de posts
              </Button>
            </Stack>
          )}
        </Container>
      </Layout>
    </>
  );
}

export default Landing;
