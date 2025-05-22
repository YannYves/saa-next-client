import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Layout from "@/components/layout";
import Head from "next/head";
import IntroImg from "@/components/intro-img";
import FeaturedIntro from "@/components/featuredIntro";
import { BackgroundImage, PostType } from "interfaces";
import { useEffect, useState } from "react";
import { Button, Stack, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import BackButton from "./back-button";

type IndexProps = {
  posts: PostType[];
  backgroundImage: BackgroundImage;
  section?: {
    name: string;
    description: string;
  };
};

function Landing(props: IndexProps) {
  const { posts, backgroundImage, section } = props;
  const [displayedPosts, setDisplayedPosts] = useState<PostType[]>([]);
  const [featuredPost, setFeaturedPost] = useState<PostType | null>(null);
  const [displayShowMoreButton, setDisplayShowMoreButton] = useState(false);
  const POSTS_PER_PAGE = 10;

  useEffect(() => {
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort(
      (a, b) =>
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );

    // Find the first featured post
    const featured = sortedPosts.find((post) => post.featured) || null;
    setFeaturedPost(featured);

    // Get remaining posts (excluding the featured one)
    const remainingPosts = sortedPosts.filter((post) => post !== featured);

    // Set initial displayed posts
    setDisplayedPosts(remainingPosts.slice(0, POSTS_PER_PAGE));

    // Show "see more" button if there are more posts
    setDisplayShowMoreButton(remainingPosts.length > POSTS_PER_PAGE);
  }, [posts]);

  const handleLoadMore = () => {
    const currentCount = displayedPosts.length;
    const remainingPosts = posts
      .filter((post) => post !== featuredPost)
      .slice(currentCount, currentCount + POSTS_PER_PAGE);

    setDisplayedPosts((prev) => [...prev, ...remainingPosts]);

    // Hide button if we've shown all posts
    if (currentCount + POSTS_PER_PAGE >= posts.length - 1) {
      setDisplayShowMoreButton(false);
    }
  };

  function formatPath(path: string): string {
    return path.replace(/-/g, " ").replace(/^\/|\/$/g, "");
  }

  const path = useRouter().pathname;
  const formattedPath = formatPath(path);

  return (
    <>
      <Layout>
        <Head>
          <title>{formattedPath === "" ? "Accueil" : formattedPath}</title>
        </Head>
        {backgroundImage?.title && backgroundImage?.feature_image && (
          <IntroImg
            SectionIntroText={backgroundImage.title}
            feature_image={backgroundImage.feature_image}
            html={backgroundImage.html}
          />
        )}
        <Container>
          {section && (
            <Box sx={{ mb: 4, textAlign: "center" }}>
              <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                {section.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {section.description}
              </Typography>
            </Box>
          )}
          {featuredPost && <FeaturedIntro />}
          {featuredPost && (
            <HeroPost
              title={featuredPost.title}
              coverImage={featuredPost.feature_image}
              date={featuredPost.published_at}
              author={featuredPost.primary_author}
              slug={featuredPost.slug}
            />
          )}
          {displayedPosts.length > 0 && <MoreStories posts={displayedPosts} />}
          {displayShowMoreButton && (
            <Box sx={{ textAlign: "center", mt: 4, mb: 4 }}>
              <Button
                variant="contained"
                onClick={handleLoadMore}
                sx={{ px: 4, py: 1.5 }}
              >
                Voir plus
              </Button>
            </Box>
          )}
          {!featuredPost && displayedPosts.length === 0 && (
            <section className="flex-col md:flex-row flex items-center sm:items-center md:items-start sm:justify-center lg:justify-between mt-10 sm:mt-10 lg:mt-24 mb-16 md:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
                Il n'y a pas encore d'article ici ...
              </h1>
            </section>
          )}
        </Container>
      </Layout>
    </>
  );
}

export default Landing;
