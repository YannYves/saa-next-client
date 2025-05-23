import { Box } from "@mui/material";
import React from "react";
import { Section } from "@/lib/sections";

type IntroImgProps = {
  featureImage: string;
  section: Section;
};

const IntroImg = ({ featureImage }: IntroImgProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        height: { xs: "38vw", md: "340px" },
        minHeight: 180,
        borderRadius: 2,
        overflow: "hidden",
        mb: { xs: 2, md: 4 },
      }}
    >
      <Box
        component="img"
        src={featureImage}
        alt="Section hero"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Box>
  );
};

export default IntroImg;
