import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Intro from "./intro";

function IntroImg({ SectionIntroText, backgroundImage }) {
  return (
    <>
      <div className='mb-8 md:mb-16'>
        <Paper
          style={{
            backgroundImage: `url(${backgroundImage[0].feature_image})`,
          }}
        >
          <div className={"hello"} />
          <Grid container>
            <Grid item md={12} pt={8} pb={8} pr={4} pl={4}>
              <div className={"hello"}>
                <Intro SectionIntroText={SectionIntroText} />
                <Typography
                  variant='h5'
                  color='inherit'
                  paragraph
                  className='text-white'
                >
                  {backgroundImage[0].excerpt}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

export default IntroImg;
