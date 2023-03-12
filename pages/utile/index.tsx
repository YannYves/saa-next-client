import Landing from "@/components/landing";
import { getPostsGhost, getPostsTags } from "@/lib/post";

type IndexProps = {
  ghostPosts: any;
  tags: any;
};

const Index = (props: IndexProps) => {
  const { ghostPosts, tags } = props;

  return (
    <>
      <Landing ghostPosts={ghostPosts} tags={tags} />
    </>
  );
};

export default Index;

// This function runs only on @the server side
export async function getStaticProps() {
  const filter = "tag:utile";
  const ghostPosts = await getPostsGhost(filter);
  const tags = await getPostsTags();

  // Props returned will be passed to the page component
  return { props: { ghostPosts, tags } };
}
