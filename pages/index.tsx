import Landing from "@/components/landing";
import { getPostsGhost, getPostsTags } from "@/lib/post";

type IndexProps = {
  ghostPosts: any;
  tags: any;
  backendUrl: any;
  frontDomain: any;
};

const Index = (props: IndexProps) => {
  const { ghostPosts, tags, backendUrl, frontDomain } = props;

  return (
    <>
      <Landing
        ghostPosts={ghostPosts}
        tags={tags}
        backendUrl={backendUrl}
        frontDomain={frontDomain}
      />
    </>
  );
};

export default Index;

// This function runs only on @the server side
export async function getStaticProps() {
  const filter = "tag:acceuil";
  const ghostPosts = await getPostsGhost(filter);
  const tags = await getPostsTags();
  const backendUrl = process.env.BACKEND_URL;
  const frontDomain =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.FRONT_DOMAIN;

  // Props returned will be passed to the page component
  return { props: { ghostPosts, tags, backendUrl, frontDomain } };
}
