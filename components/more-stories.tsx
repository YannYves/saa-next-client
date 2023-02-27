import { PostType } from "interfaces";
import PostPreview from "./post-preview";

type MoreStoriesProps = {
  posts: PostType[];
  server: string;
};

const MoreStories = (props: MoreStoriesProps) => {
  const { posts, server } = props;
  return (
    <section>
      <h2 className='mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
        Blog
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32'>
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.attributes.title}
            coverImage={
              server + post.attributes.cover.data.attributes.formats.small.url
            }
            date={post.attributes.createdAt}
            author={post.attributes.author}
            slug={post.attributes.slug}
            server={server}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
