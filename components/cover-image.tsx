import Link from "next/link";
import ResponsiveImage from "./resonsive-image";
import { styled, useTheme, useMediaQuery } from "@mui/material";

type CoverImageProps = {
  title: string;
  url: string;
  slug?: string;
  isLink: boolean;
};

const StyledDiv = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    margin: 0,
  },
}));

const CoverImage = (props: CoverImageProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { title, url, slug, isLink } = props;

  if (slug !== null && url !== null) {
    return (
      <StyledDiv sx={{ mx: isSmallScreen ? 2 : 0 }}>
        {isLink ? (
          <Link href={`/posts/${slug}`} aria-label={title}>
            <ResponsiveImage src={url} alt={title} />
          </Link>
        ) : (
          <ResponsiveImage src={url} alt={title} />
        )}
      </StyledDiv>
    );
  }
};
export default CoverImage;
