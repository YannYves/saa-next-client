import { Box, Typography } from "@mui/material";
import { PostType } from "interfaces";

type FeaturedIntroProps = {
  post: PostType;
};

const FeaturedIntro = ({ post }: FeaturedIntroProps) => {
  return (
    <Box sx={{ mb: 4, textAlign: "center" }}>
      <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
        {post.title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {post.custom_excerpt}
      </Typography>
    </Box>
  );
};

export default FeaturedIntro;
