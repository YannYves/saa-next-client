import Landing from "@/components/landing";
import { getPostsGhost, getPostsTags } from "@/lib/post";
import { BackgroundImage, PostType, TagType } from "interfaces";

type IndexProps = {
  posts: PostType[];
  tags: TagType[];
  backendUrl: string;
  frontDomain: string;
  backgroundImage: BackgroundImage;
};

const Index = (props: IndexProps) => {
  const { posts, tags, backgroundImage } = props;

  return (
    <>
      <Landing posts={posts} tags={tags} backgroundImage={backgroundImage} />
    </>
  );
};

export default Index;

// This function runs only on @the server side
export async function getStaticProps() {
  const filter = "tag:acceuil+tag:-header";
  const posts = await getPostsGhost(filter);
  const backgroundImageFilter = "tags:acceuil+tags:header";
  const backgroundImagePost = await getPostsGhost(backgroundImageFilter);
  const backgroundImage = backgroundImagePost
    ? {
        title: backgroundImagePost[0].title,
        feature_image: backgroundImagePost[0].feature_image,
        html: backgroundImagePost[0].html,
      }
    : undefined;

  const tags = await getPostsTags();
  const backendUrl = process.env.BACKEND_URL;
  const frontDomain =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.FRONT_DOMAIN;

  // Props returned will be passed to the page component
  return {
    props: { posts, tags, backendUrl, frontDomain, backgroundImage },
  };
}
