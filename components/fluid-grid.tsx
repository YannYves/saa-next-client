import React from "react";
import { Grid, GridSize, styled, useTheme } from "@mui/material";
import { PostType } from "interfaces";
import PostPreview from "./post-preview";

type Props = {
  posts: PostType[];
  columnSizes: GridSize[];
};

const StyledGridItem = styled(Grid)(({ theme }) => ({
  height: "100%",
  [theme.breakpoints.up("sm")]: {
    minHeight: 400,
  },
  [theme.breakpoints.up("md")]: {
    minHeight: 500,
  },
}));

const FluidGrid: React.FC<Props> = ({ posts, columnSizes }) => {
  const theme = useTheme();

  return (
    <Grid container spacing={4} mb={4}>
      {posts.map((post, index) => (
        <StyledGridItem item xs={12} sm={6} md={4} key={index} theme={theme}>
          <PostPreview
            key={post.id}
            title={post.title}
            coverImage={post.feature_image}
            date={post.published_at}
            author={post.primary_author}
            slug={post.slug}
          />
        </StyledGridItem>
      ))}
    </Grid>
  );
};

export default FluidGrid;
