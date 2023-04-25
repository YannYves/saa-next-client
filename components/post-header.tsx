import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { AuthorType } from "interfaces";
import { Box } from "@mui/material";

type PostHeaderProps = {
  title: string;
  feature_image: string;
  date: string;
  author: AuthorType;
};

const PostHeader = (props: PostHeaderProps) => {
  const { title, feature_image, date, author } = props;
  const avatarPicture = author.profile_image;

  return (
    <>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <PostTitle>{title}</PostTitle>
        {avatarPicture && (
          <div className='hidden md:block md:mb-12'>
            <Avatar name={author.name} picture={avatarPicture} />
          </div>
        )}

        <Box maxWidth='lg' sx={{ margin: " 0 auto" }}>
          <CoverImage
            title={title}
            url={feature_image}
            isLink={false}
            fixedHeight={true}
          />
        </Box>
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
