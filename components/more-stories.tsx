import { PostType } from "interfaces";
import FluidGrid from "./fluid-grid";

type MoreStoriesProps = {
  posts: PostType[];
};

const MoreStories = (props: MoreStoriesProps) => {
  const { posts } = props;
  return (
    <section>
      <div style={{ marginTop: 48 }} />
      <FluidGrid posts={posts} columnSizes={[6]} />
    </section>
  );
};

export default MoreStories;
