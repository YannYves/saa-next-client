import Landing from "@/components/landing";
import { BackgroundImage, PostType } from "interfaces";
import { mockBackgroundImage } from "@/lib/mock-background-image";
import { getSectionBySlug } from "@/lib/sections";
import { fetchPosts } from "@/lib/fetchPost";
import { Section } from "@/lib/sections";

type IndexProps = {
  posts: PostType[];
  backgroundImage: BackgroundImage;
  section: Section;
};

const Index = (props: IndexProps) => {
  const { posts, backgroundImage, section } = props;

  return (
    <>
      <Landing
        posts={posts}
        backgroundImage={backgroundImage}
        section={section}
      />
    </>
  );
};

export async function getStaticProps() {
  const section = getSectionBySlug("evenements");
  const posts = await fetchPosts("evenements");

  return {
    props: {
      posts,
      backgroundImage: mockBackgroundImage,
      section,
    },
    revalidate: 60, // Revalidate every minute
  };
}

export default Index;
