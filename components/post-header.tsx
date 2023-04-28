import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { AuthorType } from "interfaces";
import { useMediaQuery, useTheme, Box } from "@mui/material";

type PostHeaderProps = {
  title: string;
  feature_image: string;
  date: string;
  author: AuthorType;
};

const PostHeader = (props: PostHeaderProps) => {
  const { title, feature_image, date, author } = props;
  const avatarPicture = author.profile_image;
  const theme = useTheme();

  return (
    <>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <div className='flex flex-col items-center content-center mb-1 sm:mb-4 lg:mb-6'>
          <PostTitle>{title}</PostTitle>
        </div>

        <Box maxWidth='lg' sx={{ margin: " 0 auto" }}>
          <CoverImage
            title={title}
            url={feature_image}
            isLink={false}
            isFeatured={true}
          />
        </Box>
      </div>

      <div className='max-w-3xl mx-auto'>
        <div className='block  mb-3 sm:mb-4 lg:mb-6'>
          <Avatar name={author.name} picture={avatarPicture} />
        </div>
        <div className='mb-6 text-sm sm:text-base md:text-lg font-normal'>
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
