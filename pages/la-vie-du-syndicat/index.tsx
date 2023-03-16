import Landing from "@/components/landing";
import { getPostsGhost, getPostsTags, isPropertyDefined } from "@/lib/post";
import { BackgroundImage, PostType, TagType } from "interfaces";

type IndexProps = {
  posts: PostType[];
  tags: TagType[];
  backendUrl: string;
  frontDomain: string;
  backgroundImage: BackgroundImage | undefined;
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
  const filter = "tag:vie-du-syndicat+tag:-header";
  const posts = await getPostsGhost(filter);
  const backgroundImageFilter = "tags:vie-du-syndicat+tags:header";
  const backgroundImagePost = await getPostsGhost(backgroundImageFilter);

  // TODO : ignoble ?
  const backgroundImage =
    backgroundImagePost &&
    backgroundImagePost[0] &&
    isPropertyDefined(backgroundImagePost[0], "title") &&
    isPropertyDefined(backgroundImagePost[0], "feature_image")
      ? {
          title: backgroundImagePost[0].title,
          feature_image: backgroundImagePost[0].feature_image,
        }
      : null;

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
