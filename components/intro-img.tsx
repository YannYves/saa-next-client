import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Intro from "./intro";

function IntroImg() {
  const backgroundImage = "https://source.unsplash.com/random";

  return (
    <>
      <div className='mb-8 md:mb-16'>
        <Paper
          className={"hello"}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Increase the priority of the hero background image */}
          {
            <img
              style={{ display: "none" }}
              src={backgroundImage}
              alt={"hello"}
            />
          }
          <div className={"hello"} />
          <Grid container>
            <Grid item md={12} pt={8} pb={8} pr={4} pl={4}>
              <div className={"hello"}>
                <Intro />
                <Typography variant='h5' color='inherit' paragraph>
                  {"hello hello hello hello hellohellohellohellovhellos"}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <section className='flex-col md:flex-row flex items-center md:justify-between mt-24 mb-16 md:mb-12'>
        <h1 className='text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8'>
          A la une
        </h1>
      </section>
    </>
  );
}

export default IntroImg;
