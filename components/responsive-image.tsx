import React from "react";
import { useTheme, useMediaQuery, styled } from "@mui/material";

type Props = {
  src: string;
  alt: string;
  fixedHeight: boolean;
};

const StyledImage = styled("img")({
  objectFit: "cover",
  width: "100%",
});

const ResponsiveImage: React.FC<Props> = ({ src, alt, fixedHeight }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  let imageSize = 450; // default size for large screens
  if (isSmallScreen) {
    imageSize = 200;
  } else if (isMediumScreen) {
    imageSize = 350;
  }

  return (
    <StyledImage
      src={src}
      alt={alt}
      style={{ height: fixedHeight ? `${imageSize}px !important` : "auto" }}
    />
  );
};

export default ResponsiveImage;