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
import BackButton from "./back-button";

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
  let heroPosts: PostType[] = [];

  // init
  posts.map((post: PostType) =>
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

  function formatPath(path: string): string {
    // Replace hyphens with spaces
    const formattedPath = path.replace(/-/g, " ");

    // Remove leading and trailing slashes
    return formattedPath.replace(/^\/|\/$/g, "");
  }

  const displayedPosts = allPosts.slice(0, postDisplayCount);
  const path = useRouter().pathname;
  const formattedPath = formatPath(path);

  return (
    <>
      <Layout>
        <Head>
          <title>{formattedPath === "" ? "Accueil" : formattedPath}</title>
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
                date={heroPost.published_at}
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
          {heroPosts.length === 0 && displayedPosts.length === 0 && (
            <>
              <section className='flex-col md:flex-row flex items-center sm:items-center md:items-start sm:justify-center lg:justify-between mt-10 sm:mt-10 lg:mt-24 mb-16 md:mb-12'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl xl:md:text-7xl font-bold tracking-tighter leading-tight md:pr-8'>
                  Il n'y a pas encore d'article ici ...
                </h1>
              </section>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export default Landing;
