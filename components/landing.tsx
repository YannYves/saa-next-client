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
        {section.name && (
          <IntroImg
            featureImage={backgroundImage.feature_image}
            section={section}
          />
        )}
        {featuredPost && <FeaturedIntro post={featuredPost} />}
        {displayedPosts.length > 0 && <MoreStories posts={displayedPosts} />}
        {displayShowMoreButton && (
          <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
            <Button
              variant="contained"
              onClick={handleLoadMore}
              sx={{ px: 4, py: 1.5 }}
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
