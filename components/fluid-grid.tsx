import React from "react";
import { Grid, GridSize } from "@mui/material";
import { PostType } from "interfaces";
import PostPreview from "./post-preview";

type Props = {
  posts: PostType[];
  columnSizes: GridSize[];
};

export default function FluidGrid({ posts, columnSizes }: Props) {
  return (
    <Grid container spacing={4} sx={{ mb: 4 }}>
      {posts.map((post, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={post.id}
          sx={{
            height: "100%",
            minHeight: {
              sm: 400,
              md: 500,
            },
          }}
        >
          <PostPreview
            key={post.id}
            title={post.title}
            coverImage={post.feature_image}
            date={post.published_at}
            author={{
              name: post.primary_author?.name || "Unknown Author",
              picture: post.primary_author?.profile_image || "",
            }}
            slug={post.slug}
          />
        </Grid>
      ))}
    </Grid>
  );
}
