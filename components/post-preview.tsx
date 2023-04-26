import Avatar from "./avatar";
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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const PostPreviewBox = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    "& > div": {
      marginBottom: isSmallScreen ? "0.5rem" : "1rem",
    },
    "& h3": {
      marginTop: "0",
      marginBottom: isSmallScreen ? "0rem" : "0.5rem",
      fontSize: theme.typography.pxToRem(24),
      lineHeight: theme.typography.pxToRem(32),
      fontWeight: isSmallScreen ? 500 : 700,
      textTransform: "capitalize",
    },
    "& .text-lg": {
      color: theme.palette.grey[600],
    },
    "& .avatar": {
      marginTop: "auto",
    },
    height: "100%",
    minHeight: isSmallScreen ? "auto" : "350px",
  }));

  return (
    <PostPreviewBox>
      <div>
        <CoverImage
          slug={slug}
          title={title}
          url={coverImage}
          isLink={true}
          fixedHeight={isSmallScreen ? false : true}
        />
      </div>
      <Box height={isSmallScreen ? "auto" : 50}>
        <Typography
          component='h3'
          className='py-4 px-6 md:px-8 mb-4 text-xl md:text-3xl font-medium'
        >
          <Link href={`/posts/${slug}`} className='hover:underline'>
            {title}
          </Link>
        </Typography>
      </Box>
      <Typography
        variant='subtitle2'
        className='px-6 md:px-8 mb-4 text-md md:text-lg font-light'
      >
        <Date dateString={date} />
      </Typography>
    </PostPreviewBox>
  );
};

export default PostPreview;
