import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Intro from "./intro";

type IntroImgProps = {
  SectionIntroText: string;
  feature_image: string;
  html?: string;
};

const IntroImg = (props: IntroImgProps) => {
  const { feature_image, SectionIntroText, html } = props;

  return (
    <>
      <Box sx={{ height: "70vh" }}>
        <Paper
          component='img'
          sx={{
            backgroundImage: `url(${feature_image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            marginTop: -20,
            height: "70vh",
            OObjectFit: "cover",
            objectFit: "cover",
            width: "100%",
          }}
        />
        <Intro SectionIntroText={SectionIntroText} html={html} />
      </Box>
    </>
  );
};

export default IntroImg;
