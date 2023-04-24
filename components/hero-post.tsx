import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { AuthorType } from "interfaces";
import { Box, Grid } from "@mui/material";

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
      <Grid item xs={8}>
        <CoverImage title={title} url={coverImage} slug={slug} isLink={true} />
      </Grid>
      <Grid item xs={4}>
        <div>
          <h3 className='p-4 mb-4 text-xl lg:text-4xl font-semibold'>
            <Link href={`/posts/${slug}`} className='hover:underline'>
              {title}
            </Link>
          </h3>
          <div className='p-4 mb-4 md:mb-0 text-xl'>
            <Date dateString={createdAt} />
          </div>
        </div>
        <div>
          <Avatar name={author.name} picture={author.profile_image} />
        </div>
      </Grid>
    </Grid>
  );
};

export default HeroPost;
