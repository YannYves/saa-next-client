import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { AuthorType } from "interfaces";
import { Box } from "@mui/material";

type PostPreviewProps = {
  title: string;
  coverImage: any;
  date: string;
  author: AuthorType;
  slug: string;
};

const PostPreview = (props: PostPreviewProps) => {
  const { title, coverImage, date, author, slug } = props;

  return (
    <Box>
      <CoverImage slug={slug} title={title} url={coverImage} isLink={true} />
      <Link href={`/posts/${slug}`} className='hover:underline'>
        {title}
      </Link>
      <Date dateString={date} />
      <Avatar name={author.name} picture={author.profile_image} />
    </Box>
  );
};

export default PostPreview;
