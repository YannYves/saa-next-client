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
        <CoverImage
          title={title}
          url={coverImage}
          slug={slug}
          isLink={true}
          fixedHeight={false}
        />
      </Grid>
      <Grid item xs={4}>
        <div className='flex flex-col justify-between'>
          <div>
            <h3 className='px-8 mb-6 text-xl lg:text-4xl font-semibold'>
              <Link href={`/posts/${slug}`} className='hover:underline'>
                {title}
              </Link>
            </h3>
            <div className='px-8 mb-4 text-xl'>
              <Date dateString={createdAt} />
            </div>
          </div>
          <div className='pb-4 px-8'>
            <Avatar name={author.name} picture={author.profile_image} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default HeroPost;
