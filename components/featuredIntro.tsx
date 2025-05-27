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
        {/* Removed custom_excerpt as it is no longer in PostType */}
      </Typography>
    </Box>
  );
};

export default FeaturedIntro;
