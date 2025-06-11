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
import { Section } from "@/lib/sections";
import Intro from "@/components/intro";

type IndexProps = {
  posts: PostType[];
  backgroundImage: BackgroundImage;
  section?: Section;
};

const defaultSection: Section = {
  id: "accueil",
  name: "Accueil",
  slug: "accueil",
  description: "Bienvenue sur le site du Syndicat Apicole Artésien",
};

function Landing(props: IndexProps) {
  const { posts, backgroundImage, section = defaultSection } = props;
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
    <Layout>
      <Head>
        <title>{section.name}</title>
      </Head>
      <Container>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <IntroImg featureImage={backgroundImage} section={section} />
        </Box>
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: { xs: 2, md: 0 },
            mb: 4,
            mt: { xs: 4, md: 0 },
          }}
        >
          <Intro section={section} />
        </Box>
        {featuredPost && (
          <Box sx={{ maxWidth: 1200, mx: "auto", mb: 8 }}>
            <HeroPost
              title={featuredPost.title}
              coverImage={featuredPost.feature_image}
              date={featuredPost.published_at}
              author={featuredPost.primary_author}
              slug={featuredPost.slug}
            />
          </Box>
        )}
        {displayedPosts.length > 0 && (
          <Box sx={{ maxWidth: 1200, mx: "auto", mt: 8 }}>
            <MoreStories posts={displayedPosts} />
          </Box>
        )}
        {displayShowMoreButton && (
          <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
            <Button
              variant="text"
              onClick={handleLoadMore}
              sx={{
                fontWeight: 600,
                fontSize: "1.1rem",
                color: "#222",
                textTransform: "none",
                px: 2,
                py: 1,
                "&:hover": {
                  textDecoration: "underline",
                  background: "none",
                },
              }}
            >
              Voir plus
            </Button>
          </Box>
        )}
      </Container>
    </Layout>
  );
}

export default Landing;
