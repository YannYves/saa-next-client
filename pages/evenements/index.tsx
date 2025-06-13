import Landing from "@/components/landing";
import { BackgroundImage, PostType } from "interfaces";
import { mockBackgroundImage } from "@/lib/mock-background-image";
import { getSectionBySlug } from "@/lib/sections";
import { fetchSectionData } from "@/lib/fetchPost";
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
  const { posts, backgroundImage } = await fetchSectionData("evenements");

  return {
    props: {
      posts,
      backgroundImage: backgroundImage || mockBackgroundImage,
      section,
    },
  };
}

export default Index;
