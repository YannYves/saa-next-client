import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { AuthorType } from "interfaces";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

type PostPreviewProps = {
  title: string;
  coverImage: any;
  date: string;
  author: AuthorType;
  slug: string;
};

const PostPreview = (props: PostPreviewProps) => {
  const { title, coverImage, date, slug } = props;
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const PostPreviewBox = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    "& .text-lg": {
      color: theme.palette.grey[600],
    },
    height: "100%",
    minHeight: isLargeScreen ? "auto" : "350px",
  }));

  return (
    <PostPreviewBox>
      <div>
        <CoverImage
          slug={slug}
          title={title}
          url={coverImage}
          isLink={true}
          fixedHeight={isLargeScreen ? false : true}
        />
      </div>
      <Box mx={isSmallScreen ? 2 : 0}>
        <Typography className='py-3 xl:pt-5 font-medium sm:py-2 text-xl xl:text-2xl '>
          <Link href={`/posts/${slug}`} className='hover:underline'>
            {title}
          </Link>
        </Typography>
        <Typography
          variant='subtitle2'
          className='md:px-0 font-medium sm:py-2 mb-4 text-md font-light xl:text-lg'
        >
          <Date dateString={date} />
        </Typography>
      </Box>
    </PostPreviewBox>
  );
};

export default PostPreview;
