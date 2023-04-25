import { PostType } from "interfaces";
import FluidGrid from "./fluid-grid";

type MoreStoriesProps = {
  posts: PostType[];
};

const MoreStories = (props: MoreStoriesProps) => {
  const { posts } = props;
  return (
    <section>
      <h2 className='mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
        Blog
      </h2>
      <FluidGrid posts={posts} columnSizes={[6]} />
    </section>
  );
};

export default MoreStories;
