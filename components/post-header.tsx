import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { AuthorType } from "interfaces";

type PostHeaderProps = {
  title: string;
  coverImage: string;
  date: string;
  author: AuthorType;
  server: string;
};

const PostHeader = (props: PostHeaderProps) => {
  const { title, coverImage, date, author, server } = props;
  const avatarPicture = `${author.data.attributes.avatar.data.attributes.url}`;

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='hidden md:block md:mb-12'>
        <Avatar
          name={author.data.attributes.avatar.data.attributes.name}
          picture={avatarPicture}
          server={server}
        />
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <CoverImage title={title} url={server + coverImage} slug={""} />
      </div>
      <div className='max-w-2xl mx-auto'>
        <div className='block md:hidden mb-6'>
          <Avatar
            name={author.data.attributes.avatar.data.attributes.name}
            picture={avatarPicture}
            server={server}
          />
        </div>
        <div className='mb-6 text-lg'>
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
