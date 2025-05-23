import Landing from "@/components/landing";
import { BackgroundImage, PostType } from "interfaces";
import { mockBackgroundImage } from "@/lib/mock-background-image";
import { getSectionBySlug } from "@/lib/sections";
import { mockPosts } from "@/lib/mock-posts";

type IndexProps = {
  posts: PostType[];
  backgroundImage: BackgroundImage;
  section: {
    id: string;
    name: string;
    slug: string;
    description: string;
  };
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

// This function runs only on @the server side
export async function getStaticProps() {
  const section = getSectionBySlug("accueil");
  const posts = mockPosts.filter((post) => post.section === "accueil");

  return {
    props: {
      posts,
      backgroundImage: mockBackgroundImage,
      section,
    },
  };
}

export default Index;
