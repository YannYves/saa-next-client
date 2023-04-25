import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { AuthorType } from "interfaces";
import { styled } from "@mui/material";

type PostPreviewProps = {
  title: string;
  coverImage: any;
  date: string;
  author: AuthorType;
  slug: string;
};

const PostPreviewBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  "& h3": {
    marginTop: "0",
    marginBottom: "0.5rem",
    fontSize: theme.typography.pxToRem(24),
    lineHeight: theme.typography.pxToRem(32),
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  "& .text-lg": {
    color: theme.palette.grey[600],
  },
  "& .avatar": {
    marginTop: "auto",
  },
}));

const PostPreview = (props: PostPreviewProps) => {
  const { title, coverImage, date, author, slug } = props;

  return (
    <PostPreviewBox>
      <div className='mb-5'>
        <CoverImage
          slug={slug}
          title={title}
          url={coverImage}
          isLink={true}
          fixedHeight={true}
        />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link href={`/posts/${slug}`} className='hover:underline'>
          {title}
        </Link>
      </h3>
      <div className='text-lg mb-4'>
        <Date dateString={date} />
      </div>
      <Avatar name={author.name} picture={author.profile_image} />
    </PostPreviewBox>
  );
};

export default PostPreview;
