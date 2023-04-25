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
    <Grid
      container
      spacing={2}
      sx={{ mt: { sm: 10, lg: 24 }, mb: { xs: 16, md: 24 } }}
    >
      <Grid item xs={12} md={8}>
        <CoverImage title={title} url={coverImage} slug={slug} isLink={true} />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant='h4'
          component='h3'
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          <Link href={`/posts/${slug}`}>{title}</Link>
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Date dateString={createdAt} />
        </Box>
        <div>
          <Avatar name={author.name} picture={author.profile_image} />
        </div>
      </Grid>
    </Grid>
  );
};

export default HeroPost;
