import { Box } from "@mui/material";
import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

type Props = {
  title: string;
  feature_image: string;
  date: string;
  author: {
    name: string;
    profile_image: string;
  };
};

export default function PostHeader({
  title,
  feature_image,
  date,
  author,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: { xs: 0.5, sm: 2, lg: 3 },
      }}
    >
      <PostTitle title={title} />
      <Box
        sx={{
          maxWidth: "48rem",
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "block",
            mb: { xs: 1.5, sm: 2, lg: 3 },
            textAlign: "left",
          }}
        >
          <Avatar name={author.name} profile_image={author.profile_image} />
        </Box>
        <Box
          sx={{
            mb: 3,
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
            fontWeight: "normal",
            textAlign: "left",
          }}
        >
          <Date dateString={date} />
        </Box>
      </Box>
      <Box sx={{ width: "100%", mb: { xs: 3, sm: 4, lg: 6 } }}>
        <CoverImage
          title={title}
          url={feature_image}
          isLink={false}
          isFeatured={true}
        />
      </Box>
    </Box>
  );
}
