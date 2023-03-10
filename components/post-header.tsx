import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { AuthorType } from "interfaces";
import PostSubTitle from "./post-subtitle";

type PostHeaderProps = {
  title: string;
  feature_image: string;
  date: string;
  author: any;
  frontDomain;
  excerpt;
};

const PostHeader = (props: PostHeaderProps) => {
  const { title, feature_image, date, author, frontDomain, excerpt } = props;
  const avatarPicture = author.profile_image;

  console.log(avatarPicture, "avatarPicture");

  return (
    <>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <div className='max-w-2xl'>
          <PostTitle>{title}</PostTitle>
        </div>
        {avatarPicture && (
          <div className='hidden md:block md:mb-12'>
            <Avatar name={author.name} picture={avatarPicture} />
          </div>
        )}

        <CoverImage
          title={title}
          url={feature_image}
          slug={""}
          frontDomain={frontDomain}
        />
      </div>

      <div className='max-w-3xl mx-auto'>
        {avatarPicture && (
          <div className='block md:hidden mb-6'>
            <Avatar name={author.name} picture={avatarPicture} />
          </div>
        )}
        <div className='mb-6 text-lg font-semibold'>
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
