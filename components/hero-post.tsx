import Link from "next/link";
import Date from "./date";
import CoverImage from "./cover-image";
import { Box, Grid, Typography } from "@mui/material";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt?: string;
  author: {
    name: string;
    profile_image: string;
  };
  slug: string;
};

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: { xs: 4, md: 0 } }}>
            <CoverImage
              title={title}
              url={coverImage}
              slug={slug}
              isLink={true}
              isFeatured={true}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                lineHeight: 1.2,
              }}
            >
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Date dateString={date} />
            </Box>
            {excerpt && (
              <Typography
                sx={{
                  mb: 4,
                  fontSize: { xs: "1rem", sm: "1.125rem" },
                  lineHeight: 1.5,
                  color: "text.secondary",
                }}
              >
                {excerpt}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}
