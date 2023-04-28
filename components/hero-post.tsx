import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { AuthorType } from "interfaces";
import { useMediaQuery, useTheme, Box, Grid, Typography } from "@mui/material";

type HeroPostProps = {
  title: string;
  date: string;
  coverImage: string;
  author: AuthorType;
  slug: string;
};

const HeroPost = (props: HeroPostProps) => {
  const { title, coverImage, slug, date } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className='sm:mt-10 lg:mt-24 mb-16 md:mb-24 '>
      <Grid item xs={12} md={8}>
        <CoverImage
          title={title}
          url={coverImage}
          slug={slug}
          isLink={true}
          isFeatured={true}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <div className='flex flex-col justify-start h-full'>
          <Box mx={isSmallScreen ? 2 : 0}>
            <Typography className='py-3 md:px-3 font-medium sm:py-2 text-base sm:text-lg md:text-xl lg:md:text-2xl xl:text-3xl'>
              <Link href={`/posts/${slug}`} className='hover:underline'>
                {title}
              </Link>
            </Typography>
            <Typography
              variant='subtitle2'
              className='md:px-3 font-medium sm:py-2 mb-4 text-md md:text-lg xl:text-xl font-light'
            >
              <Date dateString={date} />
            </Typography>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default HeroPost;
