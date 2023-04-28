import React from "react";
import { useTheme, useMediaQuery, styled } from "@mui/material";

type Props = {
  src: string;
  alt: string;
  isFeatured: boolean;
};

const ResponsiveImage: React.FC<Props> = ({ src, alt, isFeatured }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLArgeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const StyledImage = styled("img")({
    objectFit: "cover",
    width: "100%",
    maxHeight: isFeatured ? "600px" : "300px",
  });

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
