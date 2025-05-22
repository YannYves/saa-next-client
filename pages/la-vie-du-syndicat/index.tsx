import Landing from "@/components/landing";
// should be removed ?
import { BackgroundImage, PostType } from "interfaces";
import { fetchPosts } from "@/lib/fetchPost";
import { mockBackgroundImage } from "@/lib/mock-background-image";
import { getSectionBySlug } from "@/lib/sections";

type IndexProps = {
  posts: PostType[];
  backgroundImage: BackgroundImage;
  section: {
    name: string;
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
  const posts = await fetchPosts("la-vie-du-syndicat");
  const section = getSectionBySlug("la-vie-du-syndicat");

  return {
    props: {
      posts,
      backgroundImage: mockBackgroundImage,
      section: {
        name: section?.name || "La Vie du Syndicat",
        description: section?.description || "",
      },
    },
  };
}

export default Index;
