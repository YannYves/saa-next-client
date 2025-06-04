import Link from "next/link";
import ResponsiveImage from "./responsive-image";
import { Box } from "@mui/material";

type CoverImageProps = {
  title: string;
  url: string;
  slug?: string;
  isLink: boolean;
  isFeatured: boolean;
};

export default function CoverImage({
  title,
  url,
  slug,
  isLink,
  isFeatured,
}: CoverImageProps) {
  if (!url) return null;

  return (
    <Box
      sx={{
        mx: { xs: 2, sm: 0 },
      }}
    >
      {isLink && slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          <ResponsiveImage src={url} alt={title} isFeatured={isFeatured} />
        </Link>
      ) : (
        <ResponsiveImage src={url} alt={title} isFeatured={isFeatured} />
      )}
    </Box>
  );
}
