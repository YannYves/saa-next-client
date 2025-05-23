import Landing from "@/components/landing";
import { BackgroundImage, PostType } from "interfaces";
import { mockBackgroundImage } from "@/lib/mock-background-image";
import { getSectionBySlug } from "@/lib/sections";
import { mockPosts } from "@/lib/mock-posts";

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

export async function getStaticProps() {
  const section = getSectionBySlug("contact-evenements");
  const posts = mockPosts.filter(
    (post) => post.section === "contact-evenements"
  );

  return {
    props: {
      posts,
      backgroundImage: mockBackgroundImage,
      section,
    },
  };
}

export default Index;
