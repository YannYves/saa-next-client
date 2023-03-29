import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Intro from "./intro";

type IntroImgProps = {
  SectionIntroText: string;
  feature_image: string;
  excerpt?: string;
};

const IntroImg = (props: IntroImgProps) => {
  const { feature_image, SectionIntroText, excerpt } = props;

  return (
    <>
      <div className='mb-8 md:mb-16'>
        <Paper
          style={{
            backgroundImage: `url(${feature_image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className={"hello"} />
          <Grid container>
            <Grid item md={12} pt={8} pb={8} pr={4} pl={4}>
              <div className={"hello"}>
                <Intro SectionIntroText={SectionIntroText} />
                {excerpt && (
                  <Typography
                    variant='h5'
                    color='inherit'
                    paragraph
                    className='text-white'
                  >
                    {excerpt}
                  </Typography>
                )}
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default IntroImg;
