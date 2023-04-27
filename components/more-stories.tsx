import { PostType } from "interfaces";
import FluidGrid from "./fluid-grid";

type MoreStoriesProps = {
  posts: PostType[];
};

const MoreStories = (props: MoreStoriesProps) => {
  const { posts } = props;
  return (
    <section>
      <h2 className='text-6xl md:text-7xl font-bold flex-col flex items-center sm:items-center md:items-start my-12'>
        Blog
      </h2>
      <FluidGrid posts={posts} columnSizes={[6]} />
    </section>
  );
};

export default MoreStories;
