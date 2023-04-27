import React from "react";
import { useTheme, useMediaQuery, styled } from "@mui/material";

type Props = {
  src: string;
  alt: string;
};

const StyledImage = styled("img")({
  objectFit: "cover",
  width: "100%",
});

const ResponsiveImage: React.FC<Props> = ({ src, alt }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLArgeScreen = useMediaQuery(theme.breakpoints.up("md"));

  let imageSize = 400; // default size for large screens
  if (isSmallScreen) {
    imageSize = 200;
  } else if (isMediumScreen) {
    imageSize = 350;
  } else if (isLArgeScreen) {
    imageSize = 500;
  }
  return <StyledImage src={src} alt={alt} />;
};

export default ResponsiveImage;
