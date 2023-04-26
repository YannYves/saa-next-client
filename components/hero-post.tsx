import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { AuthorType } from "interfaces";
import { Box, Grid, Typography } from "@mui/material";

type HeroPostProps = {
  title: string;
  coverImage: string;
  createdAt: string;
  author: AuthorType;
  slug: string;
};

const HeroPost = (props: HeroPostProps) => {
  const { title, coverImage, createdAt, author, slug } = props;

  return (
    <Grid container className='sm:mt-10 lg:mt-24 mb-16 md:mb-24 '>
      <Grid item xs={12} md={8}>
        <CoverImage
          title={title}
          url={coverImage}
          slug={slug}
          isLink={true}
          fixedHeight={false}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <div className='flex flex-col justify-start h-full'>
          <div>
            <Typography
              variant='h4'
              component='h3'
              className='py-4 px-6 md:px-8 mb-4 text-xl md:text-3xl font-medium'
            >
              <Link href={`/posts/${slug}`} className='hover:underline'>
                {title}
              </Link>
            </Typography>
            <Typography
              variant='subtitle2'
              className='px-6 md:px-8 mb-4 text-md md:text-lg font-light'
            >
              <Date dateString={createdAt} />
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default HeroPost;
