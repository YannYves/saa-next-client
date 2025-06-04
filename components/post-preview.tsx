import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    picture: string;
  };
  slug: string;
};

export default function PostPreview({ title, coverImage, date, slug }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: { xs: "auto", lg: "350px" },
        maxHeight: { xs: "auto", lg: "600px" },
      }}
    >
      <Box>
        <CoverImage
          slug={slug}
          title={title}
          url={coverImage}
          isLink={true}
          isFeatured={false}
        />
      </Box>
      <Box sx={{ mx: { xs: 2, sm: 0 } }}>
        <Typography
          sx={{
            pt: 2,
            fontWeight: "semibold",
            fontSize: {
              xs: "1rem",
              sm: "1.125rem",
              md: "1.125rem",
              lg: "1.25rem",
              xl: "1.5rem",
            },
          }}
        >
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </Typography>
        <Typography
          sx={{
            py: { sm: 1, md: 2 },
            mb: 4,
            fontSize: {
              xs: "0.875rem",
              md: "1rem",
              xl: "1.125rem",
            },
            fontWeight: "light",
            color: "text.secondary",
          }}
        >
          <Date dateString={date} />
        </Typography>
      </Box>
    </Box>
  );
}
