import Landing from "@/components/landing";
// should be removed ?
import { BackgroundImage, PostType } from "interfaces";
import { fetchPosts } from "@/lib/fetchPost";
import { mockBackgroundImage } from "@/lib/mock-background-image";

type IndexProps = {
  posts: PostType[];
  backgroundImage: BackgroundImage;
};

const Index = (props: IndexProps) => {
  const { posts, backgroundImage } = props;

  return (
    <>
      <Landing posts={posts} backgroundImage={backgroundImage} />
    </>
  );
};

// This function runs only on @the server side
export async function getStaticProps() {
  // const filter = "tag:acceuil+tag:-header";
  const posts = await fetchPosts();
  const frontDomain =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.FRONT_DOMAIN;

  // Use mock background image in development mode
  const backgroundImage =
    process.env.NODE_ENV === "development" ? mockBackgroundImage : null;

  return {
    props: {
      posts,
      backgroundImage,
    },
  };
}

export default Index;
