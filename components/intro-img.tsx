import { Box, Paper } from "@mui/material";
import React from "react";
import Intro from "./intro";
import { Section } from "@/lib/sections";

type IntroImgProps = {
  featureImage: string;
  section: Section;
};

const IntroImg = ({ featureImage, section }: IntroImgProps) => {
  return (
    <Box sx={{ height: "70vh" }}>
      <Paper
        component="img"
        sx={{
          backgroundImage: `url(${featureImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: -20,
          height: "70vh",
          objectFit: "cover",
          width: "100%",
        }}
      />
      <Intro section={section} />
    </Box>
  );
};

export default IntroImg;
