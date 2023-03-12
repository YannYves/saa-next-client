import { PostType } from "interfaces";
import PostPreview from "./post-preview";

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
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32'>
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            coverImage={post.feature_image}
            date={post.created_at}
            author={post.primary_author}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
