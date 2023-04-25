import React from "react";
import { Grid, GridSize, styled } from "@mui/material";
import { PostType } from "interfaces";
import PostPreview from "./post-preview";

type Props = {
  posts: PostType[];
  columnSizes: GridSize[];
};

const FluidGrid: React.FC<Props> = ({ posts, columnSizes }) => {
  return (
    <Grid container spacing={4}>
      {posts.map((post, index) => (
        <Grid
          item
          xs={12}
          sm={columnSizes[index % columnSizes.length]}
          key={index}
        >
          <PostPreview
            key={post.id}
            title={post.title}
            coverImage={post.feature_image}
            date={post.created_at}
            author={post.primary_author}
            slug={post.slug}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FluidGrid;
